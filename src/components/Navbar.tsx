import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Carta", href: "#carta" },
  { label: "Horario", href: "#horario" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-dark/90 backdrop-blur-md border-b border-wine/20">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#inicio" className="font-display text-xl font-bold text-cream tracking-wide">
          Bodega La Fuente
        </a>
        
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-cream/80 hover:text-accent transition-colors text-sm font-body tracking-wide uppercase">
              {l.label}
            </a>
          ))}
          <a href="tel:+34868047322" className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-wine-light transition-colors">
            <Phone size={14} />
            Llamar
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-cream">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-warm-dark border-t border-wine/20 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-cream/80 hover:text-accent text-sm uppercase tracking-wide">
                  {l.label}
                </a>
              ))}
              <a href="tel:+34868047322" className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-semibold">
                <Phone size={14} /> +34 868 04 73 22
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
