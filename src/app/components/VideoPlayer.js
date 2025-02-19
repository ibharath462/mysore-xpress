"use client";

import React, { useState, useRef, useCallback } from "react";
import { X, Maximize2, Minimize2, Video } from "lucide-react";

const PIPVideoPlayer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const dragRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Handle drag start - now supports both mouse and touch events
  const handleDragStart = useCallback((e) => {
    if (!isMinimized) return;
    setIsDragging(true);
    
    // Handle both mouse and touch events
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    setDragStart({
      x: clientX - position.x,
      y: clientY - position.y,
    });
  }, [isMinimized, position]);

  // Handle drag - now supports both mouse and touch events
  const handleDrag = useCallback((e) => {
    if (!isDragging) return;

    // Handle both mouse and touch events
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const newX = clientX - dragStart.x;
    const newY = clientY - dragStart.y;

    // Keep within viewport bounds
    const maxX = window.innerWidth - (isMinimized ? 320 : 640);
    const maxY = window.innerHeight - (isMinimized ? 180 : 360);

    setPosition({
      x: Math.min(Math.max(0, newX), maxX),
      y: Math.min(Math.max(0, newY), maxY),
    });
    
    // Prevent default only for mouse events to maintain smooth touch scrolling
    if (!e.touches) {
      e.preventDefault();
    }
  }, [isDragging, dragStart, isMinimized]);

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add event listeners for drag with passive touch events
  React.useEffect(() => {
    const element = dragRef.current;
    if (!element) return;

    // Mouse events
    element.addEventListener("mousedown", handleDragStart);
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);

    // Touch events - with passive option
    element.addEventListener("touchstart", handleDragStart, { passive: true });
    document.addEventListener("touchmove", handleDrag, { passive: true });
    document.addEventListener("touchend", handleDragEnd, { passive: true });

    return () => {
      // Cleanup mouse events
      element.removeEventListener("mousedown", handleDragStart);
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", handleDragEnd);

      // Cleanup touch events
      element.removeEventListener("touchstart", handleDragStart);
      document.removeEventListener("touchmove", handleDrag);
      document.removeEventListener("touchend", handleDragEnd);
    };
  }, [handleDragStart, handleDrag, handleDragEnd]);

  const videoSize = isMinimized ? "w-80 h-45" : "w-full md:w-[640px] h-[360px]";

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
                src="https://www.youtube.com/embed/2gCqPjVcwk4?autoplay=0"
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