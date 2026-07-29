'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  ShoppingBag,
  Trash2,
  Star,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Package
} from 'lucide-react';

interface WishlistItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  netCarbs: string;
  inStock: boolean;
}

export default function WishlistContent() {
  const [items, setItems] = useState<WishlistItem[]>([
    {
      id: 'wish-1',
      name: 'Omega 3 Keto Mix',
      variant: '250g Pack',
      price: 1480,
      originalPrice: 1850,
      rating: 4.9,
      image: '/keto_queen_contact_hero.jpg',
      netCarbs: '1.8g Net Carbs',
      inStock: true,
    },
    {
      id: 'wish-2',
      name: 'Almond Iced Coffee',
      variant: '500ml Bottle',
      price: 890,
      originalPrice: 1050,
      rating: 4.8,
      image: '/keto_queen_combo_promo.jpg',
      netCarbs: '0.9g Net Carbs',
      inStock: true,
    },
    {
      id: 'wish-3',
      name: 'Keto Protein Powder',
      variant: 'Chocolate (500g Tub)',
      price: 2480,
      originalPrice: 2950,
      rating: 5.0,
      image: '/biglogo.jpg',
      netCarbs: '2.1g Net Carbs',
      inStock: true,
    },
    {
      id: 'wish-4',
      name: 'MCT Oil Energy Booster',
      variant: '500ml Bottle',
      price: 1950,
      originalPrice: 2300,
      rating: 4.7,
      image: '/keto_queen_contact_hero.jpg',
      netCarbs: '0g Net Carbs',
      inStock: true,
    },
  ]);

  const [notification, setNotification] = useState('');

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const moveToCart = (item: WishlistItem) => {
    setNotification(`Moved ${item.name} to your shopping cart!`);
    removeItem(item.id);
    setTimeout(() => setNotification(''), 3000);
  };

  const moveAllToCart = () => {
    setNotification(`Moved all ${items.length} items to your shopping cart!`);
    setItems([]);
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="py-8 sm:py-12 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-stone-600">
          <Link href="/User/homePage" className="hover:text-[#1e4d2b] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-stone-400" />
          <span className="text-stone-900 font-bold">My Wishlist</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1e4d2b] uppercase tracking-tight font-sans">
              MY WISHLIST
            </h1>
            <p className="text-stone-500 text-xs sm:text-sm font-medium mt-0.5">
              Your saved keto favorites and quick order items.
            </p>
          </div>

          {items.length > 0 && (
            <div className="flex items-center gap-3">
              <button
                onClick={moveAllToCart}
                className="bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
              >
                Move All to Cart
              </button>
              <button
                onClick={() => setItems([])}
                className="text-xs text-stone-400 hover:text-stone-700 font-bold underline cursor-pointer"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="bg-emerald-800 text-white p-4 rounded-2xl flex items-center justify-between shadow-lg animate-fadeIn">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold">
              <CheckCircle2 size={18} className="text-amber-400" />
              <span>{notification}</span>
            </div>
            <Link
              href="/cart"
              className="bg-amber-400 text-stone-900 font-black text-xs px-3.5 py-1.5 rounded-xl uppercase tracking-wider"
            >
              View Cart
            </Link>
          </div>
        )}

        {/* Items Grid / Empty State */}
        {items.length === 0 ? (
          <div className="text-center py-16 bg-[#fcfbf9] border border-stone-200 rounded-3xl space-y-4">
            <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
              <Heart size={32} />
            </div>
            <h2 className="text-xl font-black text-stone-900 uppercase">Your Wishlist is Empty</h2>
            <p className="text-stone-500 text-xs font-medium max-w-sm mx-auto">
              You haven&apos;t saved any keto products to your wishlist yet.
            </p>
            <div className="pt-2">
              <Link
                href="/User/shop"
                className="inline-flex items-center gap-2 bg-[#1e4d2b] text-white font-extrabold text-xs px-6 py-3.5 rounded-xl uppercase tracking-wider shadow-xs"
              >
                <span>Explore Keto Shop</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-stone-200/90 rounded-3xl p-4 flex flex-col justify-between space-y-4 shadow-2xs hover:shadow-xs transition-shadow relative group"
              >
                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  aria-label="Remove from wishlist"
                  className="absolute top-6 right-6 w-8 h-8 rounded-full bg-stone-100 text-stone-400 hover:text-red-600 hover:bg-red-50 flex items-center justify-center transition-colors z-10 cursor-pointer"
                >
                  <Trash2 size={14} />
                </button>

                {/* Top Image & Net Carb Tag */}
                <div className="space-y-3">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-stone-50 border border-stone-100">
                    <Image src={item.image} alt={item.name} fill className="object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute bottom-2 left-2">
                      <span className="bg-emerald-800 text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase">
                        {item.netCarbs}
                      </span>
                    </div>
                  </div>

                  {/* Title & Ratings */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-amber-400 text-xs">
                      <Star size={12} className="fill-current" />
                      <span className="font-bold text-stone-800 text-[11px]">{item.rating}</span>
                    </div>
                    <h3 className="font-black text-stone-900 text-sm uppercase leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-stone-400 text-xs font-medium">{item.variant}</p>
                  </div>
                </div>

                {/* Price & Move to Cart Button */}
                <div className="space-y-3 pt-2 border-t border-stone-100">
                  <div className="flex items-baseline justify-between">
                    <span className="font-black text-[#1e4d2b] text-base">
                      Rs. {item.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-stone-400 line-through font-semibold">
                      Rs. {item.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => moveToCart(item)}
                    className="w-full bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    <ShoppingBag size={14} />
                    <span>MOVE TO CART</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
