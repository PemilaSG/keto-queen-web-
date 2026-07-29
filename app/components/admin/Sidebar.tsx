'use client';

import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, ShoppingBag, FolderHeart, Users, BarChart3, Settings, LogOut, Crown } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab?: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/Admin/dashboard' },
    { id: 'orders', label: 'Orders', icon: ShoppingBag, href: '/Admin/orders' },
    { id: 'products', label: 'Products', icon: FolderHeart, href: '/Admin/products' },
    { id: 'customers', label: 'Customers', icon: Users, href: '/Admin/dashboard' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, href: '/Admin/dashboard' },
    { id: 'settings', label: 'Settings', icon: Settings, href: '/Admin/dashboard' },
  ];

  return (
    <aside className="w-64 bg-[#0e2413] text-stone-100 min-h-screen flex flex-col justify-between p-4 border-r border-[#1a3d24]/40 z-30 shrink-0">
      <div className="space-y-6">
        {/* Brand Logo Header */}
        <Link href="/Admin" className="flex items-center gap-2 px-2 py-4 border-b border-emerald-950/60 block">
          <div className="bg-[#1e4d2b] text-white font-extrabold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-xs">
            <span className="text-base tracking-wider font-black font-sans">KETO</span>
            <Crown size={14} className="text-amber-400 fill-amber-400" />
            <span className="text-base tracking-wider font-black text-amber-400 font-sans">QUEEN</span>
          </div>
          <span className="text-[10px] bg-amber-500/20 text-amber-400 font-bold px-1.5 py-0.5 rounded-sm tracking-widest uppercase">
            ADMIN
          </span>
        </Link>

        {/* Navigation Menu */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab && setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#183921] text-amber-400 shadow-sm border-l-4 border-amber-500'
                    : 'text-stone-300 hover:bg-[#183921]/50 hover:text-white'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-amber-400' : 'text-stone-400'} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Admin profile user badge */}
      <div className="border-t border-emerald-950/80 pt-4 space-y-3">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-emerald-800 border border-emerald-700/30 flex items-center justify-center font-extrabold text-amber-400 text-sm">
            QA
          </div>
          <div>
            <h4 className="text-xs font-black text-white leading-none">Queen Admin</h4>
            <p className="text-[10px] text-stone-400 font-bold mt-1">Super Administrator</p>
          </div>
        </div>

        <Link
          href="/login"
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-stone-400 hover:bg-red-950/20 hover:text-red-400 text-xs sm:text-sm font-bold tracking-wide transition-colors cursor-pointer"
        >
          <LogOut size={16} />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
