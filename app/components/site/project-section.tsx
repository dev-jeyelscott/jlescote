"use client";

import { useState } from "react";
import { container, glassCard, tagList } from "@/app/libs/const";
import Heading from "./heading";
import { AnimatedGroup } from "@/app/reveal";
import { projects } from "@/app/libs/data";
import { ArrowUpRight, Check, GitFork } from "lucide-react";
import ProjectVisual from "./project-visual";
import Image, { StaticImageData } from "next/image";

export default function ProjectSection() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null,
  );

  return (
    <section
      className="bg-[radial-gradient(circle_at_center,rgba(var(--theme-accent-rgb),0.08),transparent_70%)] py-10 sm:py-20"
      id="projects"
    >
      <div className={container}>
        <Heading
          eyebrow="Selected work"
          title="Products built to solve real business problems."
          copy="Case studies that combine product thinking, system design, and hands-on implementation."
        />

        <AnimatedGroup
          kind="projects"
          className="grid grid-cols-2 gap-6 max-lg:grid-cols-1"
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className={`${glassCard} group relative isolate overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_0_35px_rgba(var(--theme-accent-rgb),0.12)] max-lg:mx-auto max-lg:max-w-[760px]`}
            >
              {/* Glitch overlay */}
              <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 animate-[glitchShift_0.35s_steps(2,end)_infinite] bg-[linear-gradient(90deg,transparent,rgba(var(--theme-accent-rgb),0.11),transparent)] mix-blend-screen" />
              </div>

              {/* Scan lines */}
              <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0px,transparent_3px,rgba(255,255,255,0.028)_4px,transparent_5px)]" />
              </div>

              {/* Moving scanner */}
              <div className="pointer-events-none absolute -top-1/2 left-0 z-0 h-1/2 w-full animate-[scanLine_5s_linear_infinite] bg-[linear-gradient(to_bottom,transparent,rgba(var(--theme-accent-rgb),0.07),transparent)]" />

              <div className="relative z-10">
                <div className="relative z-10">
                  {project.image ? (
                    <button
                      type="button"
                      onClick={() => setSelectedImage(project.image!)}
                      className="relative block h-[260px] w-full overflow-hidden border-b border-white/[0.08] bg-black/40 max-sm:h-[210px]"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={project.number === "01"}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,rgba(0,0,0,0.72))]" />

                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                        <span className="zoom-pill rounded-full px-4 py-2 text-sm backdrop-blur-md">
                          Click to enlarge
                        </span>
                      </div>
                    </button>
                  ) : (
                    <ProjectVisual
                      title={project.title}
                      visual={project.visual}
                    />
                  )}

                  <div className="p-8 max-sm:px-5 max-sm:py-6">
                    {/* keep the rest of your existing content here */}
                  </div>
                </div>

                <div className="p-8 max-sm:px-5 max-sm:py-6">
                  <div className="flex justify-between font-mono text-[13px] uppercase tracking-[0.1em] text-zinc-500 [&>span:first-child]:text-red-500">
                    <span>{project.number}</span>
                    <span>{project.kind}</span>
                  </div>

                  <h3 className="mt-[17px] glitch-title mb-2.5 text-3xl tracking-[-0.045em]">
                    {project.title}
                  </h3>

                  <p className="mt-0 mb-6 min-h-[46px] text-sm leading-[1.65] text-zinc-300">
                    {project.summary}
                  </p>

                  <div className="mb-[23px] grid grid-cols-2 gap-5 border-y border-white/[0.08] py-5.5 max-sm:grid-cols-1">
                    <div>
                      <h4 className="mt-0 mb-3 font-mono text-[13px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                        Problem
                      </h4>
                      <p className="m-0 text-xs leading-[1.65] text-zinc-500 data-[theme=light]:text-zinc-800">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="mt-0 mb-3 font-mono text-[13px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                        Solution
                      </h4>
                      <p className="m-0 text-xs leading-[1.65] text-zinc-500 data-[theme=light]:text-zinc-800">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <h4 className="mt-0 mb-3 font-mono text-[13px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                    Technologies
                  </h4>

                  <div className={`${tagList} mb-6`}>
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <h4 className="mt-0 mb-3 font-mono text-[13px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                    Key features
                  </h4>

                  <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0 max-sm:grid-cols-1 [&>li]:flex [&>li]:items-center [&>li]:gap-1.5 [&>li]:text-xs [&>li]:text-zinc-500 data-[theme=light]:text-zinc-800 [&_svg]:text-red-500">
                    {project.features.map((item) => (
                      <li key={item}>
                        <Check size={13} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-5 border-t border-white/[0.08] pt-5 [&>a]:flex [&>a]:items-center [&>a]:gap-1.5 [&>a]:text-xs [&>a]:text-zinc-300 [&>a:hover]:text-white">
                    <a href="mailto:jleward.escote17@gmail.com?subject=Project%20demo%20request">
                      Live Demo <ArrowUpRight size={14} />
                    </a>

                    <a
                      href="https://github.com/dev-jeyelscott"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <GitFork size={14} />
                    </a>

                    <a
                      href={`mailto:jleward.escote17@gmail.com?subject=${encodeURIComponent(
                        project.title,
                      )}%20case%20study`}
                    >
                      Case Study <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </AnimatedGroup>
        {selectedImage && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-3xl text-white"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>

              <Image
                src={selectedImage}
                alt="Project preview"
                width={1600}
                height={900}
                className="max-h-[90vh] w-auto rounded-xl object-contain shadow-2xl animate-in fade-in zoom-in duration-300 animate-[imageZoom_0.25s_ease]"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
