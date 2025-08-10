"use client"

import { useRef } from "react"
import Component1 from "./components/apsicanalise"
import FAQSection from "./components/faq-section"
import Footer from "./components/footer"
import HeroHeader from "./components/header"
import MigrationSection from "./components/migration-section"
import Navbar from "./components/navbar"
import PerfilComponent from "./components/perfil"
import ProjectsSection from "./components/projects-section"
import QuoteSection from "./components/quote-section"
import ServicesSection from "./components/services-section"
import TestimonialsSection from "./components/testimonials-section"
import WhatsAppButton from "./components/whatsappbutton"
import ServiceModality from "./components/service-modality"

export default function Home() {
  // Refs para as seções
  const component1Ref = useRef<HTMLDivElement>(null)
  const perfilRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  const refs = {
    component1Ref,
    perfilRef,
    servicesRef,
    testimonialsRef,
    projectsRef,
    faqRef
  }

  return (
    <div>
      <Navbar refs={refs} />
      <main>
        <HeroHeader />
        <div ref={component1Ref}>
          <Component1 />
        </div>
        <div ref={perfilRef}>
          <PerfilComponent />
        </div>
        <MigrationSection />
        <div ref={servicesRef}>
          <ServicesSection />
        </div>
        <ServiceModality />
        <div ref={testimonialsRef}>
          <TestimonialsSection />
        </div>
        <div ref={projectsRef}>
          <ProjectsSection />
        </div>
        <QuoteSection />
        <div ref={faqRef}>
          <FAQSection />
        </div>
        <WhatsAppButton />
        <Footer />
      </main>
    </div>
  )
}
