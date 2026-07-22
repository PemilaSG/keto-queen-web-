'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Heart, ShoppingCart } from 'lucide-react';

export interface ProductItem {
  id: string;
  name: string;
  weight: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  badgeType?: 'discount' | 'new';
  rating: number;
  reviews: number;
  image: string;
  category: string;
  brand: string;
  diet: string[];
}

interface ShopProductGridProps {
  products: ProductItem[];
  viewMode: 'grid' | 'list';
}

export default function ShopProductGrid({ products, viewMode }: ShopProductGridProps) {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  if (products.length === 0) {
    return (
      <div className="bg-stone-50 border border-dashed border-stone-300 rounded-2xl p-12 text-center my-6">
        <p className="text-stone-500 font-extrabold text-base">No products match your selected filters.</p>
        <p className="text-stone-400 text-xs mt-1">Try clearing some filters to view more items.</p>
      </div>
    );
  }

  return (
    <div
      className={
        viewMode === 'grid'
          ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'
          : 'space-y-4'
      }
    >
      {products.map((p) => {
        const isWishlisted = wishlist.includes(p.id);

        if (viewMode === 'list') {
          return (
            <div
              key={p.id}
              className="bg-white border border-stone-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow group"
            >
              {/* Product Image */}
              <div className="relative w-32 h-32 rounded-xl overflow-hidden bg-stone-50 border border-stone-100 shrink-0">
                <Image src={p.image} alt={p.name} fill className="object-cover p-2" />
                {p.discountBadge && (
                  <span
                    className={`absolute top-2 left-2 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-2xs ${
                      p.badgeType === 'new' ? 'bg-[#1e4d2b]' : 'bg-[#e06322]'
                    }`}
                  >
                    {p.discountBadge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="flex-1 space-y-1 text-center sm:text-left">
                <h3 className="font-extrabold text-stone-900 text-base">{p.name}</h3>
                <p className="text-stone-500 text-xs font-semibold">{p.weight}</p>
                
                {/* Rating */}
                <div className="flex items-center justify-center sm:justify-start gap-0.5 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={
                        i < p.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-stone-300 fill-stone-100'
                      }
                    />
                  ))}
                  <span className="text-[11px] font-bold text-stone-500 ml-1">
                    ({p.reviews})
                  </span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex flex-col items-center sm:items-end gap-3 shrink-0">
                <div className="text-right">
                  <span className="font-black text-[#1e4d2b] text-xl">
                    Rs. {p.price.toLocaleString()}
                  </span>
                  {p.originalPrice && (
                    <span className="text-stone-400 text-xs line-through ml-2 font-bold">
                      Rs. {p.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleWishlist(p.id)}
                    aria-label="Wishlist"
                    className="p-2.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-400 transition-colors shadow-2xs cursor-pointer"
                  >
                    <Heart
                      size={16}
                      className={isWishlisted ? 'fill-red-500 text-red-500' : ''}
                    />
                  </button>
                  <button className="bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors cursor-pointer shadow-xs">
                    <ShoppingCart size={15} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          );
        }

        // Grid View Card
        return (
          <div
            key={p.id}
            className="relative bg-white border border-stone-200/80 rounded-2xl p-4 flex flex-col justify-between hover:shadow-lg transition-all duration-200 group"
          >
            {/* Top Badge overlay */}
            {p.discountBadge && (
              <span
                className={`absolute top-4 left-4 z-10 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow-2xs ${
                  p.badgeType === 'new' ? 'bg-[#1e4d2b]' : 'bg-[#e06322]'
                }`}
              >
                {p.discountBadge}
              </span>
            )}

            {/* Wishlist Heart button */}
            <button
              onClick={() => toggleWishlist(p.id)}
              aria-label="Wishlist"
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-red-500 hover:border-red-200 transition-colors shadow-2xs cursor-pointer"
            >
              <Heart
                size={15}
                className={isWishlisted ? 'fill-red-500 text-red-500' : ''}
              />
            </button>

            <div>
              {/* Image Container */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-stone-50 border border-stone-100 flex items-center justify-center">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover p-2 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title & Weight */}
              <h3 className="font-extrabold text-stone-900 text-sm tracking-tight leading-tight line-clamp-1">
                {p.name}
              </h3>
              <p className="text-stone-500 text-xs font-semibold mt-0.5">{p.weight}</p>

              {/* Ratings */}
              <div className="flex items-center gap-0.5 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    className={
                      i < p.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-stone-300 fill-stone-100'
                    }
                  />
                ))}
                <span className="text-[10px] font-bold text-stone-500 ml-1">
                  ({p.reviews})
                </span>
              </div>
            </div>

            {/* Price & Add to Cart button */}
            <div className="mt-2 space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="font-black text-[#1e4d2b] text-base">
                  Rs. {p.price.toLocaleString()}
                </span>
                {p.originalPrice && (
                  <span className="text-stone-400 text-xs line-through font-bold">
                    Rs. {p.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <button className="w-full bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs hover:shadow-xs">
                <ShoppingCart size={15} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
