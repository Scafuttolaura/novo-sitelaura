"use client"

import { useState, useRef, useEffect } from "react"
import { Play, X } from "lucide-react"
import ButtonPrincipal from "./button"

export default function HeroHeader() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
  }

  const handleVideoEnd = () => {
    setIsVideoPlaying(false)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  // Scroll suave para o vídeo quando aparecer
  useEffect(() => {
    if (isVideoPlaying && videoContainerRef.current) {
      setTimeout(() => {
        const videoContainer = videoContainerRef.current
        if (videoContainer) {
          const containerTop = videoContainer.offsetTop
          const scrollToPosition = containerTop - 50
          window.scrollTo({
            top: scrollToPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }, [isVideoPlaying])

  // Prevenir fullscreen automático e outros comportamentos indesejados
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement && videoRef.current) {
        document.exitFullscreen()
      }
    }

    const preventFullscreen = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)

    // Prevenir eventos que podem causar fullscreen
    if (videoRef.current) {
      videoRef.current.addEventListener("webkitbeginfullscreen", preventFullscreen)
      videoRef.current.addEventListener("webkitendfullscreen", preventFullscreen)
    }

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      if (videoRef.current) {
        videoRef.current.removeEventListener("webkitbeginfullscreen", preventFullscreen)
        videoRef.current.removeEventListener("webkitendfullscreen", preventFullscreen)
      }
    }
  }, [isVideoPlaying])

  return (
    <header className="relative w-full overflow-hidden">
      {/* Header Principal */}
      <div className="relative h-[100vh] md:h-[90vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[#787878] flex items-center justify-center z-5">
          <div className="h-8 w-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
        <div className="absolute inset-0 bg-[url('/fotos/bgmob2.png')] z-10 md:bg-[url('/fotos/bg.jpg')] bg-cover bg-[center] bg-no-repeat bg-black/15 bg-blend-darken"></div>

        {/* Content Container */}
        <div className="relative z-10 flex min-h-screen">
          {/* Desktop Layout */}
          <div className="hidden lg:flex max-w-[1200px] mx-auto w-full items-center">
            {/* Left Side - Text */}
            <div className="flex-1 px-12 xl:px-20">
              <div className="max-w-md flex flex-col items-end">
                <p className="text-lg font-forum md:text-5xl mb-2 font-bold animate-fade-in-up animation-delay-300 text-[#ffffff]">
                  Laura Scafutto
                </p>
                <p className="text-lg xl:text-xl mb-4 italic font-medium animate-fade-in-up animation-delay-300 text-[#fff]">
                  Para escutar, não há fronteiras
                </p>
                <ButtonPrincipal />
              </div>
            </div>

            {/* Center - Play Button */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <button
                onClick={handlePlayVideo}
                className="group relative bg-[#ffffff33] w-20 h-20 xl:w-24 xl:h-24 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label="Reproduzir vídeo de boas-vindas"
              >
                <Play
                  className="w-8 h-8 text-[#ffffff] xl:w-10 xl:h-10 ml-1 group-hover:scale-110 transition-transform"
                  fill="white"
                />
              </button>
            </div>

            {/* Right Side - CTA */}
            <div className="flex-1 px-12 xl:px-20">
              <div className="max-w-2xl">
                <h1 className="text-5xl xl:text-4xl font-bold animate-fade-in-up text-[#ffffff]">
                  a psicanalista <span className="text-[#ffffffe6]">dos</span>
                  <br />
                  <span className="text-7xl">brasileiros</span>
                  <br />
                  <span className="text-[#ffffffe6]">pelo</span>{" "}
                  <span className="px-3 py-1 rounded bg-[#98805E] text-[#ffffff]">mundo</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col w-full h-[95vh]">
            {/* Top - Title */}
            <div className="flex-1 flex items-center justify-center px-6">
              <div className="text-center">
                <p className="text-2xl font-forum xl:text-5xl mb-1 font-bold animate-fade-in-up animation-delay-300 text-[#fff]">
                  Laura Scafutto
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight animate-fade-in-up text-[#ffffff]">
                  a psicanalista <span className="text-[#ffffffe6]">dos</span>
                  <br />
                  brasileiros
                  <br />
                  <span className="text-[#ffffffe6]">pelo</span>{" "}
                  <span className="px-2 py-1 rounded text-[#ffffff] bg-[#98805E]">mundo</span>
                </h1>
              </div>
            </div>

            {/* Bottom - CTA */}
            <div className="flex-1 flex items-center justify-center px-6">
              <div className="text-center">
                <div className="flex items-center justify-center py-10">
                  <button
                    onClick={handlePlayVideo}
                    className="group relative bg-[#ffffff33] w-20 h-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                    aria-label="Reproduzir vídeo de boas-vindas"
                  >
                    <Play
                      className="w-8 h-8 ml-1 group-hover:scale-110 transition-transform pointer text-[#ffffff]"
                      fill="white"
                    />
                  </button>
                </div>
                <p className="text-lg mb-6 italic font-medium animate-fade-in-up animation-delay-300 text-[#ffffff]">
                  Para escutar, não há fronteiras
                </p>
                <ButtonPrincipal />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Container - Aparece abaixo do header (mobile e desktop) */}
      {isVideoPlaying && (
        <div ref={videoContainerRef} className="relative w-full bg-black">
          {/* Botão de fechar */}
          <button
            onClick={handleCloseVideo}
            className="absolute cursor-pointer top-4 right-4 z-30 w-12 h-12 bg-black bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-200"
            aria-label="Fechar vídeo"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Vídeo */}
          <video
            ref={videoRef}
            className="w-full h-auto max-w-full"
            controls
            autoPlay
            onEnded={handleVideoEnd}
            onError={() => setIsVideoPlaying(false)}
            playsInline
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            webkit-playsinline="true"
            x5-playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="false"
            style={{
              maxHeight: "80vh",
              objectFit: "contain",
            }}
            onLoadedMetadata={() => {
              // Garantir que o vídeo não entre em fullscreen
              if (videoRef.current) {
                videoRef.current.setAttribute("webkit-playsinline", "true")
                videoRef.current.setAttribute("playsinline", "true")
              }
            }}
          >
            <source src="/videos/bemvindo.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      )}
    </header>
  )
}
