import Link from "next/link";
import { CheckCircle, ArrowRight, MapPin } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export default function CountryLandingPage({ country }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: country.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Suspended platform and swing stage rental",
    provider: {
      "@type": "Organization",
      name: "KaleLift",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: country.name,
    },
    description: country.metaDescription,
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-sm text-red-600 font-medium mb-4">
              <MapPin className="w-4 h-4" />
              {country.region}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {country.h1}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-4">
              {country.intro}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {country.intro2}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                <span>Get a Quote for {country.name}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+905395734636"
                className="px-8 py-4 bg-white text-slate-700 border-2 border-gray-300 rounded-lg hover:border-red-600 hover:text-red-600 transition-all font-medium"
              >
                Call: +90 539 573 4636
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Why Contractors in {country.name} Choose KaleLift
            </h2>
            <p className="text-lg text-slate-600 text-center mb-10">
              {country.whyUs}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {country.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Delivery & Logistics to {country.name}
            </h2>
            <p className="text-lg text-slate-600 text-center mb-8">
              {country.logistics}
            </p>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {country.logisticsDetails.map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">{item.value}</div>
                    <div className="text-sm text-slate-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Suspended Platform Rental FAQ — {country.name}
            </h2>
            <div className="space-y-6">
              {country.faq.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                  <p className="text-sm text-slate-600 mt-2">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Also Serving Other Markets
            </h2>
            <p className="text-slate-600 mb-6">
              KaleLift ships suspended platforms and swing stages across Africa and Europe.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {country.relatedMarkets.map((market) => (
                <Link
                  key={market.slug}
                  href={`/${market.slug}`}
                  className="px-4 py-2 bg-white rounded-lg text-sm text-slate-700 hover:text-red-600 hover:shadow-md transition-all border border-gray-200"
                >
                  {market.label}
                </Link>
              ))}
              <Link
                href="/suspended-platform-rental-africa-europe"
                className="px-4 py-2 bg-white rounded-lg text-sm text-slate-700 hover:text-red-600 hover:shadow-md transition-all border border-gray-200"
              >
                All Markets
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your {country.name} Project?
          </h2>
          <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto">
            Contact us for a fast quote tailored to your site requirements and shipping destination.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
