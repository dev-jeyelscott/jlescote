import { container, glassCard } from "@/app/libs/const";
import { Quote } from "lucide-react";
import Heading from "./heading";
import { testimonials } from "@/app/libs/data";

export default function TestimonialSection() {
  return (
    <section className="border-t border-white/[0.08] py-10 sm:py-20">
      <div className={container}>
        <Heading
          eyebrow="Testimonials"
          title="Trusted to deliver with ownership."
        />

        <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
          {testimonials.map((item) => (
            <article
              key={item.quote}
              className={`${glassCard} group relative isolate overflow-hidden rounded-xl p-[34px] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(var(--theme-accent-rgb),0.10)]`}
            >
              {/* effects */}

              <div className="relative z-10">
                <Quote
                  size={24}
                  className="text-red-500 transition-transform duration-300 group-hover:scale-110"
                />

                <blockquote className="mt-7 mb-[34px] text-xl leading-[1.55] tracking-[-0.025em]">
                  “{item.quote}”
                </blockquote>

                <div className="flex items-center gap-[13px]">
                  <span className="grid size-10.5 place-items-center rounded-full border border-red-500/25 bg-red-500/8 font-mono text-[14px] font-semibold text-red-200">
                    {item.initials}
                  </span>

                  <p className="m-0 grid gap-[5px]">
                    <strong className="text-[13px]">{item.name}</strong>
                    <small>{item.subtitle}</small>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
