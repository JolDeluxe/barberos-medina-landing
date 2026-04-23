export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-barber-black border-b border-barber-gray z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-barber-gold font-title text-xl uppercase tracking-widest">
              Barbería Medina
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-barber-light hover:text-barber-gold transition-colors">Inicio</a>
            <a href="#servicios" className="text-barber-light hover:text-barber-gold transition-colors">Servicios</a>
            <a href="#historia" className="text-barber-light hover:text-barber-gold transition-colors">Nuestra Historia</a>
            <a href="#contacto" className="text-barber-light hover:text-barber-gold transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  )
}