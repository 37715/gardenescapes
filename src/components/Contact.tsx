import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import LeafDivider from './LeafDivider';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    message: '',
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-off-white to-sage-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            Get in <span className="italic text-sage-green">Touch</span>
          </h2>
          <LeafDivider />
          <p className="copy-md max-w-3xl mx-auto mt-8">
            <span className="text-charcoal font-normal">Ready to transform your outdoor space? Contact us today for a free consultation and quote.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="heading-serif text-2xl md:text-3xl text-charcoal mb-8">
              Contact Details
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-deep-sage/10 rounded-xl flex items-center justify-center">
                  <Mail size={24} className="text-sage-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Email</h4>
                  <a href="mailto:john@gardenescapes.me.uk" className="text-secondary hover:text-deep-sage transition-colors">
                    john@gardenescapes.me.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-deep-sage/10 rounded-xl flex items-center justify-center">
                  <Phone size={24} className="text-sage-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Mobile</h4>
                  <a href="tel:+447939212973" className="text-secondary hover:text-deep-sage transition-colors">
                    07939 212973
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-deep-sage/10 rounded-xl flex items-center justify-center">
                  <MapPin size={24} className="text-sage-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Registered Office</h4>
                  <p className="text-secondary">
                    74A Rails Lane<br />
                    Hayling Island<br />
                    PO11 9LP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-off-white rounded-2xl shadow-soft p-8">
            <h3 className="heading-serif text-2xl md:text-3xl text-charcoal mb-8">
              Request a Quote
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-sage-green mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-charcoal mb-2">Thank You!</h4>
                 <p className="text-secondary">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="postcode" className="block text-sm font-medium text-charcoal mb-2">
                      Postcode
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input resize-none"
                    placeholder="Tell us about your project, preferred timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-sage-green border-gray-300 rounded focus:ring-sage-green"
                  />
                  <label htmlFor="consent" className="text-sm text-deep-sage">
                    I consent to Garden Escapes Landscaping Ltd contacting me about my enquiry. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  <Send size={20} className="mr-2" />
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;