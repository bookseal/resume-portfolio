"""손으로 편집한 이력서 docx에 경력 bullet만 삽입한다.

build_resume_docx.py로 문서를 재생성하면 사용자가 워드에서 손본 포맷(탭 우측정렬 날짜,
좁힌 여백, 다듬은 문장)이 전부 사라진다. 그래서 이 스크립트는 기존 docx를 베이스로 열어
기존 bullet 단락의 XML을 복제해 텍스트만 갈아끼우는 방식으로 항목을 끼워 넣는다.
=> 스타일·들여쓰기·글머리표 서식이 원본과 100% 동일하게 유지된다.
"""
from copy import deepcopy
from datetime import datetime
from pathlib import Path

from docx import Document
from docx.text.paragraph import Paragraph

BASE = Path(__file__).parent
SRC = BASE / "이력서_이기찬_AISolutionEngineer_218421_20260713_1150.docx"
STAMP = datetime.now().strftime("%Y%m%d_%H%M")
OUT = BASE / f"이력서_이기찬_AISolutionEngineer_218421_{STAMP}.docx"

# (앞 단락 텍스트의 앞부분, 굵게 쓸 리드인, 나머지 본문) — 해당 단락 "뒤"에 삽입
# 1페이지 제약이 빡빡하므로 각 bullet은 2줄을 넘기지 않게 압축한다.
INSERTS = [
    (
        "요구사항 구조화 및 제품 피드백 루프",
        "반복 병목의 근본 해결",
        " — 피드백 포털을 하드코딩 대신 오픈소스로 대체, 대가 산정 가이드는 크롤링 자동 동기화.",
    ),
    (
        "반복 병목의 근본 해결",
        "팀 기술 교육",
        " — 주니어 Git 브랜치 전략·클라우드 환경 세팅 교육, 경영진 시연 롤플레잉 훈련.",
    ),
    (
        "Bithabit 습관 형성 서비스",
        "BookToss",
        " — LangGraph 에이전트로 도서관 25곳 통합검색(5분→1분), Upstage Solar API로 재구축 중.",
    ),
    (
        "BookToss",
        "Sentinel",
        " — 메가존클라우드 해커톤 1위, 로컬 NumPy 추론으로 비용 $0·지연 10ms 미만.",
    ),
]


def find_paragraph(doc, prefix):
    for p in doc.paragraphs:
        if p.style.name == "List Bullet" and p.text.strip().startswith(prefix):
            return p
    raise ValueError(f"단락을 찾지 못함: {prefix}")


def insert_bullet_after(anchor: Paragraph, bold_text: str, rest_text: str):
    """anchor 단락의 XML을 복제해 서식을 그대로 물려받은 새 bullet을 만든다."""
    new_el = deepcopy(anchor._p)
    anchor._p.addnext(new_el)
    new_p = Paragraph(new_el, anchor._parent)

    runs = new_p.runs
    if len(runs) < 2:
        raise ValueError("템플릿 단락에 굵게/본문 run이 모두 필요합니다")

    runs[0].text = bold_text  # 굵은 리드인 (서식은 복제된 것을 그대로 사용)
    runs[1].text = rest_text
    for extra in runs[2:]:  # 남는 run 제거
        extra._r.getparent().remove(extra._r)
    return new_p


def main():
    doc = Document(SRC)
    for anchor_prefix, bold_text, rest_text in INSERTS:
        anchor = find_paragraph(doc, anchor_prefix)
        insert_bullet_after(anchor, bold_text, rest_text)
        print(f"+ {bold_text}")
    doc.save(OUT)
    print(f"\nsaved: {OUT.name}")


if __name__ == "__main__":
    main()
