import { motion } from "framer-motion";
import { Wine, UtensilsCrossed, Users } from "lucide-react";
import wineImg from "@/assets/wine-pour.jpg";

const features = [
  { icon: UtensilsCrossed, title: "Tapas Tradicionales", desc: "Anchoas, pinchos, tostas y las mejores tapas de la cocina murciana y mediterránea." },
  { icon: Wine, title: "Vinos Selectos", desc: "Amplia carta de vinos perfectos para acompañar cada tapa o celebrar cualquier ocasión." },
  { icon: Users, title: "Ambiente Auténtico", desc: "Un lugar emblemático de Cartagena, popular entre locales y turistas por su ambiente acogedor." },
];

const AboutSection = () => (
  <section id="nosotros" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2 font-body">Nuestra historia</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Un rincón de <span className="text-gradient-wine italic">sabor</span> cartagenero
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Bodega La Fuente es uno de los bares con más solera y reconocimiento de Cartagena. 
            Nuestra propuesta combina las tapas de siempre con una selección de vinos cuidadosamente 
            elegida, todo en un ambiente informal y genuinamente mediterráneo. Más de 3.700 reseñas 
            avalan la experiencia.
          </p>
          <div className="space-y-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <f.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img src={wineImg} alt="Copa de vino tinto" className="rounded-lg shadow-2xl w-full max-w-md mx-auto" />
          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
            <p className="font-display text-3xl font-bold">4,2★</p>
            <p className="text-sm opacity-80">+3.700 reseñas</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
