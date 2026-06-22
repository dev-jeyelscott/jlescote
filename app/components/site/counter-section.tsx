import { container } from "@/app/libs/const";
import { AnimatedGroup, Counter } from "@/app/reveal";

export default function CounterSection() {
  return (
    <section
      className="border-b border-white/[0.08] bg-[#050505]"
      aria-label="Career metrics"
    >
      <AnimatedGroup
        kind="stats"
        className={`${container} grid grid-cols-4 max-sm:grid-cols-2 [&>div]:flex [&>div]:min-h-35 [&>div]:flex-col [&>div]:justify-center [&>div]:border-r [&>div]:border-white/[0.08] [&>div]:p-7 [&>div:last-child]:border-r-0 max-sm:[&>div]:min-h-28 max-sm:[&>div]:p-5 max-sm:[&>div:nth-child(2)]:border-r-0 max-sm:[&>div:nth-child(-n+2)]:border-b`}
      >
        {[
          [6, "+", "Years Experience"],
          [20, "+", "Projects Delivered"],
          [5, "+", "Industries Served"],
          [100, "%", "Remote Collaboration"],
        ].map(([value, suffix, label]) => (
          <div key={label}>
            <strong className="mb-[9px] font-mono text-[34px] font-semibold tracking-[-0.05em] max-sm:text-[27px]">
              <Counter end={Number(value)} suffix={String(suffix)} />
            </strong>
            <span className="text-xs text-zinc-400">{label}</span>
          </div>
        ))}
      </AnimatedGroup>
    </section>
  );
}
