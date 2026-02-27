import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';
import Comparison from '@/components/Comparison';
import WifiConnectivity from '@/components/WifiConnectivity';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Founder from '@/components/Founder';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Technologies />
        <Comparison />
        <Portfolio />
        <Pricing />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
