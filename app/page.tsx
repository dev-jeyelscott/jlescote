import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  GitFork,
  BriefcaseBusiness,
  Mail,
  ServerCog,
  Wrench,
} from "lucide-react";
import { connection } from "next/server";
import { Reveal } from "./reveal";

const navItems = ["About", "Experience", "Skills", "Projects", "Contact"];

const experience = [
  {
    role: "Senior Software Developer",
    company: "React Solutions PTY Ltd.",
    period: "Feb 2024 — Present",
    summary:
      "Building and evolving business-critical platforms, from Laravel services and APIs to CRM architecture and commerce integrations.",
    work: [
      "Laravel backend development",
      "API & integration design",
      "CRM module architecture",
      "E-commerce enhancements",
    ],
  },
  {
    role: "Software Development Lead — Laravel",
    company: "Halcyon Digital Media Design Inc.",
    period: "May 2022 — Feb 2024",
    summary:
      "Led delivery across Laravel projects, aligning technical direction, code quality, and frontend integration with real business needs.",
    work: [
      "Engineering leadership",
      "REST API development",
      "System architecture",
      "Code review & mentoring",
    ],
  },
];

const companies = [
  {
    mark: "SS",
    name: "Suy Sing",
    industry: "E-Commerce",
    description:
      "Developed and maintained large-scale e-commerce systems, APIs, and payment integrations.",
    tags: [
      "RESTful APIs",
      "E-Commerce",
      "Payment Gateway",
      "Online Ordering",
      "Order Management",
      "System Integration",
      "Laravel",
      "React",
    ],
  },
  {
    mark: "VC",
    name: "Viva Communications",
    industry: "Retail Technology",
    description:
      "Built ordering systems, inventory management solutions, and administrative dashboards.",
    tags: [
      "Online Ordering",
      "Inventory Management",
      "Admin Dashboard",
      "Reporting",
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    mark: "MP",
    name: "McDonald's Philippines",
    industry: "CRM Platform",
    description:
      "Designed and implemented CRM modules and business workflow automation.",
    tags: [
      "CRM",
      "Workflow Automation",
      "Authentication",
      "Authorization",
      "Business Processes",
      "API Development",
    ],
  },
  {
    mark: "PP",
    name: "Pika Pika",
    industry: "Logistics & Transportation",
    description:
      "Built fleet management and operational tools for vehicle assignments and maintenance.",
    tags: [
      "Fleet Management",
      "Scheduling",
      "Maintenance Management",
      "Notifications",
      "Reporting",
      "Role-Based Access",
    ],
  },
  {
    mark: "ND",
    name: "Nexen Distribution Philippines Inc.",
    industry: "SaaS Platform",
    description:
      "Worked on scalable business applications and backend services.",
    tags: [
      "SaaS",
      "RESTful APIs",
      "Docker",
      "CI/CD",
      "Performance Optimization",
      "Database Design",
    ],
  },
  {
    mark: "AI",
    name: "Asia IP Informed Analysis",
    industry: "SaaS Platform",
    description:
      "Worked on scalable business applications and backend services.",
    tags: [
      "SaaS",
      "RESTful APIs",
      "Docker",
      "CI/CD",
      "Performance Optimization",
      "Database Design",
    ],
  },
  {
    mark: "UP",
    name: "Unilab Philippines",
    industry: "SaaS Platform",
    description:
      "Worked on scalable business applications and backend services.",
    tags: [
      "SaaS",
      "RESTful APIs",
      "Docker",
      "CI/CD",
      "Performance Optimization",
      "Database Design",
    ],
  },
  {
    mark: "MN",
    name: "Monde Nissin",
    industry: "SaaS Platform",
    description:
      "Worked on scalable business applications and backend services.",
    tags: [
      "SaaS",
      "RESTful APIs",
      "Docker",
      "CI/CD",
      "Performance Optimization",
      "Database Design",
    ],
  },
];

const skills = [
  {
    label: "Backend",
    icon: ServerCog,
    items: ["PHP", "Laravel", "REST APIs", "Node.js"],
  },
  {
    label: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Data",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "Drizzle ORM", "Data modeling"],
  },
  {
    label: "Tools",
    icon: Wrench,
    items: ["Git", "Docker", "Linux", "Postman"],
  },
  {
    label: "Architecture",
    icon: Braces,
    items: [
      "API design",
      "Authentication",
      "Business workflows",
      "System integration",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Boys of ADV",
    kind: "Community platform",
    description:
      "A full community operating system for Honda ADV riders, bringing membership, events, builds, attendance, and communications into one platform.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Clerk", "PWA"],
    visual: "community",
  },
  {
    number: "02",
    title: "Taskflow",
    kind: "Workflow product",
    description:
      "A focused task and workflow platform designed to keep teams aligned through clear boards, practical automation, and visible progress.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Kanban"],
    visual: "workflow",
  },
  {
    number: "03",
    title: "FlowForge",
    kind: "Developer platform",
    description:
      "A low-code workflow and API builder that turns business processes into visual, executable systems without hiding the underlying engineering.",
    stack: ["React", "Workflow engine", "API generation", "PostgreSQL"],
    visual: "forge",
  },
  {
    number: "04",
    title: "Boilerplate Generator",
    kind: "Developer tool",
    description:
      "A production-minded project generator that assembles dependable foundations so teams can start with architecture, not setup chores.",
    stack: ["Next.js", "CLI", "Code generation", "Automation"],
    visual: "terminal",
  },
];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <div>
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </div>
  );
}

