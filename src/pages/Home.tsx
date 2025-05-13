import HeroSection from '../components/home/HeroSection';
import HighlightsSection from '../components/home/HighlightsSection';
import AboutPreview from '../components/home/AboutPreview';
import TourismPreview from '../components/home/TourismPreview';
import CulinaryPreview from '../components/home/CulinaryPreview';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Kota Padang - Pesona Pantai Barat';
  }, []);

  return (
    <div>
      <HeroSection />
      <HighlightsSection />
      <AboutPreview />
      <TourismPreview />
      <CulinaryPreview />
    </div>
  );
};

export default Home;