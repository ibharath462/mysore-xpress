"use client"
import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX,
  Instagram, Twitter, Facebook, Youtube, Mail
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
      {/* Sticky Music Player */}
      <div className="fixed bottom-0 left-0 w-full bg-emerald-950/95 backdrop-blur-md border-t 
        border-lime-400/20 shadow-lg z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Song Info */}
            <div className="flex items-center space-x-4">
              <img 
                src="/hero.jpg" 
                alt="Current track" 
                className="w-12 h-12 rounded"
              />
              <div>
                <h4 className="text-lime-400 font-synth text-sm">Now Playing</h4>
                <p className="text-emerald-200 text-xs">Hero Track</p>
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex flex-col items-center flex-1 max-w-2xl px-4">
              <div className="flex items-center space-x-4 mb-1">
                <button className="text-emerald-200 hover:text-lime-400 transition-colors">
                  <SkipBack className="w-5 h-5" />
                </button>
                <button 
                  className="bg-lime-400 hover:bg-lime-500 text-emerald-950 rounded-full p-2 
                    transition-colors"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6" />
                  )}
                </button>
                <button className="text-emerald-200 hover:text-lime-400 transition-colors">
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>
              
              <div className="w-full flex items-center space-x-3 text-xs text-emerald-200">
                <span>{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="flex-1 accent-lime-400"
                />
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex items-center space-x-3">
              <button 
                className="text-emerald-200 hover:text-lime-400 transition-colors"
                onClick={toggleMute}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-20 accent-lime-400"
              />
            </div>
          </div>
        </div>

        {/* Audio Element */}
        <audio
          ref={audioRef}
          src="/hero.mp3"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
        />
      </div>

      {/* Traditional Footer */}
      <footer className="bg-emerald-950 text-emerald-200 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Band Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-metal text-lime-400 mb-4">mysoreXPress</h3>
            <p className="mb-4">
              Blending the ancient rhythms of Carnatic music with the power of modern metal,
              creating a unique sound that bridges cultures and generations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-emerald-200 hover:text-lime-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-emerald-200 hover:text-lime-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-emerald-200 hover:text-lime-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-emerald-200 hover:text-lime-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-synth text-lime-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Tour Dates</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Merch Store</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Media Kit</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-synth text-lime-400 mb-4">Stay Updated</h4>
            <p className="mb-4">Subscribe to our newsletter for tour updates and exclusive content.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-emerald-900 px-4 py-2 rounded-l focus:outline-none focus:ring-1 
                  focus:ring-lime-400 flex-1"
              />
              <button className="bg-lime-400 hover:bg-lime-500 text-emerald-950 px-4 py-2 
                rounded-r font-bold transition-colors flex items-center">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-4 pt-8 mt-8 border-t border-emerald-900">
          <p className="text-center text-sm">
            © 2025 mysoreXPress. All rights reserved. Made with 🎸 in Mysore, India
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterWithPlayer;