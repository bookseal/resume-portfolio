# 포트폴리오 — Daily Seongsu (성수역 혼잡도 예측 서비스)

- **라이브 서비스**: https://daily-seongsu.bit-habit.com (OCI 기반 k3s/Kubernetes 배포, Traefik TLS)
- **저장소**: https://github.com/bookseal/daily_seongsu

## 개요
성수역의 실시간 혼잡도를 예측하는 End-to-End AI 서비스 포트폴리오입니다. 단순한 모델 학습에 그치지 않고, 클라우드 인프라와 MLOps 파이프라인의 성숙도를 Level 1부터 Level 10까지 체계적으로 끌어올리는 과정을 인터랙티브 가이드북(Gradio) 형태로 정리한 'Professional MLOps Pipeline' 프로젝트입니다.

## 아키텍처 및 하이브리드 엔진
성능과 확장성을 위해 하이브리드 클라우드 3-Tier 아키텍처를 설계했습니다.
1. **Engine Room (OCI Ampere A1)**: 오라클 클라우드 인프라(ARM64) 기반으로 데이터 수집·전처리 및 모델 학습 등 무거운 연산을 처리합니다. Apache Airflow로 워크플로우를 구성하고, 향후 MLflow 실험 추적(Level 7)으로 확장하도록 설계했습니다.
2. **Data Layer (Supabase)**: 데이터의 무결성을 유지하고 서버리스 환경에서 PostgreSQL 기반의 단일 진실 공급원(Single Source of Truth)을 제공합니다.
3. **Showroom (Hugging Face Spaces / Gradio)**: 외부 사용자(채용 담당자 등)가 모델의 예측 결과 및 MLOps 가이드북을 언제든 확인할 수 있도록 Gradio 기반의 고가용성 UI를 제공합니다.

## MLOps 성숙도 레벨 진행 (L1~L6 완료 / L7~L10 계획)
체계적인 로드맵을 정의하고, 기반 단계부터 단계적으로 완료해 나가고 있습니다.

**완료 (🟢 L1~L6)**
- **Level 1 — 클라우드 데이터 엔지니어링**: 로컬 파일 기반 수집을 Supabase 클라우드 파이프라인으로 전환하고, 데이터 중복을 막는 Upsert 로직을 정착시켰습니다.
- **Level 2 — 전처리 & 피처 엔지니어링**: 휴일·캘린더 피처, 지하철+날씨 병합, lag/rolling 피처 등 표준화된 Feature Store를 적재하고 무결성 검증 루틴을 구축했습니다.
- **Level 3 — 데이터 품질 가이드북**: 학습 전 상관관계·시계열·분포를 점검하는 Gradio 기반 Observer UI와 체크리스트를 제공합니다.
- **Level 4 — AutoML & 튜닝 워크플로우**: Train/Test 분할, 다중 모델 비교(Linear/RandomForest/GradientBoosting), Grid Search, RMSE 시각화를 구현했습니다.
- **Level 5 — IaC (Docker)**: 멀티스테이지 Dockerfile, docker-compose, .dockerignore 최적화로 재현 가능한 환경을 구성했습니다.
- **Level 6 — CI/CD 파이프라인**: GitHub Actions로 의존성 설치, Ruff 린팅, Pytest 품질 게이트, 자동 배포 워크플로우를 갖췄습니다.

**계획 (⚪ L7~L10)**
- **Level 7 — 실험 추적(MLflow)**, **Level 8 — 데이터 버전 관리(DVC)**, **Level 9 — 시스템 관측성(모니터링/알림)**, **Level 10 — 전체 오케스트레이션(Airflow E2E DAG)** 으로 발전시키는 과정을 가이드북에 로드맵으로 담아냈습니다.

## 인프라 운영 (k8s / GitOps)
프로덕션은 OCI Ampere A1 위 k3s로 배포되며, Traefik 인그레스와 cert-manager TLS(`*.bit-habit.com`)를 적용했습니다. 쿠버네티스 매니페스트는 앱 저장소에는 참조용만 두고, 정식 매니페스트는 별도 인프라 저장소(`bit-habit-infra`)에서 ArgoCD로 GitOps 관리하여 앱과 인프라의 관심사를 분리했습니다.

## 기술 스택
Python, Gradio, Supabase(PostgreSQL), pandas, Playwright/BeautifulSoup(크롤링), Apache Airflow, Docker, GitHub Actions(CI/CD), k3s/Kubernetes, Traefik, OCI Ampere A1, Hugging Face Hub

## DevRel 관점 성과
단순히 모델을 배포한 것에 그치지 않고, 데이터 수집 파이프라인부터 클라우드 서빙까지의 과정을 레벨별로 쪼개어 누구나 MLOps가 발전하는 과정을 이해할 수 있는 "튜토리얼 가이드북"을 함께 배포했다는 점이 가장 큰 차별점입니다.
