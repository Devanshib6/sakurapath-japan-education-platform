import React from 'react';
import { Compass, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Award, Globe, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-japan-black text-white/80 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="text-japan-red w-8 h-8" />
              <span className="text-2xl font-bold">
                <span className="text-japan-red">Sakura</span>
                <span className="text-white">Path</span>
              </span>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner for studying in Japan. Making Japanese education accessible to international students since 2015.
            </p>
            <div className="flex gap-4">
              <Facebook size={20} className="cursor-pointer hover:text-japan-red transition-colors" />
              <Twitter size={20} className="cursor-pointer hover:text-japan-red transition-colors" />
              <Instagram size={20} className="cursor-pointer hover:text-japan-red transition-colors" />
              <Linkedin size={20} className="cursor-pointer hover:text-japan-red transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#destinations" className="hover:text-japan-red transition-colors">Destinations</a></li>
              <li><a href="#features" className="hover:text-japan-red transition-colors">Why Japan</a></li>
              <li><a href="#process" className="hover:text-japan-red transition-colors">Application Process</a></li>
              <li><a href="#tours" className="hover:text-japan-red transition-colors">Study Programs</a></li>
              <li><a href="#blog" className="hover:text-japan-red transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-japan-red" />
                <span className="text-sm">Tokyo, Japan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-japan-red" />
                <span className="text-sm">+81 3-1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-japan-red" />
                <span className="text-sm">info@sakurapath.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Accreditations</h3>
            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <Award size={32} className="text-japan-red mx-auto mb-2" />
                <p className="text-xs">ABTA</p>
              </div>
              <div className="text-center">
                <Globe size={32} className="text-japan-red mx-auto mb-2" />
                <p className="text-xs">Forbes</p>
              </div>
              <div className="text-center">
                <Heart size={32} className="text-japan-red mx-auto mb-2" />
                <p className="text-xs">Trustpilot</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-white font-semibold text-sm mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-japan-dark text-white border-none focus:outline-none text-sm"
                />
                <button className="bg-japan-red px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm">
          <p>&copy; 2025 SakuraPath. All rights reserved. | All Rights Reserved | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;