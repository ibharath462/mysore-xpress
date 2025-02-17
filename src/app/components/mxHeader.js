"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Music, Disc } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Story", href: "/story" },
    { name: "Music", href: "/music" },
    { name: "Videos", href: "/videos" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Custom fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
          
          .font-metal { font-family: 'Metal Mania', cursive; }
          .font-synth { font-family: 'Audiowide', cursive; }
        `}
      </style>

      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-emerald-950/95 backdrop-blur-md py-2 shadow-lg"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center">

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="/mx_logo.png"
                alt="mysoreXPress logo"
                className={`w-48 h-48 object-contain ${
                  isScrolled ? "" : "animate-spin-slow"
                }`}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-emerald-200 hover:text-lime-400 font-synth text-sm 
                    transition-colors relative group"
                >
                  {link.name}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 
                    transition-all group-hover:w-full"
                  ></span>
                </a>
              ))}
              <button
                className="bg-lime-500 hover:bg-lime-600 text-emerald-950 
                px-4 py-2 rounded-full font-synth text-sm font-bold 
                transition-all hover:scale-105 flex items-center space-x-2"
              >
                <Music className="w-4 h-4" />
                <span>Listen Now</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-lime-400 hover:text-lime-500 transition-colors"
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

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 bg-emerald-950/98 backdrop-blur-lg 
            transition-transform duration-300 ease-in-out transform 
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ top: "0", zIndex: -1 }}
        >
          <nav className="flex flex-col items-center justify-center h-screen space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-emerald-200 hover:text-lime-400 font-synth text-xl 
                  transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              className="bg-lime-500 hover:bg-lime-600 text-emerald-950 
              px-6 py-3 rounded-full font-synth font-bold 
              transition-all hover:scale-105 flex items-center space-x-2"
            >
              <Music className="w-5 h-5" />
              <span>Listen Now</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Spacer for content below header */}
      <div className={`h-${isScrolled ? "16" : "20"}`} />
    </>
  );
};

export default Header;
