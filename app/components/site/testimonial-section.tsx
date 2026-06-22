import { container, glassCard } from "@/app/libs/const";
import { Quote } from "lucide-react";
import Heading from "./heading";

export default function TestimonialSection() {
  return (
    <section className="border-t border-white/[0.08] py-22 sm:py-32">
      <div className={container}>
        <Heading
          eyebrow="Testimonials"
          title="Trusted to deliver with ownership."
        />
        <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 [&_small]:text-[11px] [&_small]:text-zinc-500">
          <article
            className={`${glassCard} rounded-xl p-[34px] [&>svg]:text-red-500`}
          >
            <Quote size={24} />
            <blockquote className="mt-7 mb-[34px] text-xl leading-[1.55] tracking-[-0.025em]">
              “John consistently delivers high-quality solutions and approaches
              problems with ownership and professionalism.”
            </blockquote>
            <div className="flex items-center gap-[13px]">
              <span className="grid size-10.5 place-items-center rounded-full border border-red-500/25 bg-red-500/8 font-mono text-[11px] font-semibold text-red-200">
                TL
              </span>
              <p className="m-0 grid gap-[5px]">
                <strong className="text-[13px]">Technical Lead</strong>
                <small>Professional reference · Software delivery</small>
              </p>
            </div>
          </article>
          <article
            className={`${glassCard} rounded-xl p-[34px] [&>svg]:text-red-500`}
          >
            <Quote size={24} />
            <blockquote className="mt-7 mb-[34px] text-xl leading-[1.55] tracking-[-0.025em]">
              “He translates complex business needs into maintainable systems
              and keeps the team aligned through delivery.”
            </blockquote>
            <div className="flex items-center gap-[13px]">
              <span className="grid size-10.5 place-items-center rounded-full border border-red-500/25 bg-red-500/8 font-mono text-[11px] font-semibold text-red-200">
                PM
              </span>
              <p className="m-0 grid gap-[5px]">
                <strong className="text-[13px]">Product Manager</strong>
                <small>Professional reference · Product team</small>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
