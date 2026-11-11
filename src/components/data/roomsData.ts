import type { Room } from "../types/rooms";

export const roomsData: Room[] = [
  {
    id: 1,
    name: "Chambre Supérieure",
    category: "Supérieure",
    description:
      "Une chambre élégante offrant un confort exceptionnel pour un séjour inoubliable à Dakar.",
    price: 85000,
    size: 28,
    capacity: 2,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900",
    ],
    amenities: [
      "Lit King Size",
      "Climatisation",
      "Wi-Fi haut débit",
      "Télévision Smart TV",
      "Salle de bain privée",
      "Mini-bar",
      "Service de chambre",
    ],
    cancellation: "Annulation gratuite jusqu'à 48 heures avant l'arrivée.",
  },
  {
    id: 2,
    name: "Chambre Deluxe",
    category: "Deluxe",
    description:
      "Plus d'espace, une décoration raffinée et des équipements haut de gamme.",
    price: 110000,
    size: 35,
    capacity: 2,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900",
    ],
    amenities: [
      "Lit King Size",
      "Balcon privé",
      "Climatisation",
      "Wi-Fi haut débit",
      "Smart TV",
      "Mini-bar",
      "Coffre-fort",
    ],
    cancellation: "Annulation gratuite jusqu'à 72 heures avant l'arrivée.",
  },
  {
    id: 3,
    name: "Suite Junior",
    category: "Suite",
    description:
      "Un espace raffiné avec salon privé, décoration élégante et prestations premium.",
    price: 150000,
    size: 45,
    capacity: 2,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900",
    ],
    amenities: [
      "Salon privé",
      "Lit King Size",
      "Balcon",
      "Salle de bain premium",
      "Wi-Fi haut débit",
      "Smart TV",
      "Service VIP",
    ],
    cancellation: "Annulation gratuite jusqu'à 72 heures avant l'arrivée.",
  },
  {
    id: 4,
    name: "Suite Présidentielle",
    category: "Prestige",
    description:
      "Le luxe ultime avec une vue panoramique, un espace généreux et un service personnalisé.",
    price: 250000,
    size: 80,
    capacity: 2,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900",
    ],
    amenities: [
      "Suite de 80 m²",
      "Salon privé",
      "Terrasse panoramique",
      "Jacuzzi",
      "Service de majordome",
      "Mini-bar premium",
      "Transfert VIP",
    ],
    cancellation: "Annulation gratuite jusqu'à 7 jours avant l'arrivée.",
  },
];