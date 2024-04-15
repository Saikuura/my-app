import Image from "next/image";
import Link from "next/link";

export default function CatPage() {
  return (
    <>
      <div className="flex items-center justify-center transition w-fit h-fit hover:bg-slate-300 bg-slate-500">
        <p className="text-red-400 text-9xl">KATTE SIDE</p>
      </div>
      <Image width={400} height={400} src="/grumpy.jpg"/>
    </>
  );
}
