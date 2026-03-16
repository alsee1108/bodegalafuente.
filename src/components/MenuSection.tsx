import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import tapasImg from "@/assets/tapas-spread.jpg";
import cartaImg from "@/assets/carta-restaurante.jpg";

const categories = [
  {
    name: "Tapas Clásicas",
    items: ["Anchoas del Cantábrico", "Patatas bravas", "Croquetas caseras", "Ensaladilla rusa", "Calamares a la andaluza"],
  },
  {
    name: "Pinchos y Tostas",
    items: ["Pincho de tortilla", "Tosta de salmón", "Pincho moruno", "Tosta de jamón ibérico", "Montadito de lomo"],
  },
  {
    name: "Especialidades",
    items: ["Combinado de tapas", "Pizza artesana", "Tabla de quesos", "Marinera murciana", "Pulpo a la gallega"],
  },
  {
    name: "Vinos y Bebidas",
    items: ["Vinos tintos D.O.", "Vinos blancos y rosados", "Cañas y cervezas", "Vermut de grifo", "Refrescos y combinados"],
  },
];

const MenuSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
  <section id="carta" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Nuestra carta</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Sabores que <span className="italic text-gradient-wine">enamoran</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background p-8 rounded-lg border border-border"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary inline-block" />
              {cat.name}
            </h3>
            <ul className="space-y-3">
              {cat.items.map((item) => (
                <li key={item} className="text-muted-foreground font-body text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative rounded-xl overflow-hidden max-w-3xl mx-auto"
      >
        <img src={tapasImg} alt="Selección de tapas variadas" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/80 to-transparent flex items-end p-8">
          <p className="text-cream font-display text-xl italic">
            "La mejor relación calidad-precio de Cartagena"
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MenuSection;
