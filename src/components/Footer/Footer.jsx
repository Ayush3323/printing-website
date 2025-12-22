import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaChevronDown } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  const footerData = {
    help: ["My Account", "Contact us", "Bulk Order Inquiry"],
    company: [
      "Careers",
      "For investors",
      "For media",
      "Sustainability",
      "Annual Returns",
      "Corporate Social Responsibility",
    ],
    policies: [
      "Terms and Conditions",
      "Vista Privacy and Cookie Policy",
      "Copyright matters",
      "Patents & trademarks",
    ],
  };

  return (
    <footer className="w-full font-sans border-t border-gray-700">
      {/* Top Section (Div 1) - Navy Background */}
      <div className="bg-[#1a233a] text-white py-14">
        {/* Container strictly limited to 1800px */}
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Easy Returns */}
          <div className="space-y-6">
            <p className="text-xl font-semibold leading-tight">
              Easy Returns: <a href="#" className="underline decoration-1 underline-offset-4 hover:text-gray-300 transition-all">Free Replacement or Full Refund</a>
            </p>
            {/* Visual separator line from the image */}
            <div className="hidden lg:block border-b border-gray-600 w-3/4"></div>
          </div>

          {/* Column 2: Let us help */}
          <div>
            <h3 className="text-lg font-bold mb-6">Let us help</h3>
            <ul className="space-y-4 text-[15px] text-gray-300">
              {footerData.help.map((item) => (
                <li key={item}><a href="#" className="hover:text-white hover:border-b border-b-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Company */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Company</h3>
            <ul className="space-y-4 text-[15px] text-gray-300">
              {footerData.company.map((item) => (
                <li key={item}><a href="#" className="hover:text-white hover:border-b border-b-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Our policies */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our policies</h3>
            <ul className="space-y-4 text-[15px] text-gray-300">
              {footerData.policies.map((item) => (
                <li key={item}><a href="#" className="hover:text-white hover:border-b border-b-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section (Div 2) - Black Background */}
      <div className="bg-black text-gray-400 py-10">
        {/* Container strictly limited to 1800px */}
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          
          {/* Left: Contact and Legal */}
          <div className="space-y-3">
            <div className="flex gap-6 text-[15px] font-medium">
              <a href="tel:02522669393" className="underline hover:text-white decoration-1 underline-offset-2">02522-669393</a>
              <a href="#" className="underline hover:text-white decoration-1 underline-offset-2">Home</a>
            </div>
            <p className="text-[13px] leading-relaxed">
              A CIMPRESS company © 2001–2025 Vistaprint. All rights reserved.
            </p>
            <p className="text-[13px] opacity-80">
              Unless stated otherwise, prices are exclusive of delivery and product options.
            </p>
          </div>

          {/* Center: Payment Icons */}
          <div className="flex items-center gap-3">
            <div className="bg-white px-2 py-1 rounded-sm w-14 h-9 flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="max-h-6" />
            </div>
            <div className="bg-white px-2 py-1 rounded-sm w-14 h-9 flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="max-h-3" />
            </div>
            <div className="bg-white px-2 py-1 rounded-sm w-14 h-9 flex items-center justify-center border-l border-gray-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa Electron" className="max-h-3" />
            </div>
          </div>

          {/* Right: Social Media and Locale */}
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex gap-5 text-2xl text-white">
              <a href="#" className="hover:text-gray-400 transition-colors"><RiTwitterXFill /></a>
              <a href="#" className="hover:text-gray-400 transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-400 transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-400 transition-colors"><FaYoutube /></a>
            </div>
            
            <div className="flex items-center gap-3 border border-gray-700 px-4 py-1.5 rounded-sm cursor-pointer text-white hover:bg-gray-900 transition-colors group">
              <img src="https://flagcdn.com/in.svg" alt="India" className="w-6 h-4 shadow-sm" />
              <FaChevronDown className="text-[10px] group-hover:translate-y-0.5 transition-transform" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;