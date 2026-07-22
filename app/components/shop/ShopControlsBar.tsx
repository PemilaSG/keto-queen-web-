'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, LayoutGrid, List } from 'lucide-react';

interface ShopControlsBarProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  showCount: number;
  setShowCount: (count: number) => void;
  totalResults?: number;
}

export default function ShopControlsBar({
  viewMode,
  setViewMode,
  sortBy,
  setSortBy,
  showCount,
  setShowCount,
  totalResults = 84,
}: ShopControlsBarProps) {
  return (
    <div className="my-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-stone-600 mb-3">
        <Link href="/User/homePage" className="hover:text-[#1e4d2b] transition-colors">
          Home
        </Link>
        <ChevronRight size={14} className="text-stone-400" />
        <span className="text-stone-900 font-bold">Shop</span>
      </nav>

      {/* Control Bar Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200/80 pb-4">
        {/* Left: SHOP Title & Count */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1e4d2b] tracking-tight uppercase">
            SHOP
          </h2>
          <p className="text-stone-500 text-xs font-semibold mt-0.5">
            Showing 1–{showCount} of {totalResults} results
          </p>
        </div>

        {/* Right Controls */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-stone-700">
          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-stone-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-stone-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#1e4d2b] font-bold text-stone-800 cursor-pointer shadow-2xs"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Average Rating</option>
            </select>
          </div>

          {/* Show Count Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-stone-500">Show:</span>
            <select
              value={showCount}
              onChange={(e) => setShowCount(Number(e.target.value))}
              className="bg-white border border-stone-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#1e4d2b] font-bold text-stone-800 cursor-pointer shadow-2xs"
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={36}>36</option>
            </select>
          </div>

          {/* View Mode Toggle Buttons */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg border border-stone-200">
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Grid View"
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#1e4d2b] text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              aria-label="List View"
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-[#1e4d2b] text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
