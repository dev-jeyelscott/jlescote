import { container, glassCard, tagList } from "@/app/libs/const";
import { skills } from "@/app/libs/data";
import Heading from "./heading";

export default function SkillSection() {
  return (
    <section
      className="flow-line flow-line--slow border-y border-white/[0.08] bg-[#080808] py-22 sm:py-32"
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
              className={`${glassCard} rounded-[10px] p-7 [&>svg]:text-red-500`}
              key={title}
            >
              <Icon size={22} />
              <h3 className="mt-7.5 mb-[11px] text-lg tracking-[-0.03em]">
                {title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.7] text-zinc-400">
                {copy}
              </p>
              <div className={`${tagList} mt-6 mb-0`}>
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
