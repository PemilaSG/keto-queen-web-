'use client';

import React from 'react';
import { Leaf, Award, Users, ShieldCheck } from 'lucide-react';

export default function OurStory() {
  const storyFeatures = [
    {
      label: '100% Keto',
      sub: 'Made for your low-carb lifestyle',
      icon: Leaf,
    },
    {
      label: 'Premium Quality',
      sub: 'Carefully sourced ingredients',
      icon: Award,
    },
    {
      label: 'Trusted by Thousands',
      sub: 'Join our growing Keto Queen family',
      icon: Users,
    },
    {
      label: 'Satisfaction Guaranteed',
      sub: 'We stand by the quality of our products',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Story Text */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1e4d2b] uppercase tracking-wide">
              OUR STORY
            </h2>
            <div className="text-stone-700 text-sm sm:text-base leading-relaxed space-y-4 font-medium">
              <p>
                Keto Queen was born from a simple belief – that the right nutrition can transform lives. What started as a small passion project has grown into a brand trusted by thousands of happy customers.
              </p>
              <p>
                We handpick every ingredient, ensure top-notch quality, and create products that fit perfectly into your keto lifestyle.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {storyFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#fcfbf9] border border-stone-200/80 rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-xs transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full border border-[#1e4d2b] flex items-center justify-center text-[#1e4d2b] bg-white mb-4 shadow-xs">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h4 className="font-extrabold text-stone-900 text-sm tracking-tight mb-1">
                    {item.label}
                  </h4>
                  <p className="text-stone-500 text-xs font-semibold leading-snug">
                    {item.sub}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}