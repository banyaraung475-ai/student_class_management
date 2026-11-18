# GitHub Copilot Toolbox — MCP & Skills awareness

_Generated: 2026-11-18T03:54:25.694Z_

## How to use this report

- **Saved copy:** This file is **`.github/copilot-toolbox-mcp-skills-awareness.md`** — refreshed whenever the toolbox runs an MCP & Skills scan (including on workspace open when auto-scan is enabled). It is meant for **Copilot workspace context** together with `.github/copilot-instructions.md` (which gets a shorter replaceable summary when auto-merge is on).
- **MCP:** Lists **configured** servers from `mcp.json`. **Live tool use** still requires **Copilot Chat → Agent** with those servers **trusted/started** in the MCP tools UI.
- **Skills:** **On-disk** folders with `SKILL.md`. Copilot does not auto-load them; attach `SKILL.md` or paths in chat when useful.
- **Task routing:** When the user’s request matches a server’s purpose (e.g. Confluence → Confluence/Atlassian MCP), prefer that **server id** from the tables below.

---

## MCP — workspace

Workspace `mcp.json` _(folder: student_class_management)_

- **c:\xampp\htdocs\student_class_management\.vscode\mcp.json** — _File exists — servers defined_

| Server id | Kind | Detail |
|-----------|------|--------|
| laravel-boost | stdio | php artisan boost:mcp |

## MCP — user profile

- **C:\Users\asusv\AppData\Roaming\Code\User\mcp.json** — _File missing_

_No active user-scoped servers in mcp.json._

## Skills (local `SKILL.md` folders)

### Project-scoped

- **deploying-to-cloud** — `c:\xampp\htdocs\student_class_management\.github\skills\deploying-to-cloud`
  - Deploys and manages Laravel applications on Laravel Cloud using the `cloud` CLI. Use when the user wants to deploy an app, ship to Cloud, create or manage applications, environments, databases, caches, object storage, qu

- **infer-conventions** — `c:\xampp\htdocs\student_class_management\.github\skills\infer-conventions`
  - Use this skill to analyze how a Laravel application is actually written and record its conventions as shared rules. Trigger when the user wants to detect, infer, document, or standardize project conventions or coding sty

- **laravel-best-practices** — `c:\xampp\htdocs\student_class_management\.github\skills\laravel-best-practices`
  - Apply this skill whenever writing, reviewing, or refactoring Laravel PHP code. This includes creating or modifying controllers, models, migrations, form requests, policies, jobs, scheduled commands, service classes, and 

- **tailwindcss-development** — `c:\xampp\htdocs\student_class_management\.github\skills\tailwindcss-development`
  - Always invoke when the user's message includes 'tailwind' in any form. Also invoke for: building responsive grid layouts (multi-column card grids, product grids), flex/grid page structures (dashboards with sidebars, fixe

- **testing-best-practices** — `c:\xampp\htdocs\student_class_management\.github\skills\testing-best-practices`
  - Laravel test design and review. Use when selecting coverage, naming or structuring tests, choosing assertions or test data, isolating dependencies, testing HTTP or security boundaries, improving suite performance, or rev

- **deploying-to-cloud** — `c:\xampp\htdocs\student_class_management\.claude\skills\deploying-to-cloud`
  - Deploys and manages Laravel applications on Laravel Cloud using the `cloud` CLI. Use when the user wants to deploy an app, ship to Cloud, create or manage applications, environments, databases, caches, object storage, qu

- **infer-conventions** — `c:\xampp\htdocs\student_class_management\.claude\skills\infer-conventions`
  - Use this skill to analyze how a Laravel application is actually written and record its conventions as shared rules. Trigger when the user wants to detect, infer, document, or standardize project conventions or coding sty

- **laravel-best-practices** — `c:\xampp\htdocs\student_class_management\.claude\skills\laravel-best-practices`
  - Apply this skill whenever writing, reviewing, or refactoring Laravel PHP code. This includes creating or modifying controllers, models, migrations, form requests, policies, jobs, scheduled commands, service classes, and 

- **tailwindcss-development** — `c:\xampp\htdocs\student_class_management\.claude\skills\tailwindcss-development`
  - Always invoke when the user's message includes 'tailwind' in any form. Also invoke for: building responsive grid layouts (multi-column card grids, product grids), flex/grid page structures (dashboards with sidebars, fixe

- **testing-best-practices** — `c:\xampp\htdocs\student_class_management\.claude\skills\testing-best-practices`
  - Laravel test design and review. Use when selecting coverage, naming or structuring tests, choosing assertions or test data, isolating dependencies, testing HTTP or security boundaries, improving suite performance, or rev

- **deploying-to-cloud** — `c:\xampp\htdocs\student_class_management\.cursor\skills\deploying-to-cloud`
  - Deploys and manages Laravel applications on Laravel Cloud using the `cloud` CLI. Use when the user wants to deploy an app, ship to Cloud, create or manage applications, environments, databases, caches, object storage, qu

- **infer-conventions** — `c:\xampp\htdocs\student_class_management\.cursor\skills\infer-conventions`
  - Use this skill to analyze how a Laravel application is actually written and record its conventions as shared rules. Trigger when the user wants to detect, infer, document, or standardize project conventions or coding sty

- **laravel-best-practices** — `c:\xampp\htdocs\student_class_management\.cursor\skills\laravel-best-practices`
  - Apply this skill whenever writing, reviewing, or refactoring Laravel PHP code. This includes creating or modifying controllers, models, migrations, form requests, policies, jobs, scheduled commands, service classes, and 

- **tailwindcss-development** — `c:\xampp\htdocs\student_class_management\.cursor\skills\tailwindcss-development`
  - Always invoke when the user's message includes 'tailwind' in any form. Also invoke for: building responsive grid layouts (multi-column card grids, product grids), flex/grid page structures (dashboards with sidebars, fixe

- **testing-best-practices** — `c:\xampp\htdocs\student_class_management\.cursor\skills\testing-best-practices`
  - Laravel test design and review. Use when selecting coverage, naming or structuring tests, choosing assertions or test data, isolating dependencies, testing HTTP or security boundaries, improving suite performance, or rev

### User-scoped

- **skill-creator** — `C:\Users\asusv\.claude\skills\skill-creator`
  - Create new skills, modify and improve existing skills. Use when users want to create a skill from scratch, edit, or optimize an existing skill.

---

## Suggested next steps

- **MCP:** Command Palette → `MCP: List Servers` (or this extension’s hub **MCP** tab) → start/trust servers in **Copilot Chat → Agent → tools**.
- **Edit config:** `MCP: Open Workspace Folder MCP Configuration` / `MCP: Open User Configuration`.
- **Refresh this report:** run **Intelligence — scan MCP & Skills awareness** again after changing `mcp.json` or adding skills.

_Report from GitHub Copilot Toolbox extension._
