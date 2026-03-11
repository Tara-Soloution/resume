
As requested, here’s a structured overview of how I think and build systems.

---

1. CV / LinkedIn / GitHub

Please find my CV attached.

LinkedIn:
https://www.linkedin.com/in/abbas-ataie/

GitHub:
https://github.com/abbasatayee/

My work focuses on backend systems, distributed infrastructure, configurable platforms, and AI-enabled workflows.

---

2. A System I’ve Built: Cloud-Station (Built from the Ground Up)

After our previous project (Blockchainr) was stopped, the company pivoted to a new direction: Cloud-Station. I built Cloud-Station from the ground up — architecture, workflow engine, deployment system, and integration layer.

Cloud-Station reached ~10k MRR in a relatively short time after launch, validating both the technical design and product-market fit.

The goal was to enable customers to deploy:

* Applications
* GitHub repositories
* AI agents
* Blockchain-integrated services

Through a highly configurable, one-click deployment system.

Core Technical Challenge

We needed to orchestrate:

* Multi-step provisioning (repo → build → containerize → deploy → configure → verify)
* Conditional logic depending on user configuration
* Long-running asynchronous operations
* Rollbacks and retries
* External integrations (AI runtimes, wallets, APIs)

My Approach

Explicit Workflow State Machine

Instead of loosely chained background jobs, I designed and implemented a deterministic workflow engine with clearly defined states.

Each state had:

* Defined inputs and outputs
* Retry policies
* Timeout rules
* Compensation (rollback) logic

This made the system predictable, observable, and resilient to failure.

Dynamic Template System

Cloud-Station was highly configurable via dynamic deployment templates.

Templates defined:

* Required services
* Conditional branches
* Infrastructure sizing
* Secret mappings
* Runtime configuration
* Post-deployment hooks

This allowed complex, multi-component systems to be deployed in one click without hardcoding variations per product.

Blockchain Wallet Synchronization (Lessons from Blockchainr)

In Blockchainr, customers linked wallets that synchronized with the platform. We faced:

* Race conditions
* Partial sync failures
* External event inconsistencies
* Non-idempotent update logic



---

3. Recent Improvements to My AI-Enabled Workflow

Personal Workflow Automation

I recently designed structured workflows for my daily life, including an expense tracking system. The challenge was consistency and reducing manual categorization.

I treated it like a production system:

* Clear state transitions (capture → parse → classify → store → review)
* Tool-based automation
* Deterministic outputs
* Auditability

AI Agent for Transcript → Script Conversion

I built an AI agent that converts raw transcripts into structured scripts using tool-calling and structured outputs.

Initial issues:

* Inconsistent formatting
* Context loss
* Hallucinated transitions

Improvements I implemented:

* Switched to a more suitable LLM for long-context reasoning
* Introduced structured JSON outputs
* Separated formatting logic from generation
* Added validation steps before final output

The key insight: AI reliability is a systems problem. Model choice, constraints, workflow design, and validation layers matter more than prompt tweaks.

---

How I Think

When building complex systems, I focus on:

* Explicit state modeling
* Deterministic workflows
* Idempotency
* Observability before scale
* Configuration over duplication
* Designing for failure

I prefer systems that feel simple externally but are structurally predictable and resilient internally.

Happy to go deeper into architecture decisions or trade-offs if helpful.

Best regards,
Abbas Ataie
