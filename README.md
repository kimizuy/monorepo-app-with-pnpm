pnpm workspace を使って Next.js と Astro のアプリを含むモノレポプロジェクトを作成し、共通 UI コンポーネントをそれぞれのアプリで使うまでのサンプルです。

## Getting Started

### Install

```bash
pnpm install
```

### Run

```bash
cd apps/next-app && pnpm dev
```

or

```bash
cd apps/astro-app && pnpm dev
```

---

`apps/next-app`

```
✔ What is your project named? … next-app
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … No
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … No
```

`apps/astro-app`

```
✔ Project name: … astro-app
✔ Select a framework: › react
✔ Select a variant: › ts-react
```
