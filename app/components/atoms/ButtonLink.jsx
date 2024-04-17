import Link from "next/link";

export const ButtonLink = ({ children, href }) => {
  return (
    <button className="transition-all hover:scale-105 active:scale-95">
      <Link className="p-4 rounded-full bg-slate-300" href={href}>{children}</Link>
    </button>
  );
};
