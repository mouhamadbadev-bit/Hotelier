import {
 
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  ArrowUp,
  Wifi,
  Utensils,
  CarFront,
  ConciergeBell,
  Star,
} from "lucide-react";

const navigation = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nos chambres", href: "#chambres" },
  { label: "Restauration", href: "#restauration" },
  { label: "Événements", href: "#evenements" },
  { label: "Nous contacter", href: "#contact" },
];

const services = [
  { label: "Réception 24h/24", icon: ConciergeBell },
  { label: "Restaurant & Bar", icon: Utensils },
  { label: "Wi-Fi haut débit", icon: Wifi },
  { label: "Parking privé", icon: CarFront },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071421] text-white">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#C69A45]/10 blur-[100px]" />

      {/* Booking CTA */}
      <div className="relative mx-auto max-w-7xl px-6 pt-16">
        <div className="relative overflow-hidden rounded-2xl border border-[#C69A45]/30 bg-linear-to-r from-[#14283A] to-[#0B1B2A] px-7 py-10 md:px-12 md:py-12">

          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border border-[#C69A45]/20" />
          <div className="absolute -right-2 -top-12 h-48 w-48 rounded-full border border-[#C69A45]/10" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D5AE67]">
                Votre prochaine escapade.
              </span>

              <h2 className="mt-3 font-serif text-2xl font-bold md:text-4xl">
                Vivez une expérience <br className="hidden md:block" />
                <span className="text-[#D5AE67]">inoubliable à Dakar.</span>
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-300">
                Découvrez le confort, l'élégance et l'hospitalité
                sénégalaise dans un cadre exceptionnel.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-md bg-[#C69A45] px-7 py-4 text-sm font-bold text-[#071421] transition duration-300 hover:bg-[#E0BD78] hover:shadow-xl hover:shadow-[#C69A45]/20"
            >
              RÉSERVER MAINTENANT
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-20">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <a href="#accueil" className="inline-block">

              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C69A45]/50">
                  <Star
                    size={30}
                    strokeWidth={1.2}
                    className="text-[#D5AE67]"
                  />
                </div>

                <div>
                  <h2 className="font-serif text-xl tracking-[0.18em]">
                    HÔTEL DAKAR
                  </h2>

                  <p className="mt-1 text-[9px] tracking-[0.35em] text-[#D5AE67]">
                    LUXE & HOSPITALITÉ
                  </p>
                </div>
              </div>

            </a>

            <p className="mt-7 max-w-xs text-sm leading-7 text-gray-400">
              L'élégance au cœur de Dakar. Profitez d'un séjour
              exceptionnel dans un environnement raffiné où
              chaque détail est pensé pour votre confort.
            </p>

            {/* Social networks */}
            <div className="mt-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#D5AE67]">
                Suivez-nous
              </p>

              <div className="flex gap-3">

           

                <a
                  href="mailto:contact@hoteldakar.sn"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition duration-300 hover:border-[#C69A45] hover:bg-[#C69A45] hover:text-[#071421]"
                >
                  <Mail size={17} />
                </a>

              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-7 font-serif text-xl">
              Navigation
            </h3>

            <div className="mb-6 h-0.5 w-10 bg-[#C69A45]" />

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition hover:translate-x-1 hover:text-[#D5AE67]"
                  >
                    <ArrowUpRight
                      size={13}
                      className="text-[#C69A45] opacity-0 transition group-hover:opacity-100"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-7 font-serif text-xl">
              Nos services
            </h3>

            <div className="mb-6 h-0.5 w-10 bg-[#C69A45]" />

            <ul className="space-y-5">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <li
                    key={service.label}
                    className="flex items-center gap-3 text-sm text-gray-400"
                  >
                    <Icon
                      size={18}
                      className="shrink-0 text-[#C69A45]"
                    />
                    {service.label}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-7 font-serif text-xl">
              Contactez-nous
            </h3>

            <div className="mb-6 h-0.5 w-10 bg-[#C69A45]" />

            <ul className="space-y-6">

              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#D5AE67]">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Notre adresse
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-300">
                    Route des Almadies,<br />
                    Dakar, Sénégal
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#D5AE67]">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Téléphone
                  </p>
                  <a
                    href="tel:+221331234567"
                    className="mt-1 block text-sm text-gray-300 transition hover:text-[#D5AE67]"
                  >
                    +221 33 123 45 67
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#D5AE67]">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Email
                  </p>
                  <a
                    href="mailto:contact@hoteldakar.sn"
                    className="mt-1 block break-all text-sm text-gray-300 transition hover:text-[#D5AE67]"
                  >
                    contact@hoteldakar.sn
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#D5AE67]">
                  <Clock size={19} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Disponibilité
                  </p>
                  <p className="mt-1 text-sm text-gray-300">
                    Réception 24h/24 - 7j/7
                  </p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* Map and location */}
        <div className="mt-16 overflow-hidden rounded-xl border border-white/10 bg-white/3 md:flex md:items-center md:justify-between">

          <div className="p-6 md:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D5AE67]">
              Notre emplacement
            </span>

            <h3 className="mt-3 font-serif text-2xl">
              Au cœur de Dakar
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Retrouvez-nous aux Almadies, Dakar, Sénégal.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Les+Almadies+Dakar+Senegal"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D5AE67] transition hover:text-white"
            >
              VOIR SUR GOOGLE MAPS
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="h-52 w-full md:h-56 md:w-1/2">
            <iframe
              title="Localisation Hôtel Dakar"
              src="https://www.google.com/maps?q=Les+Almadies+Dakar+Senegal&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 grayscale transition duration-500 hover:grayscale-0"
            />
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-[#050F19]">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-7 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Hôtel Dakar.
            Tous droits réservés.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-xs text-gray-500">
            <a href="#contact" className="transition hover:text-[#D5AE67]">
              Confidentialité
            </a>

            <a href="#contact" className="transition hover:text-[#D5AE67]">
              Mentions légales
            </a>
          </div>

          <a
            href="#accueil"
            aria-label="Retour en haut"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C69A45]/40 text-[#D5AE67] transition hover:bg-[#C69A45] hover:text-[#071421]"
          >
            <ArrowUp size={18} />
          </a>

        </div>
      </div>

    </footer>
  );
}