'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  User,
  Package,
  MapPin,
  Heart,
  Lock,
  LogOut,
  ChevronRight,
  CheckCircle2,
  Edit3,
  Plus,
  Crown,
  ExternalLink,
  ShieldCheck,
  ShoppingBag,
  Clock,
  Truck,
  Eye,
  EyeOff,
  AlertCircle
} from 'lucide-react';

export default function UserAccountContent() {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'addresses' | 'security'>('profile');

  // Profile State
  const [fullName, setFullName] = useState('Sara Perera');
  const [email, setEmail] = useState('sara.perera@example.com');
  const [phone, setPhone] = useState('+94 77 123 4567');
  const [dietPreference, setDietPreference] = useState('Strict Keto (Under 20g Net Carbs)');
  const [profileSaved, setProfileSaved] = useState(false);

  // Password Security State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  // Sample Orders Data
  const orders = [
    {
      id: 'KQ-9842',
      date: 'July 24, 2026',
      total: 'Rs. 4,850',
      status: 'Delivered',
      itemsCount: 3,
      items: ['Omega 3 Mix (250g)', 'Keto Protein Powder (Chocolate)', 'Almond Iced Coffee'],
      deliveryDate: 'July 26, 2026',
    },
    {
      id: 'KQ-9715',
      date: 'July 10, 2026',
      total: 'Rs. 2,990',
      status: 'In Transit',
      itemsCount: 2,
      items: ['MCT Oil (500ml)', 'Keto Granola (300g)'],
      deliveryDate: 'Expected July 30, 2026',
    },
    {
      id: 'KQ-9520',
      date: 'June 28, 2026',
      total: 'Rs. 6,400',
      status: 'Delivered',
      itemsCount: 4,
      items: ['Keto Peanut Butter', 'Collagen Boost Powder', 'Apple Cider Vinegar', 'Keto Bar Pack'],
      deliveryDate: 'June 30, 2026',
    },
  ];

  // Sample Addresses Data
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: 'Home Address (Default)',
      recipient: 'Sara Perera',
      street: 'No. 45, Temple Road',
      city: 'Colombo 03',
      postal: '00300',
      phone: '+94 77 123 4567',
      isDefault: true,
    },
    {
      id: 2,
      title: 'Office Address',
      recipient: 'Sara Perera (HQ)',
      street: 'Level 8, World Trade Center',
      city: 'Colombo 01',
      postal: '00100',
      phone: '+94 71 987 6543',
      isDefault: false,
    },
  ]);

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    if (!currentPassword) {
      setPasswordError('Please enter your current password.');
      return;
    }
    if (newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }

    setPasswordSaved(true);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setPasswordSaved(false), 3000);
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
          <span className="text-stone-900 font-bold">My Account</span>
        </nav>

        {/* User Account Banner */}
        <div className="bg-gradient-to-r from-[#1b4325] via-[#15381f] to-[#0e2413] rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            {/* Avatar Circle */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-400 text-[#1e4d2b] font-black text-2xl sm:text-3xl flex items-center justify-center border-4 border-white/20 shadow-lg shrink-0">
              SP
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-wide uppercase font-sans">
                  {fullName}
                </h1>
                <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 uppercase">
                  <Crown size={12} className="text-amber-400 fill-amber-400" /> VIP Member
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/80 font-medium">{email}</p>
            </div>
          </div>

          {/* Quick Stats Badges */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 text-center min-w-[90px]">
              <span className="block text-lg font-black text-white">3</span>
              <span className="text-[10px] text-emerald-200 font-bold uppercase">Orders</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 text-center min-w-[90px]">
              <span className="block text-lg font-black text-amber-400">450</span>
              <span className="text-[10px] text-emerald-200 font-bold uppercase">Points</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Navigation Tabs & Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Account Navigation Tabs */}
          <div className="lg:col-span-3 bg-[#f8f7f2] border border-stone-200/80 rounded-2xl p-3 space-y-1 shadow-2xs">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'profile'
                  ? 'bg-[#1e4d2b] text-white shadow-xs'
                  : 'text-stone-700 hover:bg-stone-200/60'
              }`}
            >
              <User size={16} />
              <span>Personal Details</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'orders'
                  ? 'bg-[#1e4d2b] text-white shadow-xs'
                  : 'text-stone-700 hover:bg-stone-200/60'
              }`}
            >
              <Package size={16} />
              <span>My Orders</span>
              <span className="ml-auto bg-amber-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                3
              </span>
            </button>

            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'addresses'
                  ? 'bg-[#1e4d2b] text-white shadow-xs'
                  : 'text-stone-700 hover:bg-stone-200/60'
              }`}
            >
              <MapPin size={16} />
              <span>Saved Addresses</span>
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'security'
                  ? 'bg-[#1e4d2b] text-white shadow-xs'
                  : 'text-stone-700 hover:bg-stone-200/60'
              }`}
            >
              <Lock size={16} />
              <span>Security & Password</span>
            </button>

            <div className="pt-2 border-t border-stone-200">
              <Link
                href="/login"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-extrabold text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut size={16} />
                <span>Log Out</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Tab Content Panels */}
          <div className="lg:col-span-9">
            
            {/* TAB 1: PERSONAL DETAILS */}
            {activeTab === 'profile' && (
              <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs animate-fadeIn">
                <div className="border-b border-stone-100 pb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-black text-[#1e4d2b] uppercase tracking-wide">
                      PERSONAL DETAILS
                    </h2>
                    <p className="text-stone-500 text-xs font-medium">Update your account information and preferences.</p>
                  </div>
                  {profileSaved && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 animate-fadeIn">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>Changes Saved Successfully!</span>
                    </div>
                  )}
                </div>

                <form onSubmit={handleProfileSave} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#1e4d2b] font-medium"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#1e4d2b] font-medium"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#1e4d2b] font-medium"
                      />
                    </div>

                    {/* Keto Diet Preference */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                        Keto Diet Style
                      </label>
                      <select
                        value={dietPreference}
                        onChange={(e) => setDietPreference(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#1e4d2b] font-medium cursor-pointer"
                      >
                        <option value="Strict Keto (Under 20g Net Carbs)">Strict Keto (Under 20g Net Carbs)</option>
                        <option value="Lazy Keto (Low Carb)">Lazy Keto (Low Carb)</option>
                        <option value="Sugar Free Living">Sugar Free Living</option>
                        <option value="Gluten Free & Paleo">Gluten Free & Paleo</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-3 flex justify-end">
                    <button
                      type="submit"
                      className="bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-all shadow-xs uppercase tracking-wider cursor-pointer"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* TAB 2: MY ORDERS */}
            {activeTab === 'orders' && (
              <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs animate-fadeIn">
                <div className="border-b border-stone-100 pb-4">
                  <h2 className="text-lg font-black text-[#1e4d2b] uppercase tracking-wide">
                    MY ORDERS
                  </h2>
                  <p className="text-stone-500 text-xs font-medium">Track your previous orders and reorder favorite items easily.</p>
                </div>

                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="bg-[#fcfbf9] border border-stone-200/80 rounded-2xl p-5 space-y-4 hover:border-stone-300 transition-colors"
                    >
                      {/* Top Order Row */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/60 pb-3">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-black text-stone-900 text-sm">{order.id}</span>
                            <span
                              className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase ${
                                order.status === 'Delivered'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                          <span className="text-[11px] text-stone-400 font-semibold">Placed on {order.date}</span>
                        </div>

                        <div className="text-right">
                          <span className="block font-black text-[#1e4d2b] text-base">{order.total}</span>
                          <span className="text-[11px] text-stone-500 font-medium">{order.itemsCount} items</span>
                        </div>
                      </div>

                      {/* Purchased Items List */}
                      <div className="text-xs text-stone-700 font-medium space-y-1">
                        <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block">
                          Items in Order:
                        </span>
                        <p className="leading-relaxed">{order.items.join(' • ')}</p>
                      </div>

                      {/* Bottom Actions */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-stone-500 font-bold flex items-center gap-1">
                          <Truck size={14} className="text-[#1e4d2b]" /> {order.deliveryDate}
                        </span>
                        <button className="bg-[#1e4d2b]/10 hover:bg-[#1e4d2b] hover:text-white text-[#1e4d2b] font-extrabold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer">
                          Reorder Items
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: SAVED ADDRESSES */}
            {activeTab === 'addresses' && (
              <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs animate-fadeIn">
                <div className="border-b border-stone-100 pb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-black text-[#1e4d2b] uppercase tracking-wide">
                      SAVED ADDRESSES
                    </h2>
                    <p className="text-stone-500 text-xs font-medium">Manage your delivery and billing addresses.</p>
                  </div>
                  <button className="bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer">
                    <Plus size={14} />
                    <span>Add New Address</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {addresses.map((addr) => (
                    <div
                      key={addr.id}
                      className="bg-[#fcfbf9] border border-stone-200/80 rounded-2xl p-5 space-y-3 relative"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-stone-900 text-xs uppercase tracking-wider">
                          {addr.title}
                        </span>
                        {addr.isDefault && (
                          <span className="bg-emerald-100 text-[#1e4d2b] text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                            DEFAULT
                          </span>
                        )}
                      </div>

                      <div className="text-xs text-stone-600 space-y-1 font-medium">
                        <p className="font-bold text-stone-900">{addr.recipient}</p>
                        <p>{addr.street}</p>
                        <p>{addr.city}, {addr.postal}</p>
                        <p className="text-stone-400">Phone: {addr.phone}</p>
                      </div>

                      <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-xs font-bold">
                        <button className="text-[#1e4d2b] hover:underline flex items-center gap-1 cursor-pointer">
                          <Edit3 size={14} /> Edit
                        </button>
                        {!addr.isDefault && (
                          <button className="text-stone-400 hover:text-stone-700 cursor-pointer">
                            Set as Default
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: SECURITY & PASSWORD */}
            {activeTab === 'security' && (
              <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs animate-fadeIn">
                <div className="border-b border-stone-100 pb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-black text-[#1e4d2b] uppercase tracking-wide">
                      SECURITY & PASSWORD
                    </h2>
                    <p className="text-stone-500 text-xs font-medium">Change your password to keep your account safe.</p>
                  </div>
                  {passwordSaved && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 animate-fadeIn">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      <span>Password Changed!</span>
                    </div>
                  )}
                </div>

                {passwordError && (
                  <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl flex items-center gap-2">
                    <AlertCircle size={16} className="text-red-500 shrink-0" />
                    <span>{passwordError}</span>
                  </div>
                )}

                <form onSubmit={handlePasswordChange} className="max-w-md space-y-4">
                  {/* Current Password */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                      Current Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type={showCurrent ? 'text' : 'password'}
                        required
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl py-3 pl-4 pr-11 text-xs text-stone-900 focus:outline-none focus:border-[#1e4d2b] font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrent(!showCurrent)}
                        className="absolute right-3 text-stone-400 hover:text-stone-700 p-1"
                      >
                        {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* New Password */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                      New Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type={showNew ? 'text' : 'password'}
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl py-3 pl-4 pr-11 text-xs text-stone-900 focus:outline-none focus:border-[#1e4d2b] font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNew(!showNew)}
                        className="absolute right-3 text-stone-400 hover:text-stone-700 p-1"
                      >
                        {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm New Password */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-stone-800 uppercase tracking-wider">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl py-3 px-4 text-xs text-stone-900 focus:outline-none focus:border-[#1e4d2b] font-medium"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-all shadow-xs uppercase tracking-wider cursor-pointer"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
