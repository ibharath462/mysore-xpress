"use client";

import React, { useEffect, useRef } from "react";
import { Play, Share2, Disc } from "lucide-react";
import { gsap } from "gsap";

import Header from "../components/mxHeader";
import Floater from "../components/Floater";
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

  const handleShare = (videoTitle) => {
    if (navigator.share) {
      navigator.share({
        title: videoTitle,
        text: `Check out ${videoTitle} by mysoreXPress!`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 via-emerald-950/70 to-emerald-950 z-10" />
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
            <Disc className="w-16 h-16 mx-auto mb-4 text-lime-500 animate-spin-slow" />
            <h1 className="text-5xl md:text-7xl font-metal text-lime-500 mb-4">
              Official Videos
            </h1>
            <p className="text-xl font-synth text-emerald-300 max-w-2xl mx-auto px-4">
              Experience the fusion of Carnatic and Metal
            </p>
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
                  className="absolute inset-0 bg-gradient-to-br from-lime-500/10 to-emerald-900/30 
                  group-hover:from-lime-500/20 group-hover:to-emerald-900/40 transition-all duration-500"
                />
                <div
                  className="relative border border-lime-500/20 rounded-xl overflow-hidden 
                  backdrop-blur-sm group-hover:border-lime-500/40 transition-all duration-300"
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
                    <h3 className="text-xl font-synth text-lime-400 mb-2">
                      {video.title}
                    </h3>
                    <p className="text-emerald-300 text-sm">
                      {video.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <button
                        className="flex items-center space-x-2 text-lime-500 hover:text-lime-400 
                          transition-colors"
                        onClick={() => handleShare(video.title)}
                      >
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm font-synth">Share</span>
                      </button>
                      <Play
                        className="w-5 h-5 text-lime-500 opacity-0 group-hover:opacity-100 
                        transition-opacity"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Background Notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 text-8xl text-lime-500/5 animate-pulse 
            transform -rotate-12"
          >
            ♪
          </div>
          <div
            className="absolute bottom-1/3 right-1/4 text-9xl text-lime-500/5 animate-pulse 
            delay-300 transform rotate-12"
          >
            ♫
          </div>
          <div
            className="absolute bottom-1/4 left-1/3 text-7xl text-lime-500/5 animate-pulse 
            delay-150 transform -rotate-45"
          >
            ♩
          </div>
          <div
            className="absolute top-1/3 right-1/3 text-6xl text-lime-500/5 animate-pulse 
            delay-500 transform rotate-45"
          >
            ♬
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
  );
};

export default VideosPage;
