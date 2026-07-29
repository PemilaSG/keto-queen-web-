import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import TrackOrderContent from '@/app/components/tracking/TrackOrderContent';

export default function UserTrackOrderPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="ACCOUNT" />
      <div className="flex-1">
        <TrackOrderContent />
      </div>
      <Footer />
    </main>
  );
}
