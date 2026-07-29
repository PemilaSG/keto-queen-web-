import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import UserAccountContent from '@/app/components/account/UserAccountContent';

export default function UserAccountPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="ACCOUNT" />
      <div className="flex-1">
        <UserAccountContent />
      </div>
      <Footer />
    </main>
  );
}
