"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Music, ArrowRight, Play, Phone } from "lucide-react";
import Link from "next/link";

import Header from "./components/mxHeader";
import Footer from "./components/FooterPlayer";
import Floater from "./components/Floater";
import VideoPlayer from "./components/VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-section");

    sections.forEach((section) => {
      gsap.from(section, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
        },
      });
    });
  }, []);

  return (
    <div className="bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="w-full md:h-[70vh] h-[50vh]">
          <img
            src="/images/hero.jpg"
            alt="Mysore Xpress performing"
            className="w-full h-full object-cover opacity-70"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div> */}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-4xl font-origin text-[#ff4a4a] mb-6 leading-tight">
                Where Tradition Meets Modern Rock
              </h1>
              <p className="text-lg md:text-xl font-origin text-gray-300 mb-8 leading-relaxed">
                Experience the fusion of Carnatic rhythms and contemporary rock
                energy
              </p>
              <Link href="/music">
                <button
                  className="bg-black hover:bg-gray-900 text-[#ff4a4a] px-6 py-3 
            rounded-full transform hover:scale-105 transition-all duration-200 
            font-bold font-origin flex items-center space-x-2 border border-[#ff4a4a]"
                >
                  <Play className="w-5 h-5" />
                  <span>Listen Now</span>
                </button>
              </Link>
            </div>

            {/* Right Content - Scroll Indicator */}
            <div className="hidden md:flex justify-center items-center">
              <div className="flex flex-col items-center gap-6 mt-[-4]">
                <div className="relative w-24 h-24 -mt-4">
                  <div className="absolute inset-0 border-2 border-[#ff4a4a] rounded-full animate-ping opacity-75"></div>
                  <div className="relative w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full border-2 border-[#ff4a4a]">
                    <div className="animate-bounce">
                      <svg
                        className="w-8 h-8 text-[#ff4a4a]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 animate-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div
                className="absolute inset-0 bg-[#ff4a4a]/20 transform group-hover:scale-105 
                transition-transform duration-500 rounded-lg"
              ></div>
              <img
                src="/images/mxp15.jpg"
                alt="Band members"
                className="relative z-10 rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-origin text-[#ff4a4a]">
                About Us
              </h2>
              <p className="text-lg font-origin text-gray-300 leading-relaxed mb-4">
                Mysore Xpress, formed in 2019, is a modern fusion rock band from
                the heritage city of Mysore. We blend traditional Carnatic
                elements with contemporary rock, creating a unique sound that
                bridges cultures and generations.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/about">
                  <button
                    className="bg-black hover:bg-gray-900 text-[#ff4a4a] px-6 py-3 
                  rounded-full transform hover:scale-105 transition-all duration-200 
                  font-bold font-origin flex items-center space-x-2 border border-[#ff4a4a]"
                  >
                    <ArrowRight className="w-5 h-5" />
                    <span>Our Story</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-24 bg-gray-900/30 animate-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-origin text-[#ff4a4a]">
                Listen to Our Music
              </h2>
              <p className="text-lg font-origin text-gray-300 leading-relaxed">
                From our debut EP "Made In Mysore" to our latest releases,
                experience our musical journey across various streaming
                platforms. Each track tells a story of cultural fusion and
                musical exploration.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/music">
                  <button
                    className="bg-black hover:bg-gray-900 text-[#ff4a4a] px-6 py-3 
                  rounded-full transform hover:scale-105 transition-all duration-200 
                  font-bold font-origin flex items-center space-x-2 border border-[#ff4a4a]"
                  >
                    <Music className="w-5 h-5" />
                    <span>Explore Our Music</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative group">
                <div
                  className="absolute inset-0 bg-[#ff4a4a]/20 transform group-hover:scale-105 
                transition-transform duration-500 rounded-lg"
                ></div>
                <img
                  src="/images/mxp5.jpg"
                  alt="Band members"
                  className="relative z-10 rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 animate-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-origin text-[#ff4a4a] mb-6">
            Connect With Us
          </h2>
          <p className="text-lg font-origin text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you're interested in bookings, collaborations, or just want
            to say hello, we'd love to hear from you. Let's create something
            amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact">
              <button
                className="bg-black hover:bg-gray-900 text-[#ff4a4a] px-6 py-3 
                rounded-full transform hover:scale-105 transition-all duration-200 
                font-bold font-origin flex items-center space-x-2 border border-[#ff4a4a]"
              >
                <Phone className="w-5 h-5" />
                <span>Get in Touch</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Background Musical Notes */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-1/4 left-1/4 text-9xl text-[#ff4a4a]/20 transform -rotate-12">
          ♪
        </div>
        <div className="absolute top-1/2 right-1/3 text-8xl text-[#ff4a4a]/20 transform rotate-12">
          ♫
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-8xl text-[#ff4a4a]/20 transform -rotate-45">
          ♩
        </div>
        <div className="absolute top-3/4 right-1/4 text-7xl text-[#ff4a4a]/20 transform rotate-45">
          ♬
        </div>
      </div>

      <Footer />
      <Floater />
      {/* {/* <VideoPlayer /> */} */}
    </div>
  );
};

export default HomePage;
