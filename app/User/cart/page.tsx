import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import CartContent from '@/app/components/cart/CartContent';

export default function UserCartPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="SHOP" />
      <div className="flex-1">
        <CartContent />
      </div>
      <Footer />
    </main>
  );
}
