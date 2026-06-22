export default function ProjectVisual({
  title,
  visual,
}: {
  title: string;
  visual: string;
}) {
  return (
    <div
      className="aspect-video overflow-hidden border-b border-white/[0.08] bg-[radial-gradient(circle_at_80%_10%,rgba(var(--theme-accent-rgb),0.13),transparent_40%)] bg-zinc-950 px-[38px] pt-[34px] max-sm:px-4.5 max-sm:pt-5.5"
      aria-label={`${title} product preview`}
      role="img"
    >
      <div className="flex h-8 items-center gap-1.5 rounded-t-md border border-white/[0.08] bg-[#171719] px-2.5 [&>i]:size-[7px] [&>i]:rounded-full [&>i]:bg-red-500 [&>i:nth-child(2)]:bg-amber-500 [&>i:nth-child(3)]:bg-green-500">
        <i />
        <i />
        <i />
        <span className="ml-2 font-mono text-[8px] text-zinc-600">
          app.leward.dev
        </span>
      </div>
      <div className="grid h-[calc(100%-32px)] grid-cols-[42px_1fr] border-x border-white/[0.08] bg-[#0d0d0f]">
        <aside className="flex flex-col items-center gap-[13px] border-r border-white/[0.08] pt-3 [&>i]:h-[3px] [&>i]:w-[13px] [&>i]:bg-zinc-800">
          <b className="grid size-5.5 place-items-center rounded bg-red-500 text-[7px] text-white">
            JLE
          </b>
          <i />
          <i />
          <i />
          <i />
        </aside>
        <div className="p-[13px]">
          <div className="flex justify-between [&>span]:h-1.5 [&>span]:w-[34%] [&>span]:bg-zinc-800 [&>span:last-child]:w-[17%]">
            <span />
            <span />
          </div>
          <div className="mt-[13px] grid grid-cols-3 gap-[7px] [&>i]:h-[38px] [&>i]:border [&>i]:border-white/[0.08] [&>i]:bg-[linear-gradient(145deg,rgba(var(--theme-accent-rgb),0.08),transparent)]">
            <i />
            <i />
            <i />
          </div>
          <div
            className={`mt-[9px] flex h-[72px] items-end gap-[7px] border border-white/[0.08] p-[11px]
  [&>span]:h-[35%]
  [&>span]:flex-1
  [&>span]:bg-zinc-800
  [&>span:nth-child(2)]:h-[65%]
  [&>span:nth-child(3)]:h-[48%]
  [&>span:nth-child(3)]:bg-[var(--graph-accent-secondary)]
  [&>span:nth-child(4)]:h-[82%]
  [&>span:nth-child(5)]:h-[60%]
  ${
    visual === "community"
      ? "[&>span:nth-child(4)]:bg-[var(--graph-accent)]"
      : ""
  }
  ${
    visual === "workflow"
      ? "[&>span:nth-child(2)]:bg-[var(--graph-accent)]"
      : ""
  }
  ${
    visual === "generator"
      ? "[&>span:nth-child(5)]:bg-[var(--graph-accent)]"
      : ""
  }`}
          >
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="mt-[9px] grid gap-[5px] [&>i]:h-[5px] [&>i]:bg-[#202024] [&>i:nth-child(2)]:w-[78%] [&>i:nth-child(3)]:w-[58%]">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}
