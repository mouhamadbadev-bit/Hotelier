import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Chambres", href: "#chambres" },
  { label: "Restauration", href: "#restauration" },
  { label: "Événements", href: "#evenements" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-navy/95 text-white shadow-lg backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-5">
        <a href="#accueil" className="text-center">
          <span className="block font-serif text-2xl font-bold tracking-widest text-gold">
            ✧
          </span>
          <span className="font-serif text-lg tracking-widest">
            HÔTEL DAKAR
          </span>
          <span className="block text-xs tracking-[0.3em] text-gold">
            ★ ★ ★ ★ ★
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded bg-gold px-5 py-3 text-xs font-bold text-white transition hover:bg-gold-dark lg:block"
        >
          RÉSERVER MAINTENANT
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
          className="lg:hidden"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="bg-navy px-6 pb-6 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block border-b border-white/10 py-4 text-sm hover:text-gold"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-5 block rounded bg-gold p-3 text-center font-bold"
          >
            Réserver maintenant
          </a>
        </nav>
      )}
    </header>
  );
}