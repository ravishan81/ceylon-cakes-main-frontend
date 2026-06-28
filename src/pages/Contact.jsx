import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" class="py-32 px-8 bg-luxury-cream/20">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Info Details Column */}
          <div class="md:col-span-5">
            <h2 class="font-serif text-4xl text-luxury-dark font-light mb-6">Begin Your Consultation</h2>
            <p class="font-sans text-sm text-luxury-muted font-light leading-7 mb-12">
              We look forward to translating your celebrations into exceptional confectionery designs. Please fill out our registry details or reach out directly to schedule an immersive taste consultation.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <Mail size={16} class="text-luxury-gold stroke-[1.25]" />
                <span class="font-sans text-xs uppercase tracking-widest text-luxury-muted">kaweesha38@gmail.com</span>
              </div>
              <div class="flex items-center space-x-4">
                <Phone size={16} class="text-luxury-gold stroke-[1.25]" />
                <span class="font-sans text-xs uppercase tracking-widest text-luxury-muted">+94 77 162 3424</span>
              </div>
              <div class="flex items-center space-x-4">
                <MapPin size={16} class="text-luxury-gold stroke-[1.25]" />
                <span class="font-sans text-xs uppercase tracking-widest text-luxury-muted">Aluthgama, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Luxury Form Column */}
          <div class="md:col-span-7 bg-white p-10 border border-gray-100 shadow-sm">
            <form onSubmit={(e) => e.preventDefault()} class="space-y-8">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label class="block text-[11px] uppercase tracking-widest text-luxury-muted mb-2 font-medium">Full Name</label>
                  <input type="text" class="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-luxury-gold text-sm font-light transition-colors" />
                </div>
                <div>
                  <label class="block text-[11px] uppercase tracking-widest text-luxury-muted mb-2 font-medium">Event Date</label>
                  <input type="date" class="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-luxury-gold text-sm font-light transition-colors" />
                </div>
              </div>
              <div>
                <label class="block text-[11px] uppercase tracking-widest text-luxury-muted mb-2 font-medium">Email Address</label>
                <input type="email" class="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-luxury-gold text-sm font-light transition-colors" />
              </div>
              <div>
                <label class="block text-[11px] uppercase tracking-widest text-luxury-muted mb-2 font-medium">Tell us about your celebration</label>
                <textarea rows="4" class="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-luxury-gold text-sm font-light transition-colors resize-none"></textarea>
              </div>
              <motion.button 
                whileHover={{ y: -2 }}
                class="w-full bg-luxury-dark text-white text-xs uppercase tracking-widest py-4 hover:bg-luxury-gold transition-colors duration-500"
              >
                Submit Inquiry
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}