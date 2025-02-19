"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  ArrowRight,
  Music,
  Headphones,
  PhoneCall,
} from "lucide-react";

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
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      {/* Traditional Footer */}
      <footer className="bg-black text-gray-400 pt-12 sm:pt-16 pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Band Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-origin text-[#ff4a4a] mb-4 uppercase tracking-wide">
              mysoreXPress
            </h3>
            <p className="mb-4 text-sm sm:text-base font-origin">
              Mysore Xpress is a modern fusion pop rock act hailing from
              heritage city Mysore, South India. MX blends rich traditional
              sounds with a modern twist.
            </p>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href="https://www.instagram.com/mysore_xpress/"
                className="text-gray-400 hover:text-[#ff4a4a] transition-colors"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@MysoreXpressTheBand"
                className="text-gray-400 hover:text-[#ff4a4a] transition-colors"
              >
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                target="_blank"
                href="mailto:mysorexpresstheband@gmail.com"
                className="text-gray-400 hover:text-[#ff4a4a] transition-colors"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                target="_blank"
                href="tel:+919008079783"
                className="text-gray-400 hover:text-[#ff4a4a] transition-colors"
              >
                <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-origin text-[#ff4a4a] mb-3 sm:mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm sm:text-base font-origin">
              <li>
                <a
                  href="/music"
                  className="hover:text-[#ff4a4a] transition-colors"
                >
                  Music
                </a>
              </li>
              <li>
                <a
                  href="/videos"
                  className="hover:text-[#ff4a4a] transition-colors"
                >
                  Videos
                </a>
              </li>
              <li>
                <a
                  href="gallery"
                  className="hover:text-[#ff4a4a] transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff4a4a] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-origin text-[#ff4a4a] mb-3 sm:mb-4 uppercase tracking-wide">
              Recent Releases
            </h4>
            <ul className="space-y-2 text-sm sm:text-base font-origin">
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=2gCqPjVcwk4"
                  className="hover:text-[#ff4a4a] transition-colors"
                >
                  Ainvayi Ainvayi x Sadi Gali (Cover)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=3nHquysXmYk"
                  className="hover:text-[#ff4a4a] transition-colors"
                >
                  Pavizha Mazhaye
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=T_7XNV1TvnM"
                  className="hover:text-[#ff4a4a] transition-colors"
                >
                  Uyirin Uyire x Zara Zara (Cover)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=e310HziQDnY"
                  className="hover:text-[#ff4a4a] transition-colors"
                >
                 Sapta Sagaradacche Ello (Cover)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-800 font-origin">
          <p className="text-center text-xs sm:text-sm">
            © 2025 mysoreXPress. All rights reserved.
          </p>
          <p className="text-center text-xs sm:text-sm mt-2">
            Made with  🎸🥁🤘🪈  from Mysore, India
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterWithPlayer;
