import React, { useEffect } from 'react';
import { products } from '../mock';
import { CheckCircle } from 'lucide-react';
import Seo from "../components/Seo";

const Products = () => {
  useEffect(() => {
    // Scroll to product if hash exists
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const productImages = {
    'suspended-scaffold': '/suspended-scaffold.jpg',
    'facade-platform': '/facade-platform.jpg',
    'monorail': '/monorail-system.webp',
    'matafora': '/matafora-system.webp',
    'manlift': '/manlift.jpg',
    'accessories': '/accessories-consoles.webp',
    'turning-platform': '/turning-platform.jpg'
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="Suspended Platform Products | KaleLift Systems"
        description="Explore KaleLift suspended platforms, facade access systems, monorails, and accessories engineered for Africa and Europe projects with CE/TSE compliance."
        canonicalPath="/products"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Suspended Platform Products
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Complete range of CE & TSE certified suspended platform systems, modular layouts,
              and facade access solutions for construction and maintenance teams across Africa and Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.slug}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 scroll-mt-24`}
              >
                {/* Product Image */}
                <div className="flex-1">
                  <div className="h-80 rounded-xl overflow-hidden shadow-lg bg-white">
                    <img 
                      src={productImages[product.slug]}
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="sticky top-32">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{product.name}</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Applications</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="/rental"
                        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-center font-medium"
                      >
                        Rent This Product
                      </a>
                      <a
                        href="/contact"
                        className="px-6 py-3 bg-gray-100 text-slate-700 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
                      >
                        Get a Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Need Help Selecting the Right System?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our team can recommend the best suspended platform configuration for your project and region.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Contact Our Experts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;