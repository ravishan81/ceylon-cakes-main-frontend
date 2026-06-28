export default function Footer() {
  return (
    <footer class="bg-luxury-cream border-t border-gray-100 py-16 px-8 text-center">
      <div class="font-serif text-2xl tracking-[0.3em] uppercase mb-4">Ceylon Cakes</div>
      <p class="font-serif italic text-luxury-muted text-sm mb-8">Bespoke Confectionery & Luxury Wedding Cakes</p>
      <div class="w-12 h-px bg-luxury-gold mx-auto mb-8"></div>
      <p class="font-sans text-[10px] uppercase tracking-widest text-luxury-muted">
        © {new Date().getFullYear()} Ceylon Cakes. All Rights Reserved.
      </p>
    </footer>
  );
}