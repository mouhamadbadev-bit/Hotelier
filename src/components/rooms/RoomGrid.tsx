import { useState } from "react";
import { Users, Maximize, ArrowRight } from "lucide-react";

import { roomsData } from "../../components/data/roomsData";
import type { Room } from "../../components/types/rooms";
import RoomDetailsModal from "./RoomDetailsModal";

export default function RoomGrid() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section id="chambres" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Hébergement
          </span>

          <h2 className="mt-3 font-serif text-4xl font-bold text-navy">
            Nos Chambres & Suites
          </h2>

          <p className="mt-3 text-gray-500">
            Des espaces élégants pensés pour votre confort et votre bien-être.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {roomsData.map((room) => (
            <article
              key={room.id}
              className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-navy">
                  {room.name}
                </h3>

                <div className="mt-3 flex gap-5 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Users size={15} />
                    {room.capacity} personnes
                  </span>

                  <span className="flex items-center gap-1">
                    <Maximize size={15} />
                    {room.size} m²
                  </span>
                </div>

                <p className="mt-4 min-h-12 text-sm leading-relaxed text-gray-600">
                  {room.description}
                </p>

                <div className="mt-4">
                  <p className="text-xs text-gray-500">
                    À partir de
                  </p>

                  <p className="font-bold text-navy">
                    {room.price.toLocaleString("fr-FR")} FCFA
                    <span className="text-xs font-normal text-gray-500">
                      {" "}/ nuit
                    </span>
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="flex-1 rounded border border-gold px-3 py-3 text-xs font-bold text-gold transition hover:bg-gold hover:text-white"
                  >
                    VOIR LES DÉTAILS
                  </button>

                  <a
                    href={`#contact?room=${room.id}`}
                    className="rounded bg-gold px-4 py-3 text-xs font-bold text-white transition hover:bg-gold-dark"
                  >
                    RÉSERVER
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setSelectedRoom(roomsData[0])}
            className="inline-flex items-center gap-2 border border-gold px-7 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-white"
          >
            DÉCOUVRIR NOS CHAMBRES
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      <RoomDetailsModal
        room={selectedRoom}
        isOpen={selectedRoom !== null}
        onClose={() => setSelectedRoom(null)}
      />
    </section>
  );
}