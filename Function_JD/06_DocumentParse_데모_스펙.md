# Function_JD · 06 Document Parse 데모 스펙 (v2)

> D-2 확정: **지금은 스펙·스캐폴딩까지만** (동작 빌드 X). D-3: API 키 곧 발급.
> 목적: Upstage 제품(Document Parse + Information Extraction + Solar)을 실제로 써서 ①포트폴리오 데모 ②사전질문 ①번(제품 평가)의 체험 근거를 동시에 확보.

## 메인 안: "BookSnap" — 책 사진 한 장으로 가장 가까운 대출 가능 도서관 찾기
(기존 D-1의 '책 사진→제목→BookToss' 아이디어를 **합법·도서관 친화 프레임**으로 정제)

**사용자 스토리(정제):**
- "읽고 싶은 책을 발견했을 때(서점 매대, 카페, 친구 책장, SNS 추천) 사진 한 장 찍으면, 가장 가까운 **대출 가능** 도서관을 안내."
- 포지셔닝: *서점 무료 읽기*(❌ 위험) 가 아니라 **"발견 → 도서관 대출"의 마찰 제거**(✅ 독서·도서관 진흥). 출판/서점 적대 프레임을 피함.

**흐름:**
1. 책 표지/책등/제목 페이지 사진 업로드
2. **Document Parse / Information Extraction** → 제목·저자·ISBN 등 서지정보를 구조화 추출
3. **Solar** → 추출 정보 정규화 + 동명이서 보정 + 한 줄 소개
4. **BookToss(Solar 재구축본)** → 서울 25개 구립도서관에서 대출 가능 여부·가장 가까운 관 안내

**왜 좋은가:**
- BookToss 재구축과 **한 흐름** → 데모를 분산시키지 않음
- Document Parse + Information Extraction + Solar **세 제품**을 한 데모에서 사용 → 사전질문 ①번 체험 근거가 풍부해짐
- "현업 문제 정의 → 빌드"라는 기찬님 강점과 일치

## 대안 (택1 가능, 질문_v3 Q5)
- **B. Paper2Wiki**: 논문·공문 PDF → Document Parse 구조화 → Solar로 비전공자용 위키 페이지(쿡북) 자동 생성. wiki.bit-habit.com 워크플로우 제품화. (가장 '평범·안전', 교육 정체성 직결)
- **C. 교과서→수준별 퀴즈**: Document Parse → Solar 퀴즈. Munhaepang/Snowball 라인 연결.

> 추천: **메인(BookSnap)** 또는 **B(Paper2Wiki)** 중 택1. 둘 다 "평범하게 안전"하면서 제품 3종/2종을 씀. 위험 프레임 없음.

## 스택 / 산출물(스캐폴딩 범위)
- Streamlit · Upstage Document Parse · Information Extraction · Solar · `.env`(키)
- 산출물: 디렉터리 구조 + `app.py` 뼈대 + API 호출 자리(placeholder) + README(빌드 히스토리). **실제 호출/테스트는 키 확보 후.**

## 사전질문 ①번과의 연결
이 데모를 만들며 겪은 입력/출력·막힌 점·심각도를 그대로 ①번 제품 평가 답안의 "체험 근거"로 사용. 데모=피드백=쿡북.
