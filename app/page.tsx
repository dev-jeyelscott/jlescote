import ContactSection from "./components/site/contact-section";
import CounterSection from "./components/site/counter-section";
import ExperienceSection from "./components/site/experiece-section";
import Footer from "./components/site/footer";
import Header from "./components/site/header";
import HeroSection from "./components/site/hero-section";
import MobileNav from "./components/site/mobile-nav";
import ProjectSection from "./components/site/project-section";
import SkillSection from "./components/site/skill-section";
// import TestimonialSection from "./components/site/testimonial-section";
import TrustedBySection from "./components/site/trusted-by-section";
import WhatIBuildSection from "./components/site/what-i-build-section";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main">
        <HeroSection />

        <CounterSection />

        <TrustedBySection />

        <ExperienceSection />

        <ProjectSection />

        <WhatIBuildSection />

        <SkillSection />

        {/* <TestimonialSection /> */}

        <ContactSection />
      </main>

      <MobileNav />

      <Footer />
    </>
  );
}
