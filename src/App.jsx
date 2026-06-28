import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [galleryCategory, setGalleryCategory] = useState('all'); // Handles category routing

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, galleryCategory]);

  return (
    <div className="bg-white min-h-screen text-luxury-dark selection:bg-[#C99A44] selection:text-white overflow-x-hidden">
      <Navbar 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage} 
        setGalleryCategory={setGalleryCategory} 
      />
      <main>
        {currentPage === 'home' ? (
          <Home setCurrentPage={setCurrentPage} />
        ) : (
          <Gallery category={galleryCategory} />
        )}
      </main>
      <Footer />
    </div>
  );
}