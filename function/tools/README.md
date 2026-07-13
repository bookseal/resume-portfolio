# function/tools — 문서 변환 도구

지원서 파이프라인의 **변환 함수** 중 기계적인 부분. 회사·직무와 무관하게 재사용한다.

| 파일 | 용도 |
|---|---|
| **`md2docx.py`** | **마크다운 → docx 변환기 (주력).** 내용은 md에, 스타일은 여기에. 회사가 바뀌면 md만 새로 쓴다. |
| `build_resume_docx.py` | (레거시) 이력서 내용이 코드에 하드코딩된 구버전. Upstage 218421 제출본 재현용으로만 보존. |
| `build_coverletter_docx.py` | (레거시) 위와 동일. |
| `add_career_bullets.py` | 워드에서 손본 docx의 서식을 유지한 채 bullet만 삽입. md 재빌드 시 수작업 서식이 날아갈 때 사용. |

## 사용법

```bash
python3 function/tools/md2docx.py <입력.md> [출력.docx]

# 예시 — 출력 경로 생략 시 md와 같은 폴더에 같은 이름의 docx 생성
python3 function/tools/md2docx.py output/job/LGUplus_DAX_DevOpsSRE/이력서_이기찬_LGUplus_DAX_20260713_1530.md
```

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
