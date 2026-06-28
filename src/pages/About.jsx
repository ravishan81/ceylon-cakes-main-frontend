import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" class="py-32 px-8 bg-luxury-cream/40">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          class="h-[60vh] bg-white overflow-hidden p-4 border border-gray-100"
        >
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000" 
            alt="Baker Artistry" 
            class="w-full h-full object-cover"
          />
        </motion.div>

        <div>
          <h2 class="font-serif text-3xl md:text-4xl text-luxury-dark mb-6 tracking-wide">
            The Story Behind <br />
            <span class="italic font-serif text-luxury-gold">Ceylon Cakes</span>
          </h2>
          <div class="w-12 h-px bg-luxury-gold mb-8"></div>
          <p class="font-sans text-sm text-luxury-muted font-light leading-7 mb-6">
            Founded with a passion for architectural grace and fine pastry, Ceylon Cakes elevates celebratory confections into breathtaking centerpieces. Each layer is curated with the finest local and imported elements, translating your visions into culinary gold.
          </p>
          <p class="font-sans text-sm text-luxury-muted font-light leading-7">
            Every detail—from hand-sculpted sugar flora to flawless fondant textures—is meticulously managed with an uncompromising standard of sophistication.
          </p>
        </div>

      </div>
    </section>
  );
}