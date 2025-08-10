"use client"

import { useState, useRef, useEffect } from "react"
import { Play } from 'lucide-react'

export default function MigrationSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null) // Apenas um ref
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

  // Effect para sincronizar o estado com os eventos do vídeo
  useEffect(() => {
    const video = videoRef.current

    const handlePlay = () => {
      setIsVideoPlaying(true)
    }

    const handlePause = () => {
      setIsVideoPlaying(false)
    }

    const handleEnded = () => {
      setIsVideoPlaying(false)
      // Reset video to beginning
      if (video) {
        video.currentTime = 0
      }
    }

    // Adicionar event listeners apenas se o vídeo existir
    if (video) {
      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)
      video.addEventListener('ended', handleEnded)
    }

    // Cleanup
    return () => {
      if (video) {
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
        video.removeEventListener('ended', handleEnded)
      }
    }
  }, [])

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
    // Dar um pequeno delay para garantir que o vídeo seja montado no DOM
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play().catch(error => {
          console.error("Erro ao reproduzir o vídeo:", error)
        })
      }
    }, 100)
  }

  return (
    <section className="w-full bg-[#F5F5F5]" >
      <div className="max-w-[1200px] mx-auto py-16 lg:py-24 px-6">
        <div ref={sectionRef} className="w-full">
          {/* Layout Responsivo Único */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end">
            <div className="w-full lg:w-[75%] flex flex-col lg:flex-row  gap-8 lg:gap-12">
              {/* Video/Image Container */}
              <div className="flex-shrink-0 w-[90%] mx-auto lg:w-80 lg:mx-0">
                <div className="relative w-full aspect-[4/5] lg:aspect-[4/5] lg:w-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                  {!isVideoPlaying ? (
                    <>
                      {/* Imagem sempre visível */}
                      <img
                        src="/fotos/migrate.png"
                        alt="Laura em paisagem montanhosa"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Botão de play */}
                      <div className="absolute inset-0 flex items-center justify-center bg-opacity-20">
                        <button
                          onClick={handlePlayVideo}
                          className="group bg-[#ffffff66] relative w-16 h-16 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer"
                          aria-label="Reproduzir vídeo sobre migração"
                        >
                          <Play
                            className="w-6 h-6 ml-1 group-hover:scale-110 transition-transform text-[#ffffff]"
                            fill="white"
                          />
                        </button>
                      </div>
                    </>
                  ) : (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      onEnded={() => {
                        setIsVideoPlaying(false)
                        if (videoRef.current) {
                          videoRef.current.currentTime = 0
                        }
                      }}
                      onError={() => {
                        console.error("Video error occurred")
                        setIsVideoPlaying(false)
                      }}
                    >
                      <source src="/videos/migrate.mp4" type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  )}
                </div>
              </div>
              
              {/* Text Content */}
              <div
                className={`flex-1 mt-8 lg:mt-0 transition-all duration-1000 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h2
                  className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-[#796E63]"
                >
                  Minha experiência <span className="px-2 py-1 rounded bg-[#98805E] text-[#ffffff]" >
                    migratória
                  </span>
                </h2>
                <div
                  className="text-base text-[#8C5B2C] sm:text-lg lg:text-lg leading-relaxed italic space-y-4 pb-4"
                >
                  <p>A migração foi uma travessia interna.</p>
                  <p>Precisei revisitar partes profundas da minha história e olhar com mais cuidado para os atravessamentos da migração em minha subjetividade. Foi na análise que encontrei espaço para elaborar os desafios da nova vida de brasileira no exterior.</p>
                  <p>Ao migrar não é possível "começar do zero", levamos na bagagem nossa história, afetos, expectativas e desejos. Muito nos acompanha, mas também se transformam no processo. O luto da língua, da cultura, do conhecido... tudo isso pode tocar em pontos importantes da nossa subjetividade.</p>
                  <p>Se você também se deslocou — de país, cidade ou estado — lembre-se que os movimentos internos que isso provoca merecem atenção e cuidado.</p>
                </div>
                <a className="cursor-pointer text-base font-bold text-[#3F3F3F] hover:text-[#2A2A2A] transition-colors duration-300"  href="https://wa.me/message/YPU57462FR7NO1" target="_blank" rel="noopener noreferrer">Fale direto comigo!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
