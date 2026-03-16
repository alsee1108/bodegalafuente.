const Footer = () => (
  <footer className="bg-warm-dark text-cream/60 py-12 border-t border-cream/10">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display text-2xl font-bold text-cream mb-2">Bodega La Fuente</p>
      <p className="text-sm mb-4">Calle Jara 27, 30201 Cartagena, Murcia · +34 868 04 73 22</p>
      <p className="text-xs">© {new Date().getFullYear()} Bodega La Fuente. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
