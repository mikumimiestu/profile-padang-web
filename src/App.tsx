import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/shared/LoadingSpinner';
import Layout from './components/layout/Layout';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Tourism = lazy(() => import('./pages/Tourism'));
// const Culture = lazy(() => import('./pages/Culture'));
// const Culinary = lazy(() => import('./pages/Culinary'));
// const Events = lazy(() => import('./pages/Events'));
// const Gallery = lazy(() => import('./pages/Gallery'));
// const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tourism" element={<Tourism />} />
          {/* <Route path="/culture" element={<Culture />} />
          <Route path="/culinary" element={<Culinary />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;