// src/components/home/HeroSection.jsx
import React from 'react';
import { Button } from '../shared/Button';
import { VideoPlayer } from '../shared/VideoPlayer';

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <VideoPlayer
          src="/assets/videos/hero-video.mp4"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Corporate Story, Professionally Told
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Transform your brand's message into compelling visual content that drives engagement and delivers results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Schedule a Strategy Call</Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;