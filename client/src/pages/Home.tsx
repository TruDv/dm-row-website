import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Products from '../components/sections/Products';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Products />
    </main>
  );
};

export default Home;