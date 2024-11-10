// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nextin Vision</h3>
            <p className="text-gray-400 mb-4">
              Transforming Corporate Stories into Visual Impact
            </p>
            <div className="space-y-2">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Phone size={16} />
                (123) 456-7890
              </a>
              <a href="mailto:info@nextinvision.com" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Mail size={16} />
                info@nextinvision.com
              </a>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                123 Business Ave, Suite 100
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white">Brand Videos</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Product Showcases</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Training Content</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Social Media</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
              <li><Link to="/process" className="text-gray-400 hover:text-white">Our Process</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and insights.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
              />
              <button type="submit" className="w-full btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nextin Vision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}