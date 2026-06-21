import Image, { type StaticImageData } from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Boxes,
  BriefcaseBusiness,
  Check,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  GitFork,
  Globe2,
  Mail,
  Network,
  Quote,
  ServerCog,
  ShoppingCart,
  Sparkles,
  TestTube2,
  Users,
  Wrench,
} from "lucide-react";
import { AnimatedGroup, Counter } from "./reveal";
import asiaIpLogo from "../public/images/logo/asiaip-logo.png";
import mcdoLogo from "../public/images/logo/mcdo-logo.png";
import mondeLogo from "../public/images/logo/monde-logo.png";
import nexenLogo from "../public/images/logo/nexen-logo.webp";
import pikaLogo from "../public/images/logo/pikapika-logo.png";
import suySingLogo from "../public/images/logo/suysing-logo.webp";
import unilabLogo from "../public/images/logo/unilab-logo.webp";
import vivaLogo from "../public/images/logo/viva-logo.webp";

const companies: { name: string; logo: StaticImageData }[] = [
  { name: "Suy Sing", logo: suySingLogo },
  { name: "Viva Communications", logo: vivaLogo },
  { name: "McDonald's Philippines", logo: mcdoLogo },
  { name: "Pika Pika", logo: pikaLogo },
  { name: "Nexen Distribution", logo: nexenLogo },
  { name: "Asia IP", logo: asiaIpLogo },
  { name: "Unilab", logo: unilabLogo },
  { name: "Monde Nissin", logo: mondeLogo },
];

const experience = [
  {
    period: "2024 — Present",
    role: "Senior Software Engineer",
    company: "React Solutions PTY Ltd.",
    mark: "RS",
    summary:
      "Leading backend and full-stack delivery for business-critical CRM, commerce, and integration platforms.",
    contributions: [
      "Led CRM architecture",
      "Built scalable APIs",
      "Improved e-commerce workflows",
      "Mentored developers",
    ],
  },
  {
    period: "2022 — 2024",
    role: "Software Development Lead",
    company: "Halcyon Digital Media Design Inc.",
    mark: "HD",
    summary:
      "Owned architecture, technical delivery, code quality, and stakeholder alignment across business systems.",
    contributions: [
      "Owned technical delivery",
      "Led architecture decisions",
      "Conducted code reviews",
      "Planned Agile delivery",
    ],
  },
  {
    period: "2018 — 2022",
    role: "Software Developer",
    company: "Halcyon Digital Media Design Inc.",
    mark: "HD",
    summary:
      "Built Laravel applications and integrations that translated operational needs into dependable product features.",
    contributions: [
      "Delivered Laravel systems",
      "Integrated third-party services",
      "Designed relational data",
      "Supported production apps",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "CRM Call Module",
    kind: "Business system",
    summary:
      "A unified communication workspace for customer activity, ownership, and follow-up workflows.",
    problem:
      "Customer conversations were fragmented across manual processes, limiting visibility and slowing response times.",
    solution:
      "Designed a centralized CRM module with clear ownership, customer context, permissions, and extensible workflows.",
    stack: ["Laravel", "React", "PostgreSQL", "REST APIs"],
    features: [
      "Authentication",
      "Role permissions",
      "Workflow automation",
      "Notifications",
    ],
    visual: "crm",
  },
  {
    number: "02",
    title: "Boys of ADV",
    kind: "Community platform",
    summary:
      "A mobile-first operating platform for a growing motorcycle community.",
    problem:
      "Membership, events, attendance, and communications needed one reliable home for members and administrators.",
    solution:
      "Built a PWA with member administration, event workflows, partnerships, content, and push notifications.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle"],
    features: ["Member portal", "Events", "PWA", "Notifications"],
    visual: "community",
  },
  {
    number: "03",
    title: "FlowForge",
    kind: "Developer platform",
    summary:
      "A visual workflow and API builder with an explicit, observable execution model.",
    problem:
      "Teams needed to automate business processes without giving up control, observability, or maintainability.",
    solution:
      "Created a low-code builder backed by reusable integrations, typed expressions, and deterministic runtime behavior.",
    stack: ["React", "TypeScript", "Workflow Engine", "PostgreSQL"],
    features: ["Visual builder", "REST APIs", "Credentials", "Execution logs"],
    visual: "workflow",
  },
  {
    number: "04",
    title: "Boilerplate Generator",
    kind: "Developer tool",
    summary:
      "An opinionated foundation generator for production-minded web products.",
    problem:
      "Product teams repeatedly spent valuable time rebuilding authentication, architecture, and deployment foundations.",
    solution:
      "Built a modular generator that assembles coherent applications from selected business capabilities.",
    stack: ["Next.js", "TypeScript", "CLI", "Automation"],
    features: [
      "Code generation",
      "Auth modules",
      "Validation",
      "Deployment setup",
    ],
    visual: "generator",
  },
];

