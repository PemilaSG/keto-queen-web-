import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import PrivacyPolicyContent from '@/app/components/policies/PrivacyPolicyContent';

export default function UserPrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="POLICIES" />
      <div className="flex-1">
        <PrivacyPolicyContent />
      </div>
      <Footer />
    </main>
  );
}
