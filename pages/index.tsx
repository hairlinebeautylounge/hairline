// filepath: pages/index.tsx
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Footer />
    </Layout>
  );
}