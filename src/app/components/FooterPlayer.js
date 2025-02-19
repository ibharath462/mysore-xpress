"use client"
import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX,
  Instagram, Twitter, Facebook, Youtube, Mail, ArrowRight
} from 'lucide-react';

const FooterWithPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const time = e.target.value;
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Traditional Footer */}
      <footer className="bg-black text-gray-400 pt-12 sm:pt-16 pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Band Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-origin text-[#ff4a4a] mb-4 uppercase tracking-wide">mysoreXPress</h3>
            <p className="mb-4 text-sm sm:text-base">
              Blending the ancient rhythms of Carnatic music with the power of modern metal,
              creating a unique sound that bridges cultures and generations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#ff4a4a] transition-colors">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff4a4a] transition-colors">
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff4a4a] transition-colors">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-origin text-[#ff4a4a] mb-3 sm:mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:text-[#ff4a4a] transition-colors">Tour Dates</a></li>
              <li><a href="#" className="hover:text-[#ff4a4a] transition-colors">Merch Store</a></li>
              <li><a href="#" className="hover:text-[#ff4a4a] transition-colors">Media Kit</a></li>
              <li><a href="#" className="hover:text-[#ff4a4a] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base sm:text-lg font-origin text-[#ff4a4a] mb-3 sm:mb-4 uppercase tracking-wide">Stay Updated</h4>
            <p className="mb-4 text-sm sm:text-base">Subscribe to our newsletter for tour updates and exclusive content.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-900 px-3 sm:px-4 py-2 rounded-l focus:outline-none focus:ring-1 
                  focus:ring-[#ff4a4a] flex-1 text-sm sm:text-base"
              />
              <button className="group bg-transparent hover:bg-[#ff4a4a]/10 text-[#ff4a4a] px-4 py-2 
                rounded-r transition-all border border-[#ff4a4a] font-origin uppercase tracking-wide
                flex items-center space-x-2">
                <span>Send</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-800">
          <p className="text-center text-xs sm:text-sm">
            © 2025 mysoreXPress. All rights reserved. Made with 🤘 in Mysore, India
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterWithPlayer;