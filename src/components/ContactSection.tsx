import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contacto" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-accent text-sm uppercase tracking-[0.2em] mb-2">Encuéntranos</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Ven a <span className="italic text-gradient-wine">visitarnos</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          {[
            { icon: MapPin, label: "Dirección", value: "Calle Jara 27, 30201 Cartagena, Murcia" },
            { icon: Phone, label: "Teléfono", value: "+34 868 04 73 22", href: "tel:+34868047322" },
            { icon: Mail, label: "Email", value: "bodegalafuentect@gmail.com", href: "mailto:bodegalafuentect@gmail.com" },
            { icon: Clock, label: "Horario", value: "L-V 10:30–17:00, 19:30–00:00" },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">{item.value}</a>
                ) : (
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg overflow-hidden shadow-xl border border-border h-80">
          <iframe
            title="Ubicación de Bodega La Fuente"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.0!2d-0.9862!3d37.5997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6318f3a123456%3A0x0!2sCalle%20Jara%2027%2C%20Cartagena!5e0!3m2!1ses!2ses!4v1"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
