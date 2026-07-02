import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  School, 
  Award, 
  Heart, 
  Calendar, 
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  UserCheck,
  CheckCircle2,
  FileText,
  Building,
  Users,
  HeartHandshake
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, Happening, Testimonial, GalleryItem } from '../types';
import { projectsData, happeningsData, testimonialsData, galleryItems, beneficiariesData } from '../data';

interface HomeViewProps {
  onViewChange: (view: any, initialProject?: string | null) => void;
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
  onOpenWatchIntro: () => void;
}

const HeroSlideItem = ({
  slide,
  prevHeroSlide,
  nextHeroSlide,
  onViewChange,
  onOpenDonate,
}: {
  slide: any;
  prevHeroSlide: () => void;
  nextHeroSlide: () => void;
  onViewChange: (view: any, initialProject?: string | null) => void;
  onOpenDonate: () => void;
  key?: React.Key;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const hasClip = !!slide.clipPath;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative w-full h-full flex flex-col md:flex-row items-stretch"
      style={{ backgroundColor: slide.bgColor }}
    >
      
      {/* Left Area (42% width): Navigation + People Cutout */}
      <div 
        className="w-full md:w-[42%] relative flex items-end justify-center pt-0 overflow-hidden h-[310px] md:h-full"
      >
        
        {/* NAVIGATION ARROWS IN UPPER-LEFT */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-3 z-30">
          <button 
            id="prev-hero-slide-btn"
            onClick={(e) => { e.stopPropagation(); prevHeroSlide(); }}
            className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 hover:border-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
          </button>
          <button 
            id="next-hero-slide-btn"
            onClick={(e) => { e.stopPropagation(); nextHeroSlide(); }}
            className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 hover:border-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-5 w-5 stroke-[2.5]" />
          </button>
        </div>

        {/* HIGH-QUALITY PURE PEOPLE CUTOUTS SITTING ON THE BOTTOM BORDER */}
        <div className="relative w-full h-full flex items-end justify-center select-none overflow-hidden">
          <div 
            className="w-[90%] md:w-[95%] h-full flex items-end justify-center"
            style={hasClip ? { clipPath: slide.clipPath, transform: slide.transform, WebkitClipPath: slide.clipPath } : undefined}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-auto h-auto object-contain object-bottom transition-transform duration-700 max-h-[220px] md:max-h-[360px] hover:scale-102"
              style={{
                maskImage: isMobile 
                  ? 'linear-gradient(to top, transparent 0%, black 15%, black 100%)' 
                  : 'radial-gradient(ellipse at bottom, black 65%, transparent 98%)',
                WebkitMaskImage: isMobile 
                  ? 'linear-gradient(to top, transparent 0%, black 15%, black 100%)' 
                  : 'radial-gradient(ellipse at bottom, black 65%, transparent 98%)'
              }}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>

      {/* Right Area (58% width): Fully Centered, Styled Text Box */}
      <div 
        className="w-full md:w-[58%] relative flex flex-col justify-center items-center text-center px-6 py-8 md:py-10 md:px-10 z-10 flex-1 md:h-full"
      >
        {/* FLOATING DOODLES HOUSED IN TEXT SPACE - COMPLETELY CLEAR OF IMAGE CUTOUTS */}
        {slide.doodle === 'airplane' && (
          <motion.div 
            initial={{ scale: 0.7, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: 12, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="absolute right-4 top-4 sm:right-6 sm:top-6 md:right-8 md:top-8 z-20 text-yellow-300/90 drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] animate-bounce duration-[2000ms] pointer-events-none"
          >
            <svg className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" />
            </svg>
          </motion.div>
        )}

        {slide.doodle === 'chart' && (
          <motion.div 
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="absolute right-4 top-4 sm:right-6 sm:top-6 md:right-8 md:top-8 z-20 text-yellow-300/90 drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] pointer-events-none"
          >
            <svg className="w-16 h-11 sm:w-20 sm:h-14 md:w-24 md:h-17" viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 70 L40 45 L70 55 L110 15" />
              <path d="M90 15 H110 V35" />
            </svg>
          </motion.div>
        )}

        {slide.doodle === 'lightbulb' && (
          <motion.div 
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="absolute right-4 top-4 sm:right-6 sm:top-6 md:right-8 md:top-8 z-20 text-yellow-300/90 drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] animate-pulse pointer-events-none"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 fill-none stroke-current stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M12 2v2" />
              <path d="M4.22 4.22l1.42 1.42" />
              <path d="M19.78 4.22l-1.42 1.42" />
            </svg>
          </motion.div>
        )}

        {slide.doodle === 'medal' && (
          <motion.div 
            initial={{ scale: 0.7, y: -10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="absolute right-4 top-4 sm:right-6 sm:top-6 md:right-8 md:top-8 z-20 text-yellow-300/90 drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] pointer-events-none"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 fill-none stroke-current stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.47 14L19 22l-7-3-7 3 3.53-8" />
            </svg>
          </motion.div>
        )}

        {slide.doodle === 'heart' && (
          <motion.div 
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="absolute right-4 top-4 sm:right-6 sm:top-6 md:right-8 md:top-8 z-20 text-yellow-300/90 drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] animate-pulse pointer-events-none"
          >
            <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 fill-none stroke-current stroke-[3.5]" strokeLinecap="round" strokeLinejoin="round">
              <path d="M50,40 C35,20 15,30 15,50 C15,70 50,90 50,90 C50,90 85,70 85,50 C85,30 65,20 50,40 Z" />
              <path d="M65,45 L85,25" />
              <path d="M73,25 H85 V37" />
            </svg>
          </motion.div>
        )}
        
        {/* SLIDE TAG/LABEL */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
          {slide.tag}
        </span>

        {/* SLIDE TITLE */}
        <h1 className="font-display font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-tight tracking-tight max-w-xl mb-3">
          {slide.title}
        </h1>

        {/* SLIDE DESCRIPTION */}
        <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-xl mb-6">
          {slide.desc}
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Read More button */}
          <button 
            id="hero-read-more-btn"
            onClick={() => onViewChange('about')}
            className="flex items-center gap-3 text-white text-sm font-semibold select-none cursor-pointer group"
          >
            <span 
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              style={{ color: slide.bgColor }}
            >
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </span>
            <span>Read More</span>
          </button>

          {/* Donate Now button */}
          <button 
            id="hero-donate-btn"
            onClick={onOpenDonate}
            className="bg-white hover:bg-white/95 hover:scale-[1.02] text-slate-800 text-sm font-semibold px-6 py-2.5 rounded-full flex items-center gap-3 shadow-md transition-all cursor-pointer select-none"
          >
            <span>Donate Now</span>
            <span 
              className="w-7 h-7 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: slide.bgColor }}
            >
              <Heart className="h-3.5 w-3.5 fill-white text-white" />
            </span>
          </button>
        </div>

      </div>

    </motion.div>
  );
};

export default function HomeView({ 
  onViewChange, 
  onOpenDonate, 
  onOpenVolunteer, 
  onOpenWatchIntro 
}: HomeViewProps) {
  
  // 1. Hero Slider States
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const heroSlides = [
    {
      title: "Instilling Timeless Values in Young Hearts",
      desc: "Through our Value Education for Children initiative, we aim to nurture moral strength, discipline, and compassion in young minds. The program is designed to help children develop good character and life skills through stories, interactive sessions, and cultural activities.",
      image: "https://lh3.googleusercontent.com/d/1xnTavoGc4_UW98SaN4Z3rOr0J787BrtF",
      tag: "Children's Initiative",
      doodle: "airplane",
      bgColor: "#2383AC",
      clipPath: "inset(0px 0px 14% 0px)",
      transform: "translateY(14%)"
    },
    {
      title: "Shifting Towards Sustainable Practices",
      desc: "Our Sustainable Farming and Community Welfare initiative aims to empower rural communities. In a village near Kharagpur, we are working with local farmers to promote multi-crop and organic farming practices. Alongside this, we organize community drives — including meal distributions, and winter relief programs.",
      image: "https://lh3.googleusercontent.com/d/1DVapSeLuTWtZdy2sIEK6t0oFuJGAEa60",
      tag: "Sustainable Farming",
      doodle: "chart",
      bgColor: "#1B88B0"
    },
    {
      title: "Empowering Youth Skills & Opportunities",
      desc: "We guide college students through mentorship programs that combine practical skill development and personal growth. Through regular workshops on career skill development, and mentoring, youth gain clarity, confidence, and career readiness — preparing them to lead with purpose and make a positive impact in society.",
      image: "https://lh3.googleusercontent.com/d/1ZU0srSmebvRWpsnafogeJsH7uMs-6Sx8",
      tag: "Youth Empowerment",
      doodle: "lightbulb",
      bgColor: "#1181AD"
    },
    {
      title: "Fostering Inclusive Work Environments",
      desc: "We support organizations in building respectful, safe, and inclusive workplaces through sensitization programs, external counseling, and POSH-aligned guidance. Our initiatives promote empathy, gender awareness, and ethical conduct—creating a space where individual well-being and organizational growth coexist seamlessly.",
      image: "https://lh3.googleusercontent.com/d/16ujIaEhtzT6-94nvrsOG9I9f7lqkzvH4",
      tag: "Inclusive Workplaces",
      doodle: "medal",
      bgColor: "#0E7DA8"
    },
    {
      title: "Strengthening Pillars of Child Development",
      desc: "We equip parents and educators with practical tools to nurture children's emotional, moral, and social development. Through guided sessions and interactive learning, our programs strengthen communication, patience, and shared responsibility in shaping confident, value-driven young minds.",
      image: "https://lh3.googleusercontent.com/d/1N3LgLDXfcO0LDaw2X_CDd8HfRFhiO36H",
      tag: "Child Development",
      doodle: "heart",
      bgColor: "#0E7FAB"
    }
  ];

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };
  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextHeroSlide();
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  // 2. Banner "1 + 1 = 11" State
  const [activeBannerTab, setActiveBannerTab] = useState<'team' | 'report' | 'volunteer' | 'partnership'>('team');

  // 3. Happenings States (Scroll/Carousel)
  const [happeningIndex, setHappeningIndex] = useState(0);
  const nextHappening = () => {
    if (happeningIndex < happeningsData.length - 2) {
      setHappeningIndex(prev => prev + 1);
    }
  };
  const prevHappening = () => {
    if (happeningIndex > 0) {
      setHappeningIndex(prev => prev - 1);
    }
  };

  // 4. Testimonials States
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <div className="w-full">
      
      {/* SECTION 1: HERO CAROUSEL */}
      <section className="relative bg-white pt-6 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div 
            className="relative w-full rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl h-[680px] sm:h-[650px] md:h-[440px] lg:h-[460px] flex flex-col md:flex-row items-stretch transition-colors duration-500"
            style={{ backgroundColor: heroSlides[currentHeroSlide].bgColor }}
          >
                    {/* Slide content animations with AnimatePresence */}
            <AnimatePresence mode="wait">
              <HeroSlideItem 
                key={currentHeroSlide}
                slide={heroSlides[currentHeroSlide]}
                prevHeroSlide={prevHeroSlide}
                nextHeroSlide={nextHeroSlide}
                onViewChange={onViewChange}
                onOpenDonate={onOpenDonate}
              />
            </AnimatePresence>

          </div>
          
        </div>
      </section>

      {/* SECTION 2: ABOUT US & WATCH INTRO */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-[#f26522] uppercase tracking-widest font-mono">Who We Are</span>
                <span className="h-[2px] w-12 bg-[#f26522]" />
              </div>
              <h2 className="font-display font-bold text-slate-800 text-3xl sm:text-4xl tracking-tight leading-none uppercase">About Us</h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
              At Susamskar Foundation, we believe that true education goes beyond textbooks. It is about shaping character, building emotional resilience, and cultivating ethical awareness—preparing students not just for careers, but for life. Children are the future leaders of society. When guided with the right values, they have the potential to uplift not only their own lives, but also inspire and influence others. Founded by a group of dedicated researchers and professionals from IIT, Susamskar Foundation is a registered non-profit initiative committed to personal transformation through value-based education. With the support of visionary individuals from government, multinational corporations, and educational institutions, we are fostering a paradigm shift in education.
            </p>

            <div className="pt-2">
              <button 
                id="about-know-more-btn"
                onClick={() => onViewChange('about')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#118AB2] hover:bg-[#0e7495] text-white rounded-lg text-sm font-semibold shadow-md transition-all cursor-pointer group"
              >
                <span>Know More</span>
                <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#118AB2] shadow-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Images & Video Intro Column (composite layout mimicking the design exactly) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] aspect-[1.3] mx-auto">
              
              {/* SVG Yellow Loop / Hand-drawn decorative line running behind and around */}
              <svg className="absolute -inset-6 w-[110%] h-[110%] pointer-events-none z-0" viewBox="0 0 580 460" fill="none" preserveAspectRatio="none">
                {/* Main continuous golden loop */}
                <path 
                  d="M 140,410 C 220,440 300,430 340,390 C 410,320 370,180 500,220 C 530,230 550,180 510,120 C 470,60 440,40 520,10" 
                  stroke="#fbbf24" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  className="opacity-90"
                />
                {/* Secondary accent loop wrapping bottom-left */}
                <path 
                  d="M 80,310 C 40,360 100,410 190,380 C 270,350 310,390 360,350" 
                  stroke="#fbbf24" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeDasharray="8 6"
                  className="opacity-70"
                />
              </svg>

              {/* Main top-right card: IIT/School students group */}
              <div 
                onClick={onOpenWatchIntro}
                className="absolute right-0 top-[4%] w-[72%] aspect-[1.35] rounded-[28px] overflow-hidden shadow-2xl border-[6px] border-white z-10 cursor-pointer group hover:shadow-3xl transition-all duration-300"
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/14J3mChvDqDh70Zpu3oIMyhsVlXVyjMXM" 
                  alt="IIT Students Group"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Centered Orange Play Button exactly like the design */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-300">
                  <div className="h-16 w-16 rounded-full bg-[#f26522] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-95 transition-all duration-300">
                    <Play className="h-7 w-7 fill-white stroke-none ml-1.5" />
                  </div>
                </div>
              </div>

              {/* Overlapping bottom-left card: Hands holding soil and sapling */}
              <div className="absolute left-0 bottom-[4%] w-[58%] aspect-[1.25] rounded-[28px] overflow-hidden shadow-2xl border-[6px] border-white z-20 hover:scale-[1.02] transition-transform duration-500 hover:shadow-3xl">
                <img 
                  src="https://lh3.googleusercontent.com/d/1qJJtPqO6UFrPh-zrrCTyD6exMpRWR1OR" 
                  alt="Hands holding soil and sapling"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Watch Our Intro! Orange floating Pill Button overlapping the bottom overlap region */}
              <div className="absolute bottom-[8%] left-[30%] sm:left-[34%] z-30">
                <button 
                  id="watch-intro-video-btn"
                  onClick={onOpenWatchIntro}
                  className="px-6 py-3 bg-[#f26522] hover:bg-[#e05413] active:scale-95 text-white rounded-full flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer font-bold text-xs sm:text-sm uppercase tracking-wider font-sans border border-orange-400/20"
                >
                  <span>Watch our intro!</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: OUR PROJECTS */}
      <section id="our-projects-section" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left mb-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold text-[#f26522] uppercase tracking-widest font-mono">What we do</span>
              <span className="h-[2.5px] w-14 bg-[#f26522]" />
            </div>
            <h2 className="font-display font-black text-slate-800 text-3xl sm:text-4xl tracking-tight leading-none uppercase">Our Projects</h2>
          </div>

          <p className="text-slate-500 text-xs sm:text-sm max-w-4xl text-left leading-relaxed mb-12">
            Our projects span across diverse areas, reaching children, youth, parents, teachers, corporate professionals, and rural communities. From nurturing values in schools and empowering young minds at IIT, to guiding educators and supporting inclusive workplaces, we strive to create meaningful impact. Through farming awareness and distribution drives, we also extend care to villages and the underprivileged, fostering both growth and compassion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Column 1, Item 1: How we make a difference with custom golden loop design */}
            <div className="flex flex-col justify-center min-h-[260px] text-left relative overflow-visible py-6 pl-2 pr-4">
              
              {/* Elegant hand-drawn golden curved arrow pointing from under text towards the projects */}
              <div className="absolute top-[62%] left-[12%] w-64 h-24 pointer-events-none z-0">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 240 100" fill="none">
                  {/* Swooping main curve starting right on the text and moving right */}
                  <path 
                    d="M 10,20 C 70,80 180,70 230,15" 
                    stroke="#fbbf24" 
                    strokeWidth="4.5" 
                    strokeLinecap="round" 
                    className="opacity-95"
                  />
                  {/* Hand-drawn arrowhead pointing top-right */}
                  <path 
                    d="M 208,24 C 215,20 226,16 231,14 C 228,21 222,32 219,39" 
                    stroke="#fbbf24" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="opacity-95"
                  />
                </svg>
              </div>

              <h3 className="font-display font-extrabold text-slate-800 text-4xl sm:text-[42px] leading-[1.1] tracking-tight relative z-10 uppercase">
                How we <br />
                make a <br />
                <span className="text-slate-800">Difference.</span>
              </h3>
            </div>

            {/* Map over all 5 projects */}
            {projectsData.map((project) => (
              <div 
                key={project.id}
                className="bg-white p-6 rounded-[28px] border border-slate-100 hover:border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  {/* Image container */}
                  <div className="aspect-[1.5] rounded-[20px] overflow-hidden relative shadow-xs">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-slate-800 text-lg leading-snug group-hover:text-[#118AB2] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-500 text-[13px] leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Read More button at the bottom */}
                <div className="pt-6 mt-auto">
                  <button
                    onClick={() => {
                      let projectKey = 'value-education';
                      if (project.id === 2) projectKey = 'youth-skill';
                      else if (project.id === 3) projectKey = 'teaching-parenting';
                      else if (project.id === 4) projectKey = 'workplace-harmony';
                      else if (project.id === 5) projectKey = 'sustainable-farming';
                      onViewChange('projects', projectKey);
                    }}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#118AB2] hover:bg-[#0e7495] active:scale-95 text-white rounded-lg text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <span>Read More</span>
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#118AB2] shadow-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                      <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                    </span>
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SECTION 4: STATS COUNTER */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          
          {[
            { value: "35", label: "Schools Reached", icon: School },
            { value: "1500+", label: "Youth & Children Inspired", icon: Sparkles },
            { value: "300+", label: "Underprivileged Families Supported", icon: Award },
            { value: "8", label: "Years Of Service", icon: Calendar }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="p-4 flex flex-col items-center space-y-2 border-r last:border-0 border-slate-100">
                <div className="p-3 bg-brand-orange/5 text-brand-orange rounded-full">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-display font-extrabold text-slate-800 text-2xl sm:text-3xl leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            );
          })}

        </div>
      </section>

      {/* SECTION 5: INTERACTIVE ACTION BANNER "1 + 1 = 11" (YELLOW CANVAS) */}
      <section className="py-20 bg-[#fccf55] relative overflow-hidden text-slate-900 border-b border-amber-400">
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
                  onClick={() => {
                    setActiveBannerTab('team');
                    onViewChange('about');
                  }}
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
                  onClick={() => {
                    setActiveBannerTab('report');
                  }}
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
                  onClick={() => {
                    setActiveBannerTab('volunteer');
                    onOpenVolunteer();
                  }}
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
                  onClick={() => {
                    setActiveBannerTab('partnership');
                  }}
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
            <h4 className="font-display font-black text-slate-900 text-3xl sm:text-[40px] tracking-tight leading-none mt-12 mb-8">
              Together we can do much more.
            </h4>
            
            <div className="flex justify-center items-center gap-6 pt-2">
              <button 
                id="banner-donate-btn"
                onClick={onOpenDonate}
                className="flex items-center justify-between gap-4 pl-6 pr-2 py-2 bg-white hover:bg-slate-50 text-slate-900 rounded-full text-sm font-extrabold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer min-w-[170px]"
              >
                <span>Donate Now</span>
                <div className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Heart className="h-4 w-4 fill-white text-white" />
                </div>
              </button>
              <button 
                id="banner-volunteer-btn"
                onClick={onOpenVolunteer}
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

        {/* Decorative background vectors representing unity */}
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full border border-slate-900/5" />
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full border border-slate-900/5" />
      </section>

      {/* SECTION 6: SOME OF OUR BENEFICIARIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold text-[#f26522] uppercase tracking-widest font-mono">Some of our</span>
              <span className="h-[2.5px] w-14 bg-[#f26522]" />
            </div>
            <h2 className="font-display font-black text-slate-800 text-3xl sm:text-4xl tracking-tight leading-none uppercase">Beneficiaries</h2>
          </div>

          {/* Clean grids showing beneficiaries (matches precise styling from My final Landing Page.jpg) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
            {beneficiariesData.map((b) => (
              <div 
                key={b.id} 
                className="p-5 bg-white border border-slate-100 rounded-[24px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group hover:shadow-lg hover:border-slate-200/80 hover:bg-slate-50/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Logo wrapper */}
                <div className="h-20 w-20 rounded-full bg-slate-50/50 border border-slate-100/80 flex items-center justify-center p-3.5 mb-4 relative overflow-hidden group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-xs">
                  {b.logoUrl ? (
                    <img 
                      src={b.logoUrl} 
                      alt={b.name} 
                      className="max-h-full max-w-full object-contain select-none transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Hide image on load failure
                        e.currentTarget.style.display = 'none';
                        // Find the hidden text fallback and make it visible
                        const fb = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fb) fb.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  {/* Robust Text fallback shown ONLY if image fails or logoUrl is empty */}
                  <div 
                    className="absolute inset-0 bg-brand-orange/10 text-brand-orange flex flex-col items-center justify-center text-center p-2"
                    style={{ display: b.logoUrl ? 'none' : 'flex' }}
                  >
                    <span className="font-display font-black text-sm tracking-tight leading-none">{b.logoText}</span>
                    <span className="text-[8px] font-mono font-bold uppercase text-slate-500 mt-1">{b.logoSub}</span>
                  </div>
                </div>

                <span className="text-[11px] font-extrabold text-slate-800 leading-snug uppercase tracking-tight font-display block group-hover:text-brand-orange transition-colors">
                  {b.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: INTERACTIVE GALLERY */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold text-[#f26522] uppercase tracking-widest font-mono">Glimpses of our</span>
              <span className="h-[2.5px] w-14 bg-[#f26522]" />
            </div>
            <h2 className="font-display font-black text-slate-800 text-3xl sm:text-4xl tracking-tight leading-none uppercase">Gallery</h2>
          </div>

          {/* Photo Grid (matches precise styling with same css, images, position of images) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="relative aspect-video rounded-[24px] overflow-hidden border border-slate-100/80 bg-slate-900 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                onClick={() => onViewChange('gallery')}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover select-none group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Modern overlay card on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <span className="text-[10px] uppercase tracking-widest text-[#f26522] font-black font-mono">
                      {item.category}
                    </span>
                    <h4 className="text-white font-display font-bold text-sm sm:text-base mt-1 leading-tight tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8: RECENT HAPPENINGS / INSPIRING VOICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div className="text-left">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block font-mono">Inspiring Voices, Real Change</span>
              <h2 className="font-display font-bold text-slate-800 text-2xl sm:text-3xl uppercase tracking-tight mt-1">Recent Happenings</h2>
              <div className="h-1 w-14 bg-brand-orange rounded-full mt-2" />
            </div>

            {/* Slider triggers */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={prevHappening}
                disabled={happeningIndex === 0}
                className="p-2 border border-slate-200 disabled:opacity-40 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextHappening}
                disabled={happeningIndex >= happeningsData.length - 2}
                className="p-2 border border-slate-200 disabled:opacity-40 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Cards carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
            {happeningsData.slice(happeningIndex, happeningIndex + 2).map((item) => (
              <div 
                key={item.id} 
                className="border border-slate-100 rounded-3xl bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row text-left group"
              >
                <div className="md:w-1/2 h-52 md:h-auto relative overflow-hidden shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-brand-orange text-[9px] text-white font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 block font-mono uppercase">
                      {item.date}
                    </span>
                    <h4 className="font-display font-bold text-slate-800 text-base leading-snug group-hover:text-brand-teal transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-normal">
                      {item.desc}
                    </p>
                  </div>

                  <button 
                    onClick={() => onViewChange('gallery')}
                    className="flex items-center gap-1 text-xs font-bold text-brand-teal hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    View in Highlights
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9: APPRECIATION & RECOGNITION (TESTIMONIALS) */}
      <section className="py-24 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold text-[#f26522] uppercase tracking-widest font-mono">Feedback & Endorsements</span>
              <span className="h-[2.5px] w-14 bg-[#f26522]" />
            </div>
            <h2 className="font-display font-black text-slate-800 text-3xl sm:text-4xl tracking-tight leading-none uppercase">
              Appreciation & Recognition
            </h2>
          </div>

          {/* Testimonial Cards Grid (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-8 sm:p-10 rounded-[32px] border border-slate-100/60 shadow-[15px_15px_30px_rgba(0,0,0,0.12)] text-left flex flex-col justify-between hover:shadow-[20px_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.01]"
              >
                <div>
                  <h4 className="font-serif font-black text-slate-900 text-2xl tracking-tight leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-slate-500 text-sm mt-2 font-sans leading-relaxed">
                    {item.role}, {item.org}
                  </p>
                  
                  {/* Horizontal Divider */}
                  <div className="h-px bg-slate-100/80 my-6" />

                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed font-sans font-normal">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
