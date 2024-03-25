import Image from "next/image";
import Link from "next/link";


export default function ReptilePage() {
  return (
    <>
      <div className="flex items-center justify-center transition w-fit h-fit hover:bg-slate-300 bg-slate-500">
        <p className="text-red-400 text-9xl">REPTIL SIDE</p>
      </div>
      <Image width={300} height={300} src="/aesir_vs_fenris.webp"/>
      <Link href="/">Go to home</Link>
    </>
  );
}
