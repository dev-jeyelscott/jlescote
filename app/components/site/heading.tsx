import { eyebrowClass } from "@/app/libs/const";

export default function Heading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-11 grid grid-cols-1 gap-5 sm:mb-[68px] sm:grid-cols-[28%_1fr] sm:gap-0">
      <p className={eyebrowClass}>
        <span className="h-px w-5.5 bg-red-500" />
        {eyebrow}
      </p>
      <div>
        <h2 className="m-0 max-w-[760px] text-[clamp(36px,11vw,44px)] font-medium leading-[1.03] tracking-[-0.055em] sm:text-[clamp(38px,4.4vw,60px)]">
          {title}
        </h2>
        {copy && (
          <p className="mt-5.5 mb-0 max-w-[620px] text-[15px] leading-7 text-zinc-400">
            {copy}
          </p>
        )}
      </div>
    </div>
  );
}
