'use client';

import React, { useState } from 'react';
import Sidebar from '@/app/components/admin/Sidebar';
import Header from '@/app/components/admin/Header';
import StatCards from '@/app/components/admin/StatCards';
import FinancialCharts from '@/app/components/admin/FinancialCharts';
import TransactionsTable from '@/app/components/admin/TransactionsTable';
import InventoryList from '@/app/components/admin/InventoryList';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-stone-100 font-sans text-stone-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />

        <main className="flex-1 p-6 overflow-y-auto space-y-6">
          <StatCards />
          <FinancialCharts />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <TransactionsTable />
            </div>
            <div className="lg:col-span-4">
              <InventoryList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
