import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const loadConfig = () => {
  const configPath = join(root, "config.yaml");
  const examplePath = join(root, "templates", "config.example.yaml");
  const path = existsSync(configPath) ? configPath : examplePath;
  return yaml.load(readFileSync(path, "utf8"));
};

const flattenConfig = (cfg) => {
  const mobileAppsList = (cfg.mobile_apps ?? [])
    .map(
      (app) =>
        `- **${app.display_name}** — ${app.tagline} — \`${app.group_chat}\` — repo \`${app.repo}\``,
    )
    .join("\n");

  const connectorsList = (cfg.connectors?.enabled ?? [])
    .map((c) => `- ${c}`)
    .join("\n");

  const sharedRepos = (cfg.shared_box?.repos ?? []).join(", ");

  return {
    ROUTER_BOT_NAME: cfg.router_bot?.name ?? "Router",
    APPROVAL_RULE: cfg.operator?.approval_rule ?? "Nothing goes out without my explicit yes.",
    MORNING_BRIEFING_TIME: cfg.router_bot?.morning_briefing_time ?? "07:00",
    APP_STANDUP_WINDOW: cfg.router_bot?.app_standup_window ?? "17:00–17:15 weekdays",
    COMPANY_LEGAL_NAME: cfg.company?.legal_name ?? "Your Company",
    COMPANY_NOTION: cfg.company?.notion_workspace ?? "Company Notion",
    PERSONAL_NOTION: cfg.personal?.notion_workspace ?? "Personal Notion",
    HQ_GROUP_CHAT: cfg.company?.hq_group_chat ?? "#hq",
    ROUTER_CHANNEL: cfg.company?.hq_group_chat ?? "#hq",
    PERSONAL_GROUP_CHAT: cfg.personal?.personal_group_chat ?? "#personal",
    NOTION_WIKI_PARENT: cfg.notion?.team_wiki_parent ?? "Team Wikis",
    NOTION_CRM: cfg.notion?.databases?.crm ?? "CRM",
    NOTION_PROJECTS: cfg.notion?.databases?.projects ?? "Projects",
    NOTION_SPECS: cfg.notion?.databases?.specs ?? "Specs / PRDs",
    CONNECTORS_LIST: connectorsList || "- (configure connectors in config.yaml)",
    SHARED_REPOS: sharedRepos || "(add repos in config.yaml)",
    MOBILE_APPS_LIST: mobileAppsList || "- (add mobile_apps in config.yaml)",
    ECOMMERCE_BRAND_NAME: cfg.ecommerce?.brand_name ?? "Your Brand",
    SHOPIFY_STORE: cfg.ecommerce?.shopify_store ?? "store.myshopify.com",
    ECOMMERCE_GROUP_CHAT: cfg.ecommerce?.group_chat ?? "#shop-all-hands",
    SAAS_PRODUCT_NAME: cfg.saas?.product_name ?? "Your SaaS",
    SAAS_DOMAIN: cfg.saas?.domain ?? "example.com",
    SAAS_GROUP_CHAT: cfg.saas?.group_chat ?? "#saas-all-hands",
  };
};

const substitute = (text, vars) =>
  Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replaceAll(`{{${key}}}`, String(value)),
    text,
  );

const run = () => {
  const cfg = loadConfig();
  const vars = flattenConfig(cfg);
  const promptsDir = join(root, "prompts");
  const outDir = join(root, "dist", "prompts");
  mkdirSync(outDir, { recursive: true });

  const files = readdirSync(promptsDir).filter((f) => f.endsWith(".md") && f !== "README.md");

  for (const file of files) {
    const raw = readFileSync(join(promptsDir, file), "utf8");
    const rendered = substitute(raw, vars);
    writeFileSync(join(outDir, file), rendered);
    console.log(`Wrote dist/prompts/${file}`);
  }
};

run();
