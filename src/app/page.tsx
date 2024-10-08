import { ModeToggle } from "@/components/dark-toggle";

export default function Home() {
  return (
    <main className="relative container flex min-h-screen flex-col">
      <div className=" p-4 flex h-14 items-center justify-between supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <span className="font-bold">Chat with PDF</span>
        <ModeToggle />
      </div>
    </main>
  );
}
