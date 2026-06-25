# 이력서 · 자기소개서 · 포트폴리오 워크스페이스

> 지원서를 **하나의 결과물이 아니라 "변환 파이프라인"으로** 설계한 작업 공간.
> 원자료(input)를 전략(Function_JD)이라는 함수에 통과시켜 산출물(output)을 만든다.

```
 input/  ──▶  Function_JD/  ──▶  output/
 원자료        변환 함수            최종 산출물
(이력·경력)   (포지셔닝 전략)   (이력서·자소서·포트폴리오)
```

타깃 포지션: **Upstage AI Education — AI Product Builder Intern (DevRel/Education)**
핵심 정체성: *"만들고(Build) → 누구나 따라오게 가르치는(Teach) AI 빌더-에듀케이터"*

---

## 📁 디렉토리 구조

| 경로 | 역할 |
|---|---|
| **`Function_JD/`** | **변환 함수.** JD 분석 → 포지셔닝 전략 → 이력서/자소서/포트폴리오/사전질문 각각의 작성 맥락. `input`을 어떻게 `output`으로 가공할지의 지침. |
| **`input/`** | **원자료.** 기존 이력서·커버레터 PDF, 경력 기록, 면접 질문, 포트폴리오 프로젝트 설명. 가공 전 날것의 소스. |
| **`output/`** | **최종 산출물.** Upstage 지원용 이력서·자기소개서·포트폴리오·사전질문 답안 (버전별). |
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
