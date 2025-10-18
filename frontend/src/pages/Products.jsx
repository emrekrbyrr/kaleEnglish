import React, { useEffect } from 'react';
import { products } from '../mock';
import { CheckCircle } from 'lucide-react';

const Products = () => {
  useEffect(() => {
    document.title = 'Suspended Scaffold Products - Kale Platform | CE & TSE Certified';
    
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Suspended Scaffold Products
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Complete range of CE & TSE certified suspended scaffold systems for all your
              construction and maintenance needs.
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
                {/* Product Image Placeholder */}
                <div className="flex-1">
                  <div className="h-80 rounded-xl bg-gradient-to-br from-red-50 to-gray-100 flex items-center justify-center shadow-lg">
                    <div className="text-8xl font-bold text-red-600/30">
                      {product.name[0]}
                    </div>
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
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
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
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                      >
                        Rent This Product
                      </a>
                      <a
                        href="/contact"
                        className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-center font-medium"
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
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Need Help Choosing the Right Equipment?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our expert team can help you select the perfect suspended scaffold solution for your
              project requirements.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
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