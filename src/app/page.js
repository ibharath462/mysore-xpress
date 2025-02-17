"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Music, Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import Header from "./components/mxHeader";
import FooterPlayer from "./components/FooterPlayer";
import Floater from "./components/Floater";
import VideoPlayer from "./components/VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.animate-section');
    
    sections.forEach(section => {
      gsap.from(section, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
        }
      });
    });
  }, []);

  return (
    <div className="bg-emerald-950 text-lime-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh]">
        <img 
          src="/images/mxp3.jpg"
          alt="Band performing"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-emerald-950/50 to-emerald-950"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 animate-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-metal text-lime-300 mb-6">Modern Fusion Rock</h2>
            <p className="text-lg font-synth text-lime-100 leading-relaxed">
              Mysore Xpress is a modern fusion pop rock act hailing from the heritage city 
              of Mysore, South India. Our sound breaks boundaries by blending rich traditional 
              elements with contemporary rock energy.
            </p>
          </div>
        </div>
      </section>

      {/* Sound Journey Section */}
      <section className="py-20 bg-emerald-900/30 animate-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/images/mxp15.jpg"
                alt="Band members"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/50 to-transparent rounded-lg"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-metal text-lime-300">Our Sound Journey</h2>
              <p className="font-synth text-lime-100 leading-relaxed">
                Formed in late 2019, we've cultivated a unique sound that seamlessly merges 
                genres. From Rock and Pop to Native folk and Electronic layers, our music 
                tells stories that bridge ancient traditions with modern expression.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-metal text-lime-400 mb-2">Genres</h4>
                  <p className="text-lime-100 font-synth">Rock • Pop • Folk</p>
                </div>
                <div>
                  <h4 className="font-metal text-lime-400 mb-2">Base</h4>
                  <p className="text-lime-100 font-synth">Mysore, Karnataka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discography Section */}
      <section className="py-20 animate-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl font-metal text-lime-300">Our Music</h2>
              <p className="font-synth text-lime-100 leading-relaxed">
                Our debut EP "Made In Mysore" marked the beginning of our recorded journey. 
                Since then, we've released multiple singles and covers, each showcasing our 
                evolving sound and artistic vision.
              </p>
              <Link href="/music">
                <button className="bg-lime-500 hover:bg-lime-600 text-emerald-950 px-6 py-3 
                  rounded-full transform hover:scale-105 transition-all duration-200 
                  font-bold font-synth flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Listen to Our Music</span>
                </button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-lime-500/20 transform 
                  scale-90 group-hover:scale-100 transition-transform duration-500"></div>
                <img 
                  src="/api/placeholder/500/500"
                  alt="Album artwork"
                  className="rounded-full shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-emerald-900/30 animate-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-metal text-lime-300 mb-6">Ready to Experience More?</h2>
            <p className="font-synth text-lime-100 mb-8 leading-relaxed">
              Dive deeper into our musical world. Listen to our tracks, learn about our journey,
              or get in touch for collaborations and bookings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about">
                <button className="bg-emerald-800 hover:bg-emerald-700 text-lime-100 px-6 py-3 
                  rounded-full transform hover:scale-105 transition-all duration-200 
                  font-bold font-synth flex items-center space-x-2">
                  <ArrowRight className="w-5 h-5" />
                  <span>Learn More</span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-lime-500 hover:bg-lime-600 text-emerald-950 px-6 py-3 
                  rounded-full transform hover:scale-105 transition-all duration-200 
                  font-bold font-synth flex items-center space-x-2">
                  <Music className="w-5 h-5" />
                  <span>Contact Us</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterPlayer />
      <Floater />
      <VideoPlayer />
    </div>
  );
};

export default HomePage;