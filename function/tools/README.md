# function/tools — 문서 변환 도구

지원서 파이프라인의 **변환 함수** 중 기계적인 부분. 회사·직무와 무관하게 재사용한다.

| 파일 | 용도 |
|---|---|
| **`md2docx_template.py`** | **이력서용 (주력).** `function/templates/이력서_표준서식.docx` 를 열어 본문만 갈아끼운다. 워드에서 다듬은 서식(여백·폰트·글머리표)이 그대로 유지된다. |
| `md2docx.py` | 맨바닥에서 docx 생성. 템플릿이 필요 없는 문서(자기소개서 등) 또는 Google Docs 업로드용. |
| `build_resume_docx.py` | (레거시) 이력서 내용이 코드에 하드코딩된 구버전. Upstage 218421 제출본 재현용으로만 보존. |
| `build_coverletter_docx.py` | (레거시) 위와 동일. |
| `add_career_bullets.py` | 워드에서 손본 docx의 서식을 유지한 채 bullet만 삽입. |

## 사용법

```bash
# 이력서 — 표준 서식 적용 (기본 템플릿 자동 사용)
python3 function/tools/md2docx_template.py output/job/drafts/<회사>/이력서_....md

# 다른 서식으로
python3 function/tools/md2docx_template.py <입력.md> [출력.docx] --template <서식.docx>

# 자기소개서 등 — 맨바닥 생성
python3 function/tools/md2docx.py <입력.md> [출력.docx]
```

출력 경로를 생략하면 입력 md와 같은 폴더에 같은 이름의 `.docx` 를 만든다.

## 표준 서식 템플릿

`function/templates/이력서_표준서식.docx`
= **2026-07-13 Upstage 218421 제출본** (워드에서 1페이지에 맞춰 직접 다듬은 판).

| 요소 | 서식 |
|---|---|
| 여백 | 상 320 / 하 220 / 좌우 680 twips |
| 이름 | Normal, 가운데정렬 **17pt** |
| 헤드라인 | Normal, 가운데정렬 (10pt 상속) |
| 연락처·링크 | Normal, 가운데정렬 **8.5pt** |
| 섹션 (`## 요약`) | **Heading 1** |
| 회사 (`### 회사 \| 직무`) | **Heading 2 10.5pt** + 날짜 우측 탭 |
| 불릿 (`- 항목`) | **List Bullet 9pt**, `**리드인**` 굵게 |

### 서식 매핑을 하드코딩하지 않는다

`sniff()` 가 템플릿을 읽어 매핑을 스스로 알아낸다:

- **불릿** = 글머리표가 붙은 단락의 스타일·크기
- **회사** = **탭(`\t`)이 들어간 제목** ← 날짜를 우측으로 미는 건 회사 줄뿐이다
- **섹션** = 탭이 없는 제목
- **헤더** = 첫 제목 이전의 단락들

템플릿을 갈아도 코드는 그대로다. 새 표준 서식이 생기면 `function/templates/이력서_표준서식.docx` 를 교체하면 끝.

**함정 두 개** (둘 다 에러 없이 조용히 틀어진다):
1. 글머리표는 **단락 직접 서식**(`numPr` 박힘) 또는 **스타일 정의**(`List Bullet` 이 들고 있음) 중
   한쪽에 있다. 한쪽만 검사하면 글머리표 없는 문서가 조용히 만들어진다.
2. `par._p.xml` 문자열은 `w:numPr`(접두사), 엘리먼트 트리는 `{네임스페이스}numPr`. 섞어 쓰면 항상 False.
   → `qn()` 으로 통일할 것.

PDF가 필요하면:
```bash
soffice --headless --convert-to pdf --outdir <폴더> <파일.docx>
```

## 왜 md2docx인가

기존 `build_*_docx.py`는 이력서 **문장이 파이썬 코드 안에** 있었다. 그래서 회사가 바뀔 때마다
스크립트를 통째로 복사했고, `output/` 폴더마다 거의 같은 `.py`가 쌓였다.

이 repo의 원칙(`input → function → output`)에 맞추면 **md가 데이터, 스크립트가 함수, docx가 산출물**이다.
`md2docx.py`는 그 분리를 강제한다. 스타일을 고치면 모든 회사의 문서에 한 번에 반영된다.

## 의존성

```bash
pip install python-docx
```
