#!/bin/zsh
cd "$(dirname "$0")"
echo "문서 뷰어를 시작합니다 → http://localhost:8765"
open "http://localhost:8765"
python3 server.py
