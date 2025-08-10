"use client"

import { useState, useRef, useEffect } from "react"
import ButtonPrincipal from "./button"
import { Plus, Minus } from 'lucide-react'

export default function FAQSection() {
  const [openSection, setOpenSection] = useState<string>('pergunta1')
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

  const perguntas = [
    {
      id: 'pergunta1',
      pergunta: 'Como funciona a análise?',
      resposta: 'São encontros semanais, sempre no mesmo dia e horário, que ficarão reservados só pra você. Um espaço seguro, sigiloso e sem julgamentos, onde você pode falar livremente sobre o que sente, pensa ou vive — mesmo que ainda não saiba bem como colocar em palavras. Aos poucos, vamos entendendo juntas a sua história, os seus jeitos de lidar com o mundo, e abrir espaço para que algo novo possa surgir.'
    },
    {
      id: 'pergunta2',
      pergunta: 'E a primeira sessão?',
      resposta: 'É um momento de escuta e acolhimento, para você contar um pouco da sua história até aqui. Também é quando te explico como funciona o processo de análise comigo, a forma como trabalho e respondo às dúvidas que você tiver.'
    },
    {
      id: 'pergunta3',
      pergunta: 'Preciso estar em crise/sofrimento para começar?',
      resposta: 'Não. A análise também é um espaço para quem deseja entender suas escolhas, relações, repetições e desejos — mesmo sem uma crise ou luto evidente.'
    },
    {
      id: 'pergunta4',
      pergunta: 'Atende presencial e online?',
      resposta: 'Sim. Atendo online por vídeo chamada — inclusive brasileiros em diferentes fusos horários. O sigilo, cuidado e presença são os mesmos do atendimento presencial. Presencialmente, atendo em consultório particular na região Centro-Sul de Belo Horizonte (MG).'
    },
    {
      id: 'pergunta5',
      pergunta: 'Moro fora do Brasil. Posso fazer?',
      resposta: 'Sim! Atendo especialmente brasileiros que vivem no exterior, com escuta sensível aos atravessamentos da migração.'
    },
    {
      id: 'pergunta6',
      pergunta: 'Qual a frequência das sessões?',
      resposta: 'Em geral, uma vez por semana — o que ajuda a manter o vínculo e o andamento do processo. Se necessário, podemos avaliar juntos a necessidade de mais sessões.'
    },
    {
      id: 'pergunta7',
      pergunta: 'Qual o valor?',
      resposta: 'Conversamos sobre valores no primeiro contato. Combinaremos também as formas de pagamento (Pix, transferências internacionais e outras possibilidades).'
    },
    {
      id: 'pergunta8',
      pergunta: 'Quanto tempo dura a análise?',
      resposta: 'A duração da sessão é de até 50min. Em relação a duração do processo não há um tempo fixo. O mais importante é o desejo de sustentar esse processo.'
    },
    {
      id: 'pergunta9',
      pergunta: 'Fazer análise e fazer terapia é a mesma coisa?',
      resposta: 'Terapia é um nome mais amplo, que reúne diferentes formas de cuidar da saúde mental. A psicanálise é uma delas — com um jeito próprio de escutar, leva em conta o inconsciente, a história de cada um e aquilo que, às vezes, nem a gente sabe bem como explicar ou nomear.'
    }
  ]

  return (
    <section className="w-full py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* FAQ Section */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Título - sempre visível */}
            <div className="lg:col-span-4">
              <h2 
                className="text-3xl lg:text-4xl font-bold leading-tight text-[#796E63]">
                Ficou alguma dúvida?
              </h2>
            </div>

            {/* Perguntas - com animação baseada no scroll */}
            <div className="lg:col-span-8" ref={sectionRef}>
              <div className="space-y-4">
                {perguntas.map((pergunta, index) => (
                  <div 
                    key={pergunta.id}
                    className={`bg-[#fff] rounded-lg shadow-sm border border-gray-200 transition-all duration-1000 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <button
                      onClick={() => toggleSection(pergunta.id)}
                      className="w-full px-6 py-4 cursor-pointer text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg"
                    >
                      <h3 className="text-lg font-semibold pr-4 text-[#393939]" >
                        {pergunta.pergunta}
                      </h3>
                      {openSection === pergunta.id ? (
                        <Minus className="w-5 h-5 flex-shrink-0 text-[#98805E]"  />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0 text-[#98805E]"  />
                      )}
                    </button>
                    {openSection === pergunta.id && (
                      <div className="px-6 pb-4 animate-fade-in-up">
                        <p className="text-base leading-relaxed text-[#6B5B47]" >
                          {pergunta.resposta}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