const capabilities = [
  [
    "Business Systems",
    BriefcaseBusiness,
    "Operational software that removes friction and makes work visible.",
  ],
  [
    "CRM Platforms",
    Users,
    "Customer workflows, ownership, reporting, and integrations.",
  ],
  [
    "E-Commerce Solutions",
    ShoppingCart,
    "Reliable catalog, checkout, payment, and fulfillment systems.",
  ],
  [
    "REST APIs",
    Network,
    "Clear contracts and dependable services built to evolve.",
  ],
  [
    "AI Integrations",
    Bot,
    "Practical AI features connected to real product workflows.",
  ],
  [
    "Developer Tools",
    Wrench,
    "Tools that improve delivery speed, quality, and consistency.",
  ],
  [
    "Community Platforms",
    Globe2,
    "Accessible products that help communities organize and grow.",
  ],
  [
    "Internal Tools",
    Boxes,
    "Focused interfaces for complex business operations.",
  ],
] as const;

const skills = [
  [
    "Backend",
    ServerCog,
    "Reliable application logic and service design.",
    ["Laravel", "PHP", "REST APIs", "Eloquent"],
  ],
  [
    "Frontend",
    Code2,
    "Fast, accessible interfaces for real workflows.",
    ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  ],
  [
    "Databases",
    Database,
    "Data models built for integrity and useful queries.",
    ["PostgreSQL", "MySQL", "Drizzle ORM", "Optimization"],
  ],
  [
    "DevOps",
    CloudCog,
    "Repeatable delivery from local development to production.",
    ["Docker", "CI/CD", "Vercel", "Linux"],
  ],
  [
    "AI & Automation",
    Sparkles,
    "AI-assisted systems and automated product workflows.",
    ["OpenAI", "Codex", "Prompt Design", "Workflow Automation"],
  ],
  [
    "Architecture",
    GitBranch,
    "Simple boundaries for systems that need to last.",
    ["System Design", "Clean Architecture", "API Design", "Integrations"],
  ],
  [
    "Testing",
    TestTube2,
    "Confidence through focused, maintainable verification.",
    ["Unit Testing", "Integration Tests", "E2E", "Code Review"],
  ],
] as const;

const container =
  "mx-auto w-[min(1200px,calc(100%-48px))] max-sm:w-[min(1200px,calc(100%-32px))]";
const eyebrowClass =
  "m-0 flex items-center gap-3 font-mono text-[11px] font-medium uppercase leading-[1.4] tracking-[0.13em] text-zinc-300";
const glassCard =
  "border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-red-500/35 hover:bg-white/[0.04] hover:shadow-[0_24px_55px_rgba(0,0,0,0.25)]";
const button =
  "inline-flex min-h-11.5 items-center justify-center gap-2.5 rounded-[7px] border px-4.5 text-[13px] font-semibold transition-[transform,background-color,border-color] duration-200 hover:scale-[1.03]";
const primaryButton = `${button} border-red-500 bg-red-500 text-white shadow-[0_12px_30px_rgba(239,68,68,0.15)] hover:bg-red-600`;
const secondaryButton = `${button} border-white/[0.08] bg-white/[0.025] hover:border-red-500/35 hover:bg-white/[0.06]`;
const tagList =
  "flex flex-wrap gap-[7px] [&>span]:rounded-full [&>span]:border [&>span]:border-white/[0.08] [&>span]:bg-white/[0.025] [&>span]:px-[9px] [&>span]:py-[7px] [&>span]:font-mono [&>span]:text-[10px] [&>span]:text-zinc-300";

