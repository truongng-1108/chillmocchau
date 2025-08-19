import MysticalHero from '../components/home/MysticalHero';
import AsymmetricProducts from '../components/home/AsymmetricProducts';
import RippedPaperSection from '../components/home/RippedPaperSection';
import NatureTestimonials from '../components/home/NatureTestimonials';
import Services from '../components/home/Services';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <div className="space-y-0">
      <MysticalHero />
      <RippedPaperSection />
      <AsymmetricProducts />
      <Services />
      <NatureTestimonials />
      <CTA />
    </div>
  );
};

export default Home;