import { useState } from "react";
import {
  Check,
  Users,
  Maximize,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import type { RoomDetailsModalProps } from "../types/rooms";
import Modal from "../ui/Modal";

export default function RoomDetailsModal({
  room,
  isOpen,
  onClose,
}: RoomDetailsModalProps) {
  const [activeImage, setActiveImage] = useState(0);

  if (!room) return null;

  const images = room.gallery;

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };

  const previousImage = () => {
    setActiveImage((current) =>
      (current - 1 + images.length) % images.length
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="relative">
          <img
            src={images[activeImage]}
            alt={room.name}
            className="h-72 w-full rounded-xl object-cover"
          />

          <button
            onClick={previousImage}
            aria-label="Photo précédente"
            className="absolute left-3 top-1/2 rounded-full bg-white p-2 shadow"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextImage}
            aria-label="Photo suivante"
            className="absolute right-3 top-1/2 rounded-full bg-white p-2 shadow"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="mt-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">
            {room.category}
          </span>

          <h2 className="mt-2 font-serif text-3xl font-bold text-navy">
            {room.name}
          </h2>

          <p className="mt-3 text-gray-600">
            {room.description}
          </p>

          <div className="mt-5 flex gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Users size={18} />
              {room.capacity} personnes
            </span>

            <span className="flex items-center gap-2">
              <Maximize size={18} />
              {room.size} m²
            </span>
          </div>

          <h3 className="mb-4 mt-7 font-semibold text-navy">
            Équipements et services
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {room.amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <Check size={16} className="text-gold" />
                {amenity}
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-lg bg-cream p-4">
            <h3 className="font-semibold text-navy">
              Conditions d'annulation
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {room.cancellation}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs text-gray-500">À partir de</p>
              <p className="text-2xl font-bold text-gold">
                {room.price.toLocaleString("fr-FR")} FCFA
                <span className="text-xs font-normal text-gray-500">
                  {" "}/ nuit
                </span>
              </p>
            </div>

            <a
              href={`#contact?room=${room.id}`}
              onClick={onClose}
              className="rounded bg-gold px-6 py-3 text-sm font-bold text-white hover:bg-gold-dark"
            >
              RÉSERVER CETTE CHAMBRE
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}