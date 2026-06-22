import {
  container,
  eyebrowClass,
  primaryButton,
  secondaryButton,
} from "@/app/libs/const";
import { ArrowDown, GitFork, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      className="border-t border-white/[0.08] bg-[radial-gradient(circle,rgba(var(--theme-accent-rgb),0.15),transparent_60%)] py-37.5 text-center max-sm:py-25"
      id="contact"
    >
      <div className={`${container} max-w-[830px]`}>
        <p className={`${eyebrowClass} justify-center`}>
          <span className="h-px w-5.5 bg-red-500" />
          Start a conversation
        </p>
        <h2 className="mt-7 mb-4.5 text-[clamp(46px,6vw,76px)] leading-[1.02] tracking-[-0.06em] max-sm:text-[44px]">
          <span
            className="glitch-title"
            data-text="Let's build software that matters."
          >
            Let&apos;s build software that matters.
          </span>
        </h2>
        <p className="mx-auto max-w-[600px] leading-[1.7] text-zinc-500 data-[theme=light]:text-zinc-800">
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
  );
}
