# 이력서 · 자기소개서 · 포트폴리오 워크스페이스

> 지원서를 **하나의 결과물이 아니라 "변환 파이프라인"으로** 설계한 작업 공간.
> 원자료(`input`)를 전략(`function`)이라는 함수에 통과시켜 산출물(`output`)을 만든다.

```
                    ┌──▶ function/job/     ──▶ output/job/     (Upstage, Cognition, LG U+)
 input/  (공유 원자료) ─┤
                    └──▶ function/startup/ ──▶ output/startup/ (피칭·트랙션)
```

**두 파이프라인, 하나의 input.** 취업(이력서·자소서·면접)과 창업(피칭·트랙션)은 산출물이 다르지만
같은 원자료 — 내 경력·프로젝트·Jay 멘토링 지식 — 에서 나온다.

핵심 정체성: *"AI를 실제 필드에 배포(deploy)하고, 남들이 그걸 할 수 있게 가르치는 사람"*

---

## 설계 원칙 — 바뀌는 것은 코드 밖으로

이 repo의 모든 구조는 하나의 질문에서 나왔다: **"이게 바뀔 때 코드를 고쳐야 하나?"**
고쳐야 한다면 잘못 놓인 것이다.

| 바뀌는 것 | 처음 (잘못) | 지금 |
|---|---|---|
| 이력서 문장 | 파이썬 스크립트에 하드코딩 | **md 파일** (`output/job/…/이력서_….md`) |
| 워드 서식 | 스크립트가 스타일을 재현 | **템플릿 docx** (`function/templates/`) |
| 서식 매핑 | 스크립트에 하드코딩 | 템플릿을 읽어 **자동 감지** (`sniff()`) |
| 포트폴리오 직함 | 화이트리스트 4개 | **URL 파라미터** (`?title=`) |

그래서 **새 회사에 지원하는 비용이 매번 줄어든다.** 다음 지원은
`md 쓰기 → 스크립트 한 줄 → URL 하나` 로 끝난다.

---

## 📁 디렉토리 구조

| 경로 | 역할 |
|---|---|
| **`input/`** | **공유 원자료.** 경력 기록, 포트폴리오, 면접 전사록, 멘토링 지식. |
| `input/제출이력.md` | ★ **output → input 되먹임.** 어디에 무엇을 어떤 서사로 냈는지. **새 이력서를 쓰기 전 이 파일부터 읽는다.** |
| `input/Jay/` | Jay Kim 지식 베이스. `INDEX.md`(원칙 요약 — AI에게 먼저 줄 파일) → `knowledge/`(K1~K7 카드) → `by-topic/` → `raw/`(전사록). |
| `input/Interview_note/` | 실제 면접·스크리닝 콜 전사록. |
| **`function/job/`** | **취업 변환 함수.** JD 원문, 포지셔닝 전략, 이력서/자소서/포트폴리오 작성 맥락, 자산 인벤토리. |
| **`function/templates/`** | **이력서 표준 서식 docx.** 워드에서 다듬은 서식을 자산화한 것. |
| **`function/tools/`** | md → docx 변환기 등 기계적 도구. |
| `function/startup/` | 창업 변환 함수 (현재 `~/workspace/physical-playground` 로 이관). |
| **`output/job/submitted/`** | **제출 완료.** `YYYY-MM_회사_직무/` + 각 폴더에 `SUBMITTED.md`. `INDEX.md` 로 시간순 조회. |
| **`output/job/drafts/`** | **작성 중.** 제출하면 `submitted/` 로 옮긴다. |
| `output/portfolio-bithabit/` | 포트폴리오 사이트 소스 (**별도 git repo** — push 하면 bit-habit.com 에 배포). |
| `viewer/` | 로컬 문서 뷰어. `뷰어시작.command` 더블클릭 → http://localhost:8765 |
| `backup_20260615_045443/` | 초기 스냅샷 (전략 전환 이전). 변화 추적용. |

### JD 는 왜 `function/` 에 있나

JD 는 "재료"가 아니라 **변환 함수의 파라미터**다. 같은 경력(`input`)이 어떤 JD 를 통과하느냐에 따라
다른 이력서(`output`)가 나온다. 그래서 JD 는 **원문 훼손 없이** 보존한다 — 요약해 두면 나중에
포지셔닝할 때 "저 회사가 정확히 어떤 단어를 썼는지"를 잃고, 그 단어가 곧 자소서에서 되돌려줄 키워드다.

---

## 🔄 새 지원, 처음부터 끝까지

