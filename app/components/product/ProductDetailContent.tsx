'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  ShoppingBag,
  Heart,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Minus,
  Plus,
  ArrowRight,
  Share2,
  Flame,
  Zap,
  RotateCcw,
  Sparkles
} from 'lucide-react';

interface ProductDetailProps {
  productId?: string;
}

export default function ProductDetailContent({ productId = 'omega-3-mix' }: ProductDetailProps) {
  const [selectedVariant, setSelectedVariant] = useState('250g');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'nutrition' | 'ingredients' | 'reviews'>('details');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // Gallery Image State
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    '/keto_queen_contact_hero.jpg',
    '/keto_queen_combo_promo.jpg',
    '/biglogo.jpg',
  ];

  const variants = [
    { size: '250g', price: 1480, original: 1850, save: 370 },
    { size: '500g', price: 2750, original: 3400, save: 650 },
    { size: '1kg Family Pack', price: 5200, original: 6500, save: 1300 },
  ];

  const currentPrice = variants.find((v) => v.size === selectedVariant) || variants[0];

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div className="py-8 sm:py-12 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-stone-600">
          <Link href="/User/homePage" className="hover:text-[#1e4d2b] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-stone-400" />
          <Link href="/User/shop" className="hover:text-[#1e4d2b] transition-colors">
            Shop
          </Link>
          <ChevronRight size={14} className="text-stone-400" />
          <span className="text-stone-900 font-bold">Omega 3 Keto Mix</span>
        </nav>

        {/* Top Notification Toast */}
        {addedToCart && (
          <div className="bg-emerald-800 text-white p-4 rounded-2xl flex items-center justify-between shadow-lg animate-fadeIn">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-amber-400" />
              <span className="text-xs sm:text-sm font-extrabold">
                Added {quantity} × Omega 3 Keto Mix ({selectedVariant}) to your shopping cart!
              </span>
            </div>
            <Link
              href="/cart"
              className="bg-amber-400 hover:bg-amber-500 text-stone-900 font-black text-xs px-4 py-2 rounded-xl uppercase tracking-wider transition-colors shrink-0"
            >
              View Cart
            </Link>
          </div>
        )}

        {/* Main Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Image Container */}
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-stone-200/80 shadow-lg bg-stone-50 group">
              <Image
                src={images[activeImage]}
                alt="Omega 3 Keto Mix"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />

              {/* Discount Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                <span className="bg-[#e06322] text-white text-xs font-black px-3 py-1 rounded-full shadow-xs uppercase tracking-wider">
                  -20% OFF
                </span>
                <span className="bg-[#1e4d2b] text-amber-400 text-xs font-black px-3 py-1 rounded-full shadow-xs uppercase tracking-wider flex items-center gap-1">
                  👑 BESTSELLER
                </span>
              </div>

              {/* Wishlist Trigger */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label="Add to Wishlist"
                className={`absolute top-4 right-4 w-11 h-11 rounded-2xl backdrop-blur-md border flex items-center justify-center transition-all cursor-pointer shadow-md ${
                  isWishlisted
                    ? 'bg-red-500 text-white border-red-500'
                    : 'bg-white/80 border-white text-stone-700 hover:bg-white'
                }`}
              >
                <Heart size={20} className={isWishlisted ? 'fill-current' : ''} />
              </button>
            </div>

            {/* Thumbnail Selection Strip */}
            <div className="flex items-center gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === idx
                      ? 'border-[#1e4d2b] ring-2 ring-[#1e4d2b]/20 scale-105'
                      : 'border-stone-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="Product Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Info & Actions Panel */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Title & Reviews */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-100 text-[#1e4d2b] text-[11px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  100% Keto Certified
                </span>
                <span className="text-xs text-stone-400 font-semibold">SKU: KQ-OM3-250</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 uppercase font-sans tracking-tight">
                OMEGA 3 KETO MIX
              </h1>

              <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
                Ultra-low carb roasted organic almond, walnut, pumpkin seed, and flaxseed cluster blend. Crafted to fuel ketosis and maintain clean energy.
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-stone-800">4.9</span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500 font-medium underline">128 Verified Customer Reviews</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 bg-[#f9f8f3] border border-stone-200/80 rounded-2xl flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-black text-[#1e4d2b]">
                    Rs. {currentPrice.price.toLocaleString()}
                  </span>
                  <span className="text-sm font-bold text-stone-400 line-through">
                    Rs. {currentPrice.original.toLocaleString()}
                  </span>
                </div>
                <span className="text-[11px] text-emerald-700 font-bold">
                  You save Rs. {currentPrice.save.toLocaleString()} (20% Off)
                </span>
              </div>

              {/* Stock Pulse Indicator */}
              <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                <span className="text-xs font-extrabold text-emerald-800">In Stock</span>
              </div>
            </div>

            {/* Pack Size / Variant Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                Select Package Size:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {variants.map((v) => (
                  <button
                    key={v.size}
                    type="button"
                    onClick={() => setSelectedVariant(v.size)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      selectedVariant === v.size
                        ? 'border-[#1e4d2b] bg-[#1e4d2b]/5 ring-2 ring-[#1e4d2b]/20 font-black text-[#1e4d2b]'
                        : 'border-stone-200 bg-white hover:border-stone-300 text-stone-700 font-semibold'
                    }`}
                  >
                    <span className="block text-xs uppercase">{v.size}</span>
                    <span className="text-[11px] text-stone-500 block mt-0.5">Rs. {v.price.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Add to Cart Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-stone-200 bg-stone-50 rounded-2xl p-1 shrink-0">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 rounded-xl bg-white text-stone-700 hover:bg-stone-100 flex items-center justify-center font-bold transition-colors cursor-pointer shadow-2xs"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 text-center font-black text-sm text-stone-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 rounded-xl bg-white text-stone-700 hover:bg-stone-100 flex items-center justify-center font-bold transition-colors cursor-pointer shadow-2xs"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                {/* Add to Cart Primary Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#1e4d2b] hover:bg-[#15381f] text-white font-black text-xs sm:text-sm py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer uppercase tracking-wider"
                >
                  <ShoppingBag size={18} />
                  <span>ADD TO CART</span>
                </button>
              </div>

              {/* Buy It Now Secondary Button */}
              <Link
                href="/cart"
                className="w-full bg-[#e06322] hover:bg-[#c95318] text-white font-black text-xs sm:text-sm py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer uppercase tracking-wider"
              >
                <span>BUY IT NOW</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-stone-100 grid grid-cols-3 gap-3 text-center text-[11px] font-bold text-stone-600">
              <div className="p-2.5 bg-stone-50 rounded-xl space-y-1">
                <Truck size={18} className="mx-auto text-[#1e4d2b]" />
                <span>Fast Shipping</span>
              </div>
              <div className="p-2.5 bg-stone-50 rounded-xl space-y-1">
                <ShieldCheck size={18} className="mx-auto text-[#1e4d2b]" />
                <span>100% Quality Guaranteed</span>
              </div>
              <div className="p-2.5 bg-stone-50 rounded-xl space-y-1">
                <RotateCcw size={18} className="mx-auto text-[#1e4d2b]" />
                <span>7-Day Easy Return</span>
              </div>
            </div>

          </div>
        </div>

        {/* Keto Macro Highlights Card Bar */}
        <div className="bg-[#183921] text-white rounded-3xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center shadow-md">
          <div className="space-y-1 border-r border-white/10 last:border-none">
            <span className="block text-2xl sm:text-3xl font-black text-amber-400">1.8g</span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-100">Net Carbs / Serving</span>
          </div>
          <div className="space-y-1 border-r border-white/10 last:border-none">
            <span className="block text-2xl sm:text-3xl font-black text-white">18.5g</span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-100">Healthy Fats</span>
          </div>
          <div className="space-y-1 border-r border-white/10 last:border-none">
            <span className="block text-2xl sm:text-3xl font-black text-white">6.2g</span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-100">Plant Protein</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-black text-amber-400">0g</span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-100">Added Sugar</span>
          </div>
        </div>

        {/* Product Details Tabs (Description, Nutrition, Ingredients, Reviews) */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 space-y-6 shadow-xs">
          
          {/* Tab Selection Controls */}
          <div className="flex items-center gap-2 border-b border-stone-200 pb-4 overflow-x-auto">
            {[
              { id: 'details', label: 'Description & Benefits' },
              { id: 'nutrition', label: 'Nutrition Facts Label' },
              { id: 'ingredients', label: 'Clean Ingredients' },
              { id: 'reviews', label: 'Customer Reviews (128)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#1e4d2b] text-white shadow-xs'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: DESCRIPTION */}
          {activeTab === 'details' && (
            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
              <p>
                Our <strong>Omega 3 Keto Mix</strong> is carefully formulated for keto lovers, low-carb dieters, and healthy snack enthusiasts. Made from slow-roasted California almonds, organic walnuts, pumpkin seeds, and flaxseed clusters naturally sweetened with non-glycemic erythritol.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                <li>Rich in Essential Omega-3 Fatty Acids for heart and brain health.</li>
                <li>Zero blood sugar spikes — perfect for maintaining deep ketosis.</li>
                <li>High dietary fiber content keeps you feeling full longer.</li>
              </ul>
            </div>
          )}

          {/* TAB 2: NUTRITION FACTS */}
          {activeTab === 'nutrition' && (
            <div className="max-w-md border-2 border-stone-900 rounded-2xl p-5 bg-white space-y-2 font-mono text-stone-900 text-xs">
              <h3 className="text-lg font-black uppercase border-b-4 border-stone-900 pb-1 font-sans">
                Nutrition Facts
              </h3>
              <p className="text-xs font-bold border-b-2 border-stone-900 pb-1">Serving Size: 30g (1/4 Cup)</p>
              <div className="flex justify-between font-extrabold text-sm border-b border-stone-400 py-1">
                <span>Calories</span>
                <span>195</span>
              </div>
              <div className="space-y-1 pt-1">
                <div className="flex justify-between border-b border-stone-200 py-1">
                  <span><strong>Total Fat</strong> 18.5g</span>
                  <span><strong>24%</strong></span>
                </div>
                <div className="flex justify-between border-b border-stone-200 py-1 pl-4 text-stone-600">
                  <span>Saturated Fat 2.1g</span>
                  <span>10%</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 py-1 pl-4 text-stone-600">
                  <span>Omega-3 Fatty Acids 3.4g</span>
                  <span>—</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 py-1">
                  <span><strong>Total Carbohydrates</strong> 5.8g</span>
                  <span><strong>2%</strong></span>
                </div>
                <div className="flex justify-between border-b border-stone-200 py-1 pl-4 text-stone-600">
                  <span>Dietary Fiber 4.0g</span>
                  <span>14%</span>
                </div>
                <div className="flex justify-between border-b-2 border-stone-900 py-1 pl-4 text-emerald-800 font-extrabold">
                  <span>NET CARBS 1.8g</span>
                  <span>✓ KETO</span>
                </div>
                <div className="flex justify-between py-1">
                  <span><strong>Protein</strong> 6.2g</span>
                  <span><strong>12%</strong></span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INGREDIENTS */}
          {activeTab === 'ingredients' && (
            <div className="space-y-3 text-xs sm:text-sm text-stone-700 font-medium">
              <p className="font-bold text-stone-900">100% Natural Clean Ingredients:</p>
              <p className="p-4 bg-stone-50 border border-stone-200 rounded-2xl leading-relaxed">
                Organic Roasted Almonds, Organic Walnuts, Roasted Pumpkin Seeds, Whole Golden Flaxseeds, Organic Chia Seeds, Organic Coconut Oil, Natural Erythritol, Pink Himalayan Sea Salt, Organic Cinnamon.
              </p>
              <p className="text-stone-500 text-xs font-semibold">
                 Allergen Warning: Contains Tree Nuts (Almonds, Walnuts). Packed in a gluten-free facility.
              </p>
            </div>
          )}

          {/* TAB 4: REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <h3 className="text-base font-black text-stone-900 uppercase">Customer Reviews</h3>
                  <p className="text-stone-500 text-xs font-medium">Based on 128 verified keto buyer ratings.</p>
                </div>
                <button className="bg-[#1e4d2b] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl uppercase tracking-wider">
                  Write a Review
                </button>
              </div>

              <div className="space-y-4">
                {[
                  { name: 'Dilhani S.', date: 'July 18, 2026', comment: 'The best keto snack ever! Crunchy, delicious, and doesn\'t break ketosis at all.' },
                  { name: 'Kavinda P.', date: 'July 05, 2026', comment: 'Super fast delivery and top quality nuts. Perfect with my morning iced coffee!' },
                ].map((rev, i) => (
                  <div key={i} className="p-4 bg-stone-50 border border-stone-200/80 rounded-2xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-stone-900 text-xs">{rev.name}</span>
                      <span className="text-[11px] text-stone-400 font-semibold">{rev.date}</span>
                    </div>
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={14} className="fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-stone-600 font-medium">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
