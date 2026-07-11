import { motion } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { useGalleryStore } from '../lib/store';

const categoryTitles = {
  all: "The Signature Archive",
  wedding: "Wedding Structures & Engagement Masterpieces",
  'birthday-kids': "Kids Whimsical Birthday Collections",
  'birthday-grownups': "Grown-Ups Sophisticated Birthday Tiers",
  cupcakes: "Bespoke Wedding Cup Cakes",
  bouquets: "Handcrafted Sugar Flower Bouquets"
};

// Helper to flatten API data
const flattenApiData = (apiData) => {
  if (!apiData || !apiData.data) return [];
  const items = [];
  Object.values(apiData.data).forEach(categoryObj => {
    Object.values(categoryObj).forEach(subCategoryArray => {
      items.push(...subCategoryArray);
    });
  });
  return items;
};

export default function Gallery({ category }) {
  const { galleryData, fetchGallery, loading } = useGalleryStore();

  useEffect(() => {
    // Fetch API data on mount. 
    // Setting limit to 100 to get a good chunk for filtering.
    fetchGallery(1, 100);
  }, [fetchGallery]);

  const allItems = useMemo(() => flattenApiData(galleryData), [galleryData]);

  // Filter items based on the passed category prop
  const displayedItems = useMemo(() => {
    if (category === 'all') return allItems;
    
    return allItems.filter(item => {
      const cat = item.category || '';
      const subCat = item.sub_category || '';
      
      if (category === 'wedding') return cat === 'Wedding & Engagement cakes';
      if (category === 'birthday-kids') return cat === 'Birthdays' && subCat === 'kids';
      if (category === 'birthday-grownups') return cat === 'Birthdays' && subCat === 'Grown ups / elders';
      if (category === 'cupcakes') return cat === 'Wedding Cup cakes';
      if (category === 'bouquets') return cat === 'Flower Bouquets';
      
      return false;
    });
  }, [allItems, category]);

  return (
    <section className="py-36 px-8 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Sub-Header Title Panel */}
        <div className="text-center md:text-left mb-20 border-b border-gray-100 pb-8">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#C99A44] font-sans font-semibold mb-2">Portfolio Showcase</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#11302E] tracking-tight transition-all duration-300">
            {categoryTitles[category]}
          </h2>
        </div>

        {/* Responsive grid — 2-up on mobile, 3-up on tablet, 4-up on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {displayedItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="aspect-3/4 bg-white overflow-hidden mb-4 relative shadow-md border-4 border-white rounded-2xl">
                <img 
                  src={item.image_url || item.src} 
                  alt={item.title || item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103 grayscale-15 group-hover:grayscale-0 rounded-xl"
                />
                <div className="absolute inset-0 bg-[#11302E]/5 opacity-100 group-hover:opacity-0 transition-opacity duration-300 rounded-xl" />
              </div>
              <h3 className="font-serif text-lg text-[#11302E] group-hover:text-[#8C4450] transition-colors duration-300">
                {item.title || item.name}
              </h3>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#6B6661] mt-1 font-medium">
                {item.description || "Bespoke Composition"}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}