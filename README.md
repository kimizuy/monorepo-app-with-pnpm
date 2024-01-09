pnpm workspace を使って Next.js と Astro のアプリを含むモノレポプロジェクトを作成し、`shared-ui` の共通 UI コンポーネントをそれぞれのアプリで使うまでのサンプルです。

## Getting Started

### Install

```bash
pnpm install
```

### Run

```bash
cd packages/next-app && pnpm dev
```

or

```bash
cd packages/astro-app && pnpm dev
```

---

`packages/next-app`

```
✔ What is your project named? … next-app
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
```

`packages/astro-app`

```
✔ Project name: … astro-app
✔ Select a framework: › react
✔ Select a variant: › ts-react
```
