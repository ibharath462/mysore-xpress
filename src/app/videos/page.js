"use client";

import React, { useEffect, useRef } from "react";
import { Play, Share2, Disc } from "lucide-react";
import { gsap } from "gsap";

import Header from "../components/mxHeader";
import Floater from "../components/Floater";
import Footer from "../components/FooterPlayer";
import VideoPlayer from "../components/VideoPlayer";

const VideosPage = () => {
  const textRef = useRef(null);
  const videosRef = useRef(null);

  // Sample video data - replace with actual video IDs
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Mysore Metal Mayhem",
      description: "Live at Palace Grounds",
    },
    {
      id: "uD4izuDMUQA",
      title: "Carnatic Chaos",
      description: "Official Music Video",
    },
    {
      id: "JGwWNGJdvx8",
      title: "Karnataka Calling",
      description: "Tour Documentary 2024",
    },
    {
      id: "kJQP7kiw5Fk",
      title: "Temple Trance",
      description: "Acoustic Session",
    },
    {
      id: "kXYiU_JCYtU",
      title: "Bangalore Blues",
      description: "Behind the Scenes",
    },
    {
      id: "fJ9rUzIMcZQ",
      title: "South Indian Symphony",
      description: "Fan Compilation",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Mysore Metal Mayhem",
      description: "Live at Palace Grounds",
    },
    {
      id: "uD4izuDMUQA",
      title: "Carnatic Chaos",
      description: "Official Music Video",
    },
    {
      id: "JGwWNGJdvx8",
      title: "Karnataka Calling",
      description: "Tour Documentary 2024",
    },
    {
      id: "kJQP7kiw5Fk",
      title: "Temple Trance",
      description: "Acoustic Session",
    },
    {
      id: "kXYiU_JCYtU",
      title: "Bangalore Blues",
      description: "Behind the Scenes",
    },
    {
      id: "fJ9rUzIMcZQ",
      title: "South Indian Symphony",
      description: "Fan Compilation",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Mysore Metal Mayhem",
      description: "Live at Palace Grounds",
    },
    {
      id: "uD4izuDMUQA",
      title: "Carnatic Chaos",
      description: "Official Music Video",
    },
    {
      id: "JGwWNGJdvx8",
      title: "Karnataka Calling",
      description: "Tour Documentary 2024",
    },
    {
      id: "kJQP7kiw5Fk",
      title: "Temple Trance",
      description: "Acoustic Session",
    },
    {
      id: "kXYiU_JCYtU",
      title: "Bangalore Blues",
      description: "Behind the Scenes",
    },
    {
      id: "fJ9rUzIMcZQ",
      title: "South Indian Symphony",
      description: "Fan Compilation",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    }).from(
      videosRef.current.children,
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
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-black z-10" />
        <img
          src="/images/mxp14.jpg"
          alt="Band performing"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="text-center">
            <Disc className="w-16 h-16 mx-auto mb-4 text-[#ff4a4a] animate-spin-slow" />
            <h1 className="text-5xl md:text-7xl font-origin text-[#ff4a4a] mb-4">
              Official Videos
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Videos Grid */}
        <div className="container mx-auto px-4 py-16">
          <div
            ref={videosRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-xl"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-transparent to-black
                  group-hover:from-transparent group-hover:to-[#ff4a4a] transition-all duration-500"
                />
                <div
                  className="relative border border-[#ff4a4a] rounded-xl overflow-hidden 
                  backdrop-blur-sm group-hover:border-[#ff4a4a] transition-all duration-300"
                >
                  <div className="aspect-video relative">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-origin text-white mb-2">
                      {video.title}
                    </h3>
                    <p className="text-white font-origin text-sm">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Background Notes */}
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

      </div>

      <Footer />
      <Floater />
      {/* <VideoPlayer /> */}
    </div>
  );
};

export default VideosPage;
