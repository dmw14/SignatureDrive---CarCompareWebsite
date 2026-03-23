import { Link } from "react-router-dom";
import { Car, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Compare Cars", to: "/compare" },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-gradient-luxury text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-glow">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold luxury-heading">SignatureDrive</h3>
            </div>
            <p className="text-white/80 leading-relaxed max-w-xl">
              Premium car comparison platform designed to help you discover and compare luxury vehicles with confidence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/80 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                contact@signaturedrive.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +91 12345 67890
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/70">© {currentYear} SignatureDrive. All rights reserved.</p>
          <p className="text-sm text-white/60">Built for enthusiasts who value performance, luxury, and precision.</p>
        </div>
      </div>
    </footer>
  );
}
