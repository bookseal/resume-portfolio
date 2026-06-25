# 포트폴리오 — 이기찬 (Gichan Lee)

### AI Product Builder & Educator

GitHub: github.com/bookseal · Portfolio Hub: **bit-habit.com** · Wiki: wiki.bit-habit.com · LinkedIn: linkedin.com/in/bookseal

> **bit-habit.com은 "AI를 누구나 이해하게 만드는" 교육 제품들의 허브입니다.** 모든 프로젝트가 단일 k3s 클러스터($0)에서 라이브로 돌아갑니다. 이 포트폴리오는 **만들고(Build) → 누구나 따라오게 가르치는(Teach)** 두 축으로 구성했습니다 — Upstage AI Education의 DevRel 풀 사이클과 같은 흐름입니다.

---

## ▣ Teach — 가르친다 (이 직무의 핵심)

### 00. 가마솥 화상영어 — 4년간 교육 사업 운영 ★ (2018–2022, 베트남 하노이)
**한 줄:** 한국 학생과 필리핀 교사를 연결한 완전 비대면 영어교육 사업을 창업해 4년간 운영.
- **DevRel 업무를 사업으로 선경험:** 교사 면접·교수법 코칭(가르치는 사람을 가르침), 학생·학부모 피드백을 카카오톡 채널로 지속 수집·반영, 교사 관리 프로그램·영어회화용 Unity 게임 직접 제작·테스트.
- **검증된 것:** 비대면·다국적(한국·필리핀·베트남) 팀 운영, 비개발 이해관계자 소통, 4년간의 지속성.

### 01. Seoul APT — ML 10단계 로드맵 ★
**한 줄:** 서울 아파트 실거래가로 머신러닝을 휴리스틱부터 AutoML까지 누구나 레벨별로 밟아 올라가는 학습 시뮬레이터.
- **출발점:** "남들이 점수 줄이기에 몰두할 때, 나는 '어떻게 공부할까'를 설계했다." 선형회귀를 면적→가격의 일차함수라는 가장 쉬운 직관에서 시작.
- **구성:** L1 휴리스틱 → 선형회귀 → 다중피처 → 3D → 고차원/과적합 → PCA → 데이터 클리닝 → 피처 엔지니어링 → 정규화(Ridge/Lasso) → L10 AutoML
- **스택:** Streamlit · scikit-learn · Plotly · 링크: seoul-apt.bit-habit.com

### 02. Viz — 선형대수 시각화 ★
**한 줄:** 어텐션/트랜스포머 논문 이해에 필요한 행렬 직관을 눈으로 보며 익히는 인터랙티브 플랫폼.
- 벡터→행렬 변환→고유값/SVD→PCA·신경망·워드 임베딩. Manim 애니메이션을 Streamlit에서 온디맨드 렌더링.
- **스택:** Streamlit · Manim · Docker · OCI · 링크: viz.bit-habit.com

### 03. Cloud Architect's Playbook (Wiki)
**한 줄:** AI·수학·클라우드를 누구나 이해하게 다시 쓴 기술 가이드북 모음 (완성·공개).
- Foundational/Systems Math for Architects, AI Agent Engineering, Cloud/M365 Playbook
- 동기: "AI 답변을 그냥 읽지 않고, 누구나 이해하게 다시 쓰며 느끼는 성취감." 링크: wiki.bit-habit.com

### 04. 그 외 교육 제품군
- **Munhaepang** — 중학생 AI 리터러시 학습 플랫폼 (Next.js/TS)
- **Daily Seongsu** — 성수역 혼잡도 예측 MLOps 레벨 1~10 가이드북 (Gradio)
- **초등수학 기초원리 강의** — 약 5년 전 1년간 200여 편 (왜 9 다음이 '10'일까 같은 제1원리 접근)

---

## ▣ Build — 만든다

### 05. BookToss + BookSnap ★ (Upstage 제품 연계 · 진행 중)
**한 줄:** 서울 25개 구립도서관 무API 통합검색 에이전트. 검색 5분→1분(80%↓).
- **재구축 중:** OpenAI 기반 → **Upstage Solar API로 처음부터 재구축**
- **신규 기능 BookSnap:** 읽고 싶은 책 사진 한 장 → **Document Parse·Information Extraction**으로 제목·저자·ISBN 추출 → **Solar**로 정규화 → 가장 가까운 **대출 가능** 도서관 안내. "발견 → 도서관 대출"의 마찰 제거.
- **스택:** LangGraph · Solar · Document Parse · Playwright · Streamlit · Kakao Map · 링크: booktoss.bit-habit.com
- *빌드 히스토리(진행 중) — 실제 커밋으로 갱신 예정*

### 06. Sentinel — 실시간 음성 인지 에이전트
메가존클라우드 해커톤 **1등**. 로컬 NumPy로 $0·<10ms 응답하는 점진적 비용 설계. 인포뱅크 CTO 주간 멘토링. 링크: sentinel.bit-habit.com

### 07. Bithabit — 습관 형성 커뮤니티
IITP 해커톤 **2등**. 타임랩스 인증 카메라 + 실시간 채팅, 클라이언트 GIF 생성으로 서버비 $0, 2년+ 실사용. 링크: habit.bit-habit.com

### 08. Quali-fit (현직)
사내 자격증·인사 추천 시스템. C레벨의 도메인 지식을 시스템화. 링크: quali-fit.bit-habit.com

---

## 함께 보면 좋은 것
- **bit-habit-infra**: 14개 서비스를 OCI k3s 단일 클러스터 + ArgoCD GitOps로 운영, 인프라 비용 $0
- **활동**: 해커톤·개발자 워크숍 자원봉사 다수 / 42 Seoul 스터디 운영 → 동료를 Upstage AI Research Engineer 인턴으로
- 해커톤 수상 등 전체: **bit-habit.com**
