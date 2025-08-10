"use client"
import { Instagram, Linkedin, MessageCircle } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/message/YPU57462FR7NO1',
      color: '#25D366'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/psi.laurascafutto/',
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/laurascafutto/',
      color: '#0077B5'
    }
  ]

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/fotos/footer-mob.png')] md:bg-[url('/fotos/footer-web.png')] bg-cover bg-center bg-no-repeat"></div>
      
      
      {/* Content */}
      <div className="relative z-10 py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Main Footer Content */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="text-lg font-forum md:text-5xl font-bold text-[#fff]">
              Laura Scafutto
            </div>
            
            {/* Logo */}
            <div className="mb-2 flex flex-col md:flex-row items-center justify-center space-x-4">

              <div className="bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-[#fff] font-semibold text-sm md:text-base">
                  CRP 04/62810
                </p>
              </div>
              {/* Social Media Links */}
              <div className="flex items-center justify-center space-x-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      aria-label={`Seguir no ${social.name}`}
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14  bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 group-hover:scale-110">
                        <IconComponent 
                          className="w-6 h-6 md:w-7 md:h-7 text-[#fff] group-hover:scale-110 transition-transform" 
                        />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-[#fff] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.name}
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>


            

            {/* Divider */}
            <div className="w-full max-w-md h-px bg-[#fff] bg-opacity-30"></div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-[#fff] text-sm md:text-base opacity-90 leading-relaxed max-w-2xl">
                © 2025 Laura Scafutto a psicanalista dos brasileiros pelo mundo. Todos os direitos reservados.
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
