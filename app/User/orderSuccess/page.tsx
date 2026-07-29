import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import OrderSuccessContent from '@/app/components/order/OrderSuccessContent';

export default function UserOrderSuccessPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="SHOP" />
      <div className="flex-1">
        <OrderSuccessContent />
      </div>
      <Footer />
    </main>
  );
}
