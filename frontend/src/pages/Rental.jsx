import React, { useEffect } from 'react';
import { rentalInfo } from '../mock';
import { CheckCircle, Clock, Shield, Wrench, Phone } from 'lucide-react';

const Rental = () => {
  useEffect(() => {
    document.title = 'Suspended Scaffold Rental - Kale Platform | Professional Equipment Rental';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Suspended Scaffold Rental Services
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {rentalInfo.description}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              <span>Get Rental Quote</span>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Rental Service Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rentalInfo.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-white hover:bg-red-50 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Our Rental Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rentalInfo.process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                  {index < rentalInfo.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-red-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              What's Included in Our Rental Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Safety Certified</h3>
                <p className="text-sm text-slate-600">
                  All equipment is CE & TSE certified and regularly inspected
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Installation</h3>
                <p className="text-sm text-slate-600">
                  Professional installation and setup by our expert team
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">24/7 Support</h3>
                <p className="text-sm text-slate-600">
                  Round-the-clock technical support and emergency services
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Consultation</h3>
                <p className="text-sm text-slate-600">
                  Expert advice on equipment selection and project planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Flexible Rental Terms
            </h2>
            <div className="space-y-4 text-slate-600 mb-8">
              <p>
                We understand that every project is unique, which is why we offer flexible rental
                terms to suit your specific needs. Whether you need equipment for a few days, weeks,
                or months, we have rental packages that work for you.
              </p>
              <p>
                Our pricing is competitive and transparent, with no hidden fees. We offer:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Daily, weekly, and monthly rental rates</li>
                <li>Long-term rental discounts</li>
                <li>Package deals for multiple equipment</li>
                <li>Flexible payment options</li>
                <li>Free delivery within service area</li>
              </ul>
            </div>
            <div className="text-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Rent Suspended Scaffold Equipment?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and competitive rental quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Get Started
            </a>
            <a
              href="tel:+902122125973"
              className="px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
            >
              Call Now: +90 212 212 5973
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rental;