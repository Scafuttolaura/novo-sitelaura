"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp } from 'lucide-react'
import ButtonPrincipal from "./button"

export default function ProjectsSection() {
  const [openSection, setOpenSection] = useState<string>('livro')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section)
  }

  // Intersection Observer para detectar quando a seção entra na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-50px'
      }
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

  const projetos = [
    {
      id: 'livro',
      titulo: 'Do livro "Não Me Livro"',
      subtitulo: 'Capítulo 9: Frustração no processo migratório',
      descricao: 'Antologia: As Faces da Frustração Participei como coautora nesta antologia que reúne olhares diversos sobre a frustração, em uma proposta acessível, sensível e profunda. O livro tem como objetivo levar informação e reflexão ao leitor de forma simples e tocante. No meu capítulo, abordo os atravessamentos da frustração na experiência migratória, viabilizando, através do texto, acolhimento e compreensão tanto para quem migra quanto para familiares e amigos que permaneceram no Brasil.'
    },
    {
      id: 'sjmr',
      titulo: 'SJMR – Serviço Jesuíta a Migrantes e Refugiados',
      subtitulo: '',
      descricao: 'Atuo como voluntária nesta organização da sociedade civil, com sede em Belo Horizonte, oferecendo escuta psicossocial a migrantes e refugiados. Os acolhimentos são realizados em português e inglês, com uma escuta culturalmente sensível, ética e politicamente comprometida com os direitos de quem migra.'
    },
    {
      id: 'diretorio',
      titulo: 'Diretório Internacional de Profissionais Interculturais',
      subtitulo: '',
      descricao: 'Membro do diretório Psi Terapia no Exterior, que conecta profissionais das áreas da saúde e educação espalhados pelo mundo. Minha participação viabiliza formação contínua na temática intercultural e encaminhamentos mais assertivos e qualificados, sempre com um olhar culturalmente sensível, ampliando a rede de cuidado disponível aos meus pacientes em todo o mundo.'
    }
  ]

  return (
    <section className="relative w-full overflow-hidden">
      {/* Projects Section */}
      <div className="relative min-h-screen md:h-[90vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[#787878] flex items-center justify-center z-5">
          <div className="h-8 w-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
        <div className="absolute inset-0 bg-[url('/fotos/bg-mob.png')] md:bg-[url('/fotos/bg-normal.png')] 2xl:bg-[url('/fotos/bg-bigbig2.png')] z-10 bg-cover bg-center bg-no-repeat">
        </div>

        {/* Content Container */}
        <div ref={sectionRef} className="relative z-10 flex min-h-screen">
          {/* Desktop Layout */}
          <div className="hidden lg:flex max-w-[1400px] mx-auto w-full items-center">
            {/* Left Side - Title */}
            <div className="flex-1 px-12 xl:px-20">
              <div className="max-w-md">
                <h1 
                  className={`text-5xl text-[#393939] xl:text-6xl font-bold leading-tight transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  projetos
                  <br />
                  <span className="text-4xl xl:text-6xl">que faço parte</span>
                  <br />
                  <span className="text-[#393939]" >pelo</span>{" "}
                  <span className="px-3 py-1 rounded bg-[#98805E] text-[#ffffff]" >
                    mundo
                  </span>
                </h1>
              </div>
            </div>

            {/* Center - Spacer */}
            <div className="flex-shrink-0 w-20"></div>

            {/* Right Side - Projects */}
            <div className="flex-1 px-12 xl:px-20">
              <div className="max-w-lg space-y-6">
                {projetos.map((projeto, index) => (
                  <div 
                    key={projeto.id}
                    className={`transition-all duration-1000 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <button
                      onClick={() => toggleSection(projeto.id)}
                      className="flex items-center justify-between w-full text-left cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1 text-[#393939]" >
                          {projeto.titulo}
                        </h3>
                        {projeto.subtitulo && (
                          <p className="text-sm font-medium text-[#98805E]" >
                            {projeto.subtitulo}
                          </p>
                        )}
                      </div>
                            
                      <br/>
                      {openSection === projeto.id ? (
                        <ChevronUp className="w-6 h-6 ml-4 text-[#393939]"  />
                      ) : (
                        <ChevronDown className="w-6 h-6 ml-4 text-[#393939]" />
                      )}
                    </button>
                    {openSection === projeto.id && (
                      <div className="mt-3 animate-fade-in-up">
                        <p className="text-base leading-relaxed text-[#393939]" >
                          {projeto.descricao}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                <br/>
                <ButtonPrincipal text="Inicie sua travessia" />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col w-full min-h-screen">
            {/* Top - Image takes full width */}
            <div className="h-[50vh] w-full bg-[url('/fotos/projetos-mob.png')] bg-cover bg-center"></div>
            
            {/* Bottom - Content */}
            <div className="flex-1 px-6 py-8 bg-[#F5F5F5F2]" >
              {/* Title */}
              <div className="mb-8">
                <h1
                  className={`text-4xl text-[#393939] sm:text-5xl font-bold leading-tight text-center transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  projetos
                  <br />
                  que faço parte
                  <br />
                  <span className="text-[#393939]" >pelo</span>{" "}
                  <span className="px-2 py-1 rounded text-[#ffffff] bg-[#98805E]" >
                    mundo
                  </span>
                </h1>
              </div>

              {/* Projects */}
              <div className="w-full max-w-lg mx-auto space-y-4">
                {projetos.map((projeto, index) => (
                  <div 
                    key={projeto.id}
                    className={`transition-all duration-1000 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  >
                    <button
                      onClick={() => toggleSection(projeto.id)}
                      className="flex items-center justify-between w-full text-left cursor-pointer"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1 text-[#393939]" >
                          {projeto.titulo}
                        </h3>
                        {projeto.subtitulo && (
                          <p className="text-sm font-medium text-[#98805E]" >
                            {projeto.subtitulo}
                          </p>
                        )}
                      </div>
                      {openSection === projeto.id ? (
                        <ChevronUp className="w-5 h-5 ml-3 text-[#393939]"  />
                      ) : (
                        <ChevronDown className="w-5 h-5 ml-3 text-[#393939]"  />
                      )}
                    </button>
                    {openSection === projeto.id && (
                      <div className="mt-3 animate-fade-in-up">
                        <p className="text-sm leading-relaxed text-[#393939]" >
                          {projeto.descricao}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                <br/>
                <ButtonPrincipal  text="Inicie sua travessia"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
