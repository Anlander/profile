"use client";

import Link from "next/link";
import { Code2, Github, Home, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";

interface Props {
  home?: boolean;
}

export const Navigation = ({ home }: Props) => {
  const pathname = usePathname();
  return (
    <nav
      className={`flex lg:items-center ${!home ? "flex-col" : "flex-row"} lg:flex-row gap-2 lg:gap-5 z-50 lg:gap-5 lg:ml-2 font-mono text-xl`}
    >
      {home && (
        <Link href="/">
          <span className="font-bold hidden lg:flex gap-2 items-center font-mono flextext-[#80EF80]">
            <Code2 />
            Anlander.
          </span>
        </Link>
      )}
      {home && (
        <Link href="/">
          <span className="font-bold lg:hidden flex gap-2 items-center font-mono flextext-[#80EF80]">
            <Home />
          </span>
        </Link>
      )}

      <Link
        href="/profile"
        className={`${pathname === "/profile" && "text-[#80EF80]"}`}
      >
        <span>Work </span>
      </Link>
      <span className="hidden lg:block">|</span>
      {home && <span>|</span>}
      <Link
        href="/education"
        className={`${pathname === "/education" && "text-[#80EF80]"}`}
      >
        Education
      </Link>
      <span className="hidden lg:block">|</span>
      {home && <br />}
      <div className="flex gap-2 lg:gap-5">
        <Link href="https://github.com/Anlander">
          <Github />
        </Link>
        <Link href="https://www.linkedin.com/in/philip-anlander-68036a94/">
          <Linkedin />
        </Link>
      </div>
    </nav>
  );
};
