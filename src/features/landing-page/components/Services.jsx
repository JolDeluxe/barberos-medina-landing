const services = [
  {
    title: 'Corte Clásico',
    description:
      'Ejecutado con tijera y máquina de precisión, cada corte es una obra de arte adaptada a tu estructura facial. Terminado impecable, sin apresuramiento.',
  },
  {
    title: 'Rasurado Tradicional',
    description:
      'Ritual completo con toalla caliente, navaja de filo y productos de primera. Deja tu piel suave y rejuvenecida como lo han hecho los caballeros desde siempre.',
  },
  {
    title: 'Cuidado Personal',
    description:
      'Acabado y estilizado con geles, ceras y pomadas seleccionadas. Complementamos tu look para que salgas de la silla con total confianza.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-barber-black">
      <h2 className="text-4xl text-center text-barber-light mb-12">
        Nuestros Servicios
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-barber-gray p-8 border border-white/5 hover:border-barber-gold/30 transition-colors"
          >
            <div className="w-8 h-0.5 bg-barber-gold mb-6" />
            <h3 className="text-xl text-barber-gold mb-4">{service.title}</h3>
            <p className="text-barber-light/70 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}