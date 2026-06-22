import { container, glassCard } from "@/app/libs/const";
import Heading from "./heading";
import { capabilities } from "@/app/libs/data";

export default function WhatIBuildSection() {
  return (
    <section className="py-10 sm:py-20">
      <div className={container}>
        <Heading
          eyebrow="What I build"
          title="Software close to the business."
          copy="Focused products that support customers, teams, and daily operations."
        />

        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {capabilities.map(([title, Icon, copy]) => (
            <article
              key={title}
              className={`${glassCard} group relative isolate overflow-hidden rounded-[10px] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_35px_rgba(239,68,68,0.12)]`}
            >
              {/* Glitch overlay */}
              <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 animate-[glitchShift_0.35s_steps(2,end)_infinite] bg-[linear-gradient(90deg,transparent,rgba(239,68,68,0.12),transparent)] mix-blend-screen" />
              </div>
              {/* Scan lines */}
              <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_3px,rgba(255,255,255,0.03)_4px,transparent_5px)]" />
              </div>
              {/* Moving scanner */}
              <div className="pointer-events-none absolute -top-1/2 left-0 z-0 h-1/2 w-full animate-[scanLine_5s_linear_infinite] bg-[linear-gradient(to_bottom,transparent,rgba(239,68,68,0.07),transparent)]" />
              <div className="relative z-10">
                <div className="relative inline-flex">
                  <Icon
                    size={21}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* RGB glitch icon */}
                  <Icon
                    size={21}
                    className="pointer-events-none absolute left-0 top-0 translate-x-px -translate-y-px text-red-500 opacity-0 transition-opacity duration-200 group-hover:opacity-60"
                  />
                  <Icon
                    size={21}
                    className="pointer-events-none absolute left-0 top-0 -translate-x-px translate-y-px text-cyan-400 opacity-0 transition-opacity duration-200 group-hover:opacity-60"
                  />
                </div>
                <h3 className="mt-7.5 mb-[11px] text-lg tracking-[-0.03em]">
                  {title}
                </h3>
                <p className="m-0 text-[13px] leading-[1.7] text-zinc-400">
                  {copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
