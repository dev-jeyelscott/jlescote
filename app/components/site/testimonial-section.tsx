import { container, glassCard } from "@/app/libs/const";
import { Quote } from "lucide-react";
import Heading from "./heading";

export default function TestimonialSection() {
  return (
    <section className="border-t border-white/[0.08] py-10 sm:py-20">
      <div className={container}>
        <Heading
          eyebrow="Testimonials"
          title="Trusted to deliver with ownership."
        />

        <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 [&_small]:text-[14px] [&_small]:text-zinc-500">
          <article
            className={`${glassCard} group relative isolate overflow-hidden rounded-xl p-[34px] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.10)]`}
          >
            <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 animate-[glitchShift_0.4s_steps(2,end)_infinite] bg-[linear-gradient(90deg,transparent,rgba(239,68,68,0.08),transparent)] mix-blend-screen" />
            </div>

            <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_4px,rgba(255,255,255,0.025)_5px,transparent_6px)]" />
            </div>

            <div className="pointer-events-none absolute -top-1/2 left-0 z-0 h-1/2 w-full animate-[scanLine_6s_linear_infinite] bg-[linear-gradient(to_bottom,transparent,rgba(239,68,68,0.05),transparent)]" />

            <div className="relative z-10">
              <div className="relative inline-flex">
                <Quote
                  size={24}
                  className="text-red-500 transition-transform duration-300 group-hover:scale-110"
                />

                <Quote
                  size={24}
                  className="pointer-events-none absolute left-0 top-0 translate-x-px -translate-y-px text-red-500 opacity-0 transition-opacity duration-200 group-hover:opacity-50"
                />

                <Quote
                  size={24}
                  className="pointer-events-none absolute left-0 top-0 -translate-x-px translate-y-px text-cyan-400 opacity-0 transition-opacity duration-200 group-hover:opacity-50"
                />
              </div>

              <blockquote className="mt-7 mb-[34px] text-xl leading-[1.55] tracking-[-0.025em]">
                “John consistently delivers high-quality solutions and
                approaches problems with ownership and professionalism.”
              </blockquote>

              <div className="flex items-center gap-[13px]">
                <span className="grid size-10.5 place-items-center rounded-full border border-red-500/25 bg-red-500/8 font-mono text-[14px] font-semibold text-red-200">
                  TL
                </span>

                <p className="m-0 grid gap-[5px]">
                  <strong className="text-[13px]">Technical Lead</strong>
                  <small>Professional reference · Software delivery</small>
                </p>
              </div>
            </div>
          </article>

          <article
            className={`${glassCard} group relative isolate overflow-hidden rounded-xl p-[34px] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.10)]`}
          >
            <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 animate-[glitchShift_0.4s_steps(2,end)_infinite] bg-[linear-gradient(90deg,transparent,rgba(239,68,68,0.08),transparent)] mix-blend-screen" />
            </div>

            <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_4px,rgba(255,255,255,0.025)_5px,transparent_6px)]" />
            </div>

            <div className="pointer-events-none absolute -top-1/2 left-0 z-0 h-1/2 w-full animate-[scanLine_6s_linear_infinite] bg-[linear-gradient(to_bottom,transparent,rgba(239,68,68,0.05),transparent)]" />

            <div className="relative z-10">
              <div className="relative inline-flex">
                <Quote
                  size={24}
                  className="text-red-500 transition-transform duration-300 group-hover:scale-110"
                />

                <Quote
                  size={24}
                  className="pointer-events-none absolute left-0 top-0 translate-x-px -translate-y-px text-red-500 opacity-0 transition-opacity duration-200 group-hover:opacity-50"
                />

                <Quote
                  size={24}
                  className="pointer-events-none absolute left-0 top-0 -translate-x-px translate-y-px text-cyan-400 opacity-0 transition-opacity duration-200 group-hover:opacity-50"
                />
              </div>

              <blockquote className="mt-7 mb-[34px] text-xl leading-[1.55] tracking-[-0.025em]">
                “He translates complex business needs into maintainable systems
                and keeps the team aligned through delivery.”
              </blockquote>

              <div className="flex items-center gap-[13px]">
                <span className="grid size-10.5 place-items-center rounded-full border border-red-500/25 bg-red-500/8 font-mono text-[14px] font-semibold text-red-200">
                  PM
                </span>

                <p className="m-0 grid gap-[5px]">
                  <strong className="text-[13px]">Product Manager</strong>
                  <small>Professional reference · Product team</small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
