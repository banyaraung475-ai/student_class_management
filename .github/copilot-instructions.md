# GitHub Copilot instructions




<!-- github-copilot-toolbox:mcp-skills-awareness-begin -->

### MCP & Skills awareness (GitHub Copilot Toolbox)

_Last synced: 2026-11-18T03:54:26.135Z._

- **Full report:** `.github/copilot-toolbox-mcp-skills-awareness.md` in this workspace (auto-overwritten on each scan). Use it as ground truth for configured servers and skill folders.
- **MCP:** For **live tools**, use **Copilot Chat → Agent** and **trust/start** the right servers in the MCP UI.
- **When the user’s task matches a server** (e.g. “open this Confluence page” and a **Confluence** / **Atlassian** MCP is listed), **prefer that server id** and plan on Agent + MCP for actions—not only file search.
- **Skills:** Folders below contain `SKILL.md`; attach or cite paths in chat when relevant.

#### Workspace MCP

- `c:\xampp\htdocs\student_class_management\.vscode\mcp.json` _(workspace: student_class_management)_ — _servers defined_

| Server id | Kind | Detail |
|-----------|------|--------|
| laravel-boost | stdio | php artisan boost:mcp |

#### User MCP

- `C:\Users\asusv\AppData\Roaming\Code\User\mcp.json` — _file missing_

_No active user-scoped servers in mcp.json._

#### Project skills

- **deploying-to-cloud** — `c:\xampp\htdocs\student_class_management\.github\skills\deploying-to-cloud` — Deploys and manages Laravel applications on Laravel Cloud using the `cloud` CLI. Use when the user wants to deploy an app, ship to Cloud, create or manage applications, environments, databases, caches, object storage, qu

- **infer-conventions** — `c:\xampp\htdocs\student_class_management\.github\skills\infer-conventions` — Use this skill to analyze how a Laravel application is actually written and record its conventions as shared rules. Trigger when the user wants to detect, infer, document, or standardize project conventions or coding sty

- **laravel-best-practices** — `c:\xampp\htdocs\student_class_management\.github\skills\laravel-best-practices` — Apply this skill whenever writing, reviewing, or refactoring Laravel PHP code. This includes creating or modifying controllers, models, migrations, form requests, policies, jobs, scheduled commands, service classes, and 

- **tailwindcss-development** — `c:\xampp\htdocs\student_class_management\.github\skills\tailwindcss-development` — Always invoke when the user's message includes 'tailwind' in any form. Also invoke for: building responsive grid layouts (multi-column card grids, product grids), flex/grid page structures (dashboards with sidebars, fixe

- **testing-best-practices** — `c:\xampp\htdocs\student_class_management\.github\skills\testing-best-practices` — Laravel test design and review. Use when selecting coverage, naming or structuring tests, choosing assertions or test data, isolating dependencies, testing HTTP or security boundaries, improving suite performance, or rev

- **deploying-to-cloud** — `c:\xampp\htdocs\student_class_management\.claude\skills\deploying-to-cloud` — Deploys and manages Laravel applications on Laravel Cloud using the `cloud` CLI. Use when the user wants to deploy an app, ship to Cloud, create or manage applications, environments, databases, caches, object storage, qu

- **infer-conventions** — `c:\xampp\htdocs\student_class_management\.claude\skills\infer-conventions` — Use this skill to analyze how a Laravel application is actually written and record its conventions as shared rules. Trigger when the user wants to detect, infer, document, or standardize project conventions or coding sty

- **laravel-best-practices** — `c:\xampp\htdocs\student_class_management\.claude\skills\laravel-best-practices` — Apply this skill whenever writing, reviewing, or refactoring Laravel PHP code. This includes creating or modifying controllers, models, migrations, form requests, policies, jobs, scheduled commands, service classes, and 

- **tailwindcss-development** — `c:\xampp\htdocs\student_class_management\.claude\skills\tailwindcss-development` — Always invoke when the user's message includes 'tailwind' in any form. Also invoke for: building responsive grid layouts (multi-column card grids, product grids), flex/grid page structures (dashboards with sidebars, fixe

- **testing-best-practices** — `c:\xampp\htdocs\student_class_management\.claude\skills\testing-best-practices` — Laravel test design and review. Use when selecting coverage, naming or structuring tests, choosing assertions or test data, isolating dependencies, testing HTTP or security boundaries, improving suite performance, or rev

- **deploying-to-cloud** — `c:\xampp\htdocs\student_class_management\.cursor\skills\deploying-to-cloud` — Deploys and manages Laravel applications on Laravel Cloud using the `cloud` CLI. Use when the user wants to deploy an app, ship to Cloud, create or manage applications, environments, databases, caches, object storage, qu

- **infer-conventions** — `c:\xampp\htdocs\student_class_management\.cursor\skills\infer-conventions` — Use this skill to analyze how a Laravel application is actually written and record its conventions as shared rules. Trigger when the user wants to detect, infer, document, or standardize project conventions or coding sty

- **laravel-best-practices** — `c:\xampp\htdocs\student_class_management\.cursor\skills\laravel-best-practices` — Apply this skill whenever writing, reviewing, or refactoring Laravel PHP code. This includes creating or modifying controllers, models, migrations, form requests, policies, jobs, scheduled commands, service classes, and 

- **tailwindcss-development** — `c:\xampp\htdocs\student_class_management\.cursor\skills\tailwindcss-development` — Always invoke when the user's message includes 'tailwind' in any form. Also invoke for: building responsive grid layouts (multi-column card grids, product grids), flex/grid page structures (dashboards with sidebars, fixe

- **testing-best-practices** — `c:\xampp\htdocs\student_class_management\.cursor\skills\testing-best-practices` — Laravel test design and review. Use when selecting coverage, naming or structuring tests, choosing assertions or test data, isolating dependencies, testing HTTP or security boundaries, improving suite performance, or rev

#### User skills

- **skill-creator** — `C:\Users\asusv\.claude\skills\skill-creator` — Create new skills, modify and improve existing skills. Use when users want to create a skill from scratch, edit, or optimize an existing skill.

<!-- github-copilot-toolbox:mcp-skills-awareness-end -->