function ProjectVisual({ type, title }: { type: string; title: string }) {
  return (
    <div
      className={`project-visual visual-${type}`}
      aria-label={`${title} product preview`}
      role="img"
    >
      <div className="window-bar">
        <i />
        <i />
        <i />
        <span>{title.toLowerCase().replaceAll(" ", "-")}.app</span>
      </div>
      <div className="visual-content">
        <div className="visual-sidebar">
          <b>JL</b>
          <span />
          <span />
          <span />
        </div>
        <div className="visual-main">
          <div className="visual-top">
            <span />
            <span />
          </div>
          <div className="visual-grid">
            <i />
            <i />
            <i />
          </div>
          <div className="visual-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function Home() {
  await connection();

  const today = new Date();
  const careerStart = new Date(Date.UTC(2018, 4, 1));
  let yearsOfExperience = today.getUTCFullYear() - careerStart.getUTCFullYear();

  if (
    today.getUTCMonth() < careerStart.getUTCMonth() ||
    (today.getUTCMonth() === careerStart.getUTCMonth() &&
      today.getUTCDate() < careerStart.getUTCDate())
  ) {
    yearsOfExperience -= 1;
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-shell">
          <a
            href="#top"
            className="brand"
            aria-label="John Leward Escote, home"
          >
            <span>JLE</span>
            <i />
          </a>
          <nav aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
          <a className="availability" href="mailto:hello@leward.dev">
            <i />
            Available for select projects
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-inner">
            <Reveal className="hero-copy">
              <p className="hero-kicker">
                <span>Software Developer</span>
                <i />
                Full Stack Engineer
              </p>
              <h1>
                Software engineer building <em>serious products</em> for
                real-world problems.
              </h1>
              <p className="hero-intro">
                I&apos;m John Leward Escote, a backend-first full-stack engineer
                specializing in business systems, APIs, CRM platforms, and
                reliable web applications.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View selected work <ArrowDown size={17} />
                </a>
                <a
                  className="button button-secondary"
                  href="/john-leward-escote-resume.pdf"
                  download
                >
                  Download Resume
                </a>
              </div>
            </Reveal>
            <Reveal className="hero-aside" delay={0.15}>
              <div className="code-card">
                <div className="code-head">
                  <div className="traffic-lights" aria-hidden="true">
                    <i className="close" />
                    <i className="minimize" />
                    <i className="maximize" />
                  </div>
                  <span>leward@portfolio — zsh</span>
                  <span className="terminal-spacer" aria-hidden="true" />
                </div>
                <pre aria-label="Terminal showing software engineer profile">
                  <code>
                    <span className="prompt">leward@portfolio</span>{" "}
                    <span className="path">~</span>{" "}
                    <span className="command">% whoami</span>
                    <br />
                    <span className="output output-strong">John Leward Escote</span>
                    <br />
                    <br />
                    <span className="prompt">leward@portfolio</span>{" "}
                    <span className="path">~</span>{" "}
                    <span className="command">% cat focus.txt</span>
                    <br />
                    <span className="output">backend systems</span>
                    <br />
                    <span className="output">product engineering</span>
                    <br />
                    <span className="output">clean architecture</span>
                    <br />
                    <br />
                    <span className="prompt">leward@portfolio</span>{" "}
                    <span className="path">~</span>{" "}
                    <span className="command">% experience --years</span>
                    <br />
                    <span className="output">
                      {yearsOfExperience}+ years · always learning
                    </span>
                    <br />
                    <br />
                    <span className="prompt">leward@portfolio</span>{" "}
                    <span className="path">~</span>{" "}
                    <span className="command">% </span>
                    <span className="cursor" aria-hidden="true" />
                  </code>
                </pre>
              </div>
              <div className="social-row">
                <a
                  href="https://github.com/dev-jeyelscott"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitFork size={18} /> GitHub <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/john-leward-escote/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BriefcaseBusiness size={18} /> LinkedIn{" "}
                  <ArrowUpRight size={14} />
                </a>
                <a href="mailto:hello@leward.dev">
                  <Mail size={18} /> Email
                </a>
              </div>
            </Reveal>
          </div>
          <div className="container stat-strip">
            <div>
              <strong>{yearsOfExperience}+</strong>
              <span>
                Years of
                <br />
                experience
              </span>
            </div>
            <div>
              <strong>20+</strong>
              <span>
                Production
                <br />
                systems shipped
              </span>
            </div>
            <div>
              <strong>Backend</strong>
              <span>
                First, with full-stack
                <br />
                capability
              </span>
            </div>
            <div>
              <strong>Product</strong>
              <span>
                Minded engineering
                <br />
                approach
              </span>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="About"
                title="Engineering with context, not just code."
              />
            </Reveal>
            <div className="about-grid">
              <Reveal className="about-lead">
                <p>
                  I&apos;m a software developer who cares about the whole
                  product: the business rule behind a feature, the person using
                  it, and the team maintaining it six months later.
                </p>
              </Reveal>
              <Reveal className="about-copy" delay={0.08}>
                <p>
                  My work is grounded in backend development, where correctness
                  and clear boundaries matter. I bring that same discipline to
                  full-stack products—building intuitive interfaces on
                  dependable systems.
                </p>
                <p>
                  I enjoy turning ambiguous requirements into practical
                  software, improving architecture without over-engineering, and
                  helping teams ship with confidence.
                </p>
              </Reveal>
              <Reveal className="about-note" delay={0.14}>
                <span>Beyond the keyboard</span>
                <p>
                  When I&apos;m not building products, you&apos;ll usually find
                  me around motorcycles, on the road, or exploring content
                  creation.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section companies-section" id="companies">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Trusted by"
                title="Companies I've Worked With"
                copy="Over the years, I've contributed to projects across multiple industries, building systems that support business operations, customer experiences, and internal workflows."
              />
            </Reveal>
            <div className="companies-grid">
              {companies.map((company, index) => (
                <Reveal
                  className="company-card"
                  key={company.name}
                  delay={index * 0.1}
                >
                  <div className="company-card-head">
                    <div className="company-mark" aria-hidden="true">
                      {company.mark}
                    </div>
                    <span>{company.industry}</span>
                  </div>
                  <h3>{company.name}</h3>
                  <p>{company.description}</p>
                  <div
                    className="company-tags"
                    aria-label={`${company.name} technologies and domains`}
                  >
                    {company.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="experience">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Experience"
                title="Built through ownership."
                copy="A track record of designing systems, leading delivery, and solving the unglamorous problems that keep products working."
              />
            </Reveal>
            <div className="timeline">
              {experience.map((job, index) => (
                <Reveal
                  className="timeline-item"
                  key={job.company}
                  delay={index * 0.08}
                >
                  <div className="timeline-index">0{index + 1}</div>
                  <div className="timeline-role">
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                    <span>{job.period}</span>
                  </div>
                  <div className="timeline-detail">
                    <p>{job.summary}</p>
                    <div>
                      {job.work.map((item) => (
                        <span key={item}>
                          <Check size={14} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Capabilities"
                title="The tools change. The fundamentals stay."
                copy="A pragmatic stack shaped by production work across APIs, business logic, data, and modern interfaces."
              />
            </Reveal>
            <div className="skills-grid">
              {skills.map(({ label, icon: Icon, items }, index) => (
                <Reveal className="skill-card" key={label} delay={index * 0.04}>
                  <Icon size={21} />
                  <h3>{label}</h3>
                  <div>
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="projects">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Selected work"
                title="Products built to be used."
                copy="A selection of platforms and tools where thoughtful systems design meets practical product delivery."
              />
            </Reveal>
            <div className="projects-list">
              {projects.map((project, index) => (
                <Reveal
                  className="project-card"
                  key={project.title}
                  delay={(index % 2) * 0.05}
                >
                  <ProjectVisual type={project.visual} title={project.title} />
                  <div className="project-info">
                    <div className="project-meta">
                      <span>{project.number}</span>
                      <p>{project.kind}</p>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="stack-list">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a
                        href="https://github.com/dev-jeyelscott"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitFork size={16} />
                        Source <ArrowUpRight size={14} />
                      </a>
                      <a href="mailto:hello@leward.dev?subject=Project%20demo%20request">
                        Request demo <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="philosophy">
          <div className="container philosophy-grid">
            <Reveal>
              <p className="eyebrow">
                <span />
                How I build
              </p>
              <blockquote>
                “Make it work.
                <br />
                Make it correct.
                <br />
                Make it maintainable.
                <br />
                <em>Then make it fast.</em>”
              </blockquote>
            </Reveal>
            <Reveal className="principles" delay={0.1}>
              <div>
                <span>01</span>
                <p>Build solutions that solve real problems.</p>
              </div>
              <div>
                <span>02</span>
                <p>Keep architecture as simple as it can be.</p>
              </div>
              <div>
                <span>03</span>
                <p>Stay curious. Always keep learning.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container">
            <Reveal className="contact-inner">
              <p className="eyebrow">
                <span />
                Start a conversation
              </p>
              <h2>Interested in working together or discussing a project?</h2>
              <p>
                I&apos;m interested in thoughtful products, practical
                engineering challenges, and teams that value doing the work
                well.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="mailto:hello@leward.dev"
                >
                  Email me <Mail size={17} />
                </a>
                <a
                  className="button button-secondary"
                  href="https://www.linkedin.com/in/john-leward-escote/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight size={16} />
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/dev-jeyelscott"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <GitFork size={16} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <a href="#top" className="brand">
            <span>JLE</span>
            <i />
          </a>
          <p>
            © {new Date().getFullYear()} John Leward Escote. Built with care.
          </p>
          <div>
            <a href="https://github.com/dev-jeyelscott">GitHub</a>
            <a href="https://www.linkedin.com/in/john-leward-escote/">
              LinkedIn
            </a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
