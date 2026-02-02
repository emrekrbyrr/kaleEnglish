"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  consent: false,
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    if (!formData.consent) {
      setStatus({
        type: "error",
        message: "Please accept the privacy policy to continue.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! We will get back to you soon.",
      });
      setFormData(initialFormState);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
          placeholder="+90 XXX XXX XX XX"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
          placeholder="Your Company"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your project requirements..."
        ></textarea>
      </div>

      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-500"
        />
        <label htmlFor="consent" className="text-sm text-slate-600">
          I consent to the storage and processing of my personal data in accordance with
          Law No. 6698 on the Protection of Personal Data, and I agree to be contacted.
        </label>
      </div>

      {status ? (
        <div
          className={`rounded-lg px-4 py-3 text-sm ${
            status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors font-medium"
      >
        {isSubmitting ? (
          <span>Sending...</span>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
