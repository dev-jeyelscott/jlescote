const container =
  "mx-auto w-[calc(100%-32px)] max-w-[1200px] sm:w-[calc(100%-48px)]";
const eyebrowClass =
  "m-0 flex items-center gap-3 font-mono text-[14px] font-medium uppercase leading-[1.4] tracking-[0.13em] text-zinc-300";
const glassCard =
  "flow-border border border-white/[0.08] bg-[#0a0a0b]/98 backdrop-blur-xl transition-[transform,border-color,background-color,box-shadow] duration-300 sm:hover:-translate-y-1 sm:hover:border-red-500/25 sm:hover:bg-[#0d0d0f] sm:hover:shadow-[0_24px_55px_rgba(0,0,0,0.25)]";
const button =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] border px-4.5 text-[13px] font-semibold transition-[transform,background-color,border-color] duration-200 active:scale-[0.98] sm:min-h-11.5 sm:hover:scale-[1.03]";
const primaryButton = `${button} border-red-500 bg-red-500 text-white shadow-[0_12px_30px_rgba(var(--theme-accent-rgb),0.15)] hover:bg-red-600`;
const secondaryButton = `${button} border-white/[0.08] bg-white/[0.025] hover:border-red-500/35 hover:bg-white/[0.06]`;
const tagList =
  "flex flex-wrap gap-[7px] [&>span]:rounded-full [&>span]:border [&>span]:border-white/[0.08] [&>span]:bg-white/[0.025] [&>span]:px-[9px] [&>span]:py-[7px] [&>span]:font-mono [&>span]:text-[13px] [&>span]:text-zinc-500";

export {
  container,
  eyebrowClass,
  glassCard,
  button,
  primaryButton,
  secondaryButton,
  tagList,
};
