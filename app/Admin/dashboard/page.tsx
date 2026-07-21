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
    <div className="min-h-screen bg-stone-50 text-stone-900 flex">
      {/* Admin Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Admin Content Frame */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar */}
        <Header />

        {/* Dynamic Inner Dashboard Panel */}
        <main className="flex-1 p-6 overflow-y-auto space-y-6">
          {activeTab === 'dashboard' && (
            <>
              {/* Key Financial KPIs */}
              <StatCards />

              {/* Graphical Performance Graphs */}
              <FinancialCharts />

              {/* Bottom twin rows: Table and Inventory */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
                <TransactionsTable />
                <InventoryList />
              </div>
            </>
          )}

          {activeTab === 'orders' && (
            <div className="animate-fadeIn">
              <TransactionsTable />
            </div>
          )}

          {activeTab === 'products' && (
            <div className="animate-fadeIn">
              <InventoryList />
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center text-stone-400 font-semibold animate-fadeIn">
              👨‍💼 Customers Management Panel coming soon...
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="animate-fadeIn">
              <FinancialCharts />
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center text-stone-400 font-semibold animate-fadeIn">
              ⚙️ Admin System Configuration Panel coming soon...
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
