"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Music, Disc } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Music", href: "/music" },
    { name: "Videos", href: "/videos" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
          
          .font-origin { font-family: 'Metal Mania', cursive; }
          .font-origin { font-family: 'Audiowide', cursive; }
        `}
      </style> */}
      <header className="fixed w-full z-50">
        {/* Main Header */}
        <div
          className={`w-full transition-all duration-300 bg-black/90 backdrop-blur-sm`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 md:h-20">
              {/* Logo */}
              <div className="flex items-center">
                <div className="relative w-32 h-20 md:w-48 md:h-24 flex items-center justify-center">
                  <a href="/">
                    <img
                      src="/mx_logo.png"
                      alt="mysoreXPress logo"
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  </a>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-200 hover:text-[#ff4a4a] font-origin text-sm 
                    transition-colors relative group"
                  >
                    {link.name}
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff4a4a] 
                    transition-all group-hover:w-full"
                    ></span>
                  </a>
                ))}
                <a href="/music">
                  <button
                    className="bg-[#ff4a4a] hover:bg-[#ff6b6b] text-white font-medium
                  px-4 py-2 rounded-full font-origin text-sm font-bold drop-shadow-md
                  transition-all hover:scale-105 flex items-center space-x-2 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                  >
                    <Music className="w-4 h-4" />
                    <span>Listen Now</span>
                  </button>
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-[#ff4a4a] hover:text-[#ff6b6b] transition-colors z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{ zIndex: 40 }}
        />

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-y-0 right-0 w-full md:hidden transition-transform duration-300 ease-in-out transform
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ zIndex: 45 }}
        >
          <div className="h-full bg-black/95 backdrop-blur-lg">
            <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-200 hover:text-[#ff4a4a] font-origin text-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                className="bg-[#ff4a4a] hover:bg-[#ff6b6b] text-white font-medium
                px-6 py-3 rounded-full font-origin font-bold drop-shadow-md
                transition-all hover:scale-105 flex items-center space-x-2 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Music className="w-5 h-5" />
                <span>Listen Now</span>
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;