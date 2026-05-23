"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];
export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-300 bg-brand-white">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10 lg:px-12">
        <div className="relative flex h-[104px] items-center justify-center lg:grid lg:grid-cols-[auto_1fr_auto] lg:justify-normal">
          <a href="tel:2098571857" className="mr-auto p-2 text-brand-dark lg:hidden" aria-label="Call Tierra Roots Acquisitions">
            <Phone size={22} strokeWidth={2.4} />
          </a>
          <Link href="/" className="absolute left-1/2 shrink-0 -translate-x-1/2 lg:static lg:translate-x-0">
            <BrandLogo />
          </Link>
          <nav className="hidden items-center lg:grid lg:grid-cols-[1fr_auto]">
            <div className="ml-20 flex items-center gap-9 xl:ml-24 xl:gap-10">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className={`text-[16px] font-semibold transition-colors ${
                    pathname === link.href ? "text-brand-mid" : "text-brand-dark hover:text-brand-highlight"
                  }`}>
                  {link.label}
                </Link>
              ))}
            </div>
            <Link href="/contact" className="ml-10 rounded-md bg-brand-accent px-6 py-3.5 text-[16px] font-bold text-black shadow-sm transition-colors hover:bg-brand-accent-dark xl:ml-12">
              Get Free Quote
            </Link>
          </nav>
          <button className="ml-auto p-2 text-brand-dark lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="space-y-3 border-t border-gray-100 bg-white px-5 py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm font-semibold ${
                pathname === link.href ? "text-brand-highlight" : "text-brand-mid"
              }`}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileOpen(false)}
            className="block rounded-md bg-brand-accent px-5 py-3 text-center text-sm font-bold text-black transition-colors hover:bg-brand-accent-dark">
            Get Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}