# Physical AI 교육 사업 — 미국·중국 경쟁사 스캔 (2026-07)

> 목적: "내가 physical AI를 **공부할 겸** 교육 사업을 한다"는 가설의 원자료. 잘하는 곳을 찾아서 **거의 카피**할 대상 목록.
> 연결: K5(physical AI 방향) + K7 Claude 의견(교육×physical AI 합류 구조) + 정체성("배포하고 가르치는 사람").
> 조사일: 2026-07-06 (웹). 출처는 각 항목 링크.

---

## 1. 왜 지금 이 판이 열렸나 — 구조 변화 3가지

1. **오픈소스 표준의 등장**: Hugging Face **LeRobot**이 로봇 학습의 사실상 표준 프레임워크가 됨. [NVIDIA가 GR00T 모델·Isaac 시뮬레이터를 LeRobot에 직접 통합](https://blogs.nvidia.com/blog/hugging-face-lerobot-open-source-robotics/) — "NVIDIA 로봇 개발자 200만 + HF AI 빌더 1,300만"의 합류. **로보틱스는 현재 Hugging Face에서 가장 빨리 크는 카테고리.**
2. **하드웨어 가격 붕괴**: [로봇 교육 랩 구축 비용이 5년 전 $50,000~100,000 → 현재 $3,000~5,000](https://grabarobot.com/blog/educational-robot-guide/). LeRobot 표준 로봇팔 SO-101은 [수백 달러대 오픈소스 키트](https://thinkrobotics.com/blogs/product-reviews-buying-guides/thinkrobotics-lerobot-so-101-6-axis-robotic-arm-review-ai-ready-open-source-and-built-for-learning)로 아마존에서 팔림.
3. **NVIDIA의 플랫폼 전략**: ["로보틱스의 안드로이드가 되겠다"](https://techcrunch.com/2026/01/05/nvidia-wants-to-be-the-android-of-generalist-robotics/) — 모델(GR00T)·시뮬레이션(Isaac)·엣지 컴퓨터(Jetson)·[교육 콘텐츠(Physical AI Learning)](https://docs.nvidia.com/learning/physical-ai/)까지 무료/저가로 깔아주는 중. **플랫폼이 교육 시장을 보조금으로 밀어주는 시기 = 교육 사업자에겐 원가 0의 커리큘럼 재료.**

## 2. 세그먼트 지도

| 세그먼트 | 고객 | 지배자 | 비고 |
|---|---|---|---|
| A. K-12 STEM 키트 | 학교·학부모 | **중국 압도** (Makeblock, DJI, UBTECH) | 가격 사다리 $120~$1,800 |
| B. 개발자/성인 재교육 | SW 엔지니어, 전환 희망자 | **미국 오픈소스** (HF, NVIDIA) + 소수 부트캠프 | **가장 덜 성숙한 세그먼트** |
| C. 대회 생태계 | 학생·대학팀 | DJI RoboMaster, FIRST, VEX | 커뮤니티 락인 장치 |
| D. 대학·연구 플랫폼 | 랩·교수 | NVIDIA Isaac, HF Reachy 2 | B2B 단가 높음 |

## 3. 미국 플레이어 — "카피할 것: 오픈소스로 모객, 하드웨어·커뮤니티로 수익"

### Hugging Face (LeRobot) — 이 판의 교과서
- [무료 Robotics Course](https://huggingface.co/learn/robotics-course/unit0/1): 고전 로보틱스 기초 → 학습 기반 방법 → LeRobot 실습 → SOTA 알고리즘 구현. 유닛당 30~45분, 자율 진도.
- 하드웨어: SO-101 로봇팔(오픈소스, 텔레오퍼레이션으로 데이터 수집 → 모방학습 훈련까지 엔드투엔드), 휴머노이드 Reachy 2.
- **비즈니스 모델**: 코스 무료 → 커뮤니티/모델 허브 락인 → 하드웨어·엔터프라이즈로 수익. **"콘텐츠는 공짜, 생태계가 제품"** — 카피 1순위 구조.

### NVIDIA — 교육을 보조금으로 미는 플랫폼
- [JetBot](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetbot-ai-robot-kit/)(Jetson 기반 오픈소스 로봇 키트), [Physical AI Learning](https://docs.nvidia.com/learning/physical-ai/): SO-101로 sim-to-real 워크플로우(캘리브레이션→시연 수집→GR00T 정책 후훈련)를 통째로 무료 문서화.
- **함의**: 우리가 커리큘럼을 만들면 NVIDIA·HF가 이미 만들어 둔 무료 재료를 **한국어·한국 맥락으로 번역+큐레이션**하는 것부터 시작 가능 — Jay의 "카피해도 된다"가 여기서 합법적으로 성립(오픈소스 라이선스).

### Vizuara AI Labs — 유료 부트캠프의 존재 증명
- [Modern Robot Learning from Scratch Bootcamp](https://robotlearningbootcamp.vizuara.ai/): 10주 라이브, 실로봇 배포까지. **성인 대상 유료 로봇 학습 부트캠프가 시장에 성립한다는 증거.**

### 레거시(참고): FIRST·VEX — 대회 중심 K-12, 미국 학교 시장 장악. 진입 장벽 높고 우리 타깃 아님.

## 4. 중국 플레이어 — "카피할 것: 가격 사다리와 대회 락인"

- **[Makeblock](https://www.makeblock.com/)** (선전): mBot2 **$159**(K-8 입문) → Ultimate 2.0 $499(10-in-1) → 레이저커터까지. MakeX 대회 운영. **가격 사다리 설계의 교본.**
- **DJI [RoboMaster](https://www.robomaster.com/en-US/robo/rm)**: S1 $499 — FPV 카메라+AI 모듈 지상 로봇. **대학 챔피언십(RMUC)** 으로 대회→채용→브랜드 선순환. **교육을 마케팅 비용이 아니라 인재 파이프라인으로 쓰는 모델.**
- **UBTECH** (상장사): Alpha Mini ~$800 휴머노이드, 학교 AI 커리큘럼 패키지 판매.
- **함의**: 하드웨어 원가 경쟁은 중국과 하지 않는다(불가능). **중국산 저가 하드웨어를 "부품"으로 쓰고, 그 위의 한국어 교육 경험을 판다** — K5 의견("기술 학습은 중국 생태계에서")과 일치.

## 5. 갭 분석 — 비어 있는 곳 (= 우리 자리 후보)

1. **한국어 콘텐츠 부재**: LeRobot 코스, NVIDIA 자료 모두 영어. 한국의 SW 개발자가 physical AI로 넘어가는 한국어 경로가 사실상 없음.
2. **B 세그먼트(성인 개발자 재교육)가 전 세계적으로 미성숙**: K-12는 포화, 성인은 Vizuara 등 소수. 그런데 K1 조사(주니어 붕괴, 오케스트레이터 프리미엄)가 보여주듯 **"SW 개발자의 physical AI 전환 수요"는 구조적으로 커질 것.**
3. **학습 지속 장치 없음**: 키트를 사고 코스를 시작해도 완주율이 낮은 건 모든 온라인 교육의 고질병 — **빛해빗(습관 인증·그룹 압력·리텐션 90%)이 정확히 이 문제의 해결책.** 기존 자산과의 시너지 지점.
4. Jay의 니치 경고(K5-5) 적용: 한국에서 되는 니치 ≠ 미국에서 되는 니치. **1차 시장은 한국(한국어 콘텐츠 갭), 확장은 교육 시스템이 비슷한 아시아.**

## 6. 가설 포지션 (v0 — Jay 세션·아내와 검증할 것)

> **"한국 개발자를 위한 physical AI 사관학교"**
> = 중국산 저가 하드웨어(SO-101 계열) + 미국 오픈소스 스택(LeRobot/GR00T, 한국어 큐레이션) + 빛해빗식 학습 지속 커뮤니티 + 내 학습 과정 자체를 콘텐츠로(learning in public)

- **왜 우리인가**: 교육 사업 4년(가마솥) + 개발자 교육 콘텐츠 제작력(선형대수 시각화·단계별 프로젝트) + C/임베디드 기반 + 커뮤니티 리텐션 노하우(빛해빗) — 4개 자산이 전부 쓰이는 유일한 교점.
- **"공부할 겸"의 구조적 정당화**: 콘텐츠 = 내 학습 로그. 원가가 시간뿐이고, 내가 K5 토이프로젝트를 어차피 해야 하므로 **한 번의 시간으로 학습+콘텐츠+트랙션을 동시에 얻는다.**
- **수익화 사다리(가설)**: 무료 한국어 튜토리얼(모객) → 유료 코호트 부트캠프(Vizuara 모델) → 키트 번들 판매(Makeblock 사다리) → 기업 재교육 B2B.

## 7. 다음 검증 액션
- [ ] SO-101 키트 실구매가·배송 확인 (아마존/알리) — 토이프로젝트 겸 첫 콘텐츠 재료
- [ ] HF Robotics Course 직접 완주하며 한국어 학습 로그 작성 → 반응 테스트 (블로그/유튜브)
- [ ] 한국 기존 플레이어 조사 (로보티즈? 국내 코딩학원의 로봇 과정?) — 국내 경쟁 밀도 확인
- [ ] Jay 세션: 이 가설을 K7 로드맵(B: AI 교육 회사)의 구체안으로 제시, 하드웨어 조달·원가 관점 피드백
- [ ] 아내와 역할 분담 논의 (콘텐츠 제작 vs 커뮤니티 운영)
