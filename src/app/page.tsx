import CTASection from "@/components/cta-section";
import FeaturedProducts from "@/components/featured-products";
import FeaturedSection from "@/components/featured-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Hero from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroSection/>
   <FeaturedSection/>
   <FeaturedProducts/>
   <CTASection/>
   </>
  );
}
