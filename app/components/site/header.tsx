import { container } from "@/app/libs/const";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <>
      <a
        className="fixed top-3 left-3 z-100 -translate-y-[150%] rounded-md bg-white px-3.5 py-2.5 text-black focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <header className="top-0 z-50 w-full border-b !sticky border-white/[0.08] bg-black/80 backdrop-blur-[18px] flow-line flow-line--slow ">
        <div
          className={`${container} flex h-[68px] items-center justify-between`}
        >
          <div className="flex items-center gap-4">
            <a
              href="#top"
              className="group inline-grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-[border-color,background-color,transform] hover:border-red-500/35 hover:bg-white/[0.06] active:scale-95 sm:size-12"
              aria-label="John Leward Escote, home"
            >
              <span className="relative block size-9 sm:size-10">
                <Image
                  alt=""
                  aria-hidden="true"
                  className="theme-logo-dark block size-full object-contain"
                  height={1024}
                  priority
                  src="/images/dark-mode-logo.png"
                  width={1024}
                />
                <Image
                  alt=""
                  aria-hidden="true"
                  className="theme-logo-light absolute inset-0 hidden size-full object-contain"
                  height={1024}
                  priority
                  src="/images/light-mode-logo.png"
                  width={1024}
                />
              </span>
            </a>

            <a
              href="mailto:jleward.escote17@gmail.com"
              className="inline-flex items-center gap-2 text-[11px] sm:text-[13px] text-zinc-500 transition-colors hover:text-white"
            >
              <i className="status-pulse size-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.1)]" />
              <span className="inline">Available for Freelance</span>
            </a>
          </div>
          <nav
            className="hidden gap-8 sm:flex [&_a]:text-[13px] [&_a]:text-zinc-500 data-[theme=light]:text-zinc-800 [&_a]:transition-colors [&_a:hover]:text-white"
            aria-label="Primary navigation"
          >
            {[
              ["Experience", "experience"],
              ["Projects", "projects"],
              ["Skills", "skills"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <a
              className="flex items-center gap-2 text-[0px] text-zinc-500 data-[theme=light]:text-zinc-800 transition-colors hover:text-white sm:text-[13px] [&>i]:size-[7px] [&>i]:rounded-full [&>i]:bg-green-500 [&>i]:shadow-[0_0_0_4px_rgba(34,197,94,0.1)]"
              href="mailto:jleward.escote17@gmail.com"
            >
              <i className="status-pulse" />
              Open to opportunities
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
