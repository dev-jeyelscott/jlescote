import { container, glassCard, tagList } from "@/app/libs/const";
import { skills } from "@/app/libs/data";
import Heading from "./heading";

export default function SkillSection() {
  return (
    <section
      className="flow-line flow-line--slow border-y border-white/[0.08] bg-[#080808] py-10 sm:py-20"
      id="skills"
    >
      <div className={container}>
        <Heading
          eyebrow="Skills"
          title="The tools change. The fundamentals stay."
          copy="A pragmatic stack shaped by production work across APIs, business logic, data, delivery, and modern interfaces."
        />

        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 [&>article:last-child]:col-start-2 max-lg:[&>article:last-child]:col-start-auto">
          {skills.map(([title, Icon, copy, items]) => (
            <article
              key={title}
              className={`${glassCard} group relative isolate overflow-hidden rounded-[10px] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(var(--theme-accent-rgb),0.10)]`}
            >
              {/* Glitch overlay */}
              <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 animate-[glitchShift_0.4s_steps(2,end)_infinite] bg-[linear-gradient(90deg,transparent,rgba(var(--theme-accent-rgb),0.08),transparent)] mix-blend-screen" />
              </div>

              {/* Scan lines */}
              <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_4px,rgba(255,255,255,0.025)_5px,transparent_6px)]" />
              </div>

              {/* Moving scanner */}
              <div className="pointer-events-none absolute -top-1/2 left-0 z-0 h-1/2 w-full animate-[scanLine_6s_linear_infinite] bg-[linear-gradient(to_bottom,transparent,rgba(var(--theme-accent-rgb),0.05),transparent)]" />

              <div className="relative z-10">
                <div className="relative inline-flex">
                  <Icon
                    size={22}
                    className="text-red-500 transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* RGB glitch */}
                  <Icon
                    size={22}
                    className="pointer-events-none absolute left-0 top-0 translate-x-px -translate-y-px text-red-500 opacity-0 transition-opacity duration-200 group-hover:opacity-50"
                  />

                  <Icon
                    size={22}
                    className="pointer-events-none absolute left-0 top-0 -translate-x-px translate-y-px text-cyan-400 opacity-0 transition-opacity duration-200 group-hover:opacity-50"
                  />
                </div>

                <h3 className="mt-7.5 mb-[11px] text-lg tracking-[-0.03em]">
                  {title}
                </h3>

                <p className="m-0 text-[13px] leading-[1.7] text-zinc-500 data-[theme=light]:text-zinc-800">
                  {copy}
                </p>

                <div className={`${tagList} mt-6 mb-0`}>
                  {items.map((item) => (
                    <span
                      key={item}
                      className="transition-colors duration-300 group-hover:border-red-500/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
