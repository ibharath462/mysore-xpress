"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Music, Disc, Loader } from 'lucide-react';

import Header from "../components/mxHeader";
import Floater from "../components/Floater";
import FooterPlayer from "../components/FooterPlayer";
import VideoPlayer from "../components/VideoPlayer";

const FunkyGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const observerRef = useRef();
  const galleryRef = useRef();
  const imageRefs = useRef([]);

  // Generate array of images with both compressed and full versions
  const images = Array.from({ length: 19 }, (_, i) => ({
    id: i + 1,
    compressedSrc: `/images/compressed/mxp${i + 1}.jpg`,
    fullSrc: `/images/mxp${i + 1}.jpg`,
    alt: `mysoreXPress performance ${i + 1}`,
    category: i % 3 === 0 ? 'concert' : i % 3 === 1 ? 'backstage' : 'studio'
  }));

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setImageLoading(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
    if (imageRefs.current[focusedIndex]) {
      imageRefs.current[focusedIndex].focus();
    }
  }, [focusedIndex]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleNext = useCallback(() => {
    setImageLoading(true);
    setSelectedImage((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setImageLoading(true);
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Handle keyboard navigation in grid view
  const handleGridKeyDown = useCallback((e, index) => {
    let newIndex = focusedIndex;
    const columns = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2;

    switch (e.key) {
      case 'ArrowRight':
        newIndex = Math.min(focusedIndex + 1, visibleImages.length - 1);
        break;
      case 'ArrowLeft':
        newIndex = Math.max(focusedIndex - 1, 0);
        break;
      case 'ArrowUp':
        newIndex = Math.max(focusedIndex - columns, 0);
        break;
      case 'ArrowDown':
        newIndex = Math.min(focusedIndex + columns, visibleImages.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleImageClick(index);
        break;
      default:
        return;
    }

    setFocusedIndex(newIndex);
    if (imageRefs.current[newIndex]) {
      imageRefs.current[newIndex].focus();
    }
  }, [focusedIndex, visibleImages.length]);

  // Handle keyboard navigation in lightbox view
  const handleLightboxKeyDown = useCallback((e) => {
    if (selectedImage === null) return;

    switch (e.key) {
      case 'ArrowRight':
        handleNext();
        break;
      case 'ArrowLeft':
        handlePrev();
        break;
      case 'Escape':
        handleClose();
        break;
      default:
        return;
    }
    e.preventDefault();
  }, [selectedImage, handleNext, handlePrev, handleClose]);

  useEffect(() => {
    // Initialize with first 12 images
    setVisibleImages(images.slice(0, 12));
    setLoading(false);

    // Intersection Observer for infinite scroll
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[0];
        if (lastEntry.isIntersecting && visibleImages.length < images.length) {
          const nextBatch = images.slice(
            visibleImages.length,
            visibleImages.length + 8
          );
          setVisibleImages(prev => [...prev, ...nextBatch]);
        }
      },
      { threshold: 0.5 }
    );

    if (galleryRef.current) {
      observerRef.current.observe(galleryRef.current);
    }

    window.addEventListener('keydown', handleLightboxKeyDown);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('keydown', handleLightboxKeyDown);
    };
  }, [visibleImages.length, handleLightboxKeyDown]);

  return (
    <>
    <Header />
    <section className="py-20 px-4 bg-black relative overflow-hidden min-h-screen">
      {/* Background elements remain the same */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black/50" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title section remains the same */}
        <div className="flex items-center justify-center mb-12 relative group">
          <Disc className="w-12 h-12 text-red-600 absolute -left-16 top-1/2 -translate-y-1/2 animate-spin-slow" />
          <h2 className="text-5xl md:text-7xl font-metal text-red-600 text-center relative
            animate-pulse hover:scale-105 transition-transform duration-300">
            Gallery
            <div className="absolute -inset-1 bg-red-600/20 blur-lg group-hover:bg-red-600/30 
              transition-colors duration-300" />
          </h2>
          <Disc className="w-12 h-12 text-red-600 absolute -right-16 top-1/2 -translate-y-1/2 animate-spin-slow" />
        </div>


        {/* Gallery Grid with Compressed Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max" 
          ref={galleryRef}
          role="grid"
          aria-label="Image gallery">
          {visibleImages.map((image, index) => (
            <div
              key={image.id}
              ref={el => imageRefs.current[index] = el}
              tabIndex={0}
              role="gridcell"
              className="relative group cursor-pointer transform hover:scale-105 
                transition-all duration-300 hover:z-10 focus:outline-none 
                focus:ring-2 focus:ring-red-600 rounded-lg"
              onClick={() => handleImageClick(index)}
              onKeyDown={(e) => handleGridKeyDown(e, index)}
              aria-label={`${image.alt} - ${image.category}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-black/50 
                opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300" />
              
              <div className="aspect-square overflow-hidden rounded-lg border-2 
                border-red-900/50 group-hover:border-red-600 focus:border-red-600 
                transition-all duration-300 shadow-lg group-hover:shadow-red-600/50">
                <img
                  src={image.compressedSrc}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 
                    transition-transform duration-500"
                />
                
                {/* Hover/Focus Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent 
                  opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 
                  flex items-end p-4">
                  <span className="text-red-400 font-synth text-sm uppercase tracking-wider
                    transform translate-y-4 group-hover:translate-y-0 focus:translate-y-0 
                    transition-transform duration-300">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading Indicator for Grid */}
        {loading && (
          <div className="flex justify-center mt-8">
            <Disc className="w-8 h-8 text-red-600 animate-spin" />
          </div>
        )}

        {/* Lightbox with Full-size Images and Loading State */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              className="fixed top-4 right-4 z-50 bg-black/50 text-red-600 hover:text-red-500 
                transition-colors p-2 hover:rotate-90 transform duration-300
                rounded-full backdrop-blur-sm hover:bg-black/70 border border-red-600/20"
              onClick={handleClose}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Navigation Buttons Container */}
            <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4">
              <button
                className="z-10 bg-black/50 text-red-600 hover:text-red-500 
                  transition-colors p-2 rounded-full backdrop-blur-sm
                  hover:scale-110 transform duration-300
                  hover:bg-black/70 border border-red-600/20"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              <button
                className="z-10 bg-black/50 text-red-600 hover:text-red-500 
                  transition-colors p-2 rounded-full backdrop-blur-sm
                  hover:scale-110 transform duration-300
                  hover:bg-black/70 border border-red-600/20"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Full-size Image Container with Loading State */}
            <div className="relative group max-h-[90vh] max-w-[90vw]">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <Loader className="w-8 h-8 text-red-600 animate-spin" />
                </div>
              )}
              <img
                src={images[selectedImage].fullSrc}
                alt={images[selectedImage].alt}
                onLoad={handleImageLoad}
                className="w-auto h-auto max-h-[90vh] max-w-[90vw] object-contain rounded-lg 
                  border-2 border-red-600/50 transition-transform duration-300
                  group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-red-600 font-synth
              bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-red-600/20">
              <span className="inline-block animate-pulse">
                {selectedImage + 1} / {images.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
    <Floater />
    <VideoPlayer />
    </>
  );
};

export default FunkyGallery;