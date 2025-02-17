"use client"

import React, { useEffect, useRef } from 'react';
import { Music, Play, Users, Calendar, Headphones, Radio, Disc } from 'lucide-react';

import Header from "./components/mxHeader";
import Floater from "./components/Floater";
import FooterPlayer from "./components/FooterPlayer";
import VideoPlayer from "./components/VideoPlayer";

const HomePage = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Audio visualization effect
  useEffect(() => {
    const canvas = document.getElementById('audioVisualizer');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const drawVisualizer = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create a pulsing effect
      const time = Date.now() / 1000;
      const bars = 20;
      
      for (let i = 0; i < bars; i++) {
        const height = Math.sin(time * 2 + i * 0.5) * 30 + 40;
        ctx.fillStyle = 'rgba(220, 38, 38, 0.6)'; // red-600 with opacity
        ctx.fillRect(
          (canvas.width / bars) * i,
          (canvas.height - height) / 2,
          canvas.width / bars - 2,
          height
        );
      }
      
      animationId = requestAnimationFrame(drawVisualizer);
    };

    drawVisualizer();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

        <Header />
        <VideoPlayer />
      {/* Custom font styling */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
          
          .font-metal { font-family: 'Metal Mania', cursive; }
          .font-synth { font-family: 'Audiowide', cursive; }
        `}
      </style>

      {/* Hero Section with Audio Visualizer */}
      <div ref={heroRef} className="relative h-screen flex items-center justify-center">
        <img 
          src="/hero.jpg" 
          alt="Band performing" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" /> */}
        
        {/* Audio Visualizer */}
        {/* <canvas 
          id="audioVisualizer" 
          className="absolute inset-0 w-full h-full opacity-30"
          width="800"
          height="600"
        /> */}
        
        {/* <div ref={textRef} className="relative z-10 text-center">
          <Disc className="w-16 h-16 mx-auto mb-4 text-red-600 animate-spin-slow" />
          <h1 className="text-6xl md:text-8xl font-metal mb-4 text-red-600 animate-pulse">
            mysoreXPress
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-synth tracking-wider">
            Where Carnatic Meets Metal
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full 
            transform hover:scale-105 transition-transform duration-200 font-bold font-synth
            flex items-center justify-center mx-auto space-x-2">
            <Headphones className="w-5 h-5" />
            <span>Listen Now</span>
          </button>
        </div> */}
      </div>

      {/* Featured Section with Musical Notes Background */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl transform -rotate-12">♪</div>
          <div className="absolute top-20 right-20 text-8xl transform rotate-12">♫</div>
          <div className="absolute bottom-10 left-1/4 text-7xl transform -rotate-45">♩</div>
          <div className="absolute bottom-20 right-1/3 text-5xl transform rotate-45">♬</div>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 border border-red-600 rounded-lg hover:bg-red-900/20 
            transition-colors duration-300 backdrop-blur-sm group">
            <Music className="w-12 h-12 mx-auto mb-4 text-red-600 transform group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 font-synth">Latest Album</h3>
            <p className="text-gray-400">Mysore Masala Metal</p>
          </div>
          
          <div className="text-center p-6 border border-red-600 rounded-lg hover:bg-red-900/20 
            transition-colors duration-300 backdrop-blur-sm group">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-red-600 transform group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 font-synth">Tour Dates</h3>
            <p className="text-gray-400">Bangalore • Chennai • Mumbai</p>
          </div>
          
          <div className="text-center p-6 border border-red-600 rounded-lg hover:bg-red-900/20 
            transition-colors duration-300 backdrop-blur-sm group">
            <Play className="w-12 h-12 mx-auto mb-4 text-red-600 transform group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 font-synth">Music Videos</h3>
            <p className="text-gray-400">Watch Our Latest Releases</p>
          </div>
          
          <div className="text-center p-6 border border-red-600 rounded-lg hover:bg-red-900/20 
            transition-colors duration-300 backdrop-blur-sm group">
            <Radio className="w-12 h-12 mx-auto mb-4 text-red-600 transform group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 font-synth">Fan Club</h3>
            <p className="text-gray-400">Join the Metal Family</p>
          </div>
        </div>
      </section>

      {/* Latest Release Preview with Vinyl Effect */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-red-600 font-metal">Latest Release</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-red-600/20 transform scale-90 group-hover:scale-100 
                transition-transform duration-500 animate-pulse"></div>
              <img 
                src="/api/placeholder/500/500" 
                alt="Album cover" 
                className="rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 
                  animate-spin-slow relative z-10"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-red-600 font-metal">Mysore Masala Metal</h3>
              <p className="text-gray-400 text-lg font-synth">
                Our newest album blends traditional Carnatic rhythms with crushing metal riffs, 
                creating a unique sound that bridges ancient and modern musical worlds.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full 
                font-bold font-synth flex items-center space-x-2 group">
                <Play className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                <span>Stream Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <FooterPlayer />
      <Floater />
    </div>
  );
};

// Add custom animation class
const style = document.createElement('style');
style.textContent = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
`;
document.head.appendChild(style);

export default HomePage;