import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import TermsConditionsContent from '@/app/components/policies/TermsConditionsContent';

export default function UserTermsConditionsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="POLICIES" />
      <div className="flex-1">
        <TermsConditionsContent />
      </div>
      <Footer />
    </main>
  );
}
