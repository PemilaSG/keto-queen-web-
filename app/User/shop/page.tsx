'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import ShopHero from '@/app/components/shop/ShopHero';
import ShopControlsBar from '@/app/components/shop/ShopControlsBar';
import ShopFilterPills from '@/app/components/shop/ShopFilterPills';
import ShopSidebarFilters from '@/app/components/shop/ShopSidebarFilters';
import ShopProductGrid, { ProductItem } from '@/app/components/shop/ShopProductGrid';
import ShopPagination from '@/app/components/shop/ShopPagination';

const allProducts: ProductItem[] = [
  {
    id: 'p1',
    name: 'Omega 3 Mix',
    weight: '100g',
    price: 1499,
    originalPrice: 1890,
    discountBadge: '-20%',
    rating: 5,
    reviews: 128,
    image: '/keto_queen_contact_hero.jpg',
    category: 'Snacks',
    brand: 'Keto Queen',
    diet: ['Keto Friendly', 'Low Carb', 'Gluten Free'],
  },
  {
    id: 'p2',
    name: 'Almond Iced Coffee',
    weight: '200ml',
    price: 699,
    originalPrice: 820,
    discountBadge: '-15%',
    rating: 5,
    reviews: 95,
    image: '/keto_queen_contact_hero.jpg',
    category: 'Beverages',
    brand: 'Keto Queen',
    diet: ['Keto Friendly', 'Low Carb', 'Sugar Free'],
  },
  {
    id: 'p3',
    name: 'Omega 3 Mix (Jar)',
    weight: '200g',
    price: 2299,
    originalPrice: 2790,
    discountBadge: '-18%',
    rating: 5,
    reviews: 76,
    image: '/keto_queen_contact_hero.jpg',
    category: 'Snacks',
    brand: 'Keto Queen',
    diet: ['Keto Friendly', 'Low Carb', 'Gluten Free'],
  },
  {
    id: 'p4',
    name: 'Keto Protein Powder',
    weight: '500g',
    price: 2999,
    originalPrice: 3350,
    discountBadge: '-10%',
    rating: 5,
    reviews: 54,
    image: '/keto_queen_combo_promo.jpg',
    category: 'Supplements',
    brand: 'KQ Naturals',
    diet: ['Keto Friendly', 'Sugar Free', 'Gluten Free'],
  },
  {
    id: 'p5',
    name: 'MCT Oil',
    weight: '250ml',
    price: 1799,
    originalPrice: 2050,
    discountBadge: '-12%',
    rating: 4,
    reviews: 43,
    image: '/keto_queen_combo_promo.jpg',
    category: 'Beverages',
    brand: 'KQ Wellness',
    diet: ['Keto Friendly', 'Low Carb', 'Sugar Free', 'Dairy Free'],
  },
  {
    id: 'p6',
    name: 'Keto Granola',
    weight: '300g',
    price: 1399,
    discountBadge: 'NEW',
    badgeType: 'new',
    rating: 5,
    reviews: 31,
    image: '/keto_queen_contact_hero.jpg',
    category: 'Breakfast',
    brand: 'Keto Queen',
    diet: ['Keto Friendly', 'Low Carb', 'Gluten Free'],
  },
  {
    id: 'p7',
    name: 'Keto Bar - Chocolate Chip',
    weight: 'Box of 6',
    price: 1199,
    originalPrice: 1520,
    discountBadge: '-21%',
    rating: 4,
    reviews: 67,
    image: '/keto_queen_combo_promo.jpg',
    category: 'Snacks',
    brand: 'KQ Foods',
    diet: ['Keto Friendly', 'Sugar Free'],
  },
  {
    id: 'p8',
    name: 'Keto Peanut Butter',
    weight: '350g',
    price: 1249,
    originalPrice: 1490,
    discountBadge: '-16%',
    rating: 5,
    reviews: 39,
    image: '/keto_queen_contact_hero.jpg',
    category: 'Breakfast',
    brand: 'Keto Queen',
    diet: ['Keto Friendly', 'Low Carb', 'Sugar Free'],
  },
  {
    id: 'p9',
    name: 'Keto Matcha Latte',
    weight: '150g',
    price: 1199,
    originalPrice: 1410,
    discountBadge: '-15%',
    rating: 4,
    reviews: 23,
    image: '/keto_queen_combo_promo.jpg',
    category: 'Beverages',
    brand: 'KQ Wellness',
    diet: ['Keto Friendly', 'Sugar Free', 'Gluten Free'],
  },
  {
    id: 'p10',
    name: 'Apple Cider Vinegar',
    weight: '500ml',
    price: 899,
    originalPrice: 1080,
    discountBadge: '-17%',
    rating: 4,
    reviews: 19,
    image: '/keto_queen_combo_promo.jpg',
    category: 'Supplements',
    brand: 'KQ Naturals',
    diet: ['Keto Friendly', 'Low Carb', 'Sugar Free'],
  },
  {
    id: 'p11',
    name: 'Keto Chips - Cheese',
    weight: '50g',
    price: 549,
    discountBadge: 'NEW',
    badgeType: 'new',
    rating: 4,
    reviews: 14,
    image: '/keto_queen_contact_hero.jpg',
    category: 'Snacks',
    brand: 'Keto Queen',
    diet: ['Keto Friendly', 'Low Carb', 'Gluten Free'],
  },
  {
    id: 'p12',
    name: 'Collagen Boost',
    weight: 'Box of 10',
    price: 1299,
    originalPrice: 1490,
    discountBadge: '-13%',
    rating: 5,
    reviews: 28,
    image: '/keto_queen_combo_promo.jpg',
    category: 'Supplements',
    brand: 'KQ Wellness',
    diet: ['Keto Friendly', 'Gluten Free', 'Dairy Free'],
  },
];

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [showCount, setShowCount] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [activePill, setActivePill] = useState('All');

  // Sidebar filter states
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedDietTypes, setSelectedDietTypes] = useState<string[]>([]);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleClearAll = () => {
    setSelectedCategory('All Products');
    setPriceRange([0, 10000]);
    setSelectedBrands([]);
    setSelectedRatings([]);
    setSelectedDietTypes([]);
    setActivePill('All');
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      // Category filter
      if (selectedCategory !== 'All Products') {
        if (selectedCategory === 'New Arrivals') {
          if (p.badgeType !== 'new') return false;
        } else if (p.category !== selectedCategory) {
          return false;
        }
      }

      // Quick Pill filter
      if (activePill !== 'All') {
        if (!p.diet.includes(activePill)) return false;
      }

      // Price filter
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;

      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;

      // Rating filter
      if (selectedRatings.length > 0 && !selectedRatings.includes(p.rating)) return false;

      // Diet Type filter
      if (
        selectedDietTypes.length > 0 &&
        !selectedDietTypes.some((d) => p.diet.includes(d))
      ) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'popularity') return b.reviews - a.reviews;
      return 0; // default newest
    });
  }, [selectedCategory, activePill, priceRange, selectedBrands, selectedRatings, selectedDietTypes, sortBy]);

  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="SHOP" wishlistCount={3} cartCount={2} />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Banner */}
        <ShopHero />

        {/* Shop Controls Header (Title, Sort By, View Toggle) */}
        <ShopControlsBar
          viewMode={viewMode}
          setViewMode={setViewMode}
          sortBy={sortBy}
          setSortBy={setSortBy}
          showCount={showCount}
          setShowCount={setShowCount}
          totalResults={filteredProducts.length}
        />

        {/* Filter Pills Tag Row */}
        <ShopFilterPills
          activePill={activePill}
          setActivePill={setActivePill}
          toggleSidebarFilter={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />

        {/* Main Content Layout: Sidebar + Product Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start my-6">
          {/* Left Sidebar Filters */}
          <div
            className={`w-full lg:w-64 shrink-0 ${
              mobileSidebarOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <ShopSidebarFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              selectedRatings={selectedRatings}
              setSelectedRatings={setSelectedRatings}
              selectedDietTypes={selectedDietTypes}
              setSelectedDietTypes={setSelectedDietTypes}
              onClearAll={handleClearAll}
            />
          </div>

          {/* Right Product Grid */}
          <div className="flex-1 w-full min-w-0">
            <ShopProductGrid products={filteredProducts} viewMode={viewMode} />
            <ShopPagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={5}
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
