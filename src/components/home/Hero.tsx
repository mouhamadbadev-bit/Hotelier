import { useState } from "react";
import { CalendarDays, Users } from "lucide-react";

export default function Hero() {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!arrival || !departure || departure <= arrival) {
      alert("Veuillez sélectionner des dates valides.");
      return;
    }

    const params = new URLSearchParams({
      arrival,
      departure,
      adults,
      children,
    });

    window.location.href = `#contact?${params.toString()}`;
  };

  return (
    <section
      id="accueil"
      className="relative flex min-h-187.5 items-center bg-cover bg-center pt-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=2000')",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/20" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-2xl">
          <span className="mb-5 block text-sm font-semibold uppercase tracking-[0.35em] text-gold">
            Bienvenue à l'Hôtel Dakar
          </span>

          <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
            L'élégance au cœur de{" "}
            <span className="text-gold">Dakar</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90">
            Un séjour d'exception entre confort, raffinement et
            hospitalité sénégalaise.
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-12 grid gap-4 rounded-xl bg-white p-5 shadow-2xl md:grid-cols-5"
          >
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">
                Arrivée
              </label>
              <div className="flex items-center gap-2 rounded border p-2">
                <CalendarDays size={16} />
                <input
                  type="date"
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  required
                  className="w-full text-xs text-gray-800 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">
                Départ
              </label>
              <div className="flex items-center gap-2 rounded border p-2">
                <CalendarDays size={16} />
                <input
                  type="date"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  min={arrival || new Date().toISOString().split("T")[0]}
                  required
                  className="w-full text-xs text-gray-800 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">
                Adultes
              </label>
              <div className="flex items-center gap-2 rounded border p-2">
                <Users size={16} />
                <select
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  className="w-full text-xs text-gray-800 outline-none"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">
                Enfants
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full rounded border p-3 text-xs text-gray-800 outline-none"
              >
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="rounded bg-gold px-4 py-3 text-xs font-bold text-white transition hover:bg-gold-dark"
            >
              VÉRIFIER LA DISPONIBILITÉ
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}