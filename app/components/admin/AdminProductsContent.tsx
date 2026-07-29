'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Package,
  AlertTriangle,
  CheckCircle2,
  X,
  Tag,
  Eye,
  Filter
} from 'lucide-react';

export interface AdminProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  stock: number;
  netCarbs: string;
  image: string;
  status: 'Active' | 'Draft';
  badge?: string;
}

export default function AdminProductsContent() {
  const [products, setProducts] = useState<AdminProduct[]>([
    {
      id: 'PROD-101',
      name: 'Omega 3 Keto Mix',
      category: 'Snacks',
      price: 1480,
      originalPrice: 1850,
      stock: 45,
      netCarbs: '1.8g Net Carbs',
      image: '/keto_queen_contact_hero.jpg',
      status: 'Active',
      badge: 'Best Seller',
    },
    {
      id: 'PROD-102',
      name: 'Almond Iced Coffee',
      category: 'Beverages',
      price: 890,
      originalPrice: 1050,
      stock: 12,
      netCarbs: '0.9g Net Carbs',
      image: '/keto_queen_combo_promo.jpg',
      status: 'Active',
      badge: 'Hot Deal',
    },
    {
      id: 'PROD-103',
      name: 'Keto Protein Powder',
      category: 'Supplements',
      price: 2480,
      originalPrice: 2950,
      stock: 28,
      netCarbs: '2.1g Net Carbs',
      image: '/biglogo.jpg',
      status: 'Active',
      badge: 'New Arrival',
    },
    {
      id: 'PROD-104',
      name: 'MCT Oil Energy Booster',
      category: 'Supplements',
      price: 1950,
      originalPrice: 2300,
      stock: 4, // Low stock
      netCarbs: '0g Net Carbs',
      image: '/keto_queen_contact_hero.jpg',
      status: 'Active',
    },
    {
      id: 'PROD-105',
      name: 'Keto Granola Clusters',
      category: 'Breakfast',
      price: 1650,
      originalPrice: 1950,
      stock: 35,
      netCarbs: '2.4g Net Carbs',
      image: '/keto_queen_combo_promo.jpg',
      status: 'Active',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [successToast, setSuccessToast] = useState('');

  // Form State for Add New Product
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Snacks');
  const [newPrice, setNewPrice] = useState('');
  const [newOriginalPrice, setNewOriginalPrice] = useState('');
  const [newStock, setNewStock] = useState('');
  const [newNetCarbs, setNewNetCarbs] = useState('1.5g Net Carbs');
  const [newImage, setNewImage] = useState('/keto_queen_contact_hero.jpg');
  const [newBadge, setNewBadge] = useState('New Arrival');

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newPrice) return;

    const newProd: AdminProduct = {
      id: `PROD-${Math.floor(100 + Math.random() * 900)}`,
      name: newTitle,
      category: newCategory,
      price: parseFloat(newPrice),
      originalPrice: newOriginalPrice ? parseFloat(newOriginalPrice) : parseFloat(newPrice) * 1.2,
      stock: parseInt(newStock) || 20,
      netCarbs: newNetCarbs,
      image: newImage,
      status: 'Active',
      badge: newBadge !== 'None' ? newBadge : undefined,
    };

    setProducts([newProd, ...products]);
    setShowAddModal(false);
    setSuccessToast(`Product "${newTitle}" added successfully!`);

    // Reset Form
    setNewTitle('');
    setNewPrice('');
    setNewOriginalPrice('');
    setNewStock('');

    setTimeout(() => setSuccessToast(''), 4000);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const filteredProducts = products.filter((p) => {
    const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Toast Notification */}
      {successToast && (
        <div className="p-4 bg-[#1e4d2b] text-white rounded-2xl flex items-center justify-between shadow-lg animate-fadeIn">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
            <CheckCircle2 size={18} className="text-amber-400" />
            <span>{successToast}</span>
          </div>
          <button onClick={() => setSuccessToast('')} className="text-white hover:text-amber-300">
            <X size={16} />
          </button>
        </div>
      )}

      {/* Top Header & Add Product Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-stone-200/80 shadow-xs">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase font-sans tracking-tight">
            PRODUCT MANAGEMENT
          </h1>
          <p className="text-stone-500 text-xs sm:text-sm font-medium mt-0.5">
            Add new keto products, update prices, and manage stock inventory.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#1e4d2b] hover:bg-[#15381f] text-white font-extrabold text-xs px-5 py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          <Plus size={18} />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 space-y-1 shadow-2xs">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Total Products</span>
          <span className="block text-2xl font-black text-stone-900">{products.length}</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 space-y-1 shadow-2xs">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Active Items</span>
          <span className="block text-2xl font-black text-emerald-700">
            {products.filter((p) => p.status === 'Active').length}
          </span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 space-y-1 shadow-2xs">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Low Stock Warnings</span>
          <span className="block text-2xl font-black text-amber-600">
            {products.filter((p) => p.stock < 15).length}
          </span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-stone-200/80 space-y-1 shadow-2xs">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Product Categories</span>
          <span className="block text-2xl font-black text-[#1e4d2b]">5</span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
        <div className="relative flex-1 w-full">
          <input
            type="text"
            placeholder="Search by product title or SKU ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-stone-50 border border-stone-200 rounded-xl py-2.5 pl-10 pr-4 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#1e4d2b] font-medium"
          />
          <Search size={16} className="absolute left-3 text-stone-400 pointer-events-none" />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter size={16} className="text-stone-400 shrink-0" />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs font-bold text-stone-800 focus:outline-none cursor-pointer"
          >
            <option value="All">All Categories</option>
            <option value="Snacks">Snacks</option>
            <option value="Beverages">Beverages</option>
            <option value="Supplements">Supplements</option>
            <option value="Breakfast">Breakfast</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0e2413] text-white text-[11px] font-black uppercase tracking-wider">
                <th className="p-4">Product Info</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price (Rs.)</th>
                <th className="p-4">Stock Units</th>
                <th className="p-4">Net Carbs Tag</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-xs font-medium text-stone-700">
              {filteredProducts.map((prod) => (
                <tr key={prod.id} className="hover:bg-stone-50/80 transition-colors">
                  {/* Product Info */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-stone-200 shrink-0 bg-stone-100">
                        <Image src={prod.image} alt={prod.name} fill className="object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-extrabold text-stone-900 text-xs">{prod.name}</h4>
                          {prod.badge && (
                            <span className="bg-amber-100 text-amber-900 text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase">
                              {prod.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-stone-400 font-bold">{prod.id}</span>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="p-4 font-bold text-stone-800">{prod.category}</td>

                  {/* Price */}
                  <td className="p-4">
                    <div className="font-extrabold text-[#1e4d2b]">
                      Rs. {prod.price.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-stone-400 line-through">
                      Rs. {prod.originalPrice.toLocaleString()}
                    </span>
                  </td>

                  {/* Stock */}
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-1 rounded-full ${
                        prod.stock < 15
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-emerald-100 text-emerald-900'
                      }`}
                    >
                      {prod.stock < 15 && <AlertTriangle size={12} />}
                      {prod.stock} units
                    </span>
                  </td>

                  {/* Net Carbs */}
                  <td className="p-4">
                    <span className="bg-stone-100 border border-stone-200 text-stone-800 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                      {prod.netCarbs}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="p-4">
                    <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                      {prod.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleDeleteProduct(prod.id)}
                        className="p-1.5 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        title="Delete Product"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ADD NEW PRODUCT MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#1e4d2b] text-amber-400 flex items-center justify-center font-bold">
                  <Plus size={18} />
                </div>
                <h3 className="text-lg font-black text-stone-900 uppercase">ADD NEW KETO PRODUCT</h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-stone-400 hover:text-stone-700 p-1.5 rounded-full hover:bg-stone-100"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-4 text-xs font-medium">
              
              {/* Product Title */}
              <div className="space-y-1.5">
                <label className="block font-extrabold text-stone-800 uppercase tracking-wider">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Keto Matcha Latte (300g)"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:border-[#1e4d2b] font-medium"
                />
              </div>

              {/* Category & Stock */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block font-extrabold text-stone-800 uppercase tracking-wider">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-3 text-stone-900 focus:outline-none cursor-pointer font-bold"
                  >
                    <option value="Snacks">Snacks</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Supplements">Supplements</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Combo Packs">Combo Packs</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block font-extrabold text-stone-800 uppercase tracking-wider">
                    Stock Quantity (Units) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 50"
                    value={newStock}
                    onChange={(e) => setNewStock(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none font-medium"
                  />
                </div>
              </div>

              {/* Price & Original Price */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block font-extrabold text-stone-800 uppercase tracking-wider">
                    Price (Rs.) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 1850"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block font-extrabold text-stone-800 uppercase tracking-wider">
                    Original Price (Strikethrough)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 2200"
                    value={newOriginalPrice}
                    onChange={(e) => setNewOriginalPrice(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none font-medium"
                  />
                </div>
              </div>

              {/* Net Carbs & Badge */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block font-extrabold text-stone-800 uppercase tracking-wider">
                    Net Carbs Tag
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1.5g Net Carbs"
                    value={newNetCarbs}
                    onChange={(e) => setNewNetCarbs(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block font-extrabold text-stone-800 uppercase tracking-wider">
                    Product Badge Tag
                  </label>
                  <select
                    value={newBadge}
                    onChange={(e) => setNewBadge(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-3 text-stone-900 focus:outline-none cursor-pointer font-bold"
                  >
                    <option value="New Arrival">New Arrival</option>
                    <option value="Best Seller">Best Seller</option>
                    <option value="Hot Deal">Hot Deal</option>
                    <option value="None">None</option>
                  </select>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-5 py-3 rounded-xl border border-stone-200 text-stone-600 font-extrabold uppercase hover:bg-stone-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#1e4d2b] hover:bg-[#15381f] text-white font-black uppercase tracking-wider shadow-xs cursor-pointer"
                >
                  SAVE PRODUCT
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
