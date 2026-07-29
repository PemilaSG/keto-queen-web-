'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingBag,
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  ShieldCheck,
  Truck,
  Tag,
  CheckCircle2,
  ChevronRight,
  RotateCcw,
  Lock
} from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  originalPrice: number;
  image: string;
  quantity: number;
  netCarbs: string;
}

export default function CartContent() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 'item-1',
      name: 'Omega 3 Keto Mix',
      variant: '250g Pack',
      price: 1480,
      originalPrice: 1850,
      image: '/keto_queen_contact_hero.jpg',
      quantity: 2,
      netCarbs: '1.8g Net Carbs',
    },
    {
      id: 'item-2',
      name: 'Almond Iced Coffee',
      variant: '500ml Bottle',
      price: 890,
      originalPrice: 1050,
      image: '/keto_queen_combo_promo.jpg',
      quantity: 1,
      netCarbs: '0.9g Net Carbs',
    },
    {
      id: 'item-3',
      name: 'Keto Protein Powder',
      variant: 'Chocolate (500g Tub)',
      price: 2480,
      originalPrice: 2950,
      image: '/biglogo.jpg',
      quantity: 1,
      netCarbs: '2.1g Net Carbs',
    },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'KETO10') {
      setDiscountPercent(10);
      setPromoMessage('🎉 Promo code KETO10 applied! 10% Discount unlocked.');
    } else {
      setPromoMessage('❌ Invalid promo code. Try using KETO10');
    }
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const shippingFee = subtotal >= 999 || items.length === 0 ? 0 : 350;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  return (
    <div className="py-8 sm:py-12 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-stone-600">
          <Link href="/User/homePage" className="hover:text-[#1e4d2b] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-stone-400" />
          <span className="text-stone-900 font-bold">Shopping Cart</span>
        </nav>

        {/* Page Header */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1e4d2b] uppercase tracking-tight font-sans">
              YOUR SHOPPING CART
            </h1>
            <p className="text-stone-500 text-xs sm:text-sm font-medium mt-0.5">
              Review your items before proceeding to secure checkout.
            </p>
          </div>
          <span className="bg-amber-100 text-amber-900 text-xs font-black px-3 py-1 rounded-full uppercase">
            {items.reduce((sum, i) => sum + i.quantity, 0)} Items
          </span>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-emerald-900 text-xs font-extrabold">
          <div className="flex items-center gap-2">
            <Truck size={18} className="text-[#1e4d2b] shrink-0" />
            <span>🎉 Congratulations! You have unlocked FREE Express Delivery on your order!</span>
          </div>
          <span className="bg-[#1e4d2b] text-white px-3 py-1 rounded-lg text-[11px] uppercase tracking-wider">
            Free Shipping Applied
          </span>
        </div>

        {items.length === 0 ? (
          /* Empty Cart View */
          <div className="text-center py-16 bg-[#fcfbf9] border border-stone-200 rounded-3xl space-y-4">
            <div className="w-16 h-16 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center mx-auto">
              <ShoppingBag size={32} />
            </div>
            <h2 className="text-xl font-black text-stone-900 uppercase">Your Cart is Currently Empty</h2>
            <p className="text-stone-500 text-xs font-medium max-w-sm mx-auto">
              Looks like you haven&apos;t added any keto products to your cart yet.
            </p>
            <div className="pt-2">
              <Link
                href="/User/shop"
                className="inline-flex items-center gap-2 bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs px-6 py-3.5 rounded-xl uppercase tracking-wider transition-colors"
              >
                <span>Browse Keto Essentials</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ) : (
          /* 2-Column Cart Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#fcfbf9] border border-stone-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs hover:border-stone-300 transition-colors"
                >
                  {/* Thumbnail & Product Details */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-stone-200 shrink-0 bg-white">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="bg-emerald-100 text-[#1e4d2b] text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase">
                          {item.netCarbs}
                        </span>
                      </div>
                      <h3 className="font-black text-stone-900 text-sm sm:text-base uppercase font-sans">
                        {item.name}
                      </h3>
                      <p className="text-stone-500 text-xs font-medium">{item.variant}</p>
                      <div className="flex items-baseline gap-2 pt-0.5">
                        <span className="font-extrabold text-[#1e4d2b] text-sm">
                          Rs. {item.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-stone-400 line-through font-semibold">
                          Rs. {item.originalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity Stepper & Price Calculation */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-stone-200">
                    {/* Stepper */}
                    <div className="flex items-center border border-stone-200 bg-white rounded-xl p-1 shadow-2xs">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-lg bg-stone-100 text-stone-700 hover:bg-stone-200 flex items-center justify-center font-bold transition-colors cursor-pointer"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-10 text-center font-black text-xs text-stone-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-lg bg-stone-100 text-stone-700 hover:bg-stone-200 flex items-center justify-center font-bold transition-colors cursor-pointer"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Subtotal Item Price */}
                    <div className="text-right min-w-[90px]">
                      <span className="block font-black text-stone-900 text-sm">
                        Rs. {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>

                    {/* Trash Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label="Remove item"
                      className="text-stone-400 hover:text-red-600 transition-colors p-2 rounded-xl hover:bg-red-50 cursor-pointer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}

              {/* Continue Shopping Link */}
              <div className="pt-2 flex justify-between items-center text-xs font-bold text-stone-600">
                <Link href="/User/shop" className="text-[#1e4d2b] hover:underline flex items-center gap-1">
                  ← Continue Shopping
                </Link>
                <button
                  onClick={() => setItems([])}
                  className="text-stone-400 hover:text-stone-700 underline cursor-pointer"
                >
                  Clear Shopping Cart
                </button>
              </div>
            </div>

            {/* Right Column: Order Summary Box */}
            <div className="lg:col-span-4 bg-[#f9f8f3] border border-stone-200/90 rounded-3xl p-6 space-y-6 shadow-xs sticky top-24">
              <h2 className="text-base font-black text-[#1e4d2b] uppercase tracking-wide border-b border-stone-200 pb-3">
                ORDER SUMMARY
              </h2>

              {/* Price Breakdown */}
              <div className="space-y-3 text-xs font-semibold text-stone-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-stone-900">Rs. {subtotal.toLocaleString()}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-extrabold">
                    <span>Promo Discount ({discountPercent}%)</span>
                    <span>- Rs. {discountAmount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-bold text-emerald-800">
                    {shippingFee === 0 ? 'FREE' : `Rs. ${shippingFee}`}
                  </span>
                </div>

                <div className="border-t border-stone-200 pt-3 flex justify-between text-base font-black text-stone-900">
                  <span>Total</span>
                  <span className="text-[#1e4d2b]">Rs. {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Promo Code Form */}
              <form onSubmit={applyPromo} className="space-y-2 pt-1 border-t border-stone-200">
                <label className="block text-[11px] font-extrabold text-stone-700 uppercase tracking-wider">
                  Have a Promo Code?
                </label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="e.g. KETO10"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#1e4d2b] uppercase font-bold"
                    />
                    <Tag size={14} className="absolute right-3 top-3 text-stone-400" />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl uppercase transition-colors cursor-pointer shrink-0"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p className="text-[11px] font-bold text-emerald-800">{promoMessage}</p>
                )}
              </form>

              {/* Checkout Action Button */}
              <div className="pt-2 space-y-2">
                <Link
                  href="/User/account"
                  className="w-full bg-[#1e4d2b] hover:bg-[#15381f] text-white font-black text-xs sm:text-sm py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg uppercase tracking-wider cursor-pointer"
                >
                  <Lock size={16} />
                  <span>PROCEED TO CHECKOUT</span>
                </Link>
                <p className="text-[10px] text-stone-400 text-center font-medium">
                  🔒 256-Bit SSL Encrypted & Secure Checkout
                </p>
              </div>

              {/* Payment Logos */}
              <div className="pt-3 border-t border-stone-200/80 text-center space-y-2">
                <span className="text-[10px] font-extrabold text-stone-400 uppercase tracking-wider block">
                  WE ACCEPT ALL MAJOR PAYMENTS
                </span>
                <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-stone-700">
                  <span className="bg-white px-2 py-1 rounded border border-stone-200">VISA</span>
                  <span className="bg-white px-2 py-1 rounded border border-stone-200">MasterCard</span>
                  <span className="bg-white px-2 py-1 rounded border border-stone-200">PayPal</span>
                  <span className="bg-white px-2 py-1 rounded border border-stone-200">COD</span>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
