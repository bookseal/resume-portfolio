# 포트폴리오 — BookToss (서울 100+ 도서관 통합 검색 AI 에이전트)

- **튜토리얼/문서**: https://bookseal.github.io/Booktoss/
- **저장소**: https://github.com/bookseal/Booktoss
- **이전 라이브(v1)**: https://booktoss.bit-habit.com (OpenAI 기반, 현재 v2로 재구축 중)
- **상태**: v1 완성·아카이브 → **v2-solar 재구축 진행 중(v0.0.1)**, 두뇌를 OpenAI → **Upstage Solar(`solar-pro2`)** 로 교체

## 개요
서울 25개 자치구의 공공도서관 100여 곳을 **한 번의 검색으로** 조회하는 AI 에이전트입니다. 각 자치구가 별도의 도서관 사이트를 운영하고 통합 API가 없어, 사용자가 일일이 사이트를 방문하고 팝업을 닫으며 검색해야 하는 불편함을 LLM + 브라우저 자동화로 한 번의 클릭으로 자동화합니다.

## 문제 의식 및 차별점
- **분절된 도서관 검색 경험**: 서울 자치구별로 도서관 포털이 제각각이고 표준 API가 없어, 원하는 책의 소장·대출 가능 여부를 확인하려면 사이트를 돌아다녀야 합니다.
- **LLM + 브라우저 자동화 접근**: 단순 크롤러가 아니라, LLM이 각 도서관 사이트에서 어떤 동작을 할지 판단하고(browser-use + Playwright) 결과 HTML을 파싱해 제목·저자·청구기호·대출 가능 여부를 구조화합니다.
- **튜토리얼 주도 개발(Tutorial-first)**: 코드보다 튜토리얼 문서를 먼저 쓰고, 버전마다 눈으로 검증 가능한 완성물을 배포합니다. 완성품뿐 아니라 **"만들어가는 과정 자체"를 문서로 공개**하는 것이 차별점입니다.

## 아키텍처 (목표 스택)
| 레이어 | 기술 | 역할 |
|---|---|---|
| LLM | **Upstage Solar (`solar-pro2`)** | 브라우저에서 수행할 동작 판단 |
| 브라우저 | Playwright + browser-use | 도서관 사이트 자동 검색 |
| 파이프라인 | LangGraph | `resolve_catalog → search_book → parse_html` 3-노드 그래프 |
| 앱 | Streamlit | 웹 UI + 지도 |

> **핵심 포인트**: Upstage Solar는 OpenAI 호환 엔드포인트(`https://api.upstage.ai/v1`)를 제공하므로, 어댑터 계층 없이 `base_url`과 `api_key`만 교체하여 기존 OpenAI 기반 파이프라인의 두뇌를 Solar로 전환할 수 있습니다.

## v1에서 이미 검증한 기능 (아카이브: `docs/v1/`)
재구축 이전 v1은 OpenAI 기반으로 **실제 동작하는 완성 서비스**였으며, 다음을 구현·검증했습니다.
- `catalog_index.yaml` 기반 서울 100+ 도서관 포털 URL 인덱스
- LangGraph 3-노드 파이프라인(포털 URL 해석 → LLM+브라우저 자동 검색 → HTML 파싱)
- BeautifulSoup으로 제목·저자·청구기호·대출 가능 여부 추출 및 다중 도서관 결과 집계
- Kakao 지오코딩/길찾기 API + Haversine 거리 계산, 지도 위 실제 경로(폴리라인) 표시 및 근접순 정렬

## 현재 진행 상황 (v2-solar)
- **v0.0.1 (완료)**: Streamlit "Hello, BookToss" UI 스켈레톤 — 검색 입력과 화면 틀 구성
- **v0.0.2 (다음)**: Upstage Solar API 연결(터미널 호출 성공)
- **v0.0.3 → v0.1.0 (계획)**: 단일 도서관 End-to-End 검색 복원
- 매 버전마다 GitHub 이슈 체크리스트 → 튜토리얼 작성 → 구현 → PR(squash merge) → GitHub Pages 자동 배포의 정형화된 워크플로우(CLAUDE.md에 명문화)

## DevRel 관점 성과
완성된 v1을 그대로 두지 않고, **두뇌를 Upstage Solar로 교체하는 재구축 과정 전체를 튜토리얼 형태로 공개**한다는 점이 핵심입니다. 분절된 공공 데이터를 LLM 에이전트로 통합하는 실용적 문제 해결과, 만드는 과정을 누구나 따라올 수 있도록 문서화하는 DevRel 역량을 함께 보여줍니다.
