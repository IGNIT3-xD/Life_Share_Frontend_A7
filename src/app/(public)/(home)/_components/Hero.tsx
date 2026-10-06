"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeartPulse, UserGroup } from "lucide-react";

const heroVideo1 = "/hero_video_1.mp4";
const heroVideo2 = "/hero_video_2.mp4";
const heroVideo3 = "/hero_video_3.mp4";

const slides = [
  {
    id: 1,
    videoSrcWebm:
      "https://cdn.coverr.co/videos/coverr-a-woman-looking-at-the-horizon-1571/1080p.webm",
    videoSrcMp4: heroVideo1,
    poster:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2560&auto=format&fit=crop",
    alt: "Woman looking towards the horizon",
  },
  {
    id: 2,
    videoSrcWebm:
      "https://cdn.coverr.co/videos/coverr-a-couple-hugging-each-other-1571/1080p.webm",
    videoSrcMp4: heroVideo2,
    poster:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2560&auto=format&fit=crop",
    alt: "Couple embracing",
  },
  {
    id: 3,
    videoSrcWebm:
      "https://cdn.coverr.co/videos/coverr-a-man-and-a-woman-walking-in-the-park-1571/1080p.webm",
    videoSrcMp4: heroVideo3,
    poster:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2560&auto=format&fit=crop",
    alt: "Man and woman walking in the park",
  },
];

const waveEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

const slideVariants: Variants = {
  initial: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    scale: 1.05,
  },
  animate: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    scale: 1,
    transition: { duration: 1.2, ease: waveEase },
  },
  exit: {
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    scale: 0.95,
    transition: { duration: 0.8, ease: waveEase },
  },
};

const VideoSlide = ({
  srcWebm,
  srcMp4,
  poster,
  isActive,
  alt,
}: {
  srcWebm: string;
  srcMp4: string;
  poster: string;
  isActive: boolean;
  alt: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      videoRef.current
        .play()
        .catch((error) => console.warn("Autoplay prevented:", error));
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover object-center"
      aria-label={alt}
    >
      <source src={srcWebm} type="video/webm" />
      <source src={srcMp4} type="video/mp4" />
    </video>
  );
};

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    // FIX: Use 100dvh for mobile browser compatibility
    <section className="relative w-full h-dvh min-h-150 overflow-hidden bg-black text-white font-sans">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 perspective-[1000px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full origin-right will-change-[transform,clip-path]"
            style={{ transformOrigin: "right center" }}
          >
            <VideoSlide
              srcWebm={slides[currentIndex].videoSrcWebm}
              srcMp4={slides[currentIndex].videoSrcMp4}
              poster={slides[currentIndex].poster}
              isActive={true}
              alt={slides[currentIndex].alt}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Overlay - Fixed bg-gradient typo */}
        <div className="absolute inset-0 z-20 bg-linear-to-r from-black/80 via-black/50 to-black/20 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-30 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto pt-20 pointer-events-none">
        {/* Text Block - Adjusted margins and text sizes for mobile */}
        <div className="max-w-2xl mt-auto mb-24 md:mb-40 pointer-events-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs md:text-sm font-medium tracking-wide mb-4 md:mb-6 font-graphik"
          >
            HSA/FSA Eligible
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            // Adjusted text sizes: text-5xl is good for mobile, scales up on larger screens
            className="font-financier text-5xl md:text-6xl lg:text-7xl font-light italic leading-tight tracking-tight mb-4 md:mb-6"
          >
            Be the reason <br /> someone survives.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            // Adjusted paragraph sizing for mobile readability
            className="font-graphik text-white/90 font-light max-w-xl mb-8 md:mb-10 leading-relaxed"
          >
            Every drop matters. Connect with nearby blood donors, request blood
            in an emergency, and help save lives when every second counts.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 pointer-events-auto">
            <Button className="font-graphik bg-[#B15A36] font-medium px-3 py-2 r">
              <UserGroup /> Find a donor
            </Button>
            <Button variant={"secondary"} className="font-graphik">
              <HeartPulse />
              Request blood
            </Button>
          </div>
        </div>

        {/* Bottom Statistics Grid - Hidden on mobile, visible on md and up */}
        <div className="hidden md:flex absolute bottom-12 left-6 md:left-16 lg:left-24 flex-wrap gap-6 md:gap-12 pointer-events-auto">
          {[
            {
              title: "24/7 Emergency Support",
              sub: " Help when it matters most",
            },
            { title: "Verified Donors", sub: " Connect with trusted donors" },
            { title: "Fast Response", sub: "Get help when you need it" },
          ].map((stat, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <div className="hidden md:block w-px bg-white/30 h-12 self-center" />
              )}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-xl md:text-2xl font-semibold font-financier tracking-tight">
                  {stat.title}
                </span>
                <span className="text-sm md:text-base text-white/80 font-light mt-1 font-graphik">
                  {stat.sub}
                </span>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
