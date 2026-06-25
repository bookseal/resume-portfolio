# Portfolio: 이기찬 (Gichan Lee)
**AI Product Builder & Educator** | [bit-habit.com](https://bit-habit.com)

> 💡 **"AI를 누구나 이해하게 만드는 교육 제품 허브, bit-habit.com"**
> 제 포트폴리오의 모든 제품은 단일 쿠버네티스(k3s) 클러스터 위에서 $0의 비용으로 라이브 서비스 중인 '동작하는 증거'들입니다. 저는 기술을 단순히 구현하는 데 그치지 않고, 누구나 쉽게 이해하고 학습할 수 있는 교육용 프로덕트로 재탄생시키는 일(Teach)과 사용자 문제를 집요하게 파고들어 워킹하는 제품으로 빌드하는 일(Build)을 사랑합니다.

---

## 📚 파트 1. TEACH: 가르치다 (교육 프로덕트 & 기술 콘텐츠)
비전공자도 AI의 원리를 쉽게 이해하고 따라 해볼 수 있도록 고안된 교육용 생태계입니다.

### 1. Seoul APT Prediction — ML 10단계 로드맵
- **한 줄 요약**: 서울 아파트 실거래가로 직관적으로 배우는 머신러닝 인터랙티브 학습 로드맵
- **문제 정의**: 머신러닝 입문자가 낯선 수식과 코드에 압도되어 포기하는 현상
- **해결 및 DevRel 관점**: '면적과 가격의 일차함수'라는 가장 쉬운 직관(휴리스틱)에서 출발하여, 다중 선형회귀, PCA, AutoML에 이르는 10단계를 사용자가 직접 웹에서 조작하며 체험할 수 있는 Streamlit 기반 로드맵(쿡북) 구축
- **기술 스택**: Python, Streamlit, Scikit-learn
- **링크**: [seoul-apt.bit-habit.com](https://seoul-apt.bit-habit.com) / [GitHub](https://github.com/bookseal/seoul-apt-price-prediction)

### 2. Linear Algebra Visualization (Viz) — 선형대수 시각화 데모
- **한 줄 요약**: 트랜스포머/어텐션 이해를 위한 5단계 15스텝의 선형대수 시각화 웹
- **문제 정의**: 텍스트 기반의 수학 개념 설명으로는 AI 모델의 내부 동작 원리를 직관적으로 체화하기 어려움
- **해결 및 DevRel 관점**: 벡터, 고유값, SVD, 임베딩 등 핵심 수학 개념을 온디맨드 비디오 및 인터랙티브 UI로 시각화하여 배포. AI의 기초를 가르치는 가장 훌륭한 레퍼런스로 활용
- **기술 스택**: Python, Manim, Streamlit
- **링크**: [viz.bit-habit.com](https://viz.bit-habit.com) / [GitHub](https://github.com/bookseal/linear-algebra-visualization)

### 3. Cloud Architect's Playbook — 퍼블릭 기술 위키
- **한 줄 요약**: 비전공자도 따라 할 수 있는 시스템 및 AI 에이전트 엔지니어링 가이드북
- **문제 정의**: 파편화된 기술 지식으로 인한 조직 내 온보딩 시간 지연
- **해결 및 DevRel 관점**: AI Agent Engineering, Systems Math 등 복잡한 도메인 지식을 퍼블릭 위키로 문서화. 실제로 현업(한국경영분석연구원) 및 42 Seoul 스터디에서 동료들의 온보딩 및 트레이닝에 직접 활용
- **링크**: [wiki.bit-habit.com](https://wiki.bit-habit.com)

*기타 교육 프로덕트: Daily Seongsu (MLOps 10단계 가이드북), Munhaepang (중학생 대상 AI 리터러시 플랫폼)*

---

## 🛠 파트 2. BUILD: 만들다 (AI 에이전트 & 실서비스)
사용자의 문제를 정의하고, 워킹하는 제품으로 끝까지 만들어낸 실무 및 해커톤 성과들입니다.

### 4. [진행 중] BookToss (BookSnap 모드) — Upstage 제품 연계
- **한 줄 요약**: 책 사진 한 장으로 25개 구립도서관의 대출 여부를 알려주는 자율형 AI 에이전트
- **기존 성과**: API가 없는 서울시 25개 구립 도서관 시스템을 LangGraph 기반 브라우저 제어(Browser-use)를 통해 탐색하여 검색 소요 시간을 5분에서 1분으로 80% 단축 (정보통신기획평가원 해커톤 2등작)
- **🚀 빌드 타임라인 (Upstage API 재구축)**:
  - 현재 기존 엔진을 **Upstage Solar API와 Document Parse**를 결합한 'BookSnap' 모드로 고도화 중 (인턴십 마감 전인 6/28 완료 목표)
  - *빌드 진행 상황*: Document Parse로 책 사진의 서지정보를 구조화 추출하고, Solar의 추론 능력을 통해 동명이서 및 오탈자 정규화 로직 테스트 중. 이 과정에서 겪은 문제 해결 기록은 추후 쿡북으로 활용 예정.
- **기술 스택**: Upstage API (Solar, Document Parse), LangGraph, Streamlit, Playwright
- **링크**: [booktoss.bit-habit.com](https://booktoss.bit-habit.com) / [GitHub](https://github.com/bookseal/Booktoss)

### 5. Project Sentinel — 실시간 인지 어시스턴트
- **한 줄 요약**: 오디오 볼륨과 피치를 분석하여 감정적 과열을 중재하는 AI 어시스턴트
- **문제 정의**: 값비싼 클라우드 API 호출 비용 문제 및 실시간 처리의 지연(Latency) 문제
- **해결 및 DevRel 관점**: 외부 API 의존도를 낮추고 로컬 환경의 NumPy 연산 기반으로 파이프라인을 설계해 10ms 이하의 실시간 응답성 구현. OCI 무료 리소스 극대화 달성 (**메가존클라우드 AI 에이전트 해커톤 1등**)
- **기술 스택**: Python, Gradio, NumPy, k3s (OCI)
- **링크**: [sentinel.bit-habit.com](https://sentinel.bit-habit.com)

### 6. Quali-fit — 사내 HR 및 자격증 추천 시스템 (현업 프로젝트)
- **한 줄 요약**: C레벨 도메인 지식을 시스템화한 B2B LLM 에이전트
- **문제 정의**: 경영진(원장님)의 암묵적인 노하우와 복잡한 정부 지침서로 인해 신규 직원의 업무 파악이 10시간 이상 소요
- **해결 및 DevRel 관점**: 방대한 지침 문서를 RAG 기반의 LLM 워크플로우로 구축하여 소요 시간을 2시간 이내로 단축. 현업의 니즈를 시스템으로 전환하는 Lead AI FDE의 대표적 성공 사례
- **기술 스택**: Python, LangChain, FastAPI, React
- **링크**: [quali-fit.bit-habit.com](https://quali-fit.bit-habit.com)

### 7. Bithabit — 풀스택 습관 추적 앱
- **한 줄 요약**: 타임랩스 비디오 기록과 실시간 채팅을 지원하는 모바일/웹 서비스
- **문제 정의**: 서버 리소스가 제한적인 상황에서 사용자들의 비디오 생성 요청 과부하
- **해결 및 성과**: 클라이언트(브라우저) 사이드의 Web Worker를 활용해 서버 $0 비용으로 GIF 생성 로직 구현. 2년 이상 라이브 트래픽 처리 중
- **기술 스택**: Flutter Web, FastAPI, SQLite, WebSockets
- **링크**: [habit.bit-habit.com](https://habit.bit-habit.com)
