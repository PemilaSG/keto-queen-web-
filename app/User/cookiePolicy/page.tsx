import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import CookiePolicyContent from '@/app/components/policies/CookiePolicyContent';

export default function UserCookiePolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="POLICIES" />
      <div className="flex-1">
        <CookiePolicyContent />
      </div>
      <Footer />
    </main>
  );
}
