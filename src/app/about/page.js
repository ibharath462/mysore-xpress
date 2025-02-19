"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Music, Disc } from "lucide-react";

import Header from "../components/mxHeader";
import FooterPlayer from "../components/FooterPlayer";
import Floater from "../components/Floater";
import VideoPlayer from "../components/VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
          <img
            src="/images/hero.jpg"
            alt="Band performing"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center">
              <Disc className="w-16 h-16 mx-auto mb-4 text-[#ff4a4a] animate-spin-slow" />
              <h1 className="text-5xl md:text-7xl font-origin text-[#ff4a4a] mb-4">
                About Us
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div ref={imageRef} className="relative group">
              <div
                className="absolute inset-0 bg-[#ff4a4a]/20 transform group-hover:scale-105 
              transition-transform duration-500 rounded-lg"
              ></div>
              <img
                src="/images/mxp15.jpg"
                alt="Mysore Xpress band"
                className="relative z-10 rounded-lg shadow-2xl w-full"
              />
            </div>

            {/* Text Content */}
            <div ref={textRef} className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <Music className="w-8 h-8 text-[#ff4a4a]" />
                <h2 className="text-3xl font-origin text-[#ff4a4a]">The Band</h2>
              </div>

              <div className="space-y-4 font-origin text-gray-300">
                <p className="leading-relaxed">
                  Mysore Xpress is a modern fusion pop rock act hailing from
                  heritage city Mysore, South India. MX blends rich traditional
                  sounds with a modern twist.
                </p>

                <p className="leading-relaxed">
                  Their mesmerising rhythms and powerful lyrics bring together
                  the best of both worlds, taking listeners on a musical
                  journey.
                </p>

                <p className="leading-relaxed">
                  The band was formed in late 2019 and their sound can be best
                  described as a blend of multiple genres from Rock, Pop, Native
                  folk & Electronic layers.
                </p>

                <p className="leading-relaxed">
                  The band has released its Debut EP "Made In Mysore" & Multiple
                  other Singles, Cover songs over the years.
                </p>
              </div>

              <div className="pt-6">
                <a href="/music">
                  <button
                    className="bg-[#ff4a4a] hover:bg-[#ff6b6b] text-white px-8 py-3 rounded-full 
                transform hover:scale-105 transition-transform duration-200 font-bold font-origin
                flex items-center space-x-2"
                  >
                    <Disc className="w-5 h-5" />
                    <span>Listen to Our Music</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

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

        <FooterPlayer />
        <Floater />
        <VideoPlayer />

        {/* Animated Background Notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 text-9xl text-[#ff4a4a]/20 animate-pulse transform -rotate-12">♪</div>
          <div className="absolute bottom-1/3 right-1/4 text-10xl text-[#ff4a4a]/20 animate-pulse delay-300 transform rotate-12">♫</div>
          <div className="absolute bottom-1/4 left-1/3 text-8xl text-[#ff4a4a]/20 animate-pulse delay-150 transform -rotate-45">♩</div>
          <div className="absolute top-1/3 right-1/3 text-7xl text-[#ff4a4a]/20 animate-pulse delay-500 transform rotate-45">♬</div>
        </div>
        
      </div>
    </>
  );
};

export default AboutPage;