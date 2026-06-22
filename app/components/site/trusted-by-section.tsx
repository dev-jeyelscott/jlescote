import { container } from "@/app/libs/const";
import { companies } from "@/app/libs/data";
import { AnimatedGroup } from "@/app/reveal";
import Image from "next/image";

export default function TrustedBySection() {
  return (
    <section className="border-b border-white/[0.08] py-[54px] pb-18 max-sm:pb-13">
      <div className={container}>
        <p className="mt-0 mb-7 text-center font-mono text-[13px] uppercase tracking-[0.14em] text-zinc-500">
          Trusted by companies and organizations including
        </p>
        <AnimatedGroup
          kind="projects"
          className="grid grid-cols-8 border-y border-white/[0.08] max-lg:grid-cols-4 max-sm:grid-cols-2"
        >
          {companies.map(({ name, logo }) => (
            <div
              className="grid min-h-26 place-items-center border-r border-white/[0.08] px-[15px] py-5 last:border-r-0 max-lg:border-b"
              key={name}
            >
              <Image
                className="h-[46px] w-[110px] max-w-full object-contain grayscale opacity-60 transition-[filter,opacity,transform] duration-250 hover:scale-105 hover:grayscale-0 hover:opacity-100"
                src={logo}
                alt={`${name} logo`}
              />
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}
