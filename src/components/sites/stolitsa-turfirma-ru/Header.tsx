"use client";

import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="w-1/3 md:w-auto">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-700 hover:text-gray-900 md:hidden"
                aria-label="Open menu"
              >
                <i className="fa fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Off-canvas menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900"
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
