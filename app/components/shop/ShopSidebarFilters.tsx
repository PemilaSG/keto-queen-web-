'use client';

import React, { useState } from 'react';
import { Minus, Plus, Star, RotateCcw } from 'lucide-react';

interface ShopSidebarFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  selectedRatings: number[];
  setSelectedRatings: React.Dispatch<React.SetStateAction<number[]>>;
  selectedDietTypes: string[];
  setSelectedDietTypes: React.Dispatch<React.SetStateAction<string[]>>;
  onClearAll: () => void;
}

export default function ShopSidebarFilters({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedBrands,
  setSelectedBrands,
  selectedRatings,
  setSelectedRatings,
  selectedDietTypes,
  setSelectedDietTypes,
  onClearAll,
}: ShopSidebarFiltersProps) {
  // Accordion collapsed state toggles
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    brands: true,
    rating: true,
    diet: true,
  });

  const [minPriceInput, setMinPriceInput] = useState(priceRange[0]);
  const [maxPriceInput, setMaxPriceInput] = useState(priceRange[1]);

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const categories = [
    { name: 'All Products', icon: '📦', count: 84 },
    { name: 'Supplements', icon: '🧴', count: 28 },
    { name: 'Beverages', icon: '🥤', count: 12 },
    { name: 'Snacks', icon: '🍪', count: 14 },
    { name: 'Breakfast', icon: '🥣', count: 8 },
    { name: 'Combo Packs', icon: '📦', count: 10 },
    { name: 'Accessories', icon: '🧴', count: 6 },
    { name: 'New Arrivals', icon: '⭐', count: 6 },
  ];

  const brands = [
    { name: 'Keto Queen', count: 60 },
    { name: 'KQ Naturals', count: 12 },
    { name: 'KQ Wellness', count: 8 },
    { name: 'KQ Foods', count: 4 },
  ];

  const ratings = [
    { stars: 5, count: 32, label: '5 Stars' },
    { stars: 4, count: 18, label: '4 Stars & Up' },
    { stars: 3, count: 6, label: '3 Stars & Up' },
    { stars: 2, count: 2, label: '2 Stars & Up' },
    { stars: 1, count: 0, label: '1 Star & Up' },
  ];

  const dietTypes = [
    { name: 'Keto Friendly', count: 72 },
    { name: 'Low Carb', count: 64 },
    { name: 'Sugar Free', count: 48 },
    { name: 'Gluten Free', count: 36 },
    { name: 'Dairy Free', count: 20 },
  ];

  const handleBrandToggle = (brandName: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandName) ? prev.filter((b) => b !== brandName) : [...prev, brandName]
    );
  };

  const handleRatingToggle = (stars: number) => {
    setSelectedRatings((prev) =>
      prev.includes(stars) ? prev.filter((r) => r !== stars) : [...prev, stars]
    );
  };

  const handleDietToggle = (dietName: string) => {
    setSelectedDietTypes((prev) =>
      prev.includes(dietName) ? prev.filter((d) => d !== dietName) : [...prev, dietName]
    );
  };

  const applyPriceFilter = () => {
    setPriceRange([minPriceInput, maxPriceInput]);
  };

  return (
    <aside className="w-full lg:w-64 space-y-6 shrink-0">
      
      {/* 1. CATEGORIES Accordion */}
      <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-2xl p-4 shadow-2xs">
        <button
          onClick={() => toggleSection('categories')}
          className="w-full flex items-center justify-between font-black text-stone-900 text-xs tracking-wider uppercase cursor-pointer mb-2"
        >
          <span>CATEGORIES</span>
          {openSections.categories ? <Minus size={14} /> : <Plus size={14} />}
        </button>

        {openSections.categories && (
          <div className="space-y-1 pt-1">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#e5eacc] text-[#1e4d2b] font-extrabold shadow-2xs'
                      : 'text-stone-700 hover:bg-stone-200/60'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{cat.icon}</span>
                    <span>{cat.name}</span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-bold">({cat.count})</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 2. PRICE RANGE Accordion */}
      <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-2xl p-4 shadow-2xs">
        <button
          onClick={() => toggleSection('price')}
          className="w-full flex items-center justify-between font-black text-stone-900 text-xs tracking-wider uppercase cursor-pointer mb-3"
        >
          <span>PRICE RANGE</span>
          {openSections.price ? <Minus size={14} /> : <Plus size={14} />}
        </button>

        {openSections.price && (
          <div className="space-y-3 pt-1">
            {/* Dual Slider bar visual */}
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="10000"
                step="250"
                value={maxPriceInput}
                onChange={(e) => setMaxPriceInput(Number(e.target.value))}
                className="w-full accent-[#1e4d2b] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-bold text-stone-600">
                <span>Rs. {minPriceInput}</span>
                <span>Rs. {maxPriceInput.toLocaleString()}</span>
              </div>
            </div>

            {/* Min, Max inputs & Apply button */}
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minPriceInput}
                onChange={(e) => setMinPriceInput(Number(e.target.value))}
                className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-stone-900 focus:outline-none focus:border-[#1e4d2b]"
              />
              <span className="text-stone-400 text-xs font-bold">to</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPriceInput}
                onChange={(e) => setMaxPriceInput(Number(e.target.value))}
                className="w-full bg-white border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-stone-900 focus:outline-none focus:border-[#1e4d2b]"
              />
              <button
                onClick={applyPriceFilter}
                className="bg-[#1e4d2b] hover:bg-[#15381f] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 3. BRANDS Accordion */}
      <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-2xl p-4 shadow-2xs">
        <button
          onClick={() => toggleSection('brands')}
          className="w-full flex items-center justify-between font-black text-stone-900 text-xs tracking-wider uppercase cursor-pointer mb-2"
        >
          <span>BRANDS</span>
          {openSections.brands ? <Minus size={14} /> : <Plus size={14} />}
        </button>

        {openSections.brands && (
          <div className="space-y-2 pt-1">
            {brands.map((b) => (
              <label
                key={b.name}
                className="flex items-center justify-between text-xs font-semibold text-stone-700 cursor-pointer hover:text-[#1e4d2b] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(b.name)}
                    onChange={() => handleBrandToggle(b.name)}
                    className="rounded-xs border-stone-300 text-[#1e4d2b] focus:ring-[#1e4d2b] accent-[#1e4d2b]"
                  />
                  <span>{b.name}</span>
                </div>
                <span className="text-[10px] text-stone-400 font-bold">({b.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 4. RATING Accordion */}
      <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-2xl p-4 shadow-2xs">
        <button
          onClick={() => toggleSection('rating')}
          className="w-full flex items-center justify-between font-black text-stone-900 text-xs tracking-wider uppercase cursor-pointer mb-2"
        >
          <span>RATING</span>
          {openSections.rating ? <Minus size={14} /> : <Plus size={14} />}
        </button>

        {openSections.rating && (
          <div className="space-y-2 pt-1">
            {ratings.map((r) => (
              <label
                key={r.stars}
                className="flex items-center justify-between text-xs font-semibold text-stone-700 cursor-pointer hover:text-[#1e4d2b] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedRatings.includes(r.stars)}
                    onChange={() => handleRatingToggle(r.stars)}
                    className="rounded-xs border-stone-300 text-[#1e4d2b] focus:ring-[#1e4d2b] accent-[#1e4d2b]"
                  />
                  <div className="flex items-center gap-1">
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                    ))}
                    {r.stars < 5 && <span className="text-[10px] text-stone-500 font-bold ml-1">& Up</span>}
                  </div>
                </div>
                <span className="text-[10px] text-stone-400 font-bold">({r.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* 5. DIET TYPE Accordion */}
      <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-2xl p-4 shadow-2xs">
        <button
          onClick={() => toggleSection('diet')}
          className="w-full flex items-center justify-between font-black text-stone-900 text-xs tracking-wider uppercase cursor-pointer mb-2"
        >
          <span>DIET TYPE</span>
          {openSections.diet ? <Minus size={14} /> : <Plus size={14} />}
        </button>

        {openSections.diet && (
          <div className="space-y-2 pt-1">
            {dietTypes.map((d) => (
              <label
                key={d.name}
                className="flex items-center justify-between text-xs font-semibold text-stone-700 cursor-pointer hover:text-[#1e4d2b] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedDietTypes.includes(d.name)}
                    onChange={() => handleDietToggle(d.name)}
                    className="rounded-xs border-stone-300 text-[#1e4d2b] focus:ring-[#1e4d2b] accent-[#1e4d2b]"
                  />
                  <span>{d.name}</span>
                </div>
                <span className="text-[10px] text-stone-400 font-bold">({d.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Clear All Filters Button */}
      <button
        onClick={onClearAll}
        className="w-full flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs py-2.5 px-4 rounded-xl border border-stone-200 transition-colors cursor-pointer"
      >
        <RotateCcw size={14} />
        <span>Clear All Filters</span>
      </button>

    </aside>
  );
}
