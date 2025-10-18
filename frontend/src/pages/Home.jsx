import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, TrendingDown, ShieldCheck, Clock, CheckCircle, HardHat, Wrench, CreditCard, ChevronLeft, ChevronRight } from 'lucide-react';
import { getCompany, getProducts, getServices, getTestimonials, getClients } from '../services/api';
import useEmblaCarousel from 'embla-carousel-react';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    company: null,
    products: [],
    services: [],
    testimonials: [],
    clients: []
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    document.title = 'Kale Platform - Suspended Scaffold Rental & Sales | Istanbul, Turkey';
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [companyData, productsData, servicesData, testimonialsData, clientsData] = await Promise.all([
        getCompany(),
        getProducts(),
        getServices(),
        getTestimonials(),
        getClients()
      ]);

      setData({
        company: companyData,
        products: productsData,
        services: servicesData,
        testimonials: testimonialsData,
        clients: clientsData
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (iconName) => {
    const icons = {
      'award': Award,
      'users': Users,
      'trending-down': TrendingDown,
      'shield-check': ShieldCheck,
      'clock': Clock,
      'check-circle': CheckCircle,
      'hard-hat': HardHat,
      'wrench': Wrench,
      'credit-card': CreditCard
    };
    const Icon = icons[iconName] || Award;
    return <Icon className="w-8 h-8" />;
  };

  const productImages = {
    'suspended-scaffold': 'https://customer-assets.emergentagent.com/job_f26ed2bd-7f38-45ed-a0bc-2f5ec395f275/artifacts/gb68hohd_asma_iskele_1.png',
    'facade-platform': 'https://customer-assets.emergentagent.com/job_f26ed2bd-7f38-45ed-a0bc-2f5ec395f275/artifacts/47094lly_ASMA-ISKELE-CEPHE-PLATFORMU.webp',
    'monorail': 'https://customer-assets.emergentagent.com/job_f26ed2bd-7f38-45ed-a0bc-2f5ec395f275/artifacts/jh99or1g_monoray.webp',
    'matafora': 'https://customer-assets.emergentagent.com/job_f26ed2bd-7f38-45ed-a0bc-2f5ec395f275/artifacts/gb68hohd_asma_iskele_1.png',
    'manlift': 'https://customer-assets.emergentagent.com/job_f26ed2bd-7f38-45ed-a0bc-2f5ec395f275/artifacts/0ac5688b_manlift.jpg',
    'accessories': 'https://customer-assets.emergentagent.com/job_f26ed2bd-7f38-45ed-a0bc-2f5ec395f275/artifacts/xa5cei55_Asma-iskele-Aksesuar-Konsol.webp'
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  const stats = data.company?.stats ? [
    { label: "Years of Experience", value: `${data.company.stats.yearsExperience}+` },
    { label: "Happy Customers", value: `${data.company.stats.customers}+` },
    { label: "Completed Projects", value: `${data.company.stats.projects}+` },
    { label: "Countries Exported", value: `${data.company.stats.countries}+` }
  ] : [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 -z-10"></div>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              {data.company?.tagline || 'Your Solution Partner While Rising'}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Professional suspended scaffold rental and sales for high-rise construction,
              building maintenance, and facade access. CE & TSE certified equipment with
              expert installation services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/rental"
                className="group px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all hover:shadow-lg flex items-center space-x-2"
              >
                <span className="font-medium">Explore Rental Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-slate-700 border-2 border-gray-300 rounded-lg hover:border-red-600 hover:text-red-600 transition-all font-medium"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Featured Products */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              In the suspended scaffold sector, we are proud to offer quality service with our
              complete range of certified equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.products.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-white flex items-center justify-center p-4">
                  <img 
                    src={productImages[product.slug]}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <Link
                    to={`/products#${product.slug}`}
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
              to="/products"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Kale Platform
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What Sets Our Services Apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white hover:bg-red-50 transition-all duration-300 border border-transparent hover:border-red-200"
              >
                <div className="w-14 h-14 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-slate-600">
              What Our International Customers Say About Us
            </p>
          </div>

          <div className="max-w-7xl mx-auto relative">
            {/* Carousel Container */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {data.testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  >
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed min-h-[120px]">"{testimonial.text}"</p>
                      <div className="border-t border-gray-200 pt-4">
                        <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                        <div className="text-xs text-slate-500 mt-1">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:bg-red-600 hover:text-white transition-all z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:bg-red-600 hover:text-white transition-all z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-lg text-slate-600">
              Major construction and industrial companies rely on our services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {data.clients.map((client, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team for a free consultation and quote on suspended
            scaffold rental or sales.
          </p>
          <Link
            to="/contact"
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

export default Home;
