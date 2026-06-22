import { container } from "@/app/libs/const";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] pb-20 sm:pb-0">
      <div
        className={`${container} flex min-h-31.5 items-center justify-between gap-7.5 max-sm:flex-col max-sm:items-start max-sm:py-7.5`}
      >
        <div className="flex items-center gap-6 max-sm:grid">
          <a
            href="#top"
            className="inline-flex items-center gap-[7px] font-bold tracking-[-0.05em] [&>span]:text-[17px] [&>i]:size-1.5 [&>i]:rounded-full [&>i]:bg-red-500 [&>i]:shadow-[0_0_12px_rgba(239,68,68,0.7)]"
          >
            <span>JLE</span>
            <i />
          </a>
          <p className="m-0 text-[14px] text-zinc-500">
            Building dependable software products with practical engineering.
          </p>
        </div>
        <div className="flex gap-5.5 max-sm:flex-wrap [&>a]:text-[14px] [&>a]:text-zinc-500 [&>a:hover]:text-white">
          <a href="mailto:jleward.escote17@gmail.com">Email</a>
          <a
            href="https://github.com/dev-jeyelscott"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/john-leward-escote/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="/john-leward-escote-resume.pdf" download>
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
