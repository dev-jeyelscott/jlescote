import { container, glassCard, tagList } from "@/app/libs/const";
import Heading from "./heading";
import { AnimatedGroup } from "@/app/reveal";
import { projects } from "@/app/libs/data";
import { ArrowUpRight, Check, GitFork } from "lucide-react";
import ProjectVisual from "./project-visual";

export default function ProjectSection() {
  return (
    <section
      className="bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08),transparent_70%)] py-22 sm:py-32"
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
              className={`${glassCard} overflow-hidden rounded-xl max-lg:mx-auto max-lg:max-w-[760px]`}
              key={project.title}
            >
              <ProjectVisual title={project.title} visual={project.visual} />
              <div className="p-8 max-sm:px-5 max-sm:py-6">
                <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-500 [&>span:first-child]:text-red-500">
                  <span>{project.number}</span>
                  <span>{project.kind}</span>
                </div>
                <h3 className="mt-[17px] mb-2.5 text-3xl tracking-[-0.045em]">
                  {project.title}
                </h3>
                <p className="mt-0 mb-6 min-h-[46px] text-sm leading-[1.65] text-zinc-300">
                  {project.summary}
                </p>
                <div className="mb-[23px] grid grid-cols-2 gap-5 border-y border-white/[0.08] py-5.5 max-sm:grid-cols-1">
                  <div>
                    <h4 className="mt-0 mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                      Problem
                    </h4>
                    <p className="m-0 text-xs leading-[1.65] text-zinc-400">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="mt-0 mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                      Solution
                    </h4>
                    <p className="m-0 text-xs leading-[1.65] text-zinc-400">
                      {project.solution}
                    </p>
                  </div>
                </div>
                <h4 className="mt-0 mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                  Technologies
                </h4>
                <div className={`${tagList} mb-6`}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <h4 className="mt-0 mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                  Key features
                </h4>
                <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0 max-sm:grid-cols-1 [&>li]:flex [&>li]:items-center [&>li]:gap-1.5 [&>li]:text-xs [&>li]:text-zinc-400 [&_svg]:text-red-500">
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
                    href={`mailto:jleward.escote17@gmail.com?subject=${encodeURIComponent(project.title)}%20case%20study`}
                  >
                    Case Study <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}
