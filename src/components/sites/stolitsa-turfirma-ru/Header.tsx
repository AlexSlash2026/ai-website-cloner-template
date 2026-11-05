"use client";

import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 relative z-40">
        <div className="container mx-auto px-4">
          {/* Уменьшили отступы до минимума: py-1 */}
          <div className="flex items-center justify-between py-1">
            
            {/* Логотип и слоган */}
            <div className="flex items-center gap-6 lg:gap-8">
              
              {/* Логотип увеличен на 10%: md:w-80 md:h-[123px] */}
              <div className="relative w-60 h-[88px] md:w-80 md:h-[123px] flex-shrink-0">
                <Image
                  src="/new/sites/stolitsa-turfirma-ru/images/logo.jpg"
                  alt="Столица"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              
              {/* Слоган в одну строку с разделителем */}
              <div className="hidden lg:flex items-center gap-6">
                {/* Уменьшили высоту разделителя до h-12 */}
                <div className="w-px h-12 bg-gray-200"></div>
                <p 
                  className="text-cyan-700 whitespace-nowrap"
                  style={{ 
                    fontFamily: "var(--font-caveat)", 
                    fontSize: "2.6rem", /* Чуть уменьшили, чтобы слоган смотрелся гармонично в узкой шапке */
                    lineHeight: "1" 
                  }}
                >
                  В «Столице» история Уфы бережно хранится!
                </p>
              </div>
            </div>

            {/* Кнопка меню (мобильная) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 md:hidden p-2"
              aria-label="Open menu"
            >
              <i className="fa fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Off-canvas menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="p-4 flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 p-2"
              aria-label="Close menu"
            >
              <i className="fa fa-times text-2xl"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}