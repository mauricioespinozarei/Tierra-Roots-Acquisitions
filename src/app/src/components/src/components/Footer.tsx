import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import BrandLogo from "./BrandLogo";
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];
const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Our Process", href: "/how-it-works" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Services", href: "/privacy#terms" },
];
export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-[1180px] px-5 text-center sm:px-8 md:text-left lg:px-12">
        <div className="grid gap-10 py-8 md:grid-cols-[1.55fr_0.7fr_0.75fr_1.1fr_140px] md:items-start">
          <div className="flex justify-center md:block">
            <BrandLogo variant="light" />
          </div>
          <div>
            <h2 className="mb-3 text-[16px] font-extrabold text-white">Quick Links</h2>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[15px] leading-5 text-white/90 transition-colors hover:text-brand-highlight">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-[16px] font-extrabold text-white">Company</h2>
            <ul className="space-y-1">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[15px] leading-5 text-white/90 transition-colors hover:text-brand-highlight">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-[16px] font-extrabold text-white">Contact</h2>
            <div className="space-y-3">
              <a href="tel:2098571857" className="flex items-center justify-center gap-3 text-[15px] text-white/90 transition-colors hover:text-brand-highlight md:justify-start">
                <Phone size={18} fill="currentColor" strokeWidth={2} />(209) 857-1857
              </a>
              <a href="mailto:info@tierrarootsacquisitions.com" className="flex items-center justify-center gap-3 text-[15px] text-white/90 transition-colors hover:text-brand-highlight md:justify-start">
                <Mail size={18} fill="currentColor" strokeWidth={1.7} />info@tierrarootsacquisitions.com
              </a>
              <div className="flex items-center justify-center gap-3 text-[15px] text-white/90 md:justify-start">
                <MapPin size={18} fill="currentColor" strokeWidth={1.8} />Patterson, CA
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck size={56} strokeWidth={1.6} className="text-white/70" />
              <span className="text-xs font-bold text-white/70 text-center">Local &amp; Trusted</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 border-t border-white/12 py-5 sm:flex-row sm:justify-between">
          <p className="text-[13px] text-white/90">© {new Date().getFullYear()} Tierra Roots Acquisitions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
