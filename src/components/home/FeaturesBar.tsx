import {
  MapPin,
  BedDouble,
  Utensils,
  Users,
  Wifi,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Emplacement idéal",
    description: "Au cœur des Almadies, Dakar",
  },
  {
    icon: BedDouble,
    title: "Confort premium",
    description: "Chambres élégantes et équipées",
  },
  {
    icon: Utensils,
    title: "Restauration raffinée",
    description: "Cuisine locale et internationale",
  },
  {
    icon: Users,
    title: "Service d'exception",
    description: "Une équipe attentive 24h/24",
  },
  {
    icon: Wifi,
    title: "Wi-Fi haut débit",
    description: "Connexion gratuite",
  },
];

export default function FeaturesBar() {
  return (
    <section className="bg-cream py-9">
      <div className="container mx-auto grid grid-cols-2 gap-7 px-6 md:grid-cols-3 lg:grid-cols-5">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div key={feature.title} className="flex items-center gap-3">
              <Icon className="shrink-0 text-gold" size={32} />

              <div>
                <h3 className="font-semibold text-navy">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}