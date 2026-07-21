import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import ContactHero from '@/app/components/contactUs/ContactHero';
import ContactInfoCards from '@/app/components/contactUs/ContactInfoCards';
import ContactFormAndMap from '@/app/components/contactUs/ContactFormAndMap';
import ContactFaq from '@/app/components/contactUs/ContactFaq';

export default function ContactUsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="CONTACT US" />
      <div className="flex-1">
        <ContactHero />
        <ContactInfoCards />
        <ContactFormAndMap />
        <ContactFaq />
      </div>
      <Footer />
    </main>
  );
}
