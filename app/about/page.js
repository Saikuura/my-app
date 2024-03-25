import Link from "next/link";


export default function AboutPage() {
  return (
    <>
      <div className="flex items-center justify-center transition w-fit h-fit hover:bg-slate-300 bg-slate-500">
        <p className="text-red-400 text-9xl">ABOUT SIDE</p>
      </div>
      <Link href="/reptiler">Go to reptiles</Link>
    </>
  );
}
