"use client"

import React, { useState } from 'react';
import { Music2, X, Disc, Play, Radio } from 'lucide-react';
import { Music, Headphones, Instagram } from 'lucide-react';

const MusicFloater = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const platforms = [
    {
      name: 'Spotify',
      icon: <Music className="w-5 h-5" />,
      color: 'bg-emerald-500',
      hoverColor: 'hover:bg-emerald-600',
      url: 'https://open.spotify.com/artist/3z6Qc4vYphJb18Rr0jGHuC'
    },
    {
      name: 'Apple Music',
      icon: <Headphones className="w-5 h-5" />,
      color: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600',
      url: 'https://music.apple.com/in/artist/mysore-xpress/1501098656'
    },
    {
      name: 'YouTube',
      icon: <Play className="w-5 h-5" />,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      url: 'https://www.youtube.com/@MysoreXpressTheBand'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      url: 'https://www.instagram.com/mysore_xpress/'
    }
  ];

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isMinimized ? 'scale-75' : 'scale-100'
      }`}
    >
      {/* Minimize Button */}
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className="absolute -top-4 -left-4 bg-white text-[#ff4a4a] rounded-full p-1
          hover:bg-gray-900 transition-colors z-10 border border-[#ff4a4a]/20"
      >
        {isMinimized ? (
          <Play className="w-4 h-4" />
        ) : (
          <Radio className="w-4 h-4" />
        )}
      </button>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative bg-white text-[#ff4a4a] rounded-full p-4 shadow-lg
          hover:bg-white transition-all duration-300 border border-[#ff4a4a]/20 ${
            isOpen ? 'rotate-180' : ''
          }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Music2 className="w-6 h-6" />
        )}
        <div className="absolute inset-0 bg-[#ff4a4a] rounded-full animate-ping opacity-20"></div>
      </button>

      {/* Platform Selection Menu */}
      <div className={`absolute bottom-full right-0 mb-4 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-xl
          border border-[#ff4a4a]/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#ff4a4a] font-origin text-sm">Listen On</span>
            <Disc className="w-4 h-4 text-[#ff4a4a] animate-spin-slow" />
          </div>
          
          <div className="space-y-2">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                className={`flex items-center space-x-3 p-2 rounded-lg 
                  ${platform.color} ${platform.hoverColor} transition-colors
                  text-white font-origin text-sm group`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">
                  {platform.icon}
                </span>
                <span>{platform.name}</span>
              </a>
            ))}
          </div>

          {/* Now Playing Preview */}
          <div className="mt-4 pt-3 border-t border-[#ff4a4a]/20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/images/mxp5.jpg" 
                  alt="Album art" 
                  className="w-10 h-10 rounded"
                />
                <div className="absolute inset-0 bg-white/50 rounded flex items-center justify-center">
                  <Play className="w-4 h-4 text-[#ff4a4a]" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#ff4a4a] font-origin text-xs truncate">
                  Mysore Masala Metal
                </p>
                <p className="text-gray-400 text-xs truncate">
                  Latest Album
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicFloater;