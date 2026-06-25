# 포트폴리오 — 이기찬

### AI Product Builder & Educator

GitHub: github.com/bookseal · Portfolio: bit-habit.com · LinkedIn: linkedin.com/in/bookseal

> 이 포트폴리오는 **"동작하는 데모를 만들고(Build) → 누구나 따라오게 콘텐츠로 옮기는(Teach)"** 두 축으로 구성했습니다. Upstage AI Education의 DevRel 풀 사이클(데모→쿡북→워크숍→피드백)과 같은 흐름입니다.

---

## 01. Visual Linear Algebra for AI Engineers ★ 교육·콘텐츠

**한 줄:** 트랜스포머/어텐션 논문 이해에 필요한 행렬 연산을, 누구나 눈으로 보며 따라오는 인터랙티브 학습 플랫폼으로 만든 프로젝트.

- **문제정의**: 대부분의 엔지니어가 선형대수 공식은 외우지만 그 *기하학적 의미*를 놓친다. AI(트랜스포머, CNN)는 결국 고차원 공간의 행렬 연산인데, 이 직관이 빠지면 논문이 벽이 된다.
- **해결**: 벡터→행렬 변환→고유값/SVD→PCA·신경망·워드 임베딩까지 **5단계 15스텝 커리큘럼**으로 구성. Manim 수학 애니메이션을 Streamlit에서 **온디맨드 렌더링**, 사용자가 직접 행렬을 입력하며 변환을 체험.
- **DevRel 관점**: "King − Man + Woman = Queen" 같은 결과를 직접 만져보게 해, *배움의 흐름 자체를 콘텐츠 구조로 설계*했다는 점이 핵심.
- **스택**: Streamlit · Manim CE · Docker · OCI Ampere A1 · k3s(진행 중)
- **링크**: viz.bit-habit.com · github.com/bookseal/linear-algebra-visualization

---

## 02. Daily Seongsu — MLOps 학습 가이드북 ★ 교육·콘텐츠

**한 줄:** 성수역 혼잡도 예측을 소재로, AI/MLOps 입문자가 레벨을 밟아가며 직접 실행해보는 인터랙티브 가이드북.

- **문제정의**: AI 입문자는 "코드는 돌아가는데 왜 이렇게 하는지" 모른 채 따라치기만 한다. 성숙도 단계가 보이지 않으면 다음에 뭘 배워야 할지도 모른다.
- **해결**: 데이터 엔지니어링→피처 엔지니어링→데이터 품질→**AutoML 튜닝**→IaC→CI/CD를 **레벨 1~10**으로 구조화. 각 레벨을 Gradio UI에서 직접 실행하며 학습.
- **DevRel 관점**: AutoML에서 Linear/RandomForest/GradientBoosting을 직접 비교하고 RMSE로 best model을 고르게 해, *"직관이 아니라 지표로 이해"* 하도록 콘텐츠화. Upstage가 원하는 쿡북·튜토리얼 포맷과 동일한 구조.
- **스택**: Gradio · Airflow · MLflow · Supabase(PostgreSQL) · Hugging Face Spaces · Docker · GitHub Actions
- **링크**: github.com/bookseal/daily_seongsu

---

## 03. BookToss — 자율형 AI 에이전트 ★ 빌드

**한 줄:** API 없는 서울시 25개 구 도서관을 하나의 검색으로 묶은 LLM 에이전트.

- **문제정의**: 도서관마다 사이트 구조·팝업·대출 상태가 제각각이라 책 한 권 찾는 데 시간이 소모됨. *"무엇이 사용자를 소모시키는가"* 를 먼저 정의.
- **해결**: LangGraph + Browser-use 자율 에이전트 구축 → Playwright 리팩토링으로 검색 시간 **80% 단축**, 원클릭 통합검색 실현.
- **스택**: LangGraph · Browser-use · Playwright · Python
- **링크**: github.com/bookseal/Booktoss

---

## 04. Sentinel — 실시간 음성 인지 에이전트 ★ 빌드

**한 줄:** 메가존클라우드 해커톤 **1등**. 비용 우선 설계의 점진적 AI 아키텍처.

- LLM API 없이 볼륨/피치 분석(v0.1)부터 시작하는 점진적 아키텍처로 비용을 통제. 인포뱅크 CTO 주간 멘토링으로 기술 선택을 비즈니스 관점에서 검증.
- **링크**: github.com/bookseal/sentinel-real-time-cognitive-assistant

---

## 05. Bithabit — 습관 형성 커뮤니티 ★ 빌드·운영

**한 줄:** IITP 해커톤 **2등**. 출시 2년째 사용자가 꾸준히 쓰는 서비스.

- 타임랩스 인증 카메라 + Google Sheets API 출석 시스템을 결합. 현재 Flutter 앱으로 리빌드 중.
- **링크**: bit-habit.com · github.com/bookseal/bithabit

---

## 06. (신규) Upstage Solar × Document Parse 데모 ★ 빌드 예정

**한 줄:** 비전공자에게 벽이 되는 복잡한 문서(논문·공문)를, 파싱하고 쉽게 풀어주는 데모 + 쿡북.

- **흐름**: Document Parse로 복잡한 레이아웃 문서를 구조화 → Solar로 입문자 눈높이의 해설·용어 풀이 생성.
- **DevRel 가치**: 데모 그 자체가 곧 교육 콘텐츠(쿡북)가 되도록 설계. 이 인턴십에서 가장 먼저 완성하고 싶은 유스케이스.
- *(현재 빌드 진행 중 — Upstage API 연동)*

---

## 함께 보면 좋은 것

- **인프라 오너십**: AWS→OCI 마이그레이션 비용 100% 절감, 14개 서비스 k3s + ArgoCD GitOps 운영
- **seoul-apt-price-prediction**: 서울 아파트 가격 예측 — 데이터 기반 모델링 연습 (github.com/bookseal/seoul-apt-price-prediction)
- **기술 문서**: 선형대수~AutoML 학습 가이드북, K8s 운영 가이드 등 비전공자용 문서 체계화
