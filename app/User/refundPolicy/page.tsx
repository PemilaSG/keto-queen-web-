import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import RefundPolicyContent from '@/app/components/policies/RefundPolicyContent';

export default function UserRefundPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="POLICIES" />
      <div className="flex-1">
        <RefundPolicyContent />
      </div>
      <Footer />
    </main>
  );
}
