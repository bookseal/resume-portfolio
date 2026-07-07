# 이력서 · 자기소개서 · 포트폴리오 워크스페이스

> 지원서를 **하나의 결과물이 아니라 "변환 파이프라인"으로** 설계한 작업 공간.
> 원자료(input)를 전략(Function_JD)이라는 함수에 통과시켜 산출물(output)을 만든다.

```
                    ┌──▶ function/취업/ ──▶ output/취업/ (Cognition, Upstage)
 input/  (공유 원자료)
                    └──▶ function/창업/ ──▶ output/창업/ (Plug and Play, KSC)
```

**두 파이프라인, 하나의 input.** 취업(이력서·자소서·면접)과 창업(피칭·트랙션)은 산출물이 다르지만 같은 원자료 — 내 경력·프로젝트·Jay 멘토링 지식 — 에서 나온다.

타깃 (우선순위 순):
1. **Cognition — Deployed Engineer, Korea** (스크리닝 통과, 진행 중)
2. **Upstage — DevRel** (면접 진행 중)
3. **Plug and Play Korea 피칭** → KSC 입주 (창업 트랙, Jay 로드맵)
핵심 정체성: *"AI를 실제 필드에 배포(deploy)하고, 남들이 그걸 할 수 있게 가르치는 사람"*

---

## 📁 디렉토리 구조

| 경로 | 역할 |
|---|---|
| **`input/`** | **공유 원자료.** 경력 기록, 포트폴리오, 면접 전사록, 멘토링 지식. |
| **`input/Jay/`** | **Jay Kim 지식 베이스.** `INDEX.md`(원칙 한줄 요약 — AI에게 먼저 줄 파일) → `knowledge/`(K1~K7 지식 카드) → `주제별/`(원문 발췌) → `raw/`(전사록 원본). `01_프로필`(Jay·본인 이력), `archived/`(과거 세션 준비 문서). |
| **`input/Interview_note/`** | 실제 면접·스크리닝 콜 전사록 (Cognition 등). |
| **`function/취업/`** | 취업 변환 함수 — JD 분석, 포지셔닝 전략, 이력서/자소서/포트폴리오 작성 맥락. (구 Function_JD) |
| **`function/창업/`** | 창업 변환 함수 — 피칭 전략, 프로젝트 선정 기준, 트랙션 서사 규칙. |
| **`output/취업/`** | Cognition(FDE 이력서), Upstage(사전질문·이력서·자소서) 산출물. |
| **`output/창업/`** | 피치덱, 원페이저, KSC 지원서 산출물. |
| **`viewer/`** | 로컬 문서 뷰어 웹앱. `뷰어시작.command` 더블클릭 → http://localhost:8765 (온톨로지 홈 + 안 본 문서 NEW 표시 + 실시간 갱신). |
| **`backup_20260615_045443/`** | 초기 버전 스냅샷 (전략 전환 이전). 변화 추적용. |

### `Function_JD/` 상세
- `00_포지셔닝_전략.md` — 마스터 전략 (Build:Teach 50:50 균형)
- `01_이력서_맥락.md` · `02_자기소개서_맥락.md` · `03_포트폴리오_맥락.md` · `05_사전질문_맥락.md`
- `04_자산_인벤토리.md` — 동원 가능한 모든 증거 자산 목록
- `06_DocumentParse_데모_스펙.md` — Upstage 제품 활용 데모 기획

---

## 🔗 포트폴리오 프로젝트 (별도 repo)

이 repo는 **지원서 작성 과정**에 집중하며, 실제 프로젝트는 각자의 repo에서 관리한다:

| 프로젝트 | 설명 | Repo |
|---|---|---|
| portfolio-bithabit | 포트폴리오 허브 사이트 | [bookseal/portfolio-bithabit](https://github.com/bookseal/portfolio-bithabit) |
| bithabit | 습관 형성 서비스 (해커톤 2등, 2년 운영) | [bookseal/bithabit](https://github.com/bookseal/bithabit) |
| Booktoss | LangGraph 기반 독서 에이전트 (Solar 재구축) | [bookseal/Booktoss](https://github.com/bookseal/Booktoss) |
| daily_seongsu | MLOps 학습 가이드북 서비스 | [bookseal/daily_seongsu](https://github.com/bookseal/daily_seongsu) |

> 교육 제품 종합 허브: **[bit-habit.com](https://bit-habit.com)**

---

## 💡 이 작업의 의미

지원서를 한 번 쓰고 버리는 문서가 아니라, **다시 돌릴 수 있는 파이프라인**으로 만들고 싶었다.
이력서를 고칠 때마다 자소서·포트폴리오가 따로 노는 게 싫었고, 그래서 원자료(`input`)와
전략(`Function_JD`)을 분리해 두면 타깃이 바뀌어도 함수만 갈아끼우면 된다고 봤다.

이 방식 자체가 평소 일하는 방식과 닮아 있다 — 문제를 정의하고, 변환 규칙을 세우고,
산출물을 뽑은 뒤 과정을 문서로 남긴다. AI(Claude Code)와 협업해 내 커리어 서사를
이렇게 구조화한 경험은, 결국 "AI를 도구로 써서 만들고 가르치는 사람"이라는 내 정체성의
가장 솔직한 증거라고 생각한다.

---

*이 repo는 private이며 개인 지원 자료를 포함합니다.*
