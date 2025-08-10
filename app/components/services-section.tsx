"use client"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp } from 'lucide-react'
import ButtonPrincipal from "./button"

export default function ServicesSection() {
  const [openSection, setOpenSection] = useState<string>('')
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

  return (
    <section className="relative w-full overflow-hidden">
      {/* Services Section */}
      <div className="relative w-full overflow-hidden lg:min-h-[90vh]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[#787878] flex items-center justify-center z-5">
          <div className="h-8 w-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
        <div className="absolute inset-0 bg-[url('/fotos/bg-1-mb.png')] md:bg-[url('/fotos/bg-1-normal.png')] xl:bg-[url('/fotos/bg-1-big.png')] z-10 bg-cover bg-center bg-no-repeat bg-black/25 bg-blend-darken">
        </div>

        {/* Content Container */}
        <div ref={sectionRef} className="relative z-10 py-16 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
          <div className="max-w-[1200px] mx-auto w-full px-6 lg:px-12 xl:px-20">
            
            {/* Layout Container */}
            <div className="lg:flex lg:items-center">
              
              {/* Title Section */}
              <div className="lg:flex-1 mb-16 lg:mb-0 text-center lg:text-left">
                <div className="lg:max-w-md">
                  <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-up text-[#ffffff]" >
                    quem eu
                    <br />
                    <span className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl">atendo</span>
                    <br />
                    <span className="text-[#ffffffe6]" >pelo</span>{" "}
                    <span className="px-2 lg:px-3 py-1 rounded bg-[#98805E] text-[#ffffff]" >
                      mundo
                    </span>
                  </h1>
                </div>
              </div>

              {/* Spacer for desktop */}
              <div className="hidden lg:block lg:flex-shrink-0 lg:w-20"></div>

              {/* Services Section */}
              <div className="lg:flex-1 flex justify-center lg:justify-start">
                <div className="w-full max-w-sm lg:max-w-lg space-y-4 lg:space-y-6">
                  
                  {/* Informações gerais - Mobile */}
                  <div className={`text-[#fff] mb-8 md:mb-6 space-y-1 transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <p className="text-xl">Online: <span className="font-bold">a partir de 18 anos</span></p>
                    <p className="text-xl">Presencial em Belo Horizonte: <span className="font-bold">a partir de 14 anos</span></p>
                  </div>

                  {/* Migrantes */}
                  <div className={`text-[#fff] transition-all duration-1000 ease-out delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <button
                      onClick={() => toggleSection('migrantes')}
                      className="flex items-center justify-between w-full text-left cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <h3 className="text-xl lg:text-2xl font-semibold pt-4">Migrantes</h3>
                      {openSection === 'migrantes' ? (
                        <ChevronUp className="w-5 h-5 lg:w-6 lg:h-6" />
                      ) : (
                        <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6" />
                      )}
                    </button>
                    {openSection === 'migrantes' && (
                      <ul className="mt-2 lg:mt-3 space-y-1 lg:space-y-2 text-xl opacity-90 animate-fade-in-up">
                        <li>• Brasileiros (as) no exterior</li>
                        <li>• Migrantes internos (dentro do Brasil)</li>
                        <li>• Imigrantes e refugiados no Brasil</li>
                      </ul>
                    )}
                  </div>

                  {/* LGBTQIAP+ */}
                  <div className={`text-[#fff] transition-all duration-1000 ease-out delay-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <button
                      onClick={() => toggleSection('lgbtqiap')}
                      className="flex items-center justify-between w-full text-left cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <h3 className="text-xl lg:text-2xl font-semibold pt-4">LGBTQIAP+</h3>
                      {openSection === 'lgbtqiap' ? (
                        <ChevronUp className="w-5 h-5 lg:w-6 lg:h-6" />
                      ) : (
                        <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6" />
                      )}
                    </button>
                    {openSection === 'lgbtqiap' && (
                      <ul className="mt-2 lg:mt-3 space-y-1 lg:space-y-2 text-xl opacity-90 animate-fade-in-up">
                        <li>• Brasileiros(as) LGBTQIAP+ no exterior</li>
                        <li>• LGBTQIAP+ falantes de português no Brasil</li>
                      </ul>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className={`pt-4 lg:pt-6 transition-all duration-1000 ease-out delay-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <ButtonPrincipal />
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
