import { container, glassCard } from "@/app/libs/const";
import { experience } from "@/app/libs/data";
import { AnimatedGroup } from "@/app/reveal";
import { Check } from "lucide-react";
import Heading from "./heading";

export default function ExperienceSection() {
  return (
    <section className="py-22 sm:py-32" id="experience">
      <div className={container}>
        <Heading
          eyebrow="Experience"
          title="Built through ownership."
          copy="A track record of designing systems, leading delivery, and solving the unglamorous problems that keep products working."
        />
        <AnimatedGroup
          kind="timeline"
          className="relative grid gap-4.5 before:absolute before:top-10.5 before:bottom-10.5 before:left-[33px] before:w-px before:bg-linear-to-b before:from-red-500 before:to-red-500/10 max-sm:before:left-6"
        >
          {experience.map((job) => (
            <article
              className={`${glassCard} relative grid grid-cols-[70px_280px_1fr] gap-7 rounded-xl p-8 max-lg:grid-cols-[70px_1fr] max-sm:grid-cols-[48px_1fr] max-sm:gap-3.5 max-sm:px-4.5 max-sm:py-6`}
              key={`${job.company}-${job.period}`}
            >
              <div className="z-1 grid size-10.5 place-items-center rounded-[9px] border border-red-500/30 bg-[#140909] font-mono text-[11px] font-bold text-red-200 max-sm:size-9">
                {job.mark}
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-500">
                  {job.period}
                </span>
                <h3 className="mt-3 mb-[7px] text-[21px] tracking-[-0.03em]">
                  {job.role}
                </h3>
                <p className="m-0 text-[13px] text-zinc-300">{job.company}</p>
              </div>
              <div className="max-lg:col-start-2 max-sm:col-span-full max-sm:col-start-1 max-sm:pl-12.5">
                <p className="mt-0 mb-5 max-w-[650px] text-sm leading-[1.7] text-zinc-400">
                  {job.summary}
                </p>
                <h4 className="mt-0 mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                  Key contributions
                </h4>
                <div className="flex flex-wrap gap-x-5 gap-y-[9px]">
                  {job.contributions.map((item) => (
                    <span
                      className="flex items-center gap-1.5 text-xs text-zinc-300 [&>svg]:text-red-500"
                      key={item}
                    >
                      <Check size={14} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}
