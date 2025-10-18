import React, { useEffect } from 'react';
import { companyInfo, stats, services } from '../mock';
import { Building, Target, Eye, Award } from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - Kale Platform | Leading Suspended Scaffold Provider';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About {companyInfo.name}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {companyInfo.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Since {companyInfo.established}, Kale Platform has been at the forefront of the
                  suspended scaffold industry in Turkey and the region. Based in {companyInfo.address},
                  we have built a reputation for excellence, safety, and reliability in providing
                  professional access solutions for construction and maintenance projects.
                </p>
                <p>
                  Our journey began with a simple mission: to provide the highest quality suspended
                  scaffold equipment and services to the construction industry. Over the years, we have
                  grown from a small local operation to a leading provider serving major construction
                  companies and industrial facilities across multiple countries.
                </p>
                <p>
                  Today, we are proud to be the trusted partner of choice for hundreds of clients,
                  including some of the most prestigious construction and industrial companies in the
                  region. Our commitment to quality, safety, and customer satisfaction has remained
                  unwavering throughout our growth.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-slate-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-14 h-14 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600">
                To provide safe, reliable, and cost-effective suspended scaffold solutions that
                enable our clients to complete their projects efficiently and successfully.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-14 h-14 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-4">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600">
                To be the leading suspended scaffold provider in the region, recognized for
                innovation, quality, and exceptional service in the construction access industry.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-14 h-14 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Values</h3>
              <p className="text-slate-600">
                Safety first, quality always, customer satisfaction paramount. We uphold the
                highest standards in everything we do, from equipment to service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Certifications & Standards
            </h2>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">CE Certification</h3>
                    <p className="text-sm text-slate-600">
                      All our equipment meets European Conformity standards, ensuring the highest
                      level of safety and quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">TSE Standards</h3>
                    <p className="text-sm text-slate-600">
                      Compliant with Turkish Standards Institution requirements for construction
                      equipment and safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">ISO 9001</h3>
                    <p className="text-sm text-slate-600">
                      Quality Management System certification ensuring consistent service excellence
                      and continuous improvement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Safety Standards</h3>
                    <p className="text-sm text-slate-600">
                      Full compliance with international occupational health and safety standards in
                      all our operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Why Choose Kale Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Building className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Location</h2>
            <p className="text-lg text-slate-600 mb-2">{companyInfo.address}</p>
            <p className="text-slate-500 mb-8">
              Strategically located to serve clients across Turkey and international markets
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Call Us: {companyInfo.phone}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Email: {companyInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;