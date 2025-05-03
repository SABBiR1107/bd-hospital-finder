
import React from 'react';
import { ambulance } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-medical-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ambulance"><path d="m6 19-2-2V5c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v12l-2 2Z"/><path d="M14 5v12l-2 2H6"/><path d="M18 12h4"/><path d="M18 5h3a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2"/><path d="M8 7h3"/><path d="M8 3v4"/><path d="M18 17v.5a1.5 1.5 0 0 0 3 0V17"/><circle cx="4.5" cy="18.5" r="1.5"/><circle cx="12" cy="18.5" r="1.5"/></svg>
          <h1 className="text-xl md:text-2xl font-bold">Hospital Finder BD</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <span className="hover:text-medical-accent cursor-pointer transition-colors">About</span>
          <span className="hover:text-medical-accent cursor-pointer transition-colors">Contact</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
