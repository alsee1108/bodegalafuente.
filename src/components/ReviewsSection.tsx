import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "María G.", text: "El mejor sitio de tapas de Cartagena. Las anchoas están espectaculares y el vino de la casa es una maravilla. Volveremos seguro.", rating: 5 },
  { name: "Carlos P.", text: "Lugar emblemático, ambiente increíble. Pedimos el combinado de tapas y no dejamos nada. Relación calidad-precio inmejorable.", rating: 5 },
  { name: "Ana R.", text: "Fuimos como turistas y nos encantó. Se nota que es un sitio auténtico, los locales van mucho. Las croquetas, top.", rating: 4 },
  { name: "Pedro M.", text: "Siempre que vengo a Cartagena paso por La Fuente. Las bravas y la marinera son imprescindibles. Muy recomendable.", rating: 5 },
];

const ReviewsSection = () => (
  <section id="opiniones" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Opiniones</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Lo que dicen <span className="italic text-gradient-wine">nuestros clientes</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card p-6 rounded-lg border border-border"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} size={14} className="text-accent fill-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
            <p className="font-display font-semibold text-foreground text-sm">— {r.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
