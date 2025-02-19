"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { X, Maximize2, Minimize2, Video, Play, Pause, Volume2, VolumeX } from "lucide-react";

const PIPVideoPlayer = () => {
  // Initialize with default values
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const videoRef = useRef(null);
  const dragRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Set isClient to true once component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load saved state from localStorage after component mounts
  useEffect(() => {
    const savedVisible = localStorage.getItem('pipVisible') === 'true';
    const savedMinimized = localStorage.getItem('pipMinimized') === 'true';
    const savedPosition = localStorage.getItem('pipPosition');
    
    setIsVisible(savedVisible);
    setIsMinimized(savedMinimized);
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
  }, []);

  // Save state changes to localStorage
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('pipVisible', isVisible);
      localStorage.setItem('pipMinimized', isMinimized);
      localStorage.setItem('pipPosition', JSON.stringify(position));
    }
  }, [isVisible, isMinimized, position, isClient]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!isClient) return;
      
      const maxX = window.innerWidth - (isMinimized ? 320 : 640);
      const maxY = window.innerHeight - (isMinimized ? 180 : 360);
      
      setPosition(prev => ({
        x: Math.min(prev.x, maxX),
        y: Math.min(prev.y, maxY)
      }));
    };

    if (isClient) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isMinimized, isClient]);

  // Handle drag start
  const handleDragStart = useCallback((e) => {
    if (!isMinimized) return;
    setIsDragging(true);
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    setDragStart({
      x: clientX - position.x,
      y: clientY - position.y,
    });
  }, [isMinimized, position]);

  // Handle drag
  const handleDrag = useCallback((e) => {
    if (!isDragging || !isClient) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const newX = clientX - dragStart.x;
    const newY = clientY - dragStart.y;

    const maxX = window.innerWidth - (isMinimized ? 320 : 640);
    const maxY = window.innerHeight - (isMinimized ? 180 : 360);

    setPosition({
      x: Math.min(Math.max(0, newX), maxX),
      y: Math.min(Math.max(0, newY), maxY),
    });
    
    if (!e.touches) {
      e.preventDefault();
    }
  }, [isDragging, dragStart, isMinimized, isClient]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add event listeners
  useEffect(() => {
    const element = dragRef.current;
    if (!element || !isClient) return;

    element.addEventListener("mousedown", handleDragStart);
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
    element.addEventListener("touchstart", handleDragStart, { passive: true });
    document.addEventListener("touchmove", handleDrag, { passive: true });
    document.addEventListener("touchend", handleDragEnd, { passive: true });

    return () => {
      element.removeEventListener("mousedown", handleDragStart);
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", handleDragEnd);
      element.removeEventListener("touchstart", handleDragStart);
      document.removeEventListener("touchmove", handleDrag);
      document.removeEventListener("touchend", handleDragEnd);
    };
  }, [handleDragStart, handleDrag, handleDragEnd, isClient]);

  const videoSize = isMinimized ? "w-80 h-45" : "w-full md:w-[640px] h-[360px]";
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      } else {
        videoRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
      } else {
        videoRef.current.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
      }
      setIsMuted(!isMuted);
    }
  };

  // If not client-side yet, return null or a loading state
  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 left-6 z-40 bg-white text-red-600 p-3 rounded-full 
          hover:bg-white transition-all duration-300 border border-red-600 
          shadow-lg group"
      >
        <Video className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Video Player */}
      {isVisible && (
        <div
          ref={dragRef}
          className={`fixed z-50 transition-all duration-300 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          <div
            className={`bg-black rounded-lg shadow-2xl overflow-hidden
              ${isMinimized ? "w-80" : "w-full md:w-[640px]"}
              border border-red-600
            `}
          >
            {/* Control Bar */}
            <div className="bg-black px-4 py-2 flex justify-between items-center">
              <h3 className="text-red-600 font-synth text-sm truncate">
                mysoreXPress - Official Video
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-red-600 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-red-600 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:text-red-600 transition-colors"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4" />
                  ) : (
                    <Minimize2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-white hover:text-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Container */}
            <div className={`relative ${videoSize}`}>
              <iframe
                ref={videoRef}
                src="https://www.youtube.com/embed/2gCqPjVcwk4?enablejsapi=1&origin=http://localhost:3000"
                title="mysoreXPress Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PIPVideoPlayer;