### 1. JD 를 원문 그대로 보존
`function/job/<회사>_JD_<식별자>.md` — 인용 블록으로 원문 전체 + 요구역량 정리 + `나중에 볼 포인트`.
`상태: 📥 보관만` 같은 줄을 넣어 두면 `grep "보관만"` 으로 미착수 JD 를 찾을 수 있다.

### 2. 기존 자산에서 출발
`input/제출이력.md` 와 최근 제출본을 먼저 읽는다. 경력 본문은 사실이라 **재사용 가능**하지만,
**헤드라인·요약·기술스택 순서는 회사의 함수**다. 반드시 다시 쓴다.

> **자소서 재활용의 경계선:** 1~3장(내가 무엇을 했는가)은 회사가 바뀌어도 유효하다.
> 4~5장(왜 이 회사인가)은 통째로 다시 쓴다.

### 3. 남의 회사 이름을 지운다
지난 제출본에는 다른 회사의 직무명·제품명이 박혀 있다. 남겨 두면 **돌려막기로 읽힌다.**
`grep -i "upstage\|solar\|cognition"` 으로 훑을 것.

### 4. 사실을 검증한다
추측으로 쓴 기술 스택은 면접에서 무너진다. AWS 서비스명 하나까지 실제 사용 이력을 확인한다.
GitHub(`gh repo list bookseal`)을 뒤지면 잊고 있던 근거가 나온다 —
`azure_infra`(Terraform), `llm-app-lab`(k3s scale-to-zero), `42_docker_compose_inception` 등.

### 5. docx 를 만든다
```bash
python3 function/tools/md2docx_template.py output/job/drafts/<회사>/이력서_….md
```
표준 서식(여백·폰트·글머리표)이 그대로 적용된다. **Word 에서 열어 1페이지로 압축 → PDF 저장.**

### 6. 포트폴리오를 조준한다
```
https://bit-habit.com/?focus=infra&title=DevOps%20%2F%20SRE%20Engineer
```
`?title=` 에 공고의 직함을 그대로 넣으면 히어로가 그 직함으로 뜬다. (아래 참고)

### 7. 발송 후 `submitted/` 로 이동
`output/job/submitted/YYYY-MM_회사_직무/` 로 옮기고 `SUBMITTED.md` 를 쓴다.
`submitted/INDEX.md` 에 한 줄 추가.

---

## 🛠 도구

### `function/tools/md2docx_template.py` — 이력서 (주력)

```bash
python3 function/tools/md2docx_template.py <입력.md> [출력.docx] [--template <서식.docx>]
```

`function/templates/이력서_표준서식.docx` 를 열어 **본문만 갈아끼운다.**
워드 서식은 `styles.xml`(폰트) · `numbering.xml`(글머리표) · `sectPr`(여백) 세 곳에 흩어져 있어
코드로 재현하면 미묘하게 틀어진다. 원본을 템플릿으로 열면 통째로 딸려온다.

**서식 매핑은 하드코딩하지 않는다.** `sniff()` 가 템플릿을 읽어 알아낸다:

- **회사** = **탭(`\t`)이 들어간 제목** ← 날짜를 우측으로 미는 건 회사 줄뿐이다
- **섹션** = 탭이 없는 제목
- **불릿** = 글머리표가 붙은 단락
- **헤더** = 첫 제목 이전의 단락들

→ 템플릿을 갈아도 코드는 그대로. 새 서식이 생기면 `이력서_표준서식.docx` 만 교체한다.

### `function/tools/md2docx.py` — 자기소개서 등
맨바닥에서 docx 생성. 템플릿이 필요 없거나 Google Docs 에 올릴 문서용.

### 표준 서식 (`function/templates/이력서_표준서식.docx`)
= **2026-07-13 Upstage 218421 제출본.** 워드에서 1페이지에 맞춰 손으로 다듬은 판.

| 요소 | 서식 |
|---|---|
| 여백 | 상 320 / 하 220 / 좌우 680 twips |
| 이름 | Normal 가운데 **17pt** |
| 연락처 | Normal 가운데 **8.5pt** |
| 섹션 `## 요약` | **Heading 1** |
| 회사 `### 회사 \| 직무` | **Heading 2 10.5pt** + 날짜 우측 탭 |
| 불릿 `- 항목` | **List Bullet 9pt**, `**리드인**` 굵게 |

---

## 🌐 포트폴리오 조준 (bit-habit.com)

포트폴리오는 **하나의 페이지가 URL 로 청중에 맞춰 재배열된다.** 회사마다 복제하지 않는다.
소스: `output/portfolio-bithabit/` (별도 repo, `git push` → GitHub Actions → 서버 pull)

