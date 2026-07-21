'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Heart, ShoppingCart } from 'lucide-react';

interface ProductProps {
  name: string;
  weight: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
}

export default function ProductCard({ name, weight, price, rating, reviews, image }: ProductProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="relative border border-stone-200/80 rounded-2xl p-4 bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
      
      {/* Top action row: Wishlist Heart Icon overlay */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        aria-label={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-red-500 hover:border-red-200 transition-colors shadow-xs cursor-pointer"
      >
        <Heart
          size={16}
          className={isWishlisted ? "fill-red-500 text-red-500" : "currentColor"}
        />
      </button>

      <div>
        {/* Product Image Frame */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-stone-50 border border-stone-100 flex items-center justify-center">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover p-2 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Meta */}
        <h3 className="font-extrabold text-stone-900 text-sm sm:text-base tracking-tight leading-tight line-clamp-1">
          {name}
        </h3>
        <p className="text-stone-500 text-xs sm:text-sm font-semibold mt-0.5">{weight}</p>

        {/* Rating Stars row */}
        <div className="flex items-center gap-0.5 my-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < rating
                  ? 'fill-amber-400 text-amber-400'
                  : 'text-stone-300 fill-stone-100'
              }
            />
          ))}
          <span className="text-[10px] sm:text-xs font-bold text-stone-500 ml-1">
            ({reviews})
          </span>
        </div>
      </div>

      {/* Price & Add to Cart Action Row */}
      <div className="mt-2 space-y-3">
        <p className="font-black text-[#1e4d2b] text-base sm:text-lg">{price}</p>
        
        <button className="w-full bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs hover:shadow-md">
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
      </div>

    </div>
  );
}