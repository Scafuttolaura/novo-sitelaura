"use client"

import { Globe, MapPin } from 'lucide-react'

export default function ServiceModality() {
  // Dados organizados em arrays  
  const modalidades = [
    {
      tipo: "Online",
      icone: Globe,
      descricao: "De onde você estiver"
    },
    {
      tipo: "Presencial", 
      icone: MapPin,
      descricao: "Região Centro Sul de Belo Horizonte/MG - Brasil"
    }
  ]

  return (
    <section className="w-full py-16 bg-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        {/* Seção: Modalidades de Atendimento */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {modalidades.map((modalidade, index) => {
              const IconeComponent = modalidade.icone
              return (
                <div
                  key={index}
                  className="bg-[#fff] rounded-2xl p-6 border-2 border-[#B8A082] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <IconeComponent className="w-8 h-8 text-[#B8A082]" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#4A4A4A] mb-1">
                        {modalidade.tipo}
                      </h3>
                      <p className="text-[#8C5B2C] text-sm">
                        {modalidade.descricao}
                      </p>
                      <a 
                        className="cursor-pointer text-base font-bold text-[#8C5B2C] hover:text-[#2A2A2A] transition-colors duration-300"  
                        href="https://wa.me/message/YPU57462FR7NO1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Agende sua sessão
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </section>
  )
}
