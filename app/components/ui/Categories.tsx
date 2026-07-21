'use client';

import React from 'react';

interface CategoryItem {
  name: string;
  icon: React.ReactNode;
}

export default function Categories() {
  const categories: CategoryItem[] = [
    {
      name: 'Supplements',
      icon: (
        <svg className="w-10 h-10 text-[#4c3d24]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          {/* Pill Bottle */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M7 7h10M7 7v11a3 3 0 003 3h4a3 3 0 003-3V7M12 11v4M10 13h4" />
        </svg>
      ),
    },
    {
      name: 'Beverages',
      icon: (
        <svg className="w-10 h-10 text-[#4c3d24]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          {/* Glass with Straw */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h10l-1.5 15A2 2 0 0112.5 20h-3a2 2 0 01-2-1.8L6 3zM16 3l1.5-2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h6M7 13h7.5" />
        </svg>
      ),
    },
    {
      name: 'Snacks',
      icon: (
        <svg className="w-10 h-10 text-[#4c3d24]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          {/* Bowl of Snack/Nuts */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 0018 0H3zM6 12V9a2 2 0 012-2h8a2 2 0 012 2v3M9 7l1-2M15 7l-1-2" />
        </svg>
      ),
    },
    {
      name: 'Breakfast',
      icon: (
        <svg className="w-10 h-10 text-[#4c3d24]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          {/* Cereal Bowl & Spoon */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 13a10 10 0 0020 0H2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 13l3.5-5.5a1 1 0 011.5 1.2L18.5 13H16z" />
          <circle cx="7" cy="11" r="1.5" />
          <circle cx="12" cy="10" r="1" />
        </svg>
      ),
    },
    {
      name: 'Combo Packs',
      icon: (
        <svg className="w-10 h-10 text-[#4c3d24]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          {/* Cardboard Box */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      name: 'Accessories',
      icon: (
        <svg className="w-10 h-10 text-[#4c3d24]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          {/* Shaker / Pump Bottle */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2M6 8l1.5 12h9L18 8H6z" />
          <circle cx="12" cy="14" r="1.5" />
        </svg>
      ),
    },
    {
      name: 'All Products',
      icon: (
        <svg className="w-10 h-10 text-[#4c3d24]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          {/* Grid Layout Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="my-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className="bg-[#fcfaf4] hover:bg-[#f6f4eb] border border-stone-200/70 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 transition-all hover:scale-[1.02] hover:shadow-xs group cursor-pointer"
          >
            <div className="transform group-hover:scale-105 transition-transform duration-200">
              {cat.icon}
            </div>
            <span className="text-stone-800 text-xs sm:text-sm font-bold tracking-wide">
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}