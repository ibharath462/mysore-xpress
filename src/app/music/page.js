"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Music, Disc, Play, Volume2, Youtube, Radio } from "lucide-react";

import Header from "../components/mxHeader";
import Floater from "../components/Floater";
import Footer from "../components/FooterPlayer";
import VideoPlayer from "../components/VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

const MusicPage = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const platforms = [
    {
      name: "Apple Music",
      icon: <Music className="w-12 h-12" />,
      description: "Stream our tracks on Apple Music",
      color: "bg-gradient-to-br from-pink-600 to-purple-800",
      link: "https://music.apple.com/in/artist/mysore-xpress/1501098656",
      buttonText: "Listen on Apple Music",
    },
    {
      name: "Spotify",
      icon: <Radio className="w-12 h-12" />,
      description: "Follow us on Spotify",
      color: "bg-gradient-to-br from-emerald-600 to-cyan-800",
      link: "https://open.spotify.com/artist/3z6Qc4vYphJb18Rr0jGHuC",
      buttonText: "Play on Spotify",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-12 h-12" />,
      description: "Watch our music videos",
      color: "bg-gradient-to-br from-red-600 to-orange-700",
      link: "https://www.youtube.com/@MysoreXpressTheBand",
      buttonText: "Watch on YouTube",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
        <img
          src="/images/mxp14.jpg"
          alt="Band performing"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <Volume2 className="w-16 h-16 mx-auto mb-4 text-[#ff4a4a] animate-spin-slow" />
            <h1 className="text-5xl md:text-7xl font-origin text-[#ff4a4a] mb-4">
              Our Music
            </h1>
          </div>
        </div>
      </div>

      {/* Streaming Platforms */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <a 
              key={platform.name}
              href={platform.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className="relative group"
              >
                <div
                  className={`${platform.color} p-8 rounded-xl transform transition-all duration-300 
                hover:scale-105 hover:shadow-2xl hover:shadow-[#ff4a4a]/20 backdrop-blur-sm
                border border-[#ff4a4a]/10 hover:border-[#ff4a4a]/30`}
                >
                  <div className="text-white mb-6">{platform.icon}</div>
                  <h3 className="text-2xl font-origin text-white mb-2">
                    {platform.name}
                  </h3>
                  <p className="font-origin text-gray-200 mb-6">
                    {platform.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Featured Release */}
      <div className="container mx-auto px-4 py-16 border-t border-[#ff4a4a]/20">
        <div className="text-center max-w-2xl mx-auto">
          <Disc className="w-12 h-12 mx-auto mb-4 text-[#ff4a4a] animate-spin-slow" />
          <h2 className="text-3xl font-origin text-[#ff4a4a] mb-4">
            Latest Release
          </h2>
          <p className="font-origin text-gray-300 mb-8">
            Check out our newest tracks and stay updated with our latest
            releases
          </p>
          <button
            className="bg-black hover:bg-gray-900 text-[#ff4a4a] px-8 py-3 rounded-full 
            transform hover:scale-105 transition-transform duration-200 font-bold font-origin
            flex items-center justify-center mx-auto space-x-2 shadow-lg 
            border-2 border-[#ff4a4a] hover:border-[#ff6b6b]"
          >
            <Play className="w-5 h-5" />
            <span>Play Latest Release</span>
          </button>
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

      <Footer />
      <Floater />
      <VideoPlayer />

      {/* Animated Background Notes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 text-9xl text-[#ff4a4a]/20 animate-pulse transform -rotate-12">
          ♪
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-10xl text-[#ff4a4a]/20 animate-pulse delay-300 transform rotate-12">
          ♫
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-8xl text-[#ff4a4a]/20 animate-pulse delay-150 transform -rotate-45">
          ♩
        </div>
        <div className="absolute top-1/3 right-1/3 text-7xl text-[#ff4a4a]/20 animate-pulse delay-500 transform rotate-45">
          ♬
        </div>
      </div>
      
    </div>
  );
};

export default MusicPage;