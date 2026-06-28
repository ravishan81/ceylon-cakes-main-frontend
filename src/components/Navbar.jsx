import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ setCurrentPage, currentPage, setGalleryCategory }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileGalleryOpen, setIsMobileGalleryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open, and let Escape close it
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') setIsMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isMobileOpen]);

  // Close the mobile drawer whenever the route changes (including
  // navigation triggered from outside this component, e.g. browser
  // back/forward). Guarded so it's a no-op once already closed —
  // this isn't mirroring currentPage into state, it's synchronizing
  // the drawer with an external navigation event.
  useEffect(() => {
    if (isMobileOpen) setIsMobileOpen(false);
    if (isMobileGalleryOpen) setIsMobileGalleryOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const closeMobile = () => {
    setIsMobileOpen(false);
    setIsMobileGalleryOpen(false);
  };

  const handleNav = (targetId) => {
    closeMobile();
    setCurrentPage('home');
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleGalleryRoute = (categoryType) => {
    closeMobile();
    setGalleryCategory(categoryType);
    setCurrentPage('gallery');
  };

  const navLinks = ['Home', 'About', 'Offerings', 'Reviews'];

  const galleryCategories = [
    { label: 'Wedding Structures & Engagement Cakes', value: 'wedding' },
    { label: 'Kids Party Cakes', value: 'birthday-kids', isSub: true, group: 'Birthday Collections' },
    { label: 'Grown Ups Tiers', value: 'birthday-grownups', isSub: true },
    { label: 'Wedding Cup Cakes & Jar Cakes', value: 'cupcakes' },
    { label: 'Flower Bouquets', value: 'bouquets' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 sm:px-8 lg:px-16 ${
          isScrolled || isMobileOpen ? 'py-4 bg-white/95 backdrop-blur-xl border-b border-gray-100/80 shadow-xs' : 'py-6 sm:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Brand Logo Identity */}
          <button
            onClick={() => { closeMobile(); setCurrentPage('home'); setGalleryCategory('all'); }}
            className="font-serif text-lg sm:text-xl tracking-[0.25em] uppercase font-light text-[#11302E] cursor-pointer text-left z-50"
          >
            Ceylon <span className="italic text-[#C99A44] font-normal">Cakes</span>
          </button>

          {/* Navigation Link Options — desktop only */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item.toLowerCase())}
                className="font-sans text-[11px] uppercase tracking-widest text-[#6B6661] hover:text-[#C99A44] transition-colors duration-300 cursor-pointer relative py-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C99A44] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            {/* LUXURY DROPDOWN WRAPPER CONTAINER */}
            <div className="relative group py-1">
              <button
                onClick={() => handleGalleryRoute('all')}
                className={`font-sans text-[11px] uppercase tracking-widest transition-colors duration-300 cursor-pointer pb-2 ${
                  currentPage === 'gallery' ? 'text-[#C99A44] font-medium' : 'text-[#6B6661] hover:text-[#C99A44]'
                }`}
              >
                Gallery ▾
              </button>

              {/* Dropdown Options Board */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-gray-100 shadow-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-top p-2 space-y-0.5">
                <button
                  onClick={() => handleGalleryRoute('wedding')}
                  className="w-full text-left font-sans text-[10px] uppercase tracking-widest text-[#6B6661] hover:text-[#C99A44] hover:bg-[#FBF9F6] px-4 py-2.5 transition-colors cursor-pointer"
                >
                  Wedding Structures & Engagement Cakes
                </button>

                {/* Nested Birthday Category Splitting */}
                <div className="border-t border-gray-50 my-1" />
                <div className="px-4 py-1.5 font-sans text-[9px] uppercase tracking-[0.2em] text-[#C99A44] font-semibold">
                  Birthday Collections
                </div>
                <button
                  onClick={() => handleGalleryRoute('birthday-kids')}
                  className="w-full text-left font-sans text-[10px] uppercase tracking-widest text-[#6B6661] hover:text-[#C99A44] hover:bg-[#FBF9F6] pl-6 pr-4 py-2 transition-colors cursor-pointer"
                >
                  — Kids Party Cakes
                </button>
                <button
                  onClick={() => handleGalleryRoute('birthday-grownups')}
                  className="w-full text-left font-sans text-[10px] uppercase tracking-widest text-[#6B6661] hover:text-[#C99A44] hover:bg-[#FBF9F6] pl-6 pr-4 py-2 transition-colors cursor-pointer"
                >
                  — Grown Ups Tiers
                </button>
                <div className="border-b border-gray-50 my-1" />

                <button
                  onClick={() => handleGalleryRoute('cupcakes')}
                  className="w-full text-left font-sans text-[10px] uppercase tracking-widest text-[#6B6661] hover:text-[#C99A44] hover:bg-[#FBF9F6] px-4 py-2.5 transition-colors cursor-pointer"
                >
                  Wedding Cup Cakes & Jar Cakes
                </button>
                <button
                  onClick={() => handleGalleryRoute('bouquets')}
                  className="w-full text-left font-sans text-[10px] uppercase tracking-widest text-[#6B6661] hover:text-[#C99A44] hover:bg-[#FBF9F6] px-4 py-2.5 transition-colors cursor-pointer"
                >
                  Flower Bouquets
                </button>
              </div>
            </div>
          </div>

          {/* Action Button — desktop only */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNav('contact')}
              className="border border-[#11302E]/20 hover:border-[#C99A44] px-6 py-2.5 text-[10px] uppercase tracking-widest text-[#11302E] hover:bg-[#C99A44] hover:text-white transition-all duration-700 cursor-pointer font-sans"
            >
              Bespoke Inquiry
            </button>
          </div>

          {/* Hamburger toggle — mobile only */}
          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
            className="md:hidden z-50 p-2 -mr-2 text-[#11302E] cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} className="block">
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} className="block">
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

        </div>
      </motion.nav>

      {/* ============ MOBILE DRAWER ============ */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobile}
              className="fixed inset-0 bg-[#11302E]/30 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide-down panel */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 w-full z-40 md:hidden bg-white shadow-2xl pt-24 pb-10 px-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNav(item.toLowerCase())}
                    className="text-left font-sans text-sm uppercase tracking-widest text-[#11302E] hover:text-[#C99A44] py-3.5 border-b border-gray-100 transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                ))}

                {/* Gallery — collapsible since hover dropdowns don't work on touch */}
                <div className="border-b border-gray-100">
                  <button
                    onClick={() => setIsMobileGalleryOpen((prev) => !prev)}
                    aria-expanded={isMobileGalleryOpen}
                    className={`w-full flex items-center justify-between text-left font-sans text-sm uppercase tracking-widest py-3.5 cursor-pointer transition-colors ${
                      currentPage === 'gallery' ? 'text-[#C99A44]' : 'text-[#11302E] hover:text-[#C99A44]'
                    }`}
                  >
                    <span onClick={(e) => { e.stopPropagation(); handleGalleryRoute('all'); }}>Gallery</span>
                    <motion.span animate={{ rotate: isMobileGalleryOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isMobileGalleryOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3 space-y-0.5">
                          {galleryCategories.map((cat) => (
                            <div key={cat.value}>
                              {cat.group && (
                                <div className="pt-2 pb-1 pl-2 font-sans text-[9px] uppercase tracking-[0.2em] text-[#C99A44] font-semibold">
                                  {cat.group}
                                </div>
                              )}
                              <button
                                onClick={() => handleGalleryRoute(cat.value)}
                                className={`w-full text-left font-sans text-xs uppercase tracking-widest text-[#6B6661] hover:text-[#C99A44] hover:bg-[#FBF9F6] py-2.5 transition-colors cursor-pointer ${cat.isSub ? 'pl-6' : 'pl-2'}`}
                              >
                                {cat.isSub ? `— ${cat.label}` : cat.label}
                              </button>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <button
                onClick={() => handleNav('contact')}
                className="w-full mt-6 border border-[#11302E]/20 px-6 py-3.5 text-[11px] uppercase tracking-widest text-white bg-[#11302E] transition-all duration-300 cursor-pointer font-sans text-center"
              >
                Bespoke Inquiry
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}