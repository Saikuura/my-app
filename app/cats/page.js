import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../components/atoms/ButtonLink";

export default function CatPage() {
  return (
    <>
      <div className="flex items-center justify-center transition w-fit h-fit hover:bg-slate-300 bg-slate-500">
        <p className="text-red-400 text-9xl">KATTE SIDE</p>
      </div>
      <div className="flex gap-8">
        <ButtonLink href="/cats/huskatt">Huskatt</ButtonLink>
        <ButtonLink href="/cats/perser">Perser</ButtonLink>
        <ButtonLink href="/cats/bobcat">Bobcat</ButtonLink>
      </div>
      <Image width={400} height={400} src="/grumpy.jpg" />
    </>
  );
}
