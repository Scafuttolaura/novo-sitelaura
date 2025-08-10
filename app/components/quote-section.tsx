"use client"

import { useState, useRef, useEffect } from "react"
import ButtonPrincipal from "./button"

export default function QuoteSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <section ref={sectionRef} className="">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 py-12">
          <div className="text-left md:text-center">
            <p className="flex flex-col items-start text-lg md:text-2xl font-bold max-w-3xl mx-auto leading-relaxed bg-gradient-to-r from-[#A7825F] to-[#3F3F3F] bg-clip-text text-transparent">
              "O que a gente sente e não diz, cresce dentro."
              <span className="text-base font-normal italic text-[#8C5B2C]">— Paulo Leminski </span>
            </p>
          </div>
          <div 
            className={`flex-shrink-0 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <ButtonPrincipal darkButton={true}/>
          </div>
        </div>
      </section>
    </div>
  )
}
