import { ArrowRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Restauration & Bar",
    description:
      "Découvrez une expérience culinaire unique alliant saveurs locales et internationales.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900",
    button: "RÉSERVER UNE TABLE",
    href: "#contact",
  },
  {
    id: 2,
    title: "Salles de réunion & Événements",
    description:
      "Des espaces modernes pour séminaires, conférences, mariages et événements.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900",
    button: "DÉTAILS DES SALLES",
    href: "#evenements",
  },
  {
    id: 3,
    title: "Offres Spéciales",
    description:
      "Profitez de nos offres exclusives et forfaits avantageux.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900",
    button: "NOUS CONTACTER",
    href: "#contact",
  },
];

export default function ExperienceCards() {
  return (
    <section id="restauration" className="bg-cream py-20">
      <div className="container mx-auto grid gap-7 px-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="group relative flex min-h-87.5 items-center justify-center overflow-hidden rounded-xl bg-cover bg-center text-center"
            style={{
              backgroundImage: `url('${experience.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/65 transition group-hover:bg-black/50" />

            <div className="relative z-10 max-w-sm px-7 text-white">
              <h2 className="font-serif text-3xl font-bold">
                {experience.title}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/90">
                {experience.description}
              </p>

              <a
                href={experience.href}
                className="mt-7 inline-flex items-center gap-2 rounded bg-gold px-6 py-3 text-xs font-bold transition hover:bg-gold-dark"
              >
                {experience.button}
                <ArrowRight size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div
        id="evenements"
        className="container mx-auto mt-16 px-6 text-center"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Professionnels & particuliers
        </span>

        <h2 className="mt-3 font-serif text-3xl font-bold text-navy">
          Organisez vos événements à Dakar
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Mariages, séminaires, conférences et réunions : profitez
          de nos espaces modulables et de notre accompagnement.
        </p>

        <a
          href="#contact"
          className="mt-7 inline-block rounded bg-navy px-8 py-4 text-sm font-bold text-white transition hover:bg-gold"
        >
          DEMANDER UN DEVIS
        </a>
      </div>
    </section>
  );
}