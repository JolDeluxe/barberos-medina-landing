export default function Hero() {
  return (
    <section
      id="inicio"
      className="h-screen flex flex-col justify-center items-center text-center bg-barber-black relative overflow-hidden"
    >
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-barber-black via-barber-black/90 to-barber-black pointer-events-none" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 40px, #D4AF37 40px, #D4AF37 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #D4AF37 40px, #D4AF37 41px)',
        }}
      />

      <div className="relative z-10 px-6">
        <p className="text-barber-gold tracking-[0.5em] mb-4 text-sm uppercase">
          León, Guanajuato
        </p>
        <h1 className="text-6xl md:text-8xl mb-6 font-title text-barber-light">
          Barbería Medina
        </h1>
        <p className="text-2xl font-title italic text-barber-light/80 mb-10">
          Tradición y Clase desde 1926
        </p>
        <a href="#contacto" className="btn-gold">
          Agenda vía WhatsApp
        </a>
      </div>
    </section>
  )
}