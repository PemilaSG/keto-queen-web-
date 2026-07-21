import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import HeroSection from '@/app/components/aboutUs/about/HeroSection';
import OurStory from '@/app/components/aboutUs/about/OurStory';
import MissionVision from '@/app/components/aboutUs/about/MissionVision';
import ValueProps from '@/app/components/aboutUs/about/ValueProps';
import TeamSection from '@/app/components/aboutUs/about/TeamSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="ABOUT US" />
      
      <div className="flex-1">
        <HeroSection />
        <OurStory />
        <MissionVision />
        <ValueProps />
        <TeamSection />
      </div>
      
      <Footer />
    </main>
  );
}