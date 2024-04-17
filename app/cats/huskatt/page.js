
import { Heading } from "@/app/components/atoms/Heading";
import Image from "next/image";
import Link from "next/link";

export default function PerserPage() {
  return (
    <>
      <div className="flex items-center justify-center transition w-fit h-fit hover:bg-slate-300 bg-slate-500">
        <Heading>HUSKATT</Heading>
      </div>
      <Image width={400} height={400} src="/grumpy.jpg"/>
    </>
  );
}
