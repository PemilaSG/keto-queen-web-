import TopBar from "@/app/component/layout/TopBar";
import Navbar from "@/app/component/layout/upperbar";
import Hero from "@/app/component/hero/Hero";
import Features from "@/app/component/features/Features";
import Categories from "@/app/component/categories/Categories";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Features />
      <Categories />
    </>
  );
}