function Heading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-[68px] grid grid-cols-[28%_1fr] max-sm:mb-12 max-sm:grid-cols-1 max-sm:gap-6.5">
      <p className={eyebrowClass}>
        <span className="h-px w-5.5 bg-red-500" />
        {eyebrow}
      </p>
      <div>
        <h2 className="m-0 max-w-[760px] text-[clamp(38px,4.4vw,60px)] font-medium leading-[1.03] tracking-[-0.055em] max-sm:text-[39px]">
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

function ProjectVisual({ title, visual }: { title: string; visual: string }) {
  return (
    <div
      className="aspect-video overflow-hidden border-b border-white/[0.08] bg-[radial-gradient(circle_at_80%_10%,rgba(239,68,68,0.13),transparent_40%)] bg-zinc-950 px-[38px] pt-[34px] max-sm:px-4.5 max-sm:pt-5.5"
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
          <div className="mt-[13px] grid grid-cols-3 gap-[7px] [&>i]:h-[38px] [&>i]:border [&>i]:border-white/[0.08] [&>i]:bg-[linear-gradient(145deg,rgba(239,68,68,0.08),transparent)]">
            <i />
            <i />
            <i />
          </div>
          <div
            className={`mt-[9px] flex h-[72px] items-end gap-[7px] border border-white/[0.08] p-[11px] [&>span]:h-[35%] [&>span]:flex-1 [&>span]:bg-zinc-800 [&>span:nth-child(2)]:h-[65%] [&>span:nth-child(3)]:h-[48%] [&>span:nth-child(3)]:bg-red-900 [&>span:nth-child(4)]:h-[82%] [&>span:nth-child(5)]:h-[60%] ${visual === "community" ? "[&>span:nth-child(4)]:bg-red-800" : ""} ${visual === "workflow" ? "[&>span:nth-child(2)]:bg-red-800" : ""} ${visual === "generator" ? "[&>span:nth-child(5)]:bg-red-800" : ""}`}
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

export default function Home() {
  return (
    <>
      <a
        className="fixed top-3 left-3 z-100 -translate-y-[150%] rounded-md bg-white px-3.5 py-2.5 text-black focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <header className="fixed top-0 z-50 w-full border-b border-white/[0.08] bg-black/72 backdrop-blur-[18px]">
        <div
          className={`${container} flex h-[68px] items-center justify-between`}
        >
          <a
            href="#top"
            className="inline-flex items-center gap-[7px] font-bold tracking-[-0.05em] [&>span]:text-[17px] [&>i]:size-1.5 [&>i]:rounded-full [&>i]:bg-red-500 [&>i]:shadow-[0_0_12px_rgba(239,68,68,0.7)]"
            aria-label="John Leward Escote, home"
          >
            <span>JLE</span>
            <i />
          </a>
          <nav
            className="flex gap-8 max-sm:hidden [&_a]:text-[13px] [&_a]:text-zinc-400 [&_a]:transition-colors [&_a:hover]:text-white"
            aria-label="Primary navigation"
          >
            {[
              ["Experience", "experience"],
              ["Projects", "projects"],
              ["Skills", "skills"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <a
            className="flex items-center gap-2 text-[13px] text-zinc-400 transition-colors hover:text-white max-sm:text-[0px] [&>i]:size-[7px] [&>i]:rounded-full [&>i]:bg-green-500 [&>i]:shadow-[0_0_0_4px_rgba(34,197,94,0.1)]"
            href="mailto:jleward.escote17@gmail.com"
          >
            <i />
            Open to opportunities
          </a>
        </div>
      </header>

      <main id="main">
        <section
          className="relative min-h-svh overflow-hidden border-b border-white/[0.08] bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.15),transparent_50%)] pt-[68px]"
          id="top"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[72px_72px] opacity-20 [mask-image:linear-gradient(to_bottom,#000,transparent_82%)]"
            aria-hidden="true"
          />
          <div
            className={`${container} relative grid min-h-[calc(100svh-68px)] grid-cols-[minmax(0,1.13fr)_minmax(430px,0.87fr)] items-center gap-[7vw] py-24 max-lg:grid-cols-1 max-lg:gap-14 max-lg:py-30 max-lg:pb-18 max-sm:py-24 max-sm:pb-[62px]`}
          >
            <AnimatedGroup kind="hero">
              <p
                className={`${eyebrowClass} normal-case tracking-[0.13em] [&>i]:size-[3px] [&>i]:rounded-full [&>i]:bg-zinc-500`}
              >
                <span>Senior Laravel &amp; Full-Stack Engineer</span>
                <i />
                Philippines · Remote
              </p>
              <h1 className="my-7 max-w-[760px] text-[clamp(48px,5.5vw,76px)] font-semibold leading-[0.99] tracking-[-0.062em] max-sm:text-[clamp(43px,13vw,62px)] [&>em]:font-normal [&>em]:not-italic [&>em]:text-zinc-400">
                Building scalable business systems and{" "}
                <em>dependable software products.</em>
              </h1>
              <p className="m-0 max-w-[650px] text-[17px] leading-[1.75] text-zinc-400 max-sm:text-[15px]">
                Senior Laravel &amp; Full-Stack Engineer with 8+ years of
                experience building APIs, CRM platforms, e-commerce systems, and
                developer tools.
              </p>
              <div className="mt-[34px] flex flex-wrap gap-[11px]">
                <a className={primaryButton} href="#projects">
                  View Projects <ArrowDown size={16} />
                </a>
                <a
                  className={secondaryButton}
                  href="/john-leward-escote-resume.pdf"
                  download
                >
                  Download Resume
                </a>
                <a className={secondaryButton} href="#contact">
                  Contact Me
                </a>
              </div>
            </AnimatedGroup>
            <aside
              className="overflow-hidden rounded-[14px] border border-white/13 bg-[#070709]/93 shadow-[0_35px_100px_rgba(0,0,0,0.55),0_0_70px_rgba(239,68,68,0.06)] backdrop-blur-[18px] max-lg:max-w-[650px]"
              aria-label="Developer profile code preview"
            >
              <div className="relative flex min-h-10.5 items-center justify-center border-b border-white/[0.08] bg-linear-to-b from-zinc-800 to-[#1c1c1f]">
                <div className="absolute left-[15px] flex gap-2 [&>i]:size-[11px] [&>i]:rounded-full [&>i]:bg-[#ff5f57] [&>i:nth-child(2)]:bg-[#febc2e] [&>i:nth-child(3)]:bg-[#28c840]">
                  <i />
                  <i />
                  <i />
                </div>
                <span className="font-mono text-[11px] text-zinc-400">
                  developer.ts
                </span>
              </div>
              <div className="grid min-h-[360px] grid-cols-[44px_1fr] bg-[radial-gradient(circle_at_100%_0,rgba(239,68,68,0.08),transparent_40%)] py-5.5 max-sm:min-h-[330px]">
                <div className="select-none border-r border-white/5 pr-3.5 text-right font-mono text-xs leading-[1.85] text-zinc-700 max-sm:text-[10px]">
                  1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9
                  <br />
                  10
                  <br />
                  11
                </div>
                <pre className="m-0 overflow-auto px-5 font-mono text-xs leading-[1.85] text-zinc-200 max-sm:px-[13px] max-sm:text-[10px]">
                  <code>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span> = {`{`}
                    <br /> name:{" "}
                    <span className="text-green-300">
                      &quot;John Leward Escote&quot;
                    </span>
                    ,<br /> experience:{" "}
                    <span className="text-green-300">&quot;8+ years&quot;</span>
                    ,
                    <br /> stack: [<br />{" "}
                    <span className="text-green-300">&quot;Laravel&quot;</span>,
                    <br />{" "}
                    <span className="text-green-300">&quot;React&quot;</span>
                    ,<br />{" "}
                    <span className="text-green-300">&quot;Next.js&quot;</span>,
                    <br />{" "}
                    <span className="text-green-300">
                      &quot;PostgreSQL&quot;
                    </span>
                    <br /> ],
                    <br /> passion:{" "}
                    <span className="text-green-300">
                      &quot;Building dependable software&quot;
                    </span>
                    <br />
                    {`}`};
                  </code>
                </pre>
              </div>
              <div className="flex h-7 items-center justify-between bg-red-700 px-3 font-mono text-[10px] text-zinc-300">
                <span>main*</span>
                <span>TypeScript</span>
              </div>
            </aside>
          </div>
        </section>

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

        <section className="border-b border-white/[0.08] py-[54px] pb-18 max-sm:pb-13">
          <div className={container}>
            <p className="mt-0 mb-7 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
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

        <section className="py-32 max-sm:py-22" id="experience">
          <div className={container}>
            <Heading
              eyebrow="Experience"
              title="Built through ownership."
              copy="A track record of designing systems, leading delivery, and solving the unglamorous problems that keep products working."
            />
            <AnimatedGroup
              kind="timeline"
              className="relative grid gap-4.5 before:absolute before:top-10.5 before:bottom-10.5 before:left-[33px] before:w-px before:bg-linear-to-b before:from-red-500 before:to-red-500/10 max-sm:before:left-6"
            >
              {experience.map((job) => (
                <article
                  className={`${glassCard} relative grid grid-cols-[70px_280px_1fr] gap-7 rounded-xl p-8 max-lg:grid-cols-[70px_1fr] max-sm:grid-cols-[48px_1fr] max-sm:gap-3.5 max-sm:px-4.5 max-sm:py-6`}
                  key={`${job.company}-${job.period}`}
                >
                  <div className="z-1 grid size-10.5 place-items-center rounded-[9px] border border-red-500/30 bg-[#140909] font-mono text-[11px] font-bold text-red-200 max-sm:size-9">
                    {job.mark}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-500">
                      {job.period}
                    </span>
                    <h3 className="mt-3 mb-[7px] text-[21px] tracking-[-0.03em]">
                      {job.role}
                    </h3>
                    <p className="m-0 text-[13px] text-zinc-300">
                      {job.company}
                    </p>
                  </div>
                  <div className="max-lg:col-start-2 max-sm:col-span-full max-sm:col-start-1 max-sm:pl-12.5">
                    <p className="mt-0 mb-5 max-w-[650px] text-sm leading-[1.7] text-zinc-400">
                      {job.summary}
                    </p>
                    <h4 className="mt-0 mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                      Key contributions
                    </h4>
                    <div className="flex flex-wrap gap-x-5 gap-y-[9px]">
                      {job.contributions.map((item) => (
                        <span
                          className="flex items-center gap-1.5 text-xs text-zinc-300 [&>svg]:text-red-500"
                          key={item}
                        >
                          <Check size={14} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </AnimatedGroup>
          </div>
        </section>

        <section
          className="bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08),transparent_70%)] py-32 max-sm:py-22"
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
                  <ProjectVisual
                    title={project.title}
                    visual={project.visual}
                  />
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

        <section className="py-32 max-sm:py-22">
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

        <section
          className="border-y border-white/[0.08] bg-[#080808] py-32 max-sm:py-22"
          id="skills"
        >
          <div className={container}>
            <Heading
              eyebrow="Skills"
              title="The tools change. The fundamentals stay."
              copy="A pragmatic stack shaped by production work across APIs, business logic, data, delivery, and modern interfaces."
            />
            <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1 [&>article:last-child]:col-start-2 max-lg:[&>article:last-child]:col-start-auto">
              {skills.map(([title, Icon, copy, items]) => (
                <article
                  className={`${glassCard} rounded-[10px] p-7 [&>svg]:text-red-500`}
                  key={title}
                >
                  <Icon size={22} />
                  <h3 className="mt-7.5 mb-[11px] text-lg tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="m-0 text-[13px] leading-[1.7] text-zinc-400">
                    {copy}
                  </p>
                  <div className={`${tagList} mt-6 mb-0`}>
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.08] py-32 max-sm:py-22">
          <div className={container}>
            <Heading
              eyebrow="Testimonials"
              title="Trusted to deliver with ownership."
            />
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 [&_small]:text-[11px] [&_small]:text-zinc-500">
              <article
                className={`${glassCard} rounded-xl p-[34px] [&>svg]:text-red-500`}
              >
                <Quote size={24} />
                <blockquote className="mt-7 mb-[34px] text-xl leading-[1.55] tracking-[-0.025em]">
                  “John consistently delivers high-quality solutions and
                  approaches problems with ownership and professionalism.”
                </blockquote>
                <div className="flex items-center gap-[13px]">
                  <span className="grid size-10.5 place-items-center rounded-full border border-red-500/25 bg-red-500/8 font-mono text-[11px] font-semibold text-red-200">
                    TL
                  </span>
                  <p className="m-0 grid gap-[5px]">
                    <strong className="text-[13px]">Technical Lead</strong>
                    <small>Professional reference · Software delivery</small>
                  </p>
                </div>
              </article>
              <article
                className={`${glassCard} rounded-xl p-[34px] [&>svg]:text-red-500`}
              >
                <Quote size={24} />
                <blockquote className="mt-7 mb-[34px] text-xl leading-[1.55] tracking-[-0.025em]">
                  “He translates complex business needs into maintainable
                  systems and keeps the team aligned through delivery.”
                </blockquote>
                <div className="flex items-center gap-[13px]">
                  <span className="grid size-10.5 place-items-center rounded-full border border-red-500/25 bg-red-500/8 font-mono text-[11px] font-semibold text-red-200">
                    PM
                  </span>
                  <p className="m-0 grid gap-[5px]">
                    <strong className="text-[13px]">Product Manager</strong>
                    <small>Professional reference · Product team</small>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className="border-t border-white/[0.08] bg-[radial-gradient(circle,rgba(239,68,68,0.15),transparent_60%)] py-37.5 text-center max-sm:py-25"
          id="contact"
        >
          <div className={`${container} max-w-[830px]`}>
            <p className={`${eyebrowClass} justify-center`}>
              <span className="h-px w-5.5 bg-red-500" />
              Start a conversation
            </p>
            <h2 className="mt-7 mb-4.5 text-[clamp(46px,6vw,76px)] leading-[1.02] tracking-[-0.06em] max-sm:text-[44px]">
              Let&apos;s build software that matters.
            </h2>
            <p className="mx-auto max-w-[600px] leading-[1.7] text-zinc-400">
              I&apos;m interested in thoughtful products, practical engineering
              challenges, and teams that value dependable delivery.
            </p>
            <div className="mt-[34px] flex flex-wrap justify-center gap-[11px]">
              <a
                className={`${primaryButton} max-sm:w-full`}
                href="/john-leward-escote-resume.pdf"
                download
              >
                Download Resume <ArrowDown size={16} />
              </a>
              <a
                className={`${secondaryButton} max-sm:w-full`}
                href="mailto:jleward.escote17@gmail.com"
              >
                Contact Me <Mail size={16} />
              </a>
              <a
                className={`${secondaryButton} max-sm:w-full`}
                href="https://github.com/dev-jeyelscott"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub <GitFork size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.08]">
        <div
          className={`${container} flex min-h-31.5 items-center justify-between gap-7.5 max-sm:flex-col max-sm:items-start max-sm:py-7.5`}
        >
          <div className="flex items-center gap-6 max-sm:grid">
            <a
              href="#top"
              className="inline-flex items-center gap-[7px] font-bold tracking-[-0.05em] [&>span]:text-[17px] [&>i]:size-1.5 [&>i]:rounded-full [&>i]:bg-red-500 [&>i]:shadow-[0_0_12px_rgba(239,68,68,0.7)]"
            >
              <span>JLE</span>
              <i />
            </a>
            <p className="m-0 text-[11px] text-zinc-500">
              Building dependable software products with practical engineering.
            </p>
          </div>
          <div className="flex gap-5.5 max-sm:flex-wrap [&>a]:text-[11px] [&>a]:text-zinc-500 [&>a:hover]:text-white">
            <a href="mailto:jleward.escote17@gmail.com">Email</a>
            <a
              href="https://github.com/dev-jeyelscott"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/john-leward-escote/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="/john-leward-escote-resume.pdf" download>
              Resume
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
