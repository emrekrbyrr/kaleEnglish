import { Mail, Phone, MapPin } from "lucide-react";
import { companyInfo } from "@/mock";
import ContactForm from "@/components/ContactForm";

export const dynamic = "force-static";

export function generateMetadata() {
  return {
    title: "Contact KaleLift | Suspended Platform Quotes",
    description:
      "Contact KaleLift for suspended platform rentals, sales, and technical support across Africa and Europe. Get a fast quote and expert guidance.",
    alternates: {
      canonical: "/contact",
    },
  };
}

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Have questions about rentals, sales, or export logistics? Our team supports projects
              across Africa and Europe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="text-slate-600 hover:text-red-600 transition-colors"
                      >
                        {companyInfo.phone}
                      </a>
                      <p className="text-sm text-slate-500 mt-1">24/7 Emergency Support</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-slate-600 hover:text-red-600 transition-colors"
                      >
                        {companyInfo.email}
                      </a>
                      <p className="text-sm text-slate-500 mt-1">Sales & General Inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Headquarters</h3>
                      <p className="text-slate-600">{companyInfo.address}</p>
                      <p className="text-sm text-slate-500 mt-1">Visit by appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Warehouse - Africa</h3>
                      <p className="text-slate-600">{companyInfo.warehouseAddress}</p>
                      <p className="text-sm text-slate-500 mt-1">Storage & Distribution Center</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Monday - Friday</span>
                      <span className="font-medium text-slate-900">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Saturday</span>
                      <span className="font-medium text-slate-900">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Sunday</span>
                      <span className="font-medium text-slate-900">Closed</span>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-200">
                      <p className="text-red-600 font-medium">Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Our Location</h2>
            <p className="text-slate-600 mb-8">
              Headquartered in Istanbul with an Africa warehouse in Johannesburg for faster regional delivery.
            </p>
            <div className="bg-slate-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-slate-500">Map integration will be added here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
