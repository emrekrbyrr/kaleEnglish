import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  TrendingDown,
  ShieldCheck,
  Clock,
  CheckCircle,
  HardHat,
  Wrench,
  CreditCard,
} from "lucide-react";
import {
  companyInfo,
  products,
  services,
  testimonials,
  clients,
  stats,
} from "@/mock";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "KaleLift | Swing Stage & Suspended Platform Rental",
    description:
      "Certified swing stage rental, suspended platform sales, and installation support for high-rise projects across Africa and Europe.",
    alternates: {
      canonical: "/",
    },
  };
}

const productImages = {
  "suspended-scaffold": "/suspended-scaffold.jpg",
  "facade-platform": "/facade-platform.jpg",
  monorail: "/monorail-system.webp",
  matafora: "/matafora-system.webp",
  manlift: "/manlift.jpg",
  accessories: "/accessories-consoles.webp",
  "turning-platform": "/turning-platform.jpg",
};

const iconMap = {
  award: Award,
  users: Users,
  "trending-down": TrendingDown,
  "shield-check": ShieldCheck,
  clock: Clock,
  "check-circle": CheckCircle,
  "hard-hat": HardHat,
  wrench: Wrench,
  "credit-card": CreditCard,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: companyInfo.name,
      url: SITE_URL,
      description: companyInfo.description,
      email: companyInfo.email,
      telephone: companyInfo.phone,
      address: companyInfo.address,
      sameAs: [
        "https://www.kaleplatform.com",
        "https://www.linkedin.com/company/kale-platform/",
        "https://www.instagram.com/kale_platform",
        "https://www.youtube.com/channel/UC7hO-P7SET0U-I7x8TWxwBA",
      ],
    },
    {
      "@type": "Service",
      serviceType: "Swing stage and suspended platform rental",
      provider: {
        "@type": "Organization",
        name: companyInfo.name,
      },
      areaServed: ["Africa", "Europe", "Turkey"],
      description:
        "Swing stage rental, suspended platform sales, and installation support for high-rise construction and facade maintenance projects.",
    },
  ],
};

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 -z-10"></div>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Suspended Platform & Swing Stage Rental for Africa & Europe
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Certified swing stage rental and suspended platform sales for high-rise construction,
              facade restoration, and maintenance across Africa and Europe. Modular decks,
              safety-locked hoists, and expert setup keep crews moving.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/suspended-platform-rental-africa-europe"
                className="group px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all hover:shadow-lg flex items-center space-x-2"
              >
                <span className="font-medium">Explore Rental Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-slate-700 border-2 border-gray-300 rounded-lg hover:border-red-600 hover:text-red-600 transition-all font-medium"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From ZLP800 platforms to monorail access and accessories, our range is built for
              export projects with configurable spans and reliable delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-white flex items-center justify-center p-4">
                  <Image
                    src={productImages[product.slug]}
                    alt={product.name}
                    width={560}
                    height={320}
                    className="w-full h-full object-contain"
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <Link
                    href={`/products#${product.slug}`}
                    className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium text-sm group-hover:translate-x-1 transition-transform"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Teams Choose KaleLift
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We deliver suspended platform systems from Turkey with documentation, engineering
              guidance, and on-site support tailored to African and European requirements.
              Transparent pricing and fast response keep projects on schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Award;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white hover:bg-red-50 transition-all duration-300 border border-transparent hover:border-red-200"
                >
                  <div className="w-14 h-14 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Contractors Say
            </h2>
            <p className="text-lg text-slate-600">
              Feedback from international construction and maintenance teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-500 mt-1">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Contractors Worldwide
            </h2>
            <p className="text-lg text-slate-600">
              Construction and industrial teams across Turkey, Africa, and Europe rely on our access solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm font-medium text-slate-600 text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Plan Your Access Solution?
          </h2>
          <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto">
            Talk to our team for a fast consultation and a clear rental or sales quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
