# Gichan Lee

**Forward Deployed Engineer — ships agentic AI systems from business intent to production, across cloud and on-prem**
+82 10-6666-2824 | gichanlee@icloud.com | Gangnam-gu, Seoul | github.com/bookseal | bit-habit.com

---

## Summary

- **Agentic systems in production, end to end** — currently Lead AI FDE: turn executives' intent into deployed agents (meeting-notes → agent → GitHub Issues/PRs, human-in-the-loop guardrails). Built and run BookToss, a LangGraph + tool-calling agent, live for 2 years.
- **Hybrid & on-prem deployment** — self-run k3s cluster serving 14 services for 2 years (ArgoCD GitOps, Prometheus). Migrated AWS → OCI with zero downtime. Built a k8s scale-to-zero LLM serving launcher (0→1 on demand, cost $0 idle).
- **RAG pipelines + evaluations** — tuned a 1,297-page RAG with a **45-config eval harness** (chunking × embedding × retrieval × K) against a blind holdout; picked the deploy config by rule (−38% tokens). Graded 9/10, top of class.
- **Customer-facing delivery** — #1 of 20+ engineers across all metrics in MS M365 enterprise support (92.7% resolution, 0% dissatisfaction). Diagnose in the customer's environment, document the fix as a reusable asset.

---

## Experience

### Korea Institute of Business Analysis (한국경영분석연구원) | Lead AI FDE
**2026.05 – Present**

- **Lead a 3-person team**, translating executives' business needs into deployed technology and setting the technical direction — the FDE loop from intent to production.
- **Agentic systems with human-in-the-loop guardrails** — actions branched by type: reads run automatically, board writes need per-item approval, deletions/permissions/code changes prohibited; PII masked before commits.
- **Embedded LLM agents into the dev workflow** — Claude Code + GitHub pipeline from meeting notes → Issues/PRs. Cut a 10-hour government-guideline analysis task to 2 hours, documented so non-developers run it without me.
- **Production from planning to deployment** — built Quali-fit, a certification-based staffing recommender; domain logic split from UI/DB and pinned with unit tests, Docker + CI/CD.

### Bithabit | AI Architect / Infrastructure Owner (Founder)
**2024.08 – Present**

- **k3s cluster, 14 services, 2 years zero-downtime** — networking/storage/ingress, ArgoCD GitOps, Prometheus + Gatus observability. Live status at status.bit-habit.com.
- **Hybrid cloud & migration** — built on AWS (EC2, Route 53), then re-architected and migrated to OCI with no downtime. Terraform IaC. On-demand LLM serving via k8s scale-to-zero (llm-app-lab).
- **Agent + RAG + eval work** — BookToss (LangGraph, tool-calling over 25 no-API sites, 5min→1min); FAA-law RAG with a 45-config eval harness, section-boundary chunking, reranking (15,482→2,256 tokens); forced tool_use + Pydantic validation for structured extraction.
- **Web auth/security** — Email OTP + JWT designed and run on live traffic for 2 years.

### Concentrix Korea (Microsoft M365) | Technical Success Advisor
**2025.08 – 2025.11**

- **#1 of 20+ engineers across all metrics** — 92.7% resolution (SRR), 0% dissatisfaction, 5.0 avg rating. Selected as Microsoft Global Tester. Diagnosed auth/tenant/network issues in English and documented fixes as team assets.

### FPT Software Korea | Embedded Software Engineer
**2024.10 – 2025.07**

- Deployed automotive security modules with Hyundai AutoEver; Linux troubleshooting in the customer's constrained environment.

### Gamasot Online English (Hanoi, Vietnam) | Founder & Operator
**2018 – 2022**

- Ran a fully remote education business for 4 years — recruited/trained cross-border partners, built the tooling and a Unity learning game solo, iterated on direct user feedback.

---

## Skills

- **AI stack**: LangGraph/LangChain, agent orchestration, tool calling + structured output (Pydantic), RAG (section chunking, reranking, token budgeting), **eval harnesses** (coverage/recall/MRR), embeddings/vector search, Anthropic SDK, LLM APIs
- **Languages**: Python, TypeScript/JavaScript, C/C++, Bash
- **Deploy & DevOps**: Docker, Kubernetes (k3s), ArgoCD (GitOps), Terraform, Prometheus/Gatus, GitHub Actions CI/CD, AWS · OCI · Azure — public cloud, VPC, and on-prem
- **Customer-facing**: enterprise technical support (#1/20+), English delivery, technical docs as reusable assets

---

## Education

- **École 42 Seoul** — Computer Science (2022.10 – 2024.10). UNIX systems, network & concurrency programming in C from scratch. Ran a peer study group for 3 years.
- **Pukyong National University** — B.S. Industrial Engineering (2007.03 – 2014.02)
- **Fast Campus × Upstage AI Lab** — Solar / Document Parse coursework
