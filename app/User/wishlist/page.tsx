import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import WishlistContent from '@/app/components/wishlist/WishlistContent';

export default function UserWishlistPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="SHOP" />
      <div className="flex-1">
        <WishlistContent />
      </div>
      <Footer />
    </main>
  );
}
