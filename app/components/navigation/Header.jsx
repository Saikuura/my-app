import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-end h-20 px-12 bg-slate-300">
      <nav className="flex gap-12">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/cats">Katter</Link>
        <Link href="/hest">Hester</Link>
        <Link href="/reptiler">Reptiler</Link>
      </nav>
    </header>
  );
};
