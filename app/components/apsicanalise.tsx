"use client"

import { useEffect, useRef, useState } from "react"
import ButtonPrincipal from "./button"

export default function Component1() {
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
    <section ref={sectionRef} className="w-full py-8 md:py-16 bg-[#F5F5F5]">
      <div className="container mx-auto p-4 md:px-4 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Title Column */}
          <div className="space-y-6">
            <h2
              className={`text-2xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-[#A7825F] to-[#8C5B2C] bg-clip-text text-transparent transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Embarcar em análise é atravessar um caminho de fala, escuta e <span className="px-2 py-1 rounded bg-[#98805E] text-[#ffffff]" >
                    transformação
                  </span>.
            </h2>
          </div>

          {/* Content Column */}
          <div className="space-y-4">
            <div
              className={`leading-relaxed transition-all duration-1000 ease-out delay-300 text-[#796E63] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="mb-4 text-[#796E63]">
                Com desejo, envolvimento e trabalho, o processo de análise torna possível <strong>ressignificar a própria história,</strong> promover deslocamentos e <strong>transformações subjetivas,</strong> construir{" "}
                <strong>novos sentidos</strong> e encontrar{" "}
                <strong>saídas autênticas e criativas para </strong>
                aquilo que causa <strong>sofrimento ou angústia.</strong>{" "}
              </p>

              <p className="mb-4">
                A análise — por meio da associação livre — convida você a <strong>falar livremente.</strong> E, a partir do que é dito, olhar com profundidade e cuidado para a sua trajetória.{" "}
                As sessões acontecem semanalmente, criando um ritmo que sustenta e aprofunda o processo. <strong>O que até então era silêncio encontra espaço para ser escutado.</strong> 
              </p>

              <p className="mb-4">
                Nessa travessia, você encontrará um <strong>espaço ético, sigiloso, sensível</strong> às suas <strong>vivências culturais e pessoais,</strong>{" "}
                com escuta atenta e <strong>sem julgamentos.</strong> Esse processo é um trabalho paciente, como o de um artesão: <strong>fio a fio, palavra por palavra, no seu tempo.</strong> Para que assim encontre uma <strong>nova forma de ver e ser no mundo.</strong>
              </p>

              <br/>
              
              <ButtonPrincipal text={"Inicie a sua travessia"} darkButton={true}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