| 파라미터 | 동작 | 구현 |
|---|---|---|
| **`?title=`** | 히어로 직함을 **자유 텍스트**로 표시 | 페인트 전 `<head>` 에서 클래스, 히어로 직후 인라인 스크립트가 `textContent` 로 주입 |
| `?focus=` | 섹션·카드 **순서** 재배열 | DOM 재배치 (`appendChild` / `insertBefore`) |
| `?role=` | 고정 직함 4개 중 전환 | CSS 클래스만 (푸터 토글용) |
| `?lang=` | `ko` · `en` | — |

**지원할 때는 `?title=` 을 쓴다.** 공고의 직함을 그대로 넣으면 되고, 코드를 고칠 필요가 없다.
`?role=` 은 푸터의 "다른 역할로 보기" 토글용으로 남겨 둔 것 (채용자가 눌러보는 경험 자체가 세일즈 포인트).

| 지원 | URL |
|---|---|
| 일반 | `https://bit-habit.com` |
| DevOps / SRE | `?focus=infra&title=DevOps%20%2F%20SRE%20Engineer` |
| 솔루션 엔지니어 | `?focus=solutions&role=solutions` |
| 교육 / DevRel | `?focus=edu` |

> ⚠️ 모르는 `?focus=` 값은 **에러 없이 기본 순서로 폴백**한다. 링크를 메일에 넣기 전에 실제로 열어
> 의도한 카드가 맨 위인지 확인할 것.

### 살아있는 증거를 앞으로 꺼내라
`status.bit-habit.com`(실시간 헬스 대시보드) · `infra.bit-habit.com`(아키텍처 문서)

SRE 지원에서 "장애대응 능력 있습니다"는 검증 불가능한 주장이지만, **살아있는 status 페이지 링크는
반박이 불가능하다.** 증거의 강도는 **검증 가능성 × 클릭 깊이**로 결정된다 —
없는 걸 만드는 것보다 **있는 걸 앞으로 꺼내는 게** 효율이 좋다.

---

## 📋 컨벤션

- **폴더는 영어**(`job` / `startup` / `drafts` / `submitted`), **파일명 끝에 `_YYYYMMDD_HHMM`**
- **제출 시각 = 최종 산출물 생성 시각.** 정밀 기록이 아니라 지원 건들의 **선후 관계**용.
  값 자체보다 **값의 정의를 문서에 남기는 것**이 중요하다 — 정의 없는 타임스탬프는 순서용으로도 못 쓴다.
- **md 가 원본이다.** Word 에서 문장을 고쳤으면 md 에도 반영할 것. 서식만 손봤다면 재빌드하지 말 것 (날아간다).
- 사실과 다를 수 있는 문장은 **적지 않는다.** 추측한 기술 스택은 면접에서 그대로 무너진다.

---

## 🔗 관련 repo

| 프로젝트 | 설명 | Repo |
|---|---|---|
| portfolio-bithabit | 포트폴리오 허브 (`output/portfolio-bithabit/`) | [bookseal/portfolio-bithabit](https://github.com/bookseal/portfolio-bithabit) |
| bit-habit-infra | 운영 중인 k3s 클러스터 구성 | [bookseal/bit-habit-infra](https://github.com/bookseal/bit-habit-infra) |
| llm-app-lab | k3s scale-to-zero 런처 + LLM 강의 | [bookseal/llm-app-lab](https://github.com/bookseal/llm-app-lab) |
| Booktoss | LangGraph 도서관 에이전트 | [bookseal/Booktoss](https://github.com/bookseal/Booktoss) |
| bithabit | 습관 형성 서비스 (2년 운영) | [bookseal/bithabit](https://github.com/bookseal/bithabit) |

---

## 💡 이 작업의 의미

지원서를 한 번 쓰고 버리는 문서가 아니라, **다시 돌릴 수 있는 파이프라인**으로 만들고 싶었다.
이력서를 고칠 때마다 자소서·포트폴리오가 따로 노는 게 싫었고, 그래서 원자료(`input`)와
전략(`function`)을 분리해 두면 타깃이 바뀌어도 함수만 갈아끼우면 된다고 봤다.

이 방식 자체가 평소 일하는 방식과 닮아 있다 — 문제를 정의하고, 변환 규칙을 세우고,
산출물을 뽑은 뒤 과정을 문서로 남긴다. AI(Claude Code)와 협업해 내 커리어 서사를 이렇게
구조화한 경험은, 결국 "AI를 도구로 써서 만들고 가르치는 사람"이라는 내 정체성의 가장 솔직한 증거다.

---

*이 repo 는 **private** 이며 전화번호·주소 등 개인 지원 자료를 포함한다. 공개 전환 금지.*
