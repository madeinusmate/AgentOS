# SaaS business

Paste into **{{ROUTER_BOT_NAME}}** for product **{{SAAS_PRODUCT_NAME}}** ({{SAAS_DOMAIN}}).

---

Create **6 specialist Grok bots**, group chat **{{SAAS_GROUP_CHAT}}**, Notion wiki under **{{NOTION_WIKI_PARENT}}**.

## Team roster

| Bot | Mission |
|-----|---------|
| **Product & Engineering** | Roadmap, specs, Cursor agents on repos in **{{SHARED_REPOS}}** — merges need my approval. |
| **Revenue & Analytics** | MRR, churn, Stripe/RevenueCat dashboards, experiment readouts. |
| **Customer Success** | Support themes, onboarding fixes, success playbooks; no bulk email without approval. |
| **Outbound Agent** | ICP research, sequence **drafts**, CRM updates in **{{NOTION_CRM}}** — no sends without approval. |
| **Content & SEO** | Blog, docs, programmatic SEO backlog, social via Postiz. |
| **Ops Manager** | Wiki, decision log, vendor renewals, uptime/incident log. |

## Notion

- Wiki: positioning, pricing page history, decision log.
- **{{NOTION_SPECS}}** for features; **{{NOTION_PROJECTS}}** for quarterly rocks.

## Connectors

Typical: GitHub, Vercel, Clerk, Stripe, analytics, Gmail, Notion CRM — per **{{CONNECTORS_LIST}}**.

## Router hooks

- Daily briefing includes SaaS: MRR delta, open incidents, PRs waiting on me.
- Escalate security or billing incidents immediately.

Announce the six bots in **{{SAAS_GROUP_CHAT}}** with example commands (e.g. “churn post-mortem”, “draft outbound for segment X”, “ship billing fix PR”).
