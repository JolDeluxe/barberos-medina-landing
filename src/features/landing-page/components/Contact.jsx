export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-barber-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Text Column */}
        <div>
          <h2 className="text-4xl text-barber-light mb-8">Ubicación y Contacto</h2>
          <div className="space-y-4 text-barber-light/70">
            <p>
              <span className="text-barber-gold uppercase tracking-widest text-xs block mb-1">Teléfono</span>
              +52 477 219 1700
            </p>
            <p>
              <span className="text-barber-gold uppercase tracking-widest text-xs block mb-1">Dirección</span>
              Av. Panorama 613, Panorama, 37160 León de los Aldama, Gto.
            </p>
          </div>
          <a
            href="https://wa.link/zxs447"
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-6 inline-block"
          >
            Enviar WhatsApp
          </a>
        </div>

        {/* Map Column */}
        <div className="grayscale contrast-125">
          <iframe
            src="https://maps.app.goo.gl/Nw4kxD2VKQocyHf4A"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Barbería Medina"
          />
        </div>
      </div>
    </section>
  )
}