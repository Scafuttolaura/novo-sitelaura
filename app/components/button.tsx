import React from "react";

type AgendarBotaoProps = {
  darkButton?: boolean;
  text?: string;
};

const ButtonPrincipal: React.FC<AgendarBotaoProps> = ({ 
  darkButton = false, 
  text = "Agende sua sessão" 
}) => {
  const baseClasses = "font-semibold px-8 py-3 text-base rounded-md transition-colors duration-200 animate-fade-in-up animation-delay-500 cursor-pointer";

  const lightClasses = "bg-[#fff] text-[#8C5B2C] hover:bg-gray-100";
  const darkClasses = "bg-[#3F3F3F] text-[#fff] hover:bg-[#5A5A5A]";

  return (
    <a
      href="https://wa.me/message/YPU57462FR7NO1"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${darkButton ? darkClasses : lightClasses}`}
    >
      {text}
    </a>
  );
};

export default ButtonPrincipal;
