'use client';

import React, { useState } from 'react';
import Sidebar from '@/app/components/admin/Sidebar';
import Header from '@/app/components/admin/Header';
import AdminProductsContent from '@/app/components/admin/AdminProductsContent';

export default function AdminProductsPage() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="flex min-h-screen bg-stone-100 font-sans text-stone-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto space-y-6">
          <AdminProductsContent />
        </main>
      </div>
    </div>
  );
}
