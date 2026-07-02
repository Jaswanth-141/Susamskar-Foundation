import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, Heart, ExternalLink } from 'lucide-react';
import { ViewType } from '../types';

const logoImg = "https://lh3.googleusercontent.com/d/1c96fnR01OFOr4JcnLGFHTVwgD2c8O81i";

interface FooterProps {
  onViewChange: (view: ViewType) => void;
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
}

export default function Footer({ onViewChange, onOpenDonate, onOpenVolunteer }: FooterProps) {
  
  // Official Google Drive gallery image URLs requested for the footer
  const miniPhotos = [
    "https://lh3.googleusercontent.com/d/13mTOukkq06wFkwWMLUm4gpXgC19Ni6N1",
    "https://lh3.googleusercontent.com/d/19Pd5mZgcAexJAHlpfLl9bz5fSrG32YxK",
    "https://lh3.googleusercontent.com/d/1dmJtqLe3nS0lQRkXvBYq_U6BUKVANkio",
    "https://lh3.googleusercontent.com/d/13Pfg78Zupk_Lh8wgsNVXnTSDjFpqa0JS",
    "https://lh3.googleusercontent.com/d/14oWFP7uAWiybl-Xqi_4gk2r7GhGvHobL",
    "https://lh3.googleusercontent.com/d/1NpE2mUkMoOKkmKBQ8wp1IMin5vdrQz74"
  ];

  return (
    <footer className="w-full bg-[#002229] text-teal-100/90 pt-20 pb-10 border-t border-[#00171c] font-sans selection:bg-[#f26522]/30 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
        
        {/* 1. BRAND BLOCK & ILLUSTRATIVE MAP */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-xl inline-block shadow-lg border border-[#003842]/20">
              <img 
                src={logoImg} 
                alt="Susamskar Foundation Logo" 
                className="h-10 md:h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-display font-black text-white text-base leading-tight uppercase tracking-tight">
                Susamskar
              </h3>
              <h4 className="font-display font-bold text-[#f26522] text-xs leading-none mt-0.5 tracking-widest uppercase">
                Foundation
              </h4>
            </div>
          </div>

          <p className="text-[13px] text-teal-100/70 leading-relaxed font-normal">
            Nurturing moral values, emotional resilience, and professional leadership skills in children and youth to create a warm, value-driven society.
          </p>

          {/* Illustrative Stylized Map of Sector V Salt Lake */}
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Susamskar+Foundation+Sector+V+Salt+Lake+Kolkata+West+Bengal+700091"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full h-32 bg-[#00171c] rounded-xl border border-[#003842]/80 overflow-hidden group select-none shadow-inner cursor-pointer"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1Smu9o6xSRwXoZZ2g8gR0JvPV-ame8UiJ"
              alt="Sector V Salt Lake Kolkata Map"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            
            {/* Pulsing Pin Drop */}
            <div className="absolute top-[52%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="absolute h-6 w-6 rounded-full bg-[#f26522] animate-ping opacity-60" />
              <MapPin className="h-5 w-5 text-[#f26522] fill-[#f26522]/30 relative z-10" />
            </div>

            {/* Float Address Card */}
            <div className="absolute bottom-2 left-2 right-2 bg-[#001a20]/95 border border-[#003842]/60 backdrop-blur-xs p-1.5 rounded-lg flex items-center justify-between text-[10px]" onClick={(e) => e.stopPropagation()}>
              <span className="text-white font-semibold">Sector V, Salt Lake, Kolkata</span>
              <span className="text-[#f26522] hover:underline font-bold flex items-center gap-0.5">
                Directions <ExternalLink className="h-2 w-2" />
              </span>
            </div>
          </a>
        </div>

        {/* 2. QUICK LINKS */}
        <div className="space-y-5">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest border-l-3 border-[#f26522] pl-3">
            Quick Links
          </h4>
          <ul className="space-y-3 text-[13px] text-teal-100/70 font-medium">
            <li>
              <button 
                onClick={() => onViewChange('about')}
                className="hover:text-[#f26522] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="h-1 w-1 rounded-full bg-[#004b57] group-hover:bg-[#f26522] transition-colors" />
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => onViewChange('team')}
                className="hover:text-[#f26522] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="h-1 w-1 rounded-full bg-[#004b57] group-hover:bg-[#f26522] transition-colors" />
                Our Team
              </button>
            </li>
            <li>
              <button 
                onClick={() => onViewChange('projects')}
                className="hover:text-[#f26522] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="h-1 w-1 rounded-full bg-[#004b57] group-hover:bg-[#f26522] transition-colors" />
                Our Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => onViewChange('gallery')}
                className="hover:text-[#f26522] transition-colors cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="h-1 w-1 rounded-full bg-[#004b57] group-hover:bg-[#f26522] transition-colors" />
                Gallery / Highlights
              </button>
            </li>
          </ul>
        </div>

        {/* 3. GET IN TOUCH & DIRECT CONTACT */}
        <div className="space-y-5">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest border-l-3 border-[#f26522] pl-3">
            Get In Touch
          </h4>
          
          <ul className="space-y-3 text-[13px] text-teal-100/70 font-medium">
            <li>
              <button 
                onClick={onOpenVolunteer}
                className="hover:text-[#f26522] transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
              >
                <span className="h-1 w-1 rounded-full bg-[#004b57] group-hover:bg-[#f26522] transition-colors" />
                Be a Volunteer
              </button>
            </li>
            <li>
              <button 
                onClick={onOpenDonate}
                className="hover:text-[#f26522] transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
              >
                <span className="h-1 w-1 rounded-full bg-[#004b57] group-hover:bg-[#f26522] transition-colors" />
                CSR Opportunities
              </button>
            </li>
          </ul>

          <div className="pt-4 border-t border-[#003842]/60 space-y-3.5 text-[13px] text-teal-100/70">
            <a href="tel:+918910322656" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Phone className="h-4 w-4 text-[#f26522] shrink-0" />
              <span>+91 891-032-2656</span>
            </a>
            <a href="mailto:susamskar@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Mail className="h-4 w-4 text-[#f26522] shrink-0" />
              <span>susamskar@gmail.com</span>
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Susamskar+Foundation+Sector+V+Salt+Lake+Kolkata+West+Bengal+700091"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 hover:text-white transition-colors"
            >
              <MapPin className="h-4 w-4 text-[#f26522] mt-0.5 shrink-0" />
              <span className="leading-relaxed">Sector V, Salt Lake City, Kolkata, India — 700091</span>
            </a>
          </div>
        </div>

        {/* 4. PHOTO GALLERY & SOCIALS */}
        <div className="space-y-5">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest border-l-3 border-[#f26522] pl-3">
            Gallery Highlights
          </h4>

          {/* Mini photo grid */}
          <div className="grid grid-cols-3 gap-2">
            {miniPhotos.map((url, i) => (
              <div 
                key={i} 
                onClick={() => onViewChange('gallery')} 
                className="relative aspect-square rounded-lg overflow-hidden border border-[#003842] cursor-pointer group"
              >
                <img 
                  src={url} 
                  alt="Gallery Thumbnail" 
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors" />
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div className="pt-2">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-teal-200/50 mb-2.5">Follow Us On</h5>
            <div className="flex items-center space-x-2.5">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
                { icon: Linkedin, label: 'LinkedIn' }
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href="#"
                    aria-label={s.label}
                    className="h-8 w-8 rounded-full bg-[#001a20] border border-[#003842] hover:border-transparent hover:bg-[#f26522] hover:text-white flex items-center justify-center text-teal-300 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* COPYRIGHT BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-[#003842]/60 text-center text-[12px] text-teal-200/50 font-medium flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© 2026 Susamskar Foundation. All Rights Reserved.</p>
        <div className="flex items-center gap-4 text-[12px]">
          <a href="#" className="hover:text-teal-200 transition-colors">Privacy Policy</a>
          <span className="text-teal-200/30">•</span>
          <a href="#" className="hover:text-teal-200 transition-colors">Terms of Service</a>
          <span className="text-teal-200/30">•</span>
          <a href="#" className="hover:text-teal-200 transition-colors">80G Certifications</a>
        </div>
      </div>
    </footer>
  );
}
