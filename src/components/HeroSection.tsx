import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import heroImg from "@/assets/hero-tapas.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Interior de Bodega La Fuente con tapas y vinos" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/70 via-warm-dark/50 to-warm-dark/90" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-body text-accent text-sm uppercase tracking-[0.3em] mb-4">
          Bar de Tapas · Vinoteca · Cartagena
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-cream leading-tight mb-6">
          Bodega<br />La Fuente
        </h1>
        <p className="font-body text-cream/80 text-lg md:text-xl mb-3 max-w-xl mx-auto">
          Tapas tradicionales y vinos selectos en el corazón de Cartagena desde hace generaciones.
        </p>

        <div className="flex items-center justify-center gap-4 mb-8 text-cream/70 text-sm">
          <span className="flex items-center gap-1">
            <Star size={16} className="text-accent fill-accent" />
            4,2 ★ · +3.700 reseñas
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={16} />
            Calle Jara 27
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#carta" className="bg-primary text-primary-foreground px-8 py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-wine-light transition-colors">
            Ver la Carta
          </a>
          <a href="#contacto" className="border border-cream/40 text-cream px-8 py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-cream/10 transition-colors">
            Cómo Llegar
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
