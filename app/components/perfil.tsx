"use client"
import { useEffect, useRef, useState } from "react"
import ButtonPrincipal from "./button"

export default function PerfilComponent() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#F5F5F5]">
      {/* Enhanced background with gradient and effects */}
      <div className="absolute top-[80px] sm:top-10 bottom-10 left-0 w-[95%] sm:w-[95%] md:w-[85%] bg-gradient-to-br from-[#B1917C] via-[#A08169] to-[#8F7056] rounded-tr-3xl rounded-br-3xl md:rounded-r-3xl ">
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 rounded-tr-3xl rounded-br-3xl md:rounded-r-3xl"></div>
        {/* Decorative elements */}
        <div className="absolute top-8 right-8 w-32 h-32 bg-[#fff]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-12 left-12 w-24 h-24 bg-[#fff]/3 rounded-full blur-lg"></div>
      </div>

      <div className="container relative mx-auto px-4 max-w-[1200px] py-8 sm:py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center">
          {/* Content - Order changes on mobile */}
          <div
            className={`order-2 md:order-1 z-10 pr-8 sm:pr-12 md:pr-8 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-forum md:text-5xl font-light mb-3 text-[#E0DCD8] tracking-wide">
              Laura Scafutto
            </h2>
            <h3 className="text-xl text-[#fff]/95 font-light mb-2 leading-relaxed">
              Psicóloga & Psicanalista | <span className="text-lg opacity-90">CRP 04/62810</span>
            </h3>
            <p className="text-base md:text-lg text-[#fff]/90 mb-6 font-light italic">
              On-line para brasileiros no exterior e presencial em Belo Horizonte (MG)
            </p>
            
            <div className="space-y-5 text-sm md:text-base text-[#fff]/95 leading-relaxed">
              <p className="text-base font-medium">
                Sou apaixonada por cultura, viagens e leitura.
              </p>
              <p className="leading-7">
                Além da <span className="font-medium">formação em Psicologia</span> (PUC Minas), sou pós-graduanda em <span className="font-medium">Psicanálise</span> pelo Instituto ESPE, 
                concluí os <span className="font-medium">Estudos Avançados em Liderança</span> pela Universidade de Stanford, na Califórnia e me 
                especializei em <span className="font-medium">Psicologia Intercultural</span> no Brasil.
              </p>
              <p className="leading-7">
                Hoje, <span className="font-medium">atendo</span> pelo viés da psicanálise <span className="font-medium">brasileiros(as)</span> que vivem <span className="font-medium">no exterior, migrantes internos e presencialmente</span> quem mora em  
                Belo Horizonte. Além disso, estou presente como psicóloga voluntária em projetos de acolhimento à população migrante do Brasil.
              </p>
              <p className="text-base font-medium leading-7">
                Minha prática nasce do encontro entre minhas vivências pessoais com a migração e estudos acadêmicos.
              </p>
              <div className="pt-8">
                <ButtonPrincipal darkButton={true} />
              </div>
            </div>
          </div>

          {/* Image - Order changes on mobile */}
          <div
            className={`order-1 md:order-2 relative z-10 transition-all duration-1000 ease-out delay-300 -mt-4 sm:mt-0 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              <img
                src="/fotos/lauraperfil.png"
                alt="Laura Scafutto - Psicanalista e Psicóloga"
                className="rounded-2xl object-cover w-full md:w-auto h-[350px] sm:h-[400px] md:h-[450px] shadow-xl"
              />
              <div className="absolute bottom-4 right-4 bg-[#fff] rounded-full p-4 shadow-xl border border-white/20">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-medium text-[#333333] leading-none">+4</div>
                  <div className="text-xs text-[#666666] whitespace-nowrap leading-tight mt-1">
                    países em
                    <br />
                    atendimento
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
