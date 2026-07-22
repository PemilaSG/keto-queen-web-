'use client';

import React from 'react';
import { Filter } from 'lucide-react';

interface ShopFilterPillsProps {
  activePill: string;
  setActivePill: (pill: string) => void;
  toggleSidebarFilter?: () => void;
}

export default function ShopFilterPills({
  activePill,
  setActivePill,
  toggleSidebarFilter,
}: ShopFilterPillsProps) {
  const pills = ['All', 'Keto Friendly', 'Low Carb', 'Sugar Free', 'Gluten Free'];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 my-4">
      {/* Quick Tag Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {pills.map((pill) => {
          const isActive = activePill === pill;
          return (
            <button
              key={pill}
              onClick={() => setActivePill(pill)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#1e4d2b] text-white shadow-xs'
                  : 'bg-[#f6f5ef] text-stone-700 hover:bg-stone-200/80 border border-stone-200/60'
              }`}
            >
              {pill}
            </button>
          );
        })}
      </div>

      {/* Filter Toggle Button for Mobile/Responsive */}
      {toggleSidebarFilter && (
        <button
          onClick={toggleSidebarFilter}
          className="flex items-center gap-2 bg-[#f6f5ef] hover:bg-stone-200/80 text-stone-800 border border-stone-200/80 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-2xs"
        >
          <Filter size={14} className="text-[#1e4d2b]" />
          <span>Filter</span>
        </button>
      )}
    </div>
  );
}
