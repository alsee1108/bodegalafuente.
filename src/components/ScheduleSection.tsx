import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const schedule = [
  { day: "Lunes a Viernes", hours: "10:30 – 17:00 · 19:30 – 00:00" },
  { day: "Sábado", hours: "11:00 – 17:00 · 19:30 – 00:30" },
  { day: "Domingo", hours: "11:00 – 17:00 · 19:30 – 00:00" },
];

const ScheduleSection = () => (
  <section id="horario" className="py-24 bg-warm-dark text-cream">
    <div className="container mx-auto px-4 max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Clock size={32} className="text-accent mx-auto mb-4" />
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-2">Horario</h2>
        <p className="text-cream/60 mb-12 text-sm">Horarios sujetos a cambios en festivos y ocasiones especiales</p>

        <div className="space-y-6">
          {schedule.map((s) => (
            <div key={s.day} className="flex flex-col sm:flex-row justify-between items-center border-b border-cream/10 pb-4">
              <span className="font-display text-lg font-semibold">{s.day}</span>
              <span className="text-accent font-body">{s.hours}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ScheduleSection;
