# Grok bot spin-up prompts

| File | When to use |
|------|-------------|
| [`_foundation.md`](./_foundation.md) | Always first — on your **router** bot |
| [`company-admin-functions.md`](./company-admin-functions.md) | HQ: CFO, scout, funding/M&A |
| [`private-life.md`](./private-life.md) | Personal specialists |
| [`mobile-app.md`](./mobile-app.md) | 7 roles × each app in config |
| [`ecommerce-business.md`](./ecommerce-business.md) | Shopify / DTC team |
| [`saas-business.md`](./saas-business.md) | SaaS product team |
| [`GROKBOT_MASTER_SPINUP.md`](./GROKBOT_MASTER_SPINUP.md) | Single paste — all parts |

## Placeholders

Configure [`../templates/config.example.yaml`](../templates/config.example.yaml), then render:

```bash
pnpm install
pnpm run render-prompts
```

Rendered files are written to `dist/prompts/` (gitignored). You can also manually replace `{{PLACEHOLDER}}` tokens.

## Suggested order

1. Foundation → wait for roster approval  
2. Company Admin Functions  
3. Private Life (optional; can isolate in a separate Grok project)  
4. Mobile App (largest batch)  
5. Ecommerce business  
6. SaaS business  
