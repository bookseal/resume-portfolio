# 본인 프로필 — Gichan Lee (이기찬)

> 출처: [bit-habit.com](https://bit-habit.com) · [github.com/bookseal](https://github.com/bookseal) · [linkedin.com/in/bookseal](https://linkedin.com/in/bookseal) · [wiki.bit-habit.com](https://wiki.bit-habit.com)
> 한 줄 요약: 복잡한 수작업 업무를 신뢰할 수 있는 **AI 기반 제품**으로 전환하고, 비개발자·AI 에이전트·개발팀 사이의 **실행·검증·정착**을 책임지는 AI Product Engineer / Forward Deployed Engineer / Educator.

---

## 핵심 포지셔닝

1. **AI Product Engineer / Solutions Engineer / Technical PM** — 세 역할을 넘나듦.
2. **번역가 역할**: C레벨의 모호한 요구 ↔ 엔지니어의 코드 사이를 잇는 오케스트레이터.
3. **풀사이클 실행력**: 기획 → 빌드 → 배포 → 커뮤니티 운영까지 직접 수행.
4. **$0 인프라 운영**: 단일 k3s 클러스터(OCI 무료 티어)에서 14개 서비스를 월 $0로 라이브 운영.
5. **교육자 DNA**: "AI를 누구나 이해하게" 만드는 인터랙티브 교육 제품 다수 제작.

---

## 현재 직무

### 한국경영분석연구원 (KIBA) — AI Technical Product Manager / Lead AI FDE *(2026.5 – 현재)*
- 원장이 기존 경력을 보고 Lead AI FDE 역할을 맡김.
- **핵심 역할 = 오케스트레이션**: 비개발자 고객(의도) · AI 에이전트(실무) · 개발자(검증) 세 역할을 하나의 루프로 연결.
- C레벨의 모호한 요구를 기술 과제로 번역, 경영진과 엔지니어 사이의 방패막이 역할.
- **KIBA-Automation 시스템 구축**: 회의록 → AI 에이전트 → 보드 (Claude Code + gh 기반).
  - 휴먼인더루프 정책으로 안전 운영: read-only는 자동, 보드 쓰기는 항목별 사람 확인, 삭제/접근/코드는 금지.
  - 회의록 비공개 + 커밋 전 PII 마스킹.
  - Build-vs-buy 판단: Plane → GitHub Projects 이전 (호스팅 $0, 보드를 코드 옆에).
- **성과**: 정부 지침서 분석 LLM 워크플로우로 업무 시간 **10시간 → 2시간** 단축.
- **Quali-fit**: 사내 HR·자격증 추천 시스템을 기획~배포까지 담당. "이 일에 누구를, 왜 투입하는가"를 자격증 기준으로 점수화 (만료 자격증 0점, 점수 = 영향력 × 유효성).

---

## 경력 (시간순)

| 기간 | 회사 | 역할 | 핵심 내용 |
|------|------|------|-----------|
| 2026.5–현재 | 한국경영분석연구원(KIBA) | AI Technical PM / Lead AI FDE | AI 협업 시스템 설계·운영, C레벨 요구 번역, Quali-fit 기획~배포 |
| 2025.8–2025.11 | Concentrix Korea (MS M365 지원) | Technical Success Advisor | 입사 첫 달부터 전 KPI 1위(20명 중) — SRR 92.7%, DSAT 0%, 별점 케이스 42건. Microsoft Global Tester 선정. 'Fireteam' 결성으로 MS-900 공동 취득 문화 주도 |
| 2024.10–2025.7 | FPT Software Korea | 임베디드 지원 엔지니어 | 현대오토에버 협력사 대상 보안 모듈 오류 진단·해결 |
| 2024.8–현재 | Bithabit | AI Architect (창업자) | Build·Teach 프로젝트 다수 (아래 참조) |
| 2018–2022 (약 4년) | 가마솥 화상영어 (베트남 하노이) | 창업자 / 운영자 | 한국 학생 ↔ 필리핀 교사 연결 비대면 영어교육. 교사 면접·코칭, 피드백 반영, 카카오톡 채널·교사 관리 프로그램·Unity 게임 제작. 빌드→교육→커뮤니티 DevRel 풀사이클 선경험 |

---

## 주요 프로젝트 — Build (동작하는 AI 제품)

1. **BookToss** (2025–26) — API 없는 도서관용 자율 에이전트
   - 서울 25개 구립도서관에 API가 없음 → LangGraph + Browser-use 에이전트가 각 사이트 자동 탐색·팝업 처리.
   - 검색 시간 **5분 → 1분 (−80%)**. 현재 Upstage Solar API로 재구축, 빌드 히스토리를 쿡북처럼 공개.
   - Tech: LangGraph · Browser-use · Playwright · OpenAI/Solar · Streamlit · Kakao Map

2. **Bithabit** (2024–26) — 습관 추적 커뮤니티 플랫폼
   - 타임랩스 카메라 + 실시간 채팅으로 함께 추적. GIF를 클라이언트(gif.js Web Worker)에서 생성해 서버 비용 최소화. 비밀번호 없는 인증(이메일 OTP + JWT).
   - 🏆 **IITP 해커톤 2위** · 출시 2년째 핵심 유저 활동 중.
   - Tech: Flutter Web · FastAPI · WebSocket · JWT · gif.js · k3s

3. **Sentinel** (2026) — 실시간 인지 보조 에이전트
   - 목소리가 높아지면 대화 격화 전에 실시간 감지·알림. 클라우드 API 대신 로컬 NumPy로 **비용 $0, 지연 <10ms**.
   - 🏆 **메가존클라우드 AI Agent 해커톤 1위**. 인포뱅크 CTO와 매주 멘토링.
   - Tech: Gradio · NumPy · FastAPI · k3s · OCI

4. **bit-habit-infra** (2026) — GitOps 인프라 플랫폼
   - OCI 무료 티어 단일 노드 k3s에서 **서비스 14개 · 월 $0 · 수동 kubectl 0회**. ArgoCD 자동 동기화. AWS EC2 → OCI 이전으로 비용 $0.
   - Tech: k3s · ArgoCD · Traefik · cert-manager · Docker

5. **Bithumb AI Trade** (2025) — 감정을 제거한 규칙 기반 자동매매. (Python · Bithumb API)

---

## 주요 프로젝트 — Teach (라이브 교육 제품)

1. **Seoul APT Prediction** (2025–26) — 서울 아파트 실거래가로 휴리스틱→AutoML 10단계 ML 시뮬레이터. (scikit-learn · Streamlit)
2. **Daily Seongsu** (2026) — 성수역 혼잡도 예측. OCI+Supabase+HuggingFace 하이브리드로 MLOps 성숙도 L1~L6 단계 구축.
3. **Viz Platform** (2026) — Manim 애니메이션 + Streamlit으로 선형대수(벡터·고유값·변환) 시각 학습.
4. **Cloud Architect's Playbook (Wiki)** (2026) — Systems Math · AI Agent Engineering · Cloud/M365 직접 저술한 공개 기술 가이드북.
5. **Munhaepang** (2025) — 중학생 AI 리터러시 학습 플랫폼. (Next.js · TypeScript)
6. **Snowball English** (2025) — AI 에세이 교정 + OCR 단어 인식 + 게임형 퀴즈.
7. **Careettalk** (2024) — Gemini 기반 AI 커리어 코치. (Firebase · Gemini)
8. **Thegreatyou** (2024) — 단계별 성찰 질문을 제시하는 퍼스널 성장 코치. (Firebase · Gemini)
9. **초등수학 YouTube 채널** (약 1년, 200여 편) — 기초 원리부터 가르친 출발점.

---

## 기술 스택

- **AI & Automation**: LangGraph · LangChain · OpenAI · Upstage Solar · scikit-learn · Streamlit
- **Cloud & DevOps**: Oracle OCI · AWS · Azure · Kubernetes · Docker · Terraform · Traefik · Helm
- **Languages**: Python · JavaScript · TypeScript · C · C++ · Shell · SQL

---

## 학력 / 교육

- **École 42 (Seoul)** — 컴퓨터 사이언스 (2022–2024)
- **부경대학교** — 산업공학 학사 (2007–2014)
- **Fast Campus × Upstage AI Lab** 수료 · École 42 (Seoul) 스터디 3년 운영 (동료 1명 Upstage AI Research Engineer 인턴 배출)

---

## MBA 관점 메모 (강점/보완점)

- **강점**: 강한 실행력·풀사이클 빌드 경험, AI/인프라 기술 깊이, 교육·커뮤니티 운영, 두 번의 사업(가마솥·Bithabit) 운영 경험.
- **보완 영역(MBA에서 채울 것)**: 정식 경영/재무/마케팅 프레임워크, 작은 회사에서의 임팩트 확대 전략, Bithabit 사업화(시장 검증·BM·자금조달).
- **멘토 Jay Kim과의 연결고리**: 둘 다 엔지니어 출신 + 창업 지향. 기술 깊이를 사업으로 전환한 경로를 직접 물어볼 수 있음.
