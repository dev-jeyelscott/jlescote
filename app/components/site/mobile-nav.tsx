export default function MobileNav() {
  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-4 rounded-xl border border-white/10 bg-[#09090b]/92 p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_28px_rgba(var(--theme-accent-rgb),0.08)] backdrop-blur-xl sm:hidden"
    >
      {[
        ["Work", "projects"],
        ["Career", "experience"],
        ["Skills", "skills"],
        ["Contact", "contact"],
      ].map(([label, id]) => (
        <a
          className="flex min-h-11 items-center justify-center rounded-lg font-mono text-[13px] uppercase tracking-[0.08em] text-zinc-500 data-[theme=light]:text-zinc-800 transition-colors active:bg-red-500/12 active:text-white"
          href={`#${id}`}
          key={id}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
