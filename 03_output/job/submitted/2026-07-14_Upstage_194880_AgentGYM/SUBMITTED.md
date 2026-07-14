# 제출 완료 — Upstage Applied AI Engineer, Agent GYM (194880)

| 항목 | 내용 |
|---|---|
| **회사 / 직무** | Upstage — Applied AI Engineer, Agent GYM (Solar Agent Engineering팀) |
| **공고 번호** | 194880 · https://careers.upstage.ai/ko/o/194880 |
| **제출 시각** | **2026-07-14 16:27** |
| **결과** | 대기 중 |
| **전형** | 서류 → **알고리즘 코딩 테스트** → 기술 인터뷰(1·2차) → 컬처 → 최종 |
| **JD 원문** | `02_function/job/Upstage_JD_194880.md` |

## 제출한 파일

- 이력서: `이력서_이기찬_Upstage_194880_20260714_1604.pdf` (**1페이지 39줄**, 하이퍼링크 포함)
- 자기소개서: `자기소개서_이기찬_Upstage_194880_20260714_1541.pdf` (5장)
- 사전질문 답안: `사전질문_답안_194880_20260714_1541.md` (② 996자)
- 포트폴리오: **https://bit-habit.com/?title=Applied%20AI%20Engineer**

## 이 지원의 포지셔닝

**축: "감이 아니라 측정으로 고른다".** JD 우대사항의 *"품질 평가(Evals)·회귀 테스트·실험 설계"* 에
정면으로 답했다. 대부분의 지원자가 못 대는 부분이라 판단.

**최강 카드 — llm-app-lab 의 FAA RAG 프로젝트** (포트폴리오를 grep 해서 발굴, 기존 이력서엔 없었음):
- 항공법(14 CFR) 1,297쪽 대상, **45개 설정 그리드서치** eval 하네스(청킹×임베딩×검색×K)
- blind 14문항 홀드아웃 · coverage/recall/MRR · §인용 실재 여부 프로그램 검증
- **"노이즈 범위면 더 싼 쪽"** 규칙으로 배포본 선정 → 토큰 38%↓
- 더 잘 검색하는 agentic 루프를 비용 대비 이득 없다고 **폐기하고 single-shot 배포**
- **강사(Larry Arnstein) 채점 9/10 · 수강생 중 1등**

**JD 필수사항 ↔ 근거**

| JD 필수 | 근거 |
|---|---|
| Structured output, tool calling | 강제 `tool_use` + Pydantic 검증 추출기 · BookToss(LangGraph·Tool Calling) |
| observability(trace/log/metric) | Prometheus·Gatus 관측, 상태 그래프·재시도로 "조용한 실패" 방지 |
| 프로덕션 SWE(API·모듈화·테스트·배포) | quali-fit 도메인 레이어 분리 + 단위 테스트 + Docker/CI/CD |
| AI 프레임워크 활용 | LangGraph/LangChain, FastAPI, Flask, Anthropic SDK |
| 연구→제품 전환 실행력 | RAG eval → 배포 · BookToss 프로토→2년 운영 |

## 이 건에서 새로 만든 자산

- **⭐ 이력서 표준 서식 템플릿을 이 제출본으로 교체** — 워드에서 **하이퍼링크**(github·wiki·infra·
  llm-app-lab·bit-habit)와 여백 상단 260을 손봤다. `02_function/templates/` 승격.
- **md2docx_template.py 에 하이퍼링크 자동 생성 추가** — 평문 URL(`bit-habit.com`)과 마크다운
  링크(`[라벨](url)`)를 실제 docx 하이퍼링크(파랑+밑줄)로 변환. 이메일 도메인은 제외.
  → 이제 Word 에서 링크를 손으로 걸 필요가 없다.

- **줄 수(line) 기반 1페이지 압축법** — 단락이 아니라 줄이 예산. 52→49→39줄로 3단 절단.
  3줄짜리 불릿·중복·JD 무관 경력(FPT·가마솥) 순으로 제거. RAG·LLM App Lab·BookToss 는 사수.

## 미완 / 다음에 보완할 것

- **알고리즘 코딩 테스트 준비.** 42 Seoul C 경험이 유리하나 최근 알고리즘 감각은 점검 필요.
- **Document Parse / IE 실사용 평가는 이번에도 미완.** 218421·213515·194880 세 건 연속.
  더는 미루지 말고 **표지 사진 → 서지정보 추출** 시나리오를 실제로 돌려볼 것.
