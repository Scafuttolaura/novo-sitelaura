"use client"

import { useState, useRef, useEffect } from "react"
import { X } from 'lucide-react'
import ButtonPrincipal from "./button"

export default function DepoimentosSection() {
  const [showPopup, setShowPopup] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const depoimentosRef = useRef<HTMLElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Componente de bandeira SVG  
  const BandeiraSVG = ({ pais }: { pais: string }) => {
    const cores = {
      "Brasil": { cor1: "#009739", cor2: "#FEDD00", cor3: "#012169" },
      "Portugal": { cor1: "#046A38", cor2: "#DA020E", cor3: "#FFD500" },
      "EUA": { cor1: "#B22234", cor2: "#FFFFFF", cor3: "#3C3B6E" },
      "Canadá": { cor1: "#FF0000", cor2: "#FFFFFF", cor3: "#FF0000" }
    }
    
    const cor = cores[pais as keyof typeof cores] || { cor1: "#666", cor2: "#999", cor3: "#333" }
    
    return (
      <svg width="20" height="14" viewBox="0 0 20 14" className="rounded-sm">
        <rect width="20" height="14" fill={cor.cor1} />
        <rect width="20" height="7" fill={cor.cor2} />
        <rect width="7" height="14" fill={cor.cor3} />
      </svg>
    )
  }

  const depoimentos = [
    {
      pais: "Brasil",
      frase: "As sessões me dão trabalho, um trabalho importante.",
      cor: "#FFFFFF", // branco
      borda: true
    },
    {
      pais: "Portugal",
      frase: "Penso em coisas que sozinha jamais pensaria.",
      cor: "#4A4A4A", // escuro
      borda: false
    },
    {
      pais: "EUA",
      frase: "É engraçado, eu falo, você escuta e daí parece que alguma coisa muda.",
      cor: "#B8A082", // marrom
      borda: false
    },
    {
      pais: "Brasil",
      frase: "Eu tenho caminhado, é menos estranho quando escuto o que eu falo nas sessões.",
      cor: "#E8E8E8", // cinza claro
      borda: false
    },
    {
      pais: "Canadá",
      frase: "escutei de alguém que se eu queria mudar para algo mais profundo tinha que ser a psicanálise, era verdade.",
      cor: "#F5F1E8", // bege claro
      borda: false
    }
  ]

  const textoFinal = "A psicanálise está aí para todos e todas que tiverem desejo por essa profunda travessia."

  // Intersection Observer para popup  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowPopup(entry.isIntersecting)
      },
      {
        threshold: 0.3,
        rootMargin: '-100px'
      }
    )

    if (depoimentosRef.current) {
      observer.observe(depoimentosRef.current)
    }

    return () => {
      if (depoimentosRef.current) {
        observer.unobserve(depoimentosRef.current)
      }
    }
  }, [])

  // Intersection Observer para scroll reveal  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
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

  return (
    <>
      <div className="w-full py-8 bg-[#F5F5F5]" >
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
          {/* Seção: Depoimentos */}
          <section ref={depoimentosRef} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#B8A082] mb-2">
                O que meus pacientes dizem
              </h2>
              <span className="px-3 py-1 rounded bg-[#98805E] text-[#fff]">em uma frase:</span>
            </div>

            <div ref={sectionRef} className="columns-1 md:columns-2 gap-6 max-w-4xl mx-auto mb-8 space-y-6">
              {depoimentos.map((depoimento, index) => (
                <div
                  key={index}
                  className={`break-inside-avoid rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-1000 ease-out ${
                    depoimento.borda ? 'border-2 border-[#B8A082]' : ''
                  } ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    backgroundColor: depoimento.cor,
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <BandeiraSVG pais={depoimento.pais} />
                    <h4 className={`font-semibold ${
                      depoimento.cor === "#4A4A4A" ? "text-[#fff]" : "text-[#4A4A4A]"
                    }`}>
                      {depoimento.pais}
                    </h4>
                  </div>
                  <blockquote 
                    className={`italic text-sm leading-relaxed ${
                      depoimento.cor === "#4A4A4A" ? "text-[#fff]" : "text-[#6B5B47]"
                    }`}
                  >
                    "{depoimento.frase}"
                  </blockquote>
                </div>
              ))}
            </div>

            {/* Aviso no Mobile */}
            <div className="lg:hidden mb-6 px-4">
              <p className="text-xs text-[#8C5B2C] text-center leading-relaxed">
                As frases acima não foram retiradas de sessões. Foram escritas de forma livre e autorizadas por analisandos que toparam contribuir com este espaço.
              </p>
            </div>

            <div className="text-center">
              <ButtonPrincipal text="Agende seu atendimento" darkButton={true} />
            </div>
          </section>

          {/* Seção: Texto Final */}
          <section className="text-center py-10">
            <p className="text-lg md:text-xl font-bold max-w-3xl mx-auto leading-relaxed bg-gradient-to-r from-[#A7825F] to-[#3F3F3F] bg-clip-text text-transparent">
              {textoFinal}
            </p>
          </section>
        </div>
      </div>

      {/* Popup de Aviso - Apenas Desktop */}
      {showPopup && (
        <div className="hidden lg:block fixed bottom-24 right-4 z-50 max-w-sm animate-fade-in-up">
          <div className="bg-[#fff] rounded-lg shadow-lg border border-[#B8A082] p-4">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  As frases acima não foram retiradas de sessões. Foram escritas de forma livre e autorizadas por analisandos que toparam contribuir com este espaço.
                </p>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="flex-shrink-0 text-[#8C5B2C] cursor-pointer hover:text-[#4A4A4A] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
