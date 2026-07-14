#!/usr/bin/env python3
"""문서 뷰어 서버 — 워크스페이스의 .md/.txt를 브라우저에서 본다.

실행:  python3 viewer/server.py   →  http://localhost:8765
의존성 없음 (Python 표준 라이브러리만 사용).
"""
import json
import os
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORT = 8765
EXCLUDE_DIRS = {".git", "node_modules", "__pycache__", ".DS_Store", "viewer", "web"}
EXCLUDE_PREFIXES = ("backup_",)
EXTENSIONS = (".md", ".txt")


def scan_files():
    files = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [
            d for d in dirnames
            if d not in EXCLUDE_DIRS and not d.startswith(EXCLUDE_PREFIXES) and not d.startswith(".")
        ]
        for name in filenames:
            if not name.lower().endswith(EXTENSIONS) or name.startswith("."):
                continue
            full = os.path.join(dirpath, name)
            rel = os.path.relpath(full, ROOT)
            try:
                mtime = os.path.getmtime(full)
            except OSError:
                continue
            files.append({"path": rel, "name": name, "mtime": mtime})
    return files


def safe_path(rel):
    full = os.path.realpath(os.path.join(ROOT, rel))
    if not full.startswith(os.path.realpath(ROOT) + os.sep):
        return None
    return full if os.path.isfile(full) else None


class Handler(BaseHTTPRequestHandler):
    def log_message(self, *args):
        pass

    def send_json(self, obj, status=200):
        body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        url = urlparse(self.path)
        if url.path == "/":
            with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "index.html"), "rb") as f:
                body = f.read()
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        elif url.path == "/api/tree":
            self.send_json(scan_files())
        elif url.path == "/api/file":
            rel = parse_qs(url.query).get("path", [""])[0]
            full = safe_path(rel)
            if not full:
                self.send_json({"error": "not found"}, 404)
                return
            with open(full, "r", encoding="utf-8", errors="replace") as f:
                content = f.read()
            self.send_json({"path": rel, "content": content, "mtime": os.path.getmtime(full)})
        else:
            self.send_json({"error": "not found"}, 404)


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print(f"문서 뷰어: http://localhost:{PORT}  (루트: {ROOT})")
    server.serve_forever()
