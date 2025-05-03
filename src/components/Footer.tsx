
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-medical-dark text-white mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Hospital Finder BD</h3>
            <p className="text-sm text-gray-300">
              A location-based centralized hospital directory system for Bangladesh,
              helping users find the nearest government or private hospital along with
              emergency contact details.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-medical-accent">Home</a></li>
              <li><a href="#" className="hover:text-medical-accent">About Us</a></li>
              <li><a href="#" className="hover:text-medical-accent">Emergency Numbers</a></li>
              <li><a href="#" className="hover:text-medical-accent">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Emergency Contact</h3>
            <p className="text-sm text-gray-300 mb-2">National Emergency: <span className="text-medical-emergency font-medium">999</span></p>
            <p className="text-sm text-gray-300 mb-2">Ambulance: <span className="text-medical-emergency font-medium">999</span></p>
            <p className="text-sm text-gray-300">Fire Service: <span className="text-medical-emergency font-medium">16163</span></p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hospital Finder BD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
