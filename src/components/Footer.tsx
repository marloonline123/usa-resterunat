
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-restaurant-blue text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">USA Family Restaurant</h3>
            <p className="text-gray-300 mb-4">
              Serving classic American dishes with a modern twist since 1985. 
              Family-owned and committed to quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-restaurant-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-restaurant-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-restaurant-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-gray-300 hover:text-white transition-colors">
                  Order Online
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Monday - Friday: 7am - 10pm</li>
              <li className="text-gray-300">Saturday: 8am - 11pm</li>
              <li className="text-gray-300">Sunday: 8am - 9pm</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-restaurant-red flex-shrink-0" />
                <span className="text-gray-300">123 Main Street, Anytown, USA 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-restaurant-red flex-shrink-0" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-restaurant-red flex-shrink-0" />
                <span className="text-gray-300">info@usafamilyrestaurant.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} USA Family Restaurant. All rights reserved. <br /> Crafted With ❤ By Abotalib Adam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
