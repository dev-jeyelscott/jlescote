import Image, { type StaticImageData } from "next/image";

export default function ProjectVisual({
  title,
  visual,
  image,
}: {
  title: string;
  visual: string;
  image?: StaticImageData;
}) {
  if (image) {
    return (
      <div
        className="relative aspect-video overflow-hidden border-b border-white/ bg-zinc-950"
        aria-label={`${title} product preview`}
      >
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,rgba(0,0,0,0.65))]" />
      </div>
    );
  }

  return (
    <div
      className="aspect-video overflow-hidden border-b border-white/[0.08] bg-[radial-gradient(circle_at_80%_10%,rgba(var(--theme-accent-rgb),0.13),transparent_40%)] bg-zinc-950 px-[38px] pt-[34px] max-sm:px-4.5 max-sm:pt-5.5"
      aria-label={`${title} product preview`}
      role="img"
    >
      {/* keep your existing mock UI here */}
    </div>
  );
}
