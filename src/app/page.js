import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Process from './components/Process';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

const LandingPage = () => {
  return (
    <div className="bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden font-sans">
      <Header />
      <Hero />
      <Stats />
      <Process />
      <Features />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;