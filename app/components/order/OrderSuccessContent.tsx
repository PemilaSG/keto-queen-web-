'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  PackageCheck,
  Truck,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  FileText,
  MapPin,
  Calendar
} from 'lucide-react';

export default function OrderSuccessContent() {
  const orderReceipt = {
    orderId: '#KQ-9842',
    date: 'July 24, 2026',
    paymentMethod: 'Credit Card (VISA ending in 4242)',
    estimatedDelivery: 'July 27, 2026',
    recipientName: 'Sara Perera',
    street: 'No. 45, Temple Road',
    city: 'Colombo 03, Sri Lanka',
    phone: '+94 77 123 4567',
    items: [
      {
        name: 'Omega 3 Keto Mix',
        variant: '250g Pack',
        quantity: 2,
        price: 1480,
        image: '/keto_queen_contact_hero.jpg',
      },
      {
        name: 'Almond Iced Coffee',
        variant: '500ml Bottle',
        quantity: 1,
        price: 890,
        image: '/keto_queen_combo_promo.jpg',
      },
      {
        name: 'Keto Protein Powder',
        variant: 'Chocolate Tub',
        quantity: 1,
        price: 2480,
        image: '/biglogo.jpg',
      },
    ],
    subtotal: 6330,
    discount: 1480,
    shipping: 0,
    total: 4850,
  };

  return (
    <div className="py-8 sm:py-12 bg-white text-stone-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Celebratory Thank You Banner */}
        <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xs">
          <div className="w-16 h-16 rounded-full bg-[#1e4d2b] text-amber-400 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 size={36} />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-widest block">
              Order Placed Successfully
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e4d2b] uppercase tracking-tight font-sans">
              THANK YOU FOR YOUR ORDER!
            </h1>
            <p className="text-stone-600 text-xs sm:text-sm font-medium max-w-lg mx-auto leading-relaxed">
              Your order <span className="font-extrabold text-stone-900">{orderReceipt.orderId}</span> has been confirmed. A confirmation receipt has been emailed to your account.
            </p>
          </div>

          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/track-order"
              className="bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs px-6 py-3.5 rounded-xl uppercase tracking-wider transition-colors shadow-xs flex items-center gap-2"
            >
              <Truck size={16} />
              <span>Track Order Status</span>
            </Link>
          </div>
        </div>

        {/* Receipt Details Container */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 space-y-8 shadow-xs">
          
          {/* Key Meta Details */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#fbfbf8] rounded-2xl border border-stone-200/80 text-xs font-semibold">
            <div>
              <span className="text-[10px] text-stone-400 font-extrabold uppercase block">Order ID:</span>
              <span className="font-extrabold text-stone-900">{orderReceipt.orderId}</span>
            </div>
            <div>
              <span className="text-[10px] text-stone-400 font-extrabold uppercase block">Date Placed:</span>
              <span className="font-extrabold text-stone-900">{orderReceipt.date}</span>
            </div>
            <div>
              <span className="text-[10px] text-stone-400 font-extrabold uppercase block">Est. Delivery:</span>
              <span className="font-extrabold text-[#1e4d2b]">{orderReceipt.estimatedDelivery}</span>
            </div>
            <div>
              <span className="text-[10px] text-stone-400 font-extrabold uppercase block">Payment:</span>
              <span className="font-extrabold text-stone-900">{orderReceipt.paymentMethod}</span>
            </div>
          </div>

          {/* Purchased Items Receipt Table */}
          <div className="space-y-4">
            <h3 className="font-black text-stone-900 text-sm uppercase tracking-wide border-b border-stone-200 pb-2">
              Order Summary
            </h3>

            <div className="space-y-3">
              {orderReceipt.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-4 p-3 bg-stone-50 rounded-2xl text-xs font-medium border border-stone-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-stone-200 shrink-0 bg-white">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-stone-900 uppercase">{item.name}</h4>
                      <p className="text-stone-500 text-[11px]">{item.variant} • Qty: {item.quantity}</p>
                    </div>
                  </div>

                  <span className="font-extrabold text-stone-900 text-xs sm:text-sm">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {/* Totals Breakdown */}
            <div className="pt-3 border-t border-stone-200 max-w-xs ml-auto space-y-2 text-xs font-semibold text-stone-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-stone-900">Rs. {orderReceipt.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-emerald-700 font-extrabold">
                <span>Discount Saved</span>
                <span>- Rs. {orderReceipt.discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Express Delivery</span>
                <span className="font-bold text-emerald-800">FREE</span>
              </div>
              <div className="border-t border-stone-200 pt-2 flex justify-between text-base font-black text-stone-900">
                <span>Total Paid</span>
                <span className="text-[#1e4d2b]">Rs. {orderReceipt.total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Shipping Address & Customer Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium border-t border-stone-200 pt-6">
            <div className="p-4 bg-[#f9f8f3] rounded-2xl space-y-1">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Shipping Address:</span>
              <p className="font-extrabold text-stone-900">{orderReceipt.recipientName}</p>
              <p className="text-stone-600">{orderReceipt.street}</p>
              <p className="text-stone-600">{orderReceipt.city}</p>
              <p className="text-stone-400">Phone: {orderReceipt.phone}</p>
            </div>

            <div className="p-4 bg-[#f9f8f3] rounded-2xl space-y-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Keto Guarantee:</span>
                <p className="font-extrabold text-stone-900">100% Quality & Freshness Guarantee</p>
                <p className="text-stone-600">All items inspected for low-carb standards.</p>
              </div>
              <div className="pt-2 text-stone-500 text-[11px] font-bold flex items-center gap-1">
                <ShieldCheck size={14} className="text-[#1e4d2b]" /> 7-Day Hassle Free Returns
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-100">
            <Link
              href="/User/shop"
              className="text-xs font-bold text-[#1e4d2b] hover:underline flex items-center gap-1"
            >
              ← Return to Keto Shop
            </Link>
            <Link
              href="/track-order"
              className="w-full sm:w-auto bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs px-6 py-3 rounded-xl uppercase tracking-wider text-center"
            >
              Track Package
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
