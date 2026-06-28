import { motion } from 'framer-motion';

// Mock database grouped perfectly by sub-category
const galleryData = {
  wedding: [
    { id: 1, src: "https://res.cloudinary.com/dtscqhcop/image/upload/v1782212549/WhatsApp_Image_2026-06-23_at_16.12.10_ewjucr.jpg", name: "The Royal Crown Tier" },
    { id: 2, src: "https://images.unsplash.com/photo-1527419220451-f3b990929817?auto=format&fit=crop&q=80&w=600", name: "Ivory Opulence" }
  ],
  'birthday-kids': [
    { id: 3, src: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=600", name: "Whimsical Carousel" },
    { id: 4, src: "https://images.unsplash.com/photo-1464349172961-4c4d3365ad7a?auto=format&fit=crop&q=80&w=600", name: "Pastel Dreams" }
  ],
  'birthday-grownups': [
    { id: 5, src: "https://res.cloudinary.com/dtscqhcop/image/upload/v1782212764/WhatsApp_Image_2026-06-23_at_16.33.44_sbhmbq.jpg", name: "Midnight Silhouette" },
    { id: 6, src: "https://res.cloudinary.com/dtscqhcop/image/upload/v1782212776/WhatsApp_Image_2026-06-23_at_16.34.59_uxojr2.jpg", name: "Golden Lustre Sheet" }
  ],
  cupcakes: [
    { id: 7, src: "https://images.unsplash.com/photo-1534432123161-177b54636d7d?auto=format&fit=crop&q=80&w=600", name: "Couture Pearl Cupcakes" },
    { id: 8, src: "https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&q=80&w=600", name: "Velvet Swirl Petit" }
  ],
  bouquets: [
    { id: 9, src: "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?auto=format&fit=crop&q=80&w=600", name: "The Heritage Rose Composition" },
    { id: 10, src: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&q=80&w=600", name: "Botanical Grace Garland" }
  ]
};

const categoryTitles = {
  all: "The Signature Archive",
  wedding: "Wedding Structures & Engagement Masterpieces",
  'birthday-kids': "Kids Whimsical Birthday Collections",
  'birthday-grownups': "Grown-Ups Sophisticated Birthday Tiers",
  cupcakes: "Bespoke Wedding Cup Cakes",
  bouquets: "Handcrafted Sugar Flower Bouquets"
};

export default function Gallery({ category }) {
  // Flatten data arrays if 'all' is selected, otherwise render target group
  const displayedItems = category === 'all' 
    ? Object.values(galleryData).flat() 
    : galleryData[category] || [];

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
                  src={item.src} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103 grayscale-15 group-hover:grayscale-0 rounded-xl"
                />
                <div className="absolute inset-0 bg-[#11302E]/5 opacity-100 group-hover:opacity-0 transition-opacity duration-300 rounded-xl" />
              </div>
              <h3 className="font-serif text-lg text-[#11302E] group-hover:text-[#8C4450] transition-colors duration-300">
                {item.name}
              </h3>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#6B6661] mt-1 font-medium">Bespoke Composition</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}