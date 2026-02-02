import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { companyInfo } from "../mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{companyInfo.name}</h3>
            <p className="text-sm mb-4">{companyInfo.tagline}</p>
            <p className="text-sm text-slate-400">{companyInfo.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-red-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm hover:text-red-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/rental" className="text-sm hover:text-red-400 transition-colors">
                  Rental Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-red-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-sm">Suspended Scaffold Rental</li>
              <li className="text-sm">Suspended Scaffold Sales</li>
              <li className="text-sm">Installation Services</li>
              <li className="text-sm">Maintenance & Support</li>
              <li className="text-sm">Engineering Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">{companyInfo.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm hover:text-red-400 transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-red-400 transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
            
            {/* Social Media & Logo */}
            <div className="flex items-center space-x-4 mt-6">
              <a 
                href="https://www.kaleplatform.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-red-600 transition-colors flex items-center justify-center text-white font-bold text-lg"
              >
                K
              </a>
              <a 
                href="https://www.linkedin.com/company/kale-platform/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/kale_platform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UC7hO-P7SET0U-I7x8TWxwBA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="text-center mb-4">
            <p className="text-sm text-slate-400">
              KaleLift supports export projects across Africa and Europe.
            </p>
          </div>
          <p className="text-sm text-slate-400 text-center">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 mt-2 text-center">
            Certified CE & TSE Standards | ISO 9001 Quality Management
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;