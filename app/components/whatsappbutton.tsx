"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/message/YPU57462FR7NO1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-100 flex items-center bg-[#4CAF50] text-[#fff] rounded-full shadow-lg hover:[#409143] transition-all duration-300 group"
    >
      {/* Ícone do WhatsApp */}
      <div className="p-3">
        <MessageCircle size={28} />
      </div>

      {/* Texto que aparece no hover */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:px-2 transition-all duration-300 whitespace-nowrap">
        Falar com Laura
      </span>
    </a>
  );
}
