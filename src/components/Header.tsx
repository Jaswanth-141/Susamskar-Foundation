import React, { useState } from 'react';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Phone, 
  Clock, 
  ChevronDown, 
  Heart
} from 'lucide-react';
import { ViewType } from '../types';
const logoImg = "https://lh3.googleusercontent.com/d/1c96fnR01OFOr4JcnLGFHTVwgD2c8O81i";

interface HeaderProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
}

export default function Header({ 
  currentView, 
  onViewChange, 
  onOpenDonate, 
  onOpenVolunteer 
}: HeaderProps) {
  const [whoWeAreDropdownOpen, setWhoWeAreDropdownOpen] = useState(false);
  const [whatWeDoDropdownOpen, setWhatWeDoDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white relative z-40 border-b border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
      
      {/* 1. TOP BAR */}
      <div className="w-full bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600 font-medium">
          {/* Social Links */}
          <div className="flex items-center space-x-2">
            <a href="#" className="w-7 h-7 rounded-full bg-[#f3f4f6] hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all duration-150" title="Facebook">
              <Facebook className="h-3.5 w-3.5 stroke-[2]" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-[#f3f4f6] hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all duration-150" title="Instagram">
              <Instagram className="h-3.5 w-3.5 stroke-[2]" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-[#f3f4f6] hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all duration-150" title="YouTube">
              <Youtube className="h-3.5 w-3.5 stroke-[2]" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-[#f3f4f6] hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all duration-150" title="LinkedIn">
              <Linkedin className="h-3.5 w-3.5 stroke-[2]" />
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            <a href="tel:+918910322656" className="flex items-center gap-2 hover:text-[#ff7e23] transition-colors text-slate-600">
              <Phone className="h-3.5 w-3.5 text-[#ff7e23] stroke-[2.5]" />
              <span className="text-[13px] font-semibold text-[#4b5563]">+91 891-032-2656</span>
            </a>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="h-3.5 w-3.5 text-[#ff7e23] stroke-[2.5]" />
              <span className="text-[13px] font-semibold text-[#4b5563]">9.30 AM - 5.30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
        
        {/* Row 1 for Mobile/Tablet: Logo & Compact Action Buttons */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-4">
          {/* Logo block */}
          <div 
            onClick={() => onViewChange('home')} 
            className="flex items-center cursor-pointer select-none shrink-0"
          >
            <img 
              src={logoImg} 
              alt="Susamskar Foundation Logo" 
              className="w-[20vw] min-w-[150px] md:min-w-[180px] lg:min-w-[220px] h-auto object-contain transition-all duration-300 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Compact Actions only visible on mobile/tablet screens under md (768px) */}
          <div className="flex md:hidden items-center gap-2.5 shrink-0">
            {/* Compact Join Us Circle */}
            <button 
              onClick={onOpenVolunteer}
              className="w-10 h-10 rounded-full bg-[#1a2d3c] flex items-center justify-center relative shadow-sm hover:scale-105 active:scale-95 transition-all duration-200 select-none shrink-0 cursor-pointer"
              title="Support a Project"
            >
              <span className="text-lg">👏</span>
              <span className="absolute top-[3px] right-[3px] text-[8px]">❤️</span>
            </button>

            {/* Compact Donate Button */}
            <button 
              onClick={onOpenDonate}
              className="flex items-center gap-1.5 pl-3 pr-1 py-1 bg-[#ff7e23] hover:bg-[#e26915] active:scale-95 text-white rounded-lg text-xs font-bold shadow-md transition-all duration-200 cursor-pointer h-10 shrink-0"
            >
              <span>Donate</span>
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#ff7e23] shadow-xs">
                <Heart className="h-3 w-3 fill-[#ff7e23] text-[#ff7e23]" />
              </div>
            </button>
          </div>
        </div>

        {/* Desktop & Mobile Navigation Links */}
        <nav className="flex items-center justify-center gap-x-3.5 sm:gap-x-5 md:gap-x-4 lg:gap-x-6 xl:gap-x-9 text-[13px] sm:text-[14px] md:text-[13.5px] lg:text-[14.5px] xl:text-[15.5px] font-semibold text-slate-700 shrink-0 w-full md:w-auto py-1.5 md:py-0 border-t border-slate-50 md:border-none scrollbar-none overflow-x-auto whitespace-nowrap">
          
          <button 
            id="nav-link-home"
            onClick={() => onViewChange('home')}
            className={`transition-colors cursor-pointer py-1 md:py-2 ${
              currentView === 'home' 
              ? 'text-[#1e6fd9] font-bold' 
              : 'hover:text-[#1e6fd9] text-[#1f2937]'
            }`}
          >
            Home
          </button>

          {/* Who We Are with Dropdown trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setWhoWeAreDropdownOpen(true)}
            onMouseLeave={() => setWhoWeAreDropdownOpen(false)}
          >
            <button 
              id="nav-link-about-trigger"
              onClick={() => {
                onViewChange('about');
              }}
              className={`flex items-center gap-1 transition-colors cursor-pointer py-1 md:py-2 ${
                currentView === 'about' 
                ? 'text-[#1e6fd9] font-bold' 
                : 'hover:text-[#1e6fd9] text-[#1f2937]'
              }`}
            >
              Who We Are
              <ChevronDown className={`h-4 w-4 stroke-[2.5] transition-transform duration-150 ${whoWeAreDropdownOpen ? 'rotate-180 text-[#1e6fd9]' : 'text-slate-400'}`} />
            </button>
            
            {/* Dropdown */}
            {whoWeAreDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 mt-1 w-52 bg-white border border-slate-100 rounded-xl shadow-xl py-2 normal-case text-slate-700 text-xs font-semibold z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <button 
                  onClick={() => { onViewChange('about'); setWhoWeAreDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-[#ff7e23] transition-colors"
                >
                  Our Purpose
                </button>
                <button 
                  onClick={() => { onViewChange('about'); setWhoWeAreDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-[#ff7e23] transition-colors"
                >
                  Our Vision & Mission
                </button>
                <button 
                  onClick={() => { onViewChange('home'); setWhoWeAreDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-[#ff7e23] transition-colors"
                >
                  Our Core Values
                </button>
                <button 
                  onClick={() => { onViewChange('team'); setWhoWeAreDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-[#ff7e23] transition-colors font-semibold border-t border-slate-100/50 pt-2 mt-1"
                >
                  Our Team & Board
                </button>
              </div>
            )}
          </div>

          {/* What We Do dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setWhatWeDoDropdownOpen(true)}
            onMouseLeave={() => setWhatWeDoDropdownOpen(false)}
          >
            <button 
              id="nav-link-projects-trigger"
              onClick={() => {
                onViewChange('projects');
              }}
              className={`flex items-center gap-1 transition-colors cursor-pointer py-1 md:py-2 ${
                currentView === 'projects' 
                ? 'text-[#1e6fd9] font-bold' 
                : 'hover:text-[#1e6fd9] text-[#1f2937]'
              }`}
            >
              What We Do
            </button>

            {/* Dropdown */}
            {whatWeDoDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 mt-1 w-64 bg-white border border-slate-100 rounded-xl shadow-xl py-2 normal-case text-slate-700 text-xs font-semibold z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <button 
                  onClick={() => { onViewChange('projects'); setWhatWeDoDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2.5 hover:bg-slate-50 hover:text-[#ff7e23] transition-colors border-b border-slate-50 font-bold text-slate-800"
                >
                  Our 5 Core Projects
                </button>
                <button 
                  onClick={() => { onViewChange('projects'); setWhatWeDoDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-[#ff7e23] transition-colors"
                >
                  1. Value Education for Children
                </button>
                <button 
                  onClick={() => { onViewChange('projects'); setWhatWeDoDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-[#ff7e23] transition-colors"
                >
                  2. Youth Mentorship & Skills
                </button>
                <button 
                  onClick={() => { onViewChange('projects'); setWhatWeDoDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-[#ff7e23] transition-colors"
                >
                  3. Teaching & Parenting
                </button>
                <button 
                  onClick={() => { onViewChange('projects'); setWhatWeDoDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-[#ff7e23] transition-colors"
                >
                  4. Workplace Harmony
                </button>
                <button 
                  onClick={() => { onViewChange('projects'); setWhatWeDoDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-[#ff7e23] transition-colors"
                >
                  5. Sustainable Farming & Welfare
                </button>
              </div>
            )}
          </div>

          <button 
            id="nav-link-gallery"
            onClick={() => onViewChange('gallery')}
            className={`transition-colors cursor-pointer py-1 md:py-2 ${
              currentView === 'gallery' 
              ? 'text-[#1e6fd9] font-bold' 
              : 'hover:text-[#1e6fd9] text-[#1f2937]'
            }`}
          >
            Gallery
          </button>
        </nav>

        {/* Desktop Action Buttons (Visible only on md and up) */}
        <div className="hidden md:flex items-center md:gap-x-3 lg:gap-x-4 xl:gap-x-6 shrink-0">
          {/* Join Us with Avatar Badge (matches screenshot) */}
          <button 
            id="volunteer-header-btn"
            onClick={onOpenVolunteer}
            className="flex items-center md:gap-2 lg:gap-2.5 xl:gap-3.5 text-left group cursor-pointer"
          >
            <div className="w-[38px] h-[38px] lg:w-[44px] lg:h-[44px] xl:w-[48px] xl:h-[48px] rounded-full bg-[#1a2d3c] flex items-center justify-center relative shadow-sm group-hover:scale-105 transition-all duration-200 select-none shrink-0">
              <span className="text-base lg:text-lg xl:text-xl">👏</span>
              <span className="absolute top-[3px] right-[3px] lg:top-[5px] lg:right-[5px] xl:top-[6px] xl:right-[6px] text-[7px] lg:text-[9px] xl:text-[10px]">❤️</span>
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="text-[9px] lg:text-[10px] xl:text-[11px] text-slate-500 font-semibold leading-none">Join Us Now</span>
              <span className="text-xs lg:text-[13px] xl:text-[15px] font-bold text-[#111827] mt-1 group-hover:text-[#ff7e23] transition-colors duration-150">Support a Project</span>
            </div>
          </button>

          {/* Donate Now Button */}
          <button 
            id="donate-header-btn"
            onClick={onOpenDonate}
            className="flex items-center md:gap-2 lg:gap-2.5 xl:gap-4 md:pl-3 lg:pl-4 xl:pl-6 md:pr-1 lg:pr-1.5 xl:pr-1.5 py-1 md:rounded-lg lg:rounded-xl xl:rounded-[14px] bg-[#ff7e23] hover:bg-[#e26915] active:scale-[0.98] text-white text-xs lg:text-sm font-bold shadow-md transition-all duration-200 cursor-pointer md:h-10 lg:h-[46px] xl:h-[52px] shrink-0"
          >
            <span className="whitespace-nowrap">Donate Now</span>
            <div className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-full bg-white flex items-center justify-center text-[#ff7e23] shadow-sm shrink-0">
              <Heart className="h-3 w-3 lg:h-3.5 lg:w-3.5 xl:h-4 xl:w-4 fill-[#ff7e23] text-[#ff7e23]" />
            </div>
          </button>
        </div>

      </div>

    </header>
  );
}

