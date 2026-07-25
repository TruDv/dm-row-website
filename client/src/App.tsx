import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
// Service detail pages
import Procurement from './pages/services/Procurement';
import Marine from './pages/services/Marine';
import Engineering from './pages/services/Engineering';
import Consultancy from './pages/services/Consultancy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/procurement" element={<Procurement />} />
          <Route path="/services/marine" element={<Marine />} />
          <Route path="/services/engineering" element={<Engineering />} />
          <Route path="/services/consultancy" element={<Consultancy />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;