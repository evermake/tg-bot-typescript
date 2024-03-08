# _YourAwesomeBot_

> ⚠️ Work in progress ⚠️

Opinionated template repository for building Telegram bots with TypeScript.

## About

### Stack

- Common
  - [ESLint](https://eslint.org/) — linting and formatting
  - [Vitest](https://vitest.dev/) — testing
- Bot
  - [grammY](https://grammy.dev/) — modern Telegram Bot framework
  - [Prisma](https://prisma.io/orm) — intuitive ORM w/o magic
  - [zod](https://zod.dev/) — schema validation
- Mini App
  - [Vue](https://vuejs.org/) — framework with great DX
  - [Vite](https://vitejs.dev/) — fast and rich bundler
  - [@telegum/mini-apps-sdk](https://github.com/telegum/mini-apps) — Mini Apps SDK

### Available Scripts

Root `package.json` includes the following scripts:

- `lint` and `lint:fix` — lint and autofix the codebase (including non-code files)
- `test` — run tests with Vitest
- `taze` — update dependencies interactively
- `release` — bump version of all packages, then commit, tag and push

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) and (for Mini App) [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking.

For VS Code, install [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

It is recommended to enable the [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669):

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
