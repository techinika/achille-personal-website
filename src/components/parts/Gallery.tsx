"use client";

import { X, Play } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { Section } from "./Section";

const images = [
  "/images/412A4006.jpg",
  "/images/Karisimbi images(9).jpg.jpeg",
  "/images/Karisimbi images(17).jpg.jpeg",
  "/images/54859845024_93591eb2c5_o.jpg",
  "/images/Idea Rise_47.JPG",
  "/images/IMGL0080.jpg",
  "/images/IMG-20250522-WA0004.jpg",
  "/images/IMG-20250605-WA0014.jpg",
  "/images/AAA_8271.jpg",
  "/images/achille on the mic.jpeg",
];

const videos: any[] = [];

type MediaItem = {
  type: "image" | "video";
  src: string;
};

const allMedia: MediaItem[] = [
  ...images.map((src) => ({ type: "image" as const, src })),
  ...videos.map((src) => ({ type: "video" as const, src })),
];

export const Gallery = () => {
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [close]);

  return (
    <Section
      id="gallery"
      backgroundImage="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2670&auto=format&fit=crop"
      subtitle="Media"
      title="Moments & Content"
      alignment="center"
      wide
    >
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {allMedia.map((item, index) => (
            <button
              key={index}
              onClick={() => setLightbox(item)}
              className="break-inside-avoid group relative overflow-hidden rounded-lg w-full focus:outline-none"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Gallery image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="relative w-full aspect-video bg-[#1f1f1f] flex items-center justify-center overflow-hidden">
                  <video
                    src={item.src}
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#3b82f6]/90 flex items-center justify-center group-hover:bg-[#3b82f6] transition-colors">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/20 transition-colors rounded-lg" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {lightbox.type === "image" ? (
              <img
                src={lightbox.src}
                alt="Gallery image"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={lightbox.src}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </Section>
  );
};
