// src/pages/Contact.jsx
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/common/ContactForm';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Contact Information Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                subtitle="Contact Us"
                title="Get in Touch"
                description="Ready to start your project? Contact us for a free consultation."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Business Ave, Suite 100</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                    <p className="text-gray-600">(123) 456-7891</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@nextinvision.com</p>
                    <p className="text-gray-600">support@nextinvision.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us Section */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Why Work With Us</h3>
                <div className="space-y-3">
                  {[
                    'Professional video production team',
                    'Quick response within 24 hours',
                    'Flexible scheduling and planning',
                    'Competitive pricing options',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="text-primary" size={20} />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-12">
        <div className="h-96 bg-gray-100 w-full relative">
          {/* Replace this div with an actual map integration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-gray-600">Interactive map will be displayed here</p>
              <p className="text-sm text-gray-500">
                (Integration with Google Maps or similar service required)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            subtitle="FAQs"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services and process."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Most projects are completed within 2-4 weeks, depending on complexity and requirements."
              },
              {
                question: "Do you provide raw footage?",
                answer: "Yes, raw footage can be provided upon request as part of our premium packages."
              },
              {
                question: "What is your revision policy?",
                answer: "We offer up to 2 rounds of revisions with every project to ensure your complete satisfaction."
              },
              {
                question: "Do you travel for shoots?",
                answer: "Yes, we are available for both local and international shoots. Travel costs will be discussed beforehand."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}