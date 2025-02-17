"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Mail, Phone, Disc } from "lucide-react";

import Header from "../components/mxHeader";
import Floater from "../components/Floater";
import VideoPlayer from "../components/VideoPlayer";

const ContactPage = () => {
  const textRef = useRef(null);
  const contactsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    }).from(
      contactsRef.current.children,
      {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.4"
    );
  }, []);

  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      <Header />

      <div className="relative min-h-[calc(100vh-64px)]">
        {/* Diagonal Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-950 to-black" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(145,246,145,0.1),transparent_70%)]" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-16 md:py-24">
            {/* Title Section */}
            <div ref={textRef} className="text-center mb-16">
              <Disc className="w-16 h-16 mx-auto mb-6 text-lime-500 animate-spin-slow" />
              <h1 className="text-6xl md:text-7xl font-metal text-lime-500 mb-6">
                Connect With Us
              </h1>
              <p className="text-xl font-synth text-emerald-300 max-w-2xl mx-auto">
                Reach out to mysoreXPress for bookings, collaborations, or just
                to say hello
              </p>
            </div>

            {/* Contact Cards */}
            <div
              ref={contactsRef}
              className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Email Card */}
              <a
                href="mailto:mysorexpresstheband@gmail.com"
                className="group relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-lime-500/10 to-emerald-900/30 
                  group-hover:from-lime-500/20 group-hover:to-emerald-900/40 transition-all duration-500"
                />
                <div
                  className="relative border border-lime-500/20 rounded-xl p-8 backdrop-blur-sm
                  group-hover:border-lime-500/40 transition-all duration-300"
                >
                  <Mail className="w-12 h-12 text-lime-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-metal text-lime-400 mb-3">
                    Email Us
                  </h3>
                  <p className="font-synth text-emerald-100 break-all">
                    mysorexpresstheband@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+919008079783"
                className="group relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-lime-500/10 to-emerald-900/30 
                  group-hover:from-lime-500/20 group-hover:to-emerald-900/40 transition-all duration-500"
                />
                <div
                  className="relative border border-lime-500/20 rounded-xl p-8 backdrop-blur-sm
                  group-hover:border-lime-500/40 transition-all duration-300"
                >
                  <Phone className="w-12 h-12 text-lime-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-metal text-lime-400 mb-3">
                    Call Us
                  </h3>
                  <p className="font-synth text-emerald-100">
                    +91 900 807 9783
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <Floater />
        <VideoPlayer />

        {/* Animated Background Notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 text-8xl text-lime-500/5 animate-pulse transform -rotate-12">
            ♪
          </div>
          <div className="absolute bottom-1/3 right-1/4 text-9xl text-lime-500/5 animate-pulse delay-300 transform rotate-12">
            ♫
          </div>
          <div className="absolute bottom-1/4 left-1/3 text-7xl text-lime-500/5 animate-pulse delay-150 transform -rotate-45">
            ♩
          </div>
          <div className="absolute top-1/3 right-1/3 text-6xl text-lime-500/5 animate-pulse delay-500 transform rotate-45">
            ♬
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
