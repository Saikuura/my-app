import Link from "next/link";
import { PageLayout } from "./components/PageLayout";

export default function Home() {
  return (
    // <main className="flex flex-col items-center justify-between min-h-screen p-24">
    <PageLayout>
      <div className="flex items-center justify-center transition w-fit h-fit hover:bg-slate-300 bg-slate-500">
        <p className="text-red-400 text-9xl">Mø</p>
        
      </div>
      <Link href="about">Go to about</Link>
      </PageLayout>
    // </main>
  );
}

