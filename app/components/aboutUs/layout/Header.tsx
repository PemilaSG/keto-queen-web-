export default function Header() {
  return (
    <header className="w-full">
      {/* Utility Bar */}
      <div className="bg-green-900 text-white text-xs py-2 text-center">
        Free Shipping on Orders Above $999 | Cash on Delivery Available | 100% Keto • 100% You
      </div>
      
      {/* Main Nav */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <img src="/logo.png" alt="Keto Queen Logo" className="h-16" />
        
        <div className="flex-1 mx-8 relative">
          <input 
            type="text" 
            placeholder="Search for products..." 
            className="w-full border border-gray-300 rounded-full py-2 px-4"
          />
        </div>

        <div className="flex gap-6 font-medium">
          <a href="#">Account</a>
          <a href="#">Wishlist</a>
          <a href="#">Cart (0)</a>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="border-t border-b border-gray-100 py-3 text-center">
        <ul className="flex justify-center gap-8 font-bold text-gray-700">
          <li>HOME</li>
          <li>SHOP</li>
          <li>CATEGORIES</li>
          <li>OFFERS</li>
          <li className="text-green-700 border-b-2 border-green-700">ABOUT US</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </header>
  );
}