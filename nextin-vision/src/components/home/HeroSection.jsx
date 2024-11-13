// src/components/home/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';
import { VideoPlayer } from '../shared/VideoPlayer';
import './HeroSection.css';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="hero-section relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <VideoPlayer
          src="/assets/videos/hero-video.mp4"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      <div className="floating-shapes">
        {[...Array(5)].map((_, index) => (
          <div key={index} className={`shape shape-${index + 1}`} />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl relative">
          <motion.div
            className="text-content"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Corporate Story,{' '}
              <span className="gradient-text">Professionally Told</span>
            </h1>
            
            <p className="hero-description text-xl md:text-2xl text-gray-200 mb-8">
              Transform your brand's message into compelling visual content 
              that drives engagement and delivers results.
            </p>

            <motion.div 
              className="flex flex-wrap gap-6"
              variants={buttonVariants}
            >
              <motion.div whileHover="hover" variants={buttonVariants}>
                <Button 
                  size="lg" 
                  className="primary-button"
                >
                  <span className="button-content">
                    Schedule a Strategy Call
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
              </motion.div>

              <motion.div whileHover="hover" variants={buttonVariants}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="secondary-button"
                >
                  <span className="button-content">
                    View Our Work
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l5-5m0 0l-5-5m5 5H4" />
                    </svg>
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel" />
            </div>
            <div className="scroll-text">Scroll to explore</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;