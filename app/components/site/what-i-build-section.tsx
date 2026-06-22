import { container, glassCard } from "@/app/libs/const";
import Heading from "./heading";
import { capabilities } from "@/app/libs/data";

export default function WhatIBuildSection() {
  return (
    <section className="py-22 sm:py-32">
      <div className={container}>
        <Heading
          eyebrow="What I build"
          title="Software close to the business."
          copy="Focused products that support customers, teams, and daily operations."
        />
        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {capabilities.map(([title, Icon, copy]) => (
            <article
              className={`${glassCard} rounded-[10px] p-7 [&>svg]:text-red-500`}
              key={title}
            >
              <Icon size={21} />
              <h3 className="mt-7.5 mb-[11px] text-lg tracking-[-0.03em]">
                {title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.7] text-zinc-400">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
