export default function History() {
  return (
    <section
      id="historia"
      className="section-padding bg-barber-gray flex flex-col md:flex-row items-center gap-16"
    >
      {/* Text Column */}
      <div className="md:w-1/2">
        <h2 className="text-4xl text-barber-light mb-6">
          Una herencia de excelencia
        </h2>
        <p className="text-barber-light/70 leading-relaxed mb-8">
          Desde 1926, la familia Medina ha perfeccionado el arte de la barbería en el corazón de
          León, Guanajuato. Lo que comenzó como un pequeño local de barrio se convirtió en un
          referente de elegancia y tradición para generaciones de caballeros que buscan más que un
          simple corte: buscan un rito de paso, un momento propio.
        </p>
        <blockquote className="border-l-4 border-barber-gold pl-6 italic text-barber-light/90 text-xl font-title">
          "Más que un corte, una tradición familiar."
        </blockquote>
      </div>

      {/* Image Placeholder Column */}
      <div className="md:w-1/2 w-full">
        <div className="bg-barber-black border border-white/10 h-72 flex items-center justify-center">
          <span className="text-barber-light/30 tracking-widest text-sm uppercase">
            [Imagen Histórica]
          </span>
        </div>
      </div>
    </section>
  )
}