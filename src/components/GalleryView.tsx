import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  ArrowUpRight, 
  Heart, 
  Users, 
  FileText, 
  Building,
  HeartHandshake
} from 'lucide-react';
import { happeningsData, testimonialsData } from '../data';

interface GalleryViewProps {
  onViewChange?: (view: any) => void;
}

export default function GalleryView({ onViewChange }: GalleryViewProps) {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <div className="w-full bg-white relative overflow-hidden min-h-screen flex flex-col font-sans selection:bg-[#f26522]/20 selection:text-[#f26522]">
      
      {/* 1. BLUE HEADER BANNER */}
      <div className="w-full bg-[#118AB2] text-white px-4 sm:px-6 lg:px-8 relative shadow-lg h-[580px] md:h-[440px] lg:h-[460px] flex items-center">
        <div className="max-w-7xl w-full mx-auto text-left">
          
          {/* Breadcrumb row: —— HOME */}
          <div className="flex items-center gap-3 text-xs font-bold text-white/90 tracking-widest font-mono select-none mb-10">
            <span className="h-[2px] w-10 bg-white" />
            <button 
              onClick={() => onViewChange && onViewChange('home')}
              className="cursor-pointer hover:text-white/70 transition-colors uppercase outline-none"
            >
              HOME
            </button>
          </div>

          {/* Large display header: Our story in pictures... */}
          <h1 className="font-display font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none uppercase max-w-2xl select-none">
            Our story in <br />
            pictures...
          </h1>

        </div>
      </div>

      {/* 2. GALLERY SECTIONS */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Title */}
        <div className="text-left mb-12">
          <h2 className="font-display font-black text-[#111827] text-3xl sm:text-4xl uppercase tracking-tight">
            Gallery
          </h2>
        </div>

        {/* Gallery Sections by Year */}
        <div className="space-y-16">

          {/* SECTION: 2025 */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-1.5 text-[#118AB2] font-display font-black text-sm sm:text-base tracking-wider">
              <span>&gt;</span>
              <span className="uppercase">2025</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={`2025-${i}`}
                  className="aspect-[4/3] bg-slate-200/80 rounded-xl sm:rounded-2xl shadow-inner border border-slate-300/10 transition-colors hover:bg-slate-300/50"
                />
              ))}
            </div>
          </div>

          {/* SECTION: 2024 */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-1.5 text-[#118AB2] font-display font-black text-sm sm:text-base tracking-wider">
              <span>&gt;</span>
              <span className="uppercase">2024</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={`2024-${i}`}
                  className="aspect-[4/3] bg-slate-200/80 rounded-xl sm:rounded-2xl shadow-inner border border-slate-300/10 transition-colors hover:bg-slate-300/50"
                />
              ))}
            </div>
          </div>

          {/* SECTION: 2023 */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-1.5 text-[#118AB2] font-display font-black text-sm sm:text-base tracking-wider">
              <span>&gt;</span>
              <span className="uppercase">2023</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={`2023-${i}`}
                  className="aspect-[4/3] bg-slate-200/80 rounded-xl sm:rounded-2xl shadow-inner border border-slate-300/10 transition-colors hover:bg-slate-300/50"
                />
              ))}
            </div>
          </div>

          {/* SECTION: 2022 AND BELOW */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-1.5 text-[#118AB2] font-display font-black text-sm sm:text-base tracking-wider">
              <span>&gt;</span>
              <span className="uppercase">2022 AND BELOW</span>
            </div>
            {/* Two Rows of 4 boxes = 8 total */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={`2022-${i}`}
                  className="aspect-[4/3] bg-slate-200/80 rounded-xl sm:rounded-2xl shadow-inner border border-slate-300/10 transition-colors hover:bg-slate-300/50"
                />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* 3. INTERACTIVE ACTION BANNER "1 + 1 = 11" (YELLOW CANVAS) */}
      <section className="py-20 bg-[#FFD15C] relative overflow-hidden text-slate-900 border-y border-amber-400">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
          
          {/* Main Symmetrical Container for 1+1=11 Speech Bubbles */}
          <div className="relative w-full max-w-4xl h-auto lg:h-[350px] flex flex-col lg:block mb-8 select-none">
            
            {/* Massive 1+1=11 Center Divider */}
            <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 text-center py-6 lg:py-0 z-10 select-none">
              <span className="font-display font-black text-slate-900 text-6xl sm:text-7xl lg:text-[96px] tracking-tight leading-none select-none">
                1 + 1 = 11
              </span>
            </div>

            {/* Grid of pills below lg, absolute floating on lg and up */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:contents gap-4 sm:gap-6 lg:gap-0">
              {/* Top Left Pill: Get familiar with our team */}
              <div className="w-full lg:w-auto lg:absolute lg:top-2 lg:left-4 xl:left-12 flex justify-center p-2 lg:p-0 z-20">
                <div 
                  onClick={() => onViewChange && onViewChange('about')}
                  className="bg-white rounded-[24px] sm:rounded-[28px] px-6 py-4 flex items-center gap-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full max-w-sm sm:w-[320px] md:w-[335px] cursor-pointer relative overflow-visible group"
                >
                  {/* Tail pointer pointing down-right towards the center */}
                  <svg className="hidden lg:block absolute -bottom-3.5 right-12 w-6 h-4 text-white fill-current" viewBox="0 0 24 16">
                    <path d="M0 0 C6 0, 12 4, 14 16 C15 4, 20 0, 24 0 Z" />
                  </svg>

                  <div className="w-12 h-12 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 shadow-inner">
                    <Users className="h-5 w-5 text-[#00829a]" />
                  </div>
                  
                  <span className="font-display font-bold text-[14px] text-slate-800 text-left leading-snug flex-1">
                    Get familiar with our team
                  </span>

                  <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center shrink-0 text-slate-500 group-hover:text-[#00829a] group-hover:border-[#00829a] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Top Right Pill: Read our Annual Report */}
              <div className="w-full lg:w-auto lg:absolute lg:top-2 lg:right-4 xl:right-12 flex justify-center p-2 lg:p-0 z-20">
                <div 
                  onClick={() => onViewChange && onViewChange('about')}
                  className="bg-white rounded-[24px] sm:rounded-[28px] px-6 py-4 flex items-center gap-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full max-w-sm sm:w-[320px] md:w-[335px] cursor-pointer relative overflow-visible group"
                >
                  {/* Tail pointer pointing down-left towards the center */}
                  <svg className="hidden lg:block absolute -bottom-3.5 left-12 w-6 h-4 text-white fill-current" viewBox="0 0 24 16">
                    <path d="M24 0 C18 0, 12 4, 10 16 C9 4, 4 0, 0 0 Z" />
                  </svg>

                  <div className="w-12 h-12 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 shadow-inner">
                    <FileText className="h-5 w-5 text-[#00829a]" />
                  </div>
                  
                  <span className="font-display font-bold text-[14px] text-slate-800 text-left leading-snug flex-1">
                    Read our Annual Report
                  </span>

                  <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center shrink-0 text-slate-500 group-hover:text-[#00829a] group-hover:border-[#00829a] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Left Pill: Be a Volunteer at SSF */}
              <div className="w-full lg:w-auto lg:absolute lg:bottom-2 lg:left-16 xl:left-28 flex justify-center p-2 lg:p-0 z-20">
                <div 
                  onClick={() => onViewChange && onViewChange('volunteer')}
                  className="bg-white rounded-[24px] sm:rounded-[28px] px-6 py-4 flex items-center gap-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full max-w-sm sm:w-[320px] md:w-[335px] cursor-pointer relative overflow-visible group"
                >
                  {/* Tail pointer pointing up-right towards the center */}
                  <svg className="hidden lg:block absolute -top-3.5 right-12 w-6 h-4 text-white fill-current" viewBox="0 0 24 16">
                    <path d="M0 16 C6 16, 12 12, 14 0 C15 12, 20 16, 24 16 Z" />
                  </svg>

                  <div className="w-12 h-12 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 shadow-inner">
                    <HeartHandshake className="h-5 w-5 text-[#00829a]" />
                  </div>
                  
                  <span className="font-display font-bold text-[14px] text-slate-800 text-left leading-snug flex-1">
                    Be a Volunteer at SSF
                  </span>

                  <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center shrink-0 text-slate-500 group-hover:text-[#00829a] group-hover:border-[#00829a] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Right Pill: Benefits of partnership */}
              <div className="w-full lg:w-auto lg:absolute lg:bottom-2 lg:right-16 xl:right-28 flex justify-center p-2 lg:p-0 z-20">
                <div 
                  onClick={() => onViewChange && onViewChange('volunteer')}
                  className="bg-white rounded-[24px] sm:rounded-[28px] px-6 py-4 flex items-center gap-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full max-w-sm sm:w-[320px] md:w-[335px] cursor-pointer relative overflow-visible group"
                >
                  {/* Tail pointer pointing up-left towards the center */}
                  <svg className="hidden lg:block absolute -top-3.5 left-12 w-6 h-4 text-white fill-current" viewBox="0 0 24 16">
                    <path d="M24 16 C18 16, 12 12, 10 0 C9 12, 4 16, 0 16 Z" />
                  </svg>

                  <div className="w-12 h-12 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 shadow-inner">
                    <Building className="h-5 w-5 text-[#00829a]" />
                  </div>
                  
                  <span className="font-display font-bold text-[14px] text-slate-800 text-left leading-snug flex-1">
                    Benefits of partnership
                  </span>

                  <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center shrink-0 text-slate-500 group-hover:text-[#00829a] group-hover:border-[#00829a] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Action Statement & Main Buttons */}
          <div className="space-y-6 w-full max-w-2xl mx-auto">
            <h4 className="font-display font-black text-slate-900 text-3xl sm:text-[40px] tracking-tight leading-none mt-12 mb-8 select-none">
              Together we can do much more.
            </h4>
            
            <div className="flex justify-center items-center gap-6 pt-2">
              <button 
                onClick={() => onViewChange && onViewChange('donate')}
                className="flex items-center justify-between gap-4 pl-6 pr-2 py-2 bg-white hover:bg-slate-50 text-slate-900 rounded-full text-sm font-extrabold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer min-w-[170px]"
              >
                <span>Donate Now</span>
                <div className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Heart className="h-4 w-4 fill-white text-white" />
                </div>
              </button>
              <button 
                onClick={() => onViewChange && onViewChange('volunteer')}
                className="flex items-center justify-between gap-4 pl-6 pr-2 py-2 bg-[#00829a] hover:bg-[#007085] text-white rounded-full text-sm font-extrabold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer min-w-[170px]"
              >
                <span>Volunteer</span>
                <div className="w-8 h-8 rounded-full bg-white text-[#00829a] flex items-center justify-center shrink-0 shadow-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. RECENT HAPPENINGS / INSPIRING VOICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 text-left">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block font-mono shrink-0">
                  Inspiring Voices, Real Change
                </span>
                <span className="h-[1px] w-24 bg-brand-orange hidden sm:block" />
              </div>
              <h2 className="font-display font-bold text-slate-800 text-2xl sm:text-3xl uppercase tracking-tight mt-1">
                Recent Happenings
              </h2>
            </div>

            {/* Carousel controllers */}
            <div className="flex items-center space-x-2 self-end">
              <button className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors cursor-pointer">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors cursor-pointer">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Symmetrical vertical grid to match screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {happeningsData.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col text-left group"
              >
                {/* Top Image frame */}
                <div className="aspect-[1.3] relative overflow-hidden bg-slate-50 shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Absolute teal button with diagonal arrow */}
                  <div className="absolute top-3 right-3">
                    <button className="h-8 w-8 rounded-full bg-[#118AB2] text-white flex items-center justify-center shadow-md active:scale-95 transition-transform">
                      <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>

                {/* Bottom textual details */}
                <div className="p-5 flex flex-col flex-1 justify-between space-y-3.5">
                  <div className="space-y-2">
                    {/* Date with tiny Calendar Icon */}
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 font-mono uppercase">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      <span>{item.date}</span>
                    </div>
                    {/* Title */}
                    <h4 className="font-display font-bold text-slate-800 text-sm leading-snug group-hover:text-[#118AB2] transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    {/* Description */}
                    <p className="text-slate-500 text-xs leading-relaxed font-normal line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. APPRECIATION & RECOGNITION (TESTIMONIALS) */}
      <section className="py-24 bg-[#FFD15C] border-t border-amber-400">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left">
            <h2 className="font-display font-black text-slate-800 text-3xl sm:text-4xl tracking-tight leading-none uppercase">
              Appreciation & Recognition
            </h2>
          </div>

          {/* Testimonial Cards Grid (3 Columns matching screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-100/60 shadow-[15px_15px_30px_rgba(0,0,0,0.06)] text-left flex flex-col justify-between hover:shadow-[20px_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.01]"
              >
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-lg sm:text-xl tracking-tight leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-slate-500 text-xs mt-1.5 font-sans leading-normal">
                    {item.role}, {item.org}
                  </p>
                  
                  {/* Horizontal Divider */}
                  <div className="h-px bg-slate-100/80 my-5" />

                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans font-normal">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Symmetrical dot pager at bottom */}
          <div className="flex items-center justify-center space-x-4 pt-4 select-none">
            <button 
              onClick={handlePrevTestimonial}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonialsData.map((_, i) => (
                <div 
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    testimonialIndex === i ? 'w-5 bg-slate-800' : 'w-2 bg-slate-400'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={handleNextTestimonial}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ChevronRight className="h-5 w-5 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
