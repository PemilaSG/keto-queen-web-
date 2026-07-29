import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import FaqContent from '@/app/components/policies/FaqContent';

export default function UserFaqPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="FAQ" />
      <div className="flex-1">
        <FaqContent />
      </div>
      <Footer />
    </main>
  );
}
