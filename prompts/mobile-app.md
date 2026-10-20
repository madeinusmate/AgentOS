# Mobile App teams

Paste into **{{ROUTER_BOT_NAME}}**. Use the `mobile_apps` list from `templates/config.yaml` — **one seven-role team per app**.

---

For **each** mobile app below, create **7 specialist Grok bots** plus register them in the app’s **all-hands group chat** and Notion wiki page.

### Apps to provision

{{MOBILE_APPS_LIST}}

Example format for one app (repeat for every app):

- **App:** ChefGPT — AI calorie tracker — `#chef-gpt-all-hands` — repo `github.com/.../chef-gpt`

---

## Standard seven roles (per app)

| # | Role | Mission summary |
|---|------|------------------|
| 1 | **Growth Agent (team lead)** | Owns weekly priorities, standup notes, cross-role unblocking; reports to router at standup window **{{APP_STANDUP_WINDOW}}**. |
| 2 | **Product** | Roadmap, user research synthesis, specs in **{{NOTION_SPECS}}**. |
| 3 | **Engineering** | Bugs, tech debt, Cursor cloud agent tasks on **shared box**; **no merge without my approval**. |
| 4 | **Acquisition** | ASA, Meta/TikTok, creatives briefs, cohort tests — **no budget changes without approval**. |
| 5 | **Content** | ASO, store copy, social, UGC briefs via Postiz or equivalent. |
| 6 | **Monetization & Retention** | Paywalls, RevenueCat/Stripe experiments, lifecycle pushes — drafts only until approved. |
| 7 | **Ops Manager** | Keeps team wiki + decision log current; release checklist, incident log, connector health. |

## Per-app Notion wiki (required sections)

1. Mission & north-star metric  
2. Current sprint / week priorities  
3. Decision log (dated entries)  
4. Links: repo, Vercel, Firebase, analytics, store URLs  
5. Roster table: seven bots + human owner  

## Per-app connectors (typical)

GitHub, Vercel, Firebase, RevenueCat, Stripe, Clerk, App Store Connect scripts, AppsFlyer (on shared box), Figma, Meta/TikTok ads — enable only what exists in **{{CONNECTORS_LIST}}**.

## Standups

- **When:** Weekdays **{{APP_STANDUP_WINDOW}}**
- **Format:** Each role posts: yesterday / today / blockers (3 bullets). Growth Agent rolls up to router.

## Scale note

If I have **N** apps, I will have **7 × N** mobile bots. Confirm total count before spawning.

After provisioning, send one message per app in its group chat with roster, Notion link, and example commands (e.g. “ship 1.4.2”, “ASA week review”, “paywall experiment draft”).
