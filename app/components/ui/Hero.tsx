'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Crown } from 'lucide-react';

export default function Hero() {
  const slides = [
    {
      titleLine1: 'FUEL YOUR BODY.',
      titleLine2: 'RULE YOUR DAY.',
      description: 'Premium Keto Products for a Healthier You.',
      buttonText: 'SHOP NOW',
      image: '/keto_queen_contact_hero.jpg',
    },
    {
      titleLine1: 'KETO ESSENTIALS.',
      titleLine2: 'ENERGY DELIVERED.',
      description: '100% Low-Carb Snacks & Pantry Staples.',
      buttonText: 'BROWSE NOW',
      image: '/keto_queen_combo_promo.jpg',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const current = slides[activeSlide];

  return (
    <section className="relative my-6 overflow-hidden rounded-3xl bg-[#f5f3e9] text-stone-900 border border-stone-200/40 shadow-xs">
      {/* Slide Content wrapper */}
      <div className="relative min-h-[380px] sm:min-h-[460px] flex items-center px-6 sm:px-12 py-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left z-10">
            {/* Crown/leaf outline icon badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-full border border-[#1e4d2b] flex items-center justify-center text-[#1e4d2b]">
                <Crown size={20} />
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1e4d2b] tracking-tight leading-none uppercase">
                {current.titleLine1}
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#e06322] tracking-tight leading-none uppercase">
                {current.titleLine2}
              </h1>
            </div>

            <p className="text-stone-700 text-base sm:text-xl font-semibold max-w-md mx-auto lg:mx-0">
              {current.description}
            </p>

            <div className="pt-2 sm:pt-4">
              <button className="bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl uppercase tracking-wider transition-colors shadow-md hover:shadow-lg cursor-pointer">
                {current.buttonText}
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
              <Image
                src={current.image}
                alt="Featured Keto Queen Products"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:text-[#1e4d2b] shadow-md transition-colors cursor-pointer z-20"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:text-[#1e4d2b] shadow-md transition-colors cursor-pointer z-20"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide Indicators Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setActiveSlide(idx)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              activeSlide === idx ? 'w-8 bg-[#1e4d2b]' : 'w-2.5 bg-stone-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
