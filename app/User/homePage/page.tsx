import Header from '@/app/components/layout/Header';
import Hero from '@/app/components/ui/Hero';
import Categories from '@/app/components/ui/Categories';
import TrustBar from '@/app/components/ui/TrustBar';
import PromoBanners from '@/app/components/ui/PromoBanner';
import ProductCard from '@/app/components/ui/ProductCard';
import Section from '@/app/components/ui/Section';
import Footer from '@/app/components/layout/Footer';

const bestSellingProducts = [
  { name: 'Keto Almond Bites', weight: '120g', price: '$12.99', rating: 5, reviews: 48, image: '/vercel.svg' },
  { name: 'MCT Coffee Mix', weight: '250g', price: '$18.99', rating: 4, reviews: 31, image: '/next.svg' },
  { name: 'Protein Crisps', weight: '75g', price: '$9.99', rating: 4, reviews: 22, image: '/globe.svg' },
  { name: 'Keto Seed Crackers', weight: '100g', price: '$11.49', rating: 5, reviews: 16, image: '/window.svg' },
  { name: 'Collagen Bar', weight: '60g', price: '$4.99', rating: 4, reviews: 63, image: '/file.svg' },
  { name: 'Peanut Butter Cup', weight: '90g', price: '$7.99', rating: 5, reviews: 27, image: '/vercel.svg' },
  { name: 'Electrolyte Drink', weight: '500ml', price: '$6.49', rating: 4, reviews: 39, image: '/next.svg' },
  { name: 'Keto Granola', weight: '150g', price: '$13.99', rating: 5, reviews: 44, image: '/globe.svg' },
];

const newArrivalProducts = [
  { name: 'Coconut Snack Mix', weight: '100g', price: '$10.99', rating: 5, reviews: 12, image: '/window.svg' },
  { name: 'Matcha Fat Bombs', weight: '80g', price: '$8.99', rating: 4, reviews: 18, image: '/file.svg' },
  { name: 'Vanilla Protein Latte', weight: '300g', price: '$16.99', rating: 5, reviews: 24, image: '/next.svg' },
  { name: 'Crispy Sea Salt Chips', weight: '85g', price: '$9.49', rating: 4, reviews: 14, image: '/vercel.svg' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <Hero />
        <TrustBar />
        <h2 id="categories" className="text-xl font-bold text-black">SHOP BY CATEGORY</h2>
        <Categories />
        <PromoBanners />
        <Section title="BEST SELLING">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellingProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </Section>
        <Section title="NEW ARRIVALS">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivalProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}