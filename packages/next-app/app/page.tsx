import { Button } from "@monorepo-app-with-pnpm/shared-ui";

export default function Home() {
  console.log("Button", Button);

  return (
    <main className="w-screen h-screen grid place-items-center">
      <div>
        <h1>Next app</h1>
        <Button>Shared button!</Button>
      </div>
    </main>
  );
}
