import { Search, User, Heart, ShoppingCart, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-emerald-900 text-white text-xs py-2 text-center">
        Free Shipping on Orders Above $999 | Cash on Delivery Available | 100% Keto • 100% You
      </div>
      {/* Main Nav */}
      <nav className="flex items-center justify-between py-6 px-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-emerald-700">KETO QUEEN</div>
        <div className="relative w-1/3">
          <input
            className="w-full rounded-full border border-stone-300 py-2 px-4 text-black placeholder:text-stone-500"
            placeholder="Search for products..."
          />
          <Search className="absolute right-3 top-2.5 text-black" size={20} />
        </div>
        <div className="flex gap-6 text-black">
          <User /> <Heart /> <ShoppingCart />
        </div>
      </nav>
      {/* Sub Menu */}
      <div className="flex justify-center gap-8 py-3 border-y border-stone-100 font-medium text-stone-700">
        {['HOME', 'SHOP', 'CATEGORIES', 'OFFERS', 'ABOUT US', 'CONTACT US'].map(item => (
          <a key={item} href="#" className="hover:text-emerald-700">{item}</a>
        ))}
      </div>
    </header>
  );
}