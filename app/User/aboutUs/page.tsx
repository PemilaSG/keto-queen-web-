import Header from '../../components/layout/Header';
import Footer from '../../components/aboutUs/layout/Footer';
import HeroSection from '../../components/aboutUs/about/HeroSection';
import FeatureGrid from '../../components/aboutUs/about/FeatureGrid';
import MissionVision from '../../components/aboutUs/about/MissionVision';
import ValueProps from '../../components/aboutUs/about/ValueProps';
import TeamSection from '../../components/aboutUs/about/TeamSection';
import Newsletter from '../../components/aboutUs/about/Newsletter';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <HeroSection />
      <FeatureGrid />
      <MissionVision />
      <ValueProps />
      <TeamSection />
      <Newsletter />
      <Footer />
    </main>
  );
}