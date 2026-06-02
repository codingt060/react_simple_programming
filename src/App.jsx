import './assets/custom.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;