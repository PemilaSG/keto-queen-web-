import React from 'react';
import Header from '@/app/components/layout/Header';
import Hero from '@/app/components/ui/Hero';
import TrustBar from '@/app/components/ui/TrustBar';
import Categories from '@/app/components/ui/Categories';
import PromoBanners from '@/app/components/ui/PromoBanner';
import ProductCard from '@/app/components/ui/ProductCard';
import WhyChoose from '@/app/components/ui/WhyChoose';
import Footer from '@/app/components/layout/Footer';

const bestSellingProducts = [
  {
    name: 'Omega 3 Mix',
    weight: '100g',
    price: 'Rs. 1,499',
    rating: 5,
    reviews: 128,
    image: '/keto_queen_contact_hero.jpg',
  },
  {
    name: 'Almond Iced Coffee',
    weight: '200ml',
    price: 'Rs. 699',
    rating: 5,
    reviews: 95,
    image: '/keto_queen_contact_hero.jpg',
  },
  {
    name: 'Omega 3 Mix',
    weight: 'Jar 200g',
    price: 'Rs. 2,299',
    rating: 5,
    reviews: 76,
    image: '/keto_queen_contact_hero.jpg',
  },
];

const newArrivalProducts = [
  {
    name: 'Keto Protein Powder',
    weight: '500g',
    price: 'Rs. 2,999',
    rating: 5,
    reviews: 54,
    image: '/keto_queen_combo_promo.jpg',
  },
  {
    name: 'MCT Oil',
    weight: '250ml',
    price: 'Rs. 1,799',
    rating: 5,
    reviews: 43,
    image: '/keto_queen_combo_promo.jpg',
  },
  {
    name: 'Keto Granola',
    weight: '300g',
    price: 'Rs. 1,399',
    rating: 5,
    reviews: 31,
    image: '/keto_queen_combo_promo.jpg',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="HOME" />
      
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Carousel Hero Slider */}
        <Hero />
        
        {/* Trust Badges Bar */}
        <TrustBar />
        
        {/* Shop By Category Section */}
        <div className="my-8">
          <h2 className="text-xl sm:text-2xl font-black text-[#1e4d2b] uppercase tracking-wide border-b border-stone-250/20 pb-3 mb-6">
            SHOP BY CATEGORY
          </h2>
          <Categories />
        </div>
        
        {/* Promo Grid Banners */}
        <PromoBanners />
        
        {/* Dual side-by-side Product Showcases */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 my-10">
          
          {/* Best Selling Showcase */}
          <div>
            <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-6">
              <h2 className="text-xl sm:text-2xl font-black text-[#1e4d2b] uppercase tracking-wide">
                BEST SELLING
              </h2>
              <a href="#" className="text-stone-500 hover:text-[#1e4d2b] text-xs sm:text-sm font-bold tracking-wide transition-colors">
                View All
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {bestSellingProducts.map((product, idx) => (
                <ProductCard key={idx} {...product} />
              ))}
            </div>
          </div>

          {/* New Arrivals Showcase */}
          <div>
            <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-6">
              <h2 className="text-xl sm:text-2xl font-black text-[#1e4d2b] uppercase tracking-wide">
                NEW ARRIVALS
              </h2>
              <a href="#" className="text-stone-500 hover:text-[#1e4d2b] text-xs sm:text-sm font-bold tracking-wide transition-colors">
                View All
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {newArrivalProducts.map((product, idx) => (
                <ProductCard key={idx} {...product} />
              ))}
            </div>
          </div>

        </div>
        
        {/* Why Choose Keto Queen Banner */}
        <WhyChoose />
      </div>

      <Footer />
    </main>
  );
}