'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Phone,
  Mail,
  AlertCircle
} from 'lucide-react';

export default function TrackOrderContent() {
  const [searchQuery, setSearchQuery] = useState('KQ-9842');
  const [hasSearched, setHasSearched] = useState(true);

  // Sample Tracking Data
  const orderDetails = {
    orderId: 'KQ-9842',
    placedDate: 'July 24, 2026',
    deliveryMethod: 'Express Courier (Pronto)',
    estimatedDelivery: 'July 27, 2026 (Tomorrow)',
    trackingNumber: 'PRN-8849201',
    recipientName: 'Sara Perera',
    shippingAddress: 'No. 45, Temple Road, Colombo 03, Sri Lanka',
    currentStage: 3, // Stage 3: Dispatched
    timeline: [
      {
        stage: 1,
        title: 'Order Placed & Confirmed',
        time: 'July 24, 2026 • 10:30 AM',
        desc: 'Payment received via VISA ending in 4242.',
        completed: true,
      },
      {
        stage: 2,
        title: 'Packed & Quality Verified',
        time: 'July 24, 2026 • 02:15 PM',
        desc: 'Items verified for 100% keto compliance & packed.',
        completed: true,
      },
      {
        stage: 3,
        title: 'Dispatched / In Transit',
        time: 'July 25, 2026 • 08:00 AM',
        desc: 'Package handed over to Pronto Express courier hub.',
        completed: true,
        isCurrent: true,
      },
      {
        stage: 4,
        title: 'Delivered to Doorstep',
        time: 'Expected July 27, 2026',
        desc: 'Final delivery arrival at recipient address.',
        completed: false,
      },
    ],
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setHasSearched(true);
    }
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
          <span className="text-stone-900 font-bold">Track Order</span>
        </nav>

        {/* Hero Search Banner */}
        <div className="bg-[#f6f5ef] border border-stone-200/80 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xs">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1e4d2b] text-amber-400 shadow-md">
            <Truck size={32} />
          </div>
          <div className="max-w-2xl mx-auto space-y-2">
            <h1 className="text-3xl sm:text-4xl font-black text-[#1e4d2b] uppercase tracking-tight font-sans">
              TRACK YOUR KETO ORDER
            </h1>
            <p className="text-stone-600 text-xs sm:text-sm font-medium">
              Enter your Order ID (e.g. KQ-9842) or Phone Number below to track delivery progress in real time.
            </p>
          </div>

          {/* Order Search Box */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                required
                placeholder="Enter Order ID or Phone"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-stone-200 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#1e4d2b] font-bold uppercase"
              />
              <Search size={18} className="absolute left-3 text-stone-400 pointer-events-none" />
            </div>
            <button
              type="submit"
              className="bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs px-5 py-3 rounded-xl uppercase tracking-wider transition-colors cursor-pointer shrink-0"
            >
              TRACK ORDER
            </button>
          </form>
        </div>

        {/* Tracking Details View */}
        {hasSearched && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            
            {/* Overview Status Header Box */}
            <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-black text-stone-900">ORDER {orderDetails.orderId}</h2>
                    <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-3 py-0.5 rounded-full uppercase">
                      In Transit
                    </span>
                  </div>
                  <p className="text-stone-400 text-xs font-semibold mt-0.5">Placed on {orderDetails.placedDate}</p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-stone-400 font-bold uppercase tracking-wider block">Estimated Delivery:</span>
                  <span className="text-sm sm:text-base font-black text-[#1e4d2b]">{orderDetails.estimatedDelivery}</span>
                </div>
              </div>

              {/* 4-Stage Progress Timeline */}
              <div className="space-y-6">
                <h3 className="text-xs font-black text-stone-800 uppercase tracking-wider">Delivery Timeline:</h3>
                
                <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-stone-200">
                  {orderDetails.timeline.map((step) => (
                    <div key={step.stage} className="relative space-y-1">
                      {/* Step Circle Indicator */}
                      <div
                        className={`absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                          step.completed
                            ? 'bg-[#1e4d2b] text-white shadow-xs'
                            : 'bg-stone-100 text-stone-400 border border-stone-300'
                        }`}
                      >
                        {step.completed ? <CheckCircle2 size={16} /> : step.stage}
                      </div>

                      {/* Content */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4
                          className={`font-black text-sm uppercase ${
                            step.isCurrent ? 'text-[#1e4d2b]' : step.completed ? 'text-stone-900' : 'text-stone-400'
                          }`}
                        >
                          {step.title}
                        </h4>
                        <span className="text-[11px] font-bold text-stone-400">{step.time}</span>
                      </div>
                      <p className="text-xs text-stone-600 font-medium">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Courier & Shipping Meta Info */}
              <div className="pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
                <div className="p-4 bg-[#f9f8f3] rounded-2xl space-y-1">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Carrier Details:</span>
                  <p className="font-extrabold text-stone-900">{orderDetails.deliveryMethod}</p>
                  <p className="text-stone-600">Tracking Code: <span className="font-bold text-[#1e4d2b]">{orderDetails.trackingNumber}</span></p>
                </div>

                <div className="p-4 bg-[#f9f8f3] rounded-2xl space-y-1">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Destination Address:</span>
                  <p className="font-extrabold text-stone-900">{orderDetails.recipientName}</p>
                  <p className="text-stone-600">{orderDetails.shippingAddress}</p>
                </div>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-emerald-900">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-black text-sm uppercase">Need help with your shipment?</h4>
                <p className="text-xs text-stone-600 font-medium">Contact our logistics team for instant assistance.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="tel:+94771234567"
                  className="bg-[#1e4d2b] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5"
                >
                  <Phone size={14} /> Call Support
                </a>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
