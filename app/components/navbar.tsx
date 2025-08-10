"use client"

import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'
import Image from "next/image"

interface NavbarProps {
  refs: {
    component1Ref: React.RefObject<HTMLDivElement | null>
    perfilRef: React.RefObject<HTMLDivElement | null>
    servicesRef: React.RefObject<HTMLDivElement | null>
    testimonialsRef: React.RefObject<HTMLDivElement | null>
    projectsRef: React.RefObject<HTMLDivElement | null>
    faqRef: React.RefObject<HTMLDivElement | null>
  }
}

export default function Navbar({ refs }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para efeitos visuais
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Como funciona?', ref: refs.component1Ref },
    { label: 'Sobre mim', ref: refs.perfilRef },
    { label: 'Quem atendo?', ref: refs.servicesRef },
    { label: 'Depoimentos', ref: refs.testimonialsRef },
    { label: 'Projetos', ref: refs.projectsRef },
    { label: 'FAQ', ref: refs.faqRef }
  ]

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const offsetTop = ref.current.offsetTop - 100 // 100px de offset
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false) // Fechar menu mobile após clique
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#fff] bg-opacity-95 backdrop-blur-md shadow-lg' 
          : 'bg-[#fff] bg-opacity-90 backdrop-blur-sm shadow-md'
      }`}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex flex-row text-[#393939] items-center gap-4 text-lg lg:text-xl font-bold hover:opacity-80 transition-opacity cursor-pointer"
              >
                <Image src={'/fotos/logonavbar3.png'}  height={60} width={60} alt={"Logo"} />
                <p className="text-lg font-forum md:text-3xl font-bold text-[#A7825F]">
                  Laura Scafutto
                </p>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.ref)}
                  className="text-sm font-medium hover:opacity-80 transition-all duration-300 hover:scale-105 text-[#393939] cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-[#fff] hover:bg-opacity-20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#393939]" />
              ) : (
                <Menu className="w-6 h-6 text-[#393939]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#fff] bg-opacity-30 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-16 left-0 right-0 bg-[#fff] bg-opacity-95 backdrop-blur-md shadow-lg">
            <div className="py-4">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.ref)}
                  className="block w-full text-left px-6 py-4 text-base font-medium text-[#393939] hover:bg-[#98805E] hover:bg-opacity-10 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
