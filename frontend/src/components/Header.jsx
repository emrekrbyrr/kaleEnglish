import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { companyInfo } from "../mock";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/products", label: "Products" },
  { path: "/rental", label: "Rental Services" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://customer-assets.emergentagent.com/job_f26ed2bd-7f38-45ed-a0bc-2f5ec395f275/artifacts/5mgkyw4x_kaleliftlogo.png"
              alt="KaleLift"
              width={140}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-sm font-medium transition-colors hover:text-red-600 text-slate-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Quick Contact</span>
            </a>
          </div>

          <details className="md:hidden relative">
            <summary className="list-none cursor-pointer p-2 text-slate-600 hover:text-slate-900 flex items-center">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Menu</span>
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-lg border border-slate-200 bg-white shadow-lg p-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="text-sm font-medium transition-colors hover:text-red-600 text-slate-600"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">Quick Contact</span>
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
};

export default Header;