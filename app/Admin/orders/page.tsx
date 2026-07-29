'use client';

import React, { useState } from 'react';
import Sidebar from '@/app/components/admin/Sidebar';
import Header from '@/app/components/admin/Header';
import AdminOrdersContent from '@/app/components/admin/AdminOrdersContent';

export default function AdminOrdersPage() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="flex min-h-screen bg-stone-100 font-sans text-stone-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto space-y-6">
          <AdminOrdersContent />
        </main>
      </div>
    </div>
  );
}
