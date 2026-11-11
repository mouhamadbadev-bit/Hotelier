import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "Demande de réservation",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch(
        "https://formspree.io/f/TON_ID_FORMSPREE",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Impossible d'envoyer votre demande.");
      }

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Demande de réservation",
        message: "",
      });
    } catch {
      setError(
        "Une erreur est survenue. Veuillez réessayer ultérieurement."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Parlons de votre séjour
          </span>

          <h2 className="mt-3 font-serif text-4xl font-bold text-navy">
            Contact & Demande de devis
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            Vous souhaitez réserver une chambre, organiser un
            événement ou obtenir des renseignements ? Notre équipe
            est à votre disposition.
          </p>

          <div className="mt-9 space-y-6">
            <div>
              <h3 className="font-semibold text-navy">Adresse</h3>
              <p className="mt-1 text-sm text-gray-600">
                Route des Almadies, Dakar, Sénégal
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-navy">Téléphone</h3>
              <a
                href="tel:+221331234567"
                className="mt-1 block text-sm text-gray-600 hover:text-gold"
              >
                +221 33 123 45 67
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-navy">Email</h3>
              <a
                href="mailto:contact@hoteldakar.sn"
                className="mt-1 block text-sm text-gray-600 hover:text-gold"
              >
                contact@hoteldakar.sn
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-navy">Horaires</h3>
              <p className="mt-1 text-sm text-gray-600">
                Réception ouverte 24h/24 et 7j/7
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl">
            <iframe
              title="Localisation de l'hôtel à Dakar"
              src="https://www.google.com/maps?q=Les+Almadies+Dakar+Senegal&output=embed"
              width="100%"
              height="260"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>

        <div className="rounded-2xl bg-cream p-6 md:p-9">
          <h3 className="font-serif text-2xl font-bold text-navy">
            Envoyez-nous un message
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Tous les champs marqués d'un astérisque sont obligatoires.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-navy">
                Nom complet *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                maxLength={100}
                autoComplete="name"
                className="w-full rounded-lg border border-gray-200 bg-white p-3 text-sm outline-none focus:border-gold"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-navy">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                  maxLength={254}
                  autoComplete="email"
                  className="w-full rounded-lg border border-gray-200 bg-white p-3 text-sm outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-navy">
                  Téléphone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+221 77 123 45 67"
                  maxLength={25}
                  autoComplete="tel"
                  className="w-full rounded-lg border border-gray-200 bg-white p-3 text-sm outline-none focus:border-gold"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-navy">
                Sujet *
              </label>

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-white p-3 text-sm outline-none focus:border-gold"
              >
                <option>Demande de réservation</option>
                <option>Réservation de restaurant</option>
                <option>Organisation d'événement</option>
                <option>Demande de devis</option>
                <option>Autre demande</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-navy">
                Votre message *
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre demande..."
                required
                maxLength={3000}
                rows={5}
                className="w-full resize-none rounded-lg border border-gray-200 bg-white p-3 text-sm outline-none focus:border-gold"
              />
            </div>

            {success && (
              <div
                role="status"
                className="flex items-center gap-2 rounded-lg bg-green-100 p-4 text-sm text-green-800"
              >
                <CheckCircle size={20} />
                Votre message a été envoyé avec succès !
              </div>
            )}

            {error && (
              <div
                role="alert"
                className="flex items-center gap-2 rounded-lg bg-red-100 p-4 text-sm text-red-700"
              >
                <AlertCircle size={20} />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-gold py-4 text-sm font-bold text-white transition hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={18} />
              {loading ? "ENVOI EN COURS..." : "ENVOYER MA DEMANDE"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}