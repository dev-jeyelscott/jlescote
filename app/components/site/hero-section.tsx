import {
  container,
  eyebrowClass,
  primaryButton,
  secondaryButton,
} from "@/app/libs/const";
import { AnimatedGroup } from "@/app/reveal";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-svh overflow-hidden border-b border-white/[0.08] bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.15),transparent_50%)] pt-[32px]"
      id="top"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[72px_72px] opacity-20 [mask-image:linear-gradient(to_bottom,#000,transparent_82%)]"
        aria-hidden="true"
      />
      <div
        className={`${container} relative grid min-h-[calc(100svh-68px)] grid-cols-1 items-center gap-11 py-2 pb-14 lg:grid-cols-[minmax(0,1.13fr)_minmax(430px,0.87fr)] lg:gap-[7vw] lg:py-4`}
      >
        <AnimatedGroup kind="hero">
          <p
            className={`${eyebrowClass} normal-case tracking-[0.13em] [&>i]:size-[3px] [&>i]:rounded-full [&>i]:bg-zinc-500`}
          >
            <span>Senior Laravel &amp; Full-Stack Engineer</span>
            <i />
            Philippines · Remote
          </p>
          <h1 className="my-6 max-w-[760px] text-[clamp(42px,13vw,62px)] font-semibold leading-[0.97] tracking-[-0.062em] sm:my-7 sm:text-[clamp(48px,5.5vw,76px)] [&>em]:font-normal [&>em]:not-italic [&>em]:text-zinc-500 data-[theme=light]:text-zinc-800">
            <span
              className="glitch-title"
              data-text="Building scalable business systems and"
            >
              Building scalable business systems and
            </span>{" "}
            <em>dependable software products.</em>
          </h1>
          <p className="m-0 max-w-[650px] text-[17px] leading-[1.75] text-zinc-500 data-[theme=light]:text-zinc-800 max-sm:text-[15px]">
            Senior Laravel &amp; Full-Stack Engineer with 8+ years of experience
            building APIs, CRM platforms, e-commerce systems, and developer
            tools.
          </p>
          <div className="mt-8 grid gap-2.5 sm:flex sm:flex-wrap sm:gap-[11px]">
            <a className={`${primaryButton} w-full sm:w-auto`} href="#projects">
              View Projects <ArrowDown size={16} />
            </a>
            <a
              className={`${secondaryButton} w-full sm:w-auto`}
              href="/john-leward-escote-resume.pdf"
              download
            >
              Download Resume
            </a>
            <a
              className={`${secondaryButton} w-full sm:w-auto`}
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </AnimatedGroup>
        <aside
          className="flow-border flow-border--active relative z-0 overflow-hidden rounded-[14px] border border-white/13 bg-[#070709]/98 shadow-[0_28px_80px_rgba(0,0,0,0.5),0_0_50px_rgba(239,68,68,0.06)] backdrop-blur-[18px] lg:max-w-none"
          aria-label="Developer profile code preview"
        >
          <div className="relative flex min-h-10.5 items-center justify-center border-b border-white/[0.08] bg-linear-to-b from-zinc-800 to-[#1c1c1f]">
            <div className="absolute left-[15px] flex gap-2 [&>i]:size-[11px] [&>i]:rounded-full [&>i]:bg-[#ff5f57] [&>i:nth-child(2)]:bg-[#febc2e] [&>i:nth-child(3)]:bg-[#28c840]">
              <i />
              <i />
              <i />
            </div>
            <span className="font-mono text-[14px] text-zinc-300">
              developer.ts
            </span>
          </div>
          <div className="grid min-h-[360px] grid-cols-[44px_1fr] bg-[radial-gradient(circle_at_100%_0,rgba(239,68,68,0.08),transparent_40%)] py-5.5 max-sm:min-h-[330px]">
            <div className="select-none border-r border-white/5 pr-3.5 text-right font-mono text-xs leading-[1.85] text-zinc-700 max-sm:text-[13px]">
              1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9
              <br />
              10
              <br />
              11
            </div>
            <pre className="m-0 overflow-auto px-5 font-mono text-xs leading-[1.85] text-zinc-200 max-sm:px-[13px] max-sm:text-[13px]">
              <code>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = {`{`}
                <br /> name:{" "}
                <span className="text-green-300">
                  &quot;John Leward Escote&quot;
                </span>
                ,<br /> experience:{" "}
                <span className="text-green-300">&quot;8+ years&quot;</span>
                ,
                <br /> stack: [<br />{" "}
                <span className="text-green-300">&quot;Laravel&quot;</span>,
                <br /> <span className="text-green-300">&quot;React&quot;</span>
                ,<br />{" "}
                <span className="text-green-300">&quot;Next.js&quot;</span>,
                <br />{" "}
                <span className="text-green-300">&quot;PostgreSQL&quot;</span>
                <br /> ],
                <br /> passion:{" "}
                <span className="text-green-300">
                  &quot;Building dependable software&quot;
                </span>
                <br />
                {`}`};
              </code>
            </pre>
          </div>
          <div className="flex h-7 items-center justify-between bg-red-700 px-3 font-mono text-[13px] text-zinc-300">
            <span>main*</span>
            <span>TypeScript</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
