import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Sprout, 
  Lightbulb, 
  Users, 
  Home, 
  Play, 
  Sparkles, 
  ArrowUpRight,
  Building,
  School,
  Award,
  Calendar,
  FileText,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';
import { ViewType } from '../types';
import { happeningsData, testimonialsData, beneficiariesData } from '../data';

interface OurTeamViewProps {
  onViewChange: (view: ViewType) => void;
  onOpenDonate?: () => void;
  onOpenVolunteer?: () => void;
  onOpenWatchIntro?: () => void;
}

export default function OurTeamView({ 
  onViewChange, 
  onOpenDonate, 
  onOpenVolunteer,
  onOpenWatchIntro
}: OurTeamViewProps) {
  
  // Advisory Board members (9 members total, first 8 have images, 9th has the new image URL provided)
  const advisoryBoard = [
    {
      name: "Dr. Nijwm Wary",
      role: "Asst. Prof, School of Electrical Science",
      institution: "IIT Bhubaneswar",
      image: "https://lh3.googleusercontent.com/d/1xIH7msozw6JSxBXNEHJ4iLkrv0rm1BEl"
    },
    {
      name: "Dr. Mrigank Sharad",
      role: "Asst. Prof, Rajendra Mishra School of Engg Entrepreneurship",
      institution: "IIT Kharagpur",
      image: "https://lh3.googleusercontent.com/d/1-bura0s-_dpSYUHe4ke3TbyLHUMn5U_j"
    },
    {
      name: "Prof. (Retd.) G B Nando",
      role: "Head Adjunct Professor",
      institution: "IIT Bhubaneswar",
      image: "https://lh3.googleusercontent.com/d/1iRh1ZbgVPbMHldy-yAh91gJZOUS3JDXT"
    },
    {
      name: "Dr. Amit Ranjan Biswas",
      role: "Neuropsychiatrist",
      institution: "Oxford Health NHS Foundation Trust, UK",
      image: "https://lh3.googleusercontent.com/d/1PfBzAXFOXeVkUNsWcIC4lcNhWAvn017S"
    },
    {
      name: "Mr. Debasis Ghosh",
      role: "Joint Commissioner Commercial Taxes",
      institution: "West Bengal Govt",
      image: "https://lh3.googleusercontent.com/d/1-ePBgmjqxElu37vf2lUC-oOLOeN2Zhrq"
    },
    {
      name: "Mr. G. V. Subramanian",
      role: "Director",
      institution: "Bharatiya Vidya Bhavan",
      image: "https://lh3.googleusercontent.com/d/19hqkX-9lF9xfykYXCT-NnCW5pru6GF7z"
    },
    {
      name: "Dr. Vivek Dixit",
      role: "Asst. Prof, Electronics & Electrical Communications Engineering",
      institution: "IIT Kharagpur",
      image: "https://lh3.googleusercontent.com/d/1xgV-Qspr0dA4gvYZcdBMKJ8mhEjWQyx4"
    },
    {
      name: "Prof. H.N. Mishra",
      role: "Dept. of Agricultural & Food Engineering",
      institution: "IIT Kharagpur",
      image: "https://lh3.googleusercontent.com/d/1cUQ_Yb1sF1xT_cKPZ3eP2NpR1sHQ9vO-"
    },
    {
      name: "Mrs. Apala Chakraborty",
      role: "Academic Director",
      institution: "SSM Academy, Kolkata",
      image: "https://lh3.googleusercontent.com/d/1cKPt8B2gtZsVCFRx4QJOJsbdnLtRN4pO" // Updated as requested by the user
    }
  ];

  // Core Team members (20 members total, all have images)
  const coreTeam = [
    {
      name: "Dr. Pawan Goyal",
      role: "Asst. Prof, IIT Kharagpur",
      designation: "Chairman",
      image: "https://lh3.googleusercontent.com/d/1MSjn4aNdXPop6-CYkZYOE07znw0Hbb26"
    },
    {
      name: "Supriya Hazra",
      role: "Secretary",
      image: "https://lh3.googleusercontent.com/d/1CGJgFc4qq-S0XXxIJGse-SBiCCbhptAy"
    },
    {
      name: "Dr. Tarun Dixit",
      role: "Faculty, Sarathi Academy, Kharagpur",
      image: "https://lh3.googleusercontent.com/d/1cSpAlAHPnlQzaojN0SJnA3kMnOh6Puat"
    },
    {
      name: "Niladri Hazra",
      role: "Ex-Director, GSI",
      designation: "Admin Manager",
      image: "https://lh3.googleusercontent.com/d/1foP82Lm7EqwRI1yif3_cyu3nPDZhsB5p"
    },
    {
      name: "Dr. Preeti Mishra",
      role: "Partner, Sarathi Academy, Kharagpur",
      image: "https://lh3.googleusercontent.com/d/1DTIszlbMDhgxuthKE74Dn8N1SyKIV_k3"
    },
    {
      name: "Jayati Goswami",
      role: "Counsellor & Ex Headmistress, LSA, Kolkata",
      image: "https://lh3.googleusercontent.com/d/1yyvm3SAE0JFTXG1B8bntZivNZki-Z2c0"
    },
    {
      name: "Priyanka Dixit",
      role: "MSc Physics",
      image: "https://lh3.googleusercontent.com/d/13qAP96_XwJsBjmYKv-U5pPM_yja1sDuk"
    },
    {
      name: "Sejal Goyal",
      role: "Former Asst. Prof, Rajasthan University",
      image: "https://lh3.googleusercontent.com/d/1o3gy7HOZ4ShjUFSiOB_An4b4yvIwKuAi"
    },
    {
      name: "Ngalakshmi HH",
      role: "PG dip. in Business Administration",
      image: "https://lh3.googleusercontent.com/d/1ynywI5vGilMMiT_7X8Fay79KyHZGWpvD"
    },
    {
      name: "Pushkar Nawale",
      role: "Partner, Sarathi Academy, Kharagpur",
      image: "https://lh3.googleusercontent.com/d/1yq8OUAnzsvtDimWJ43sOXNEEPW0pISD-"
    },
    {
      name: "Rohith Bogadi",
      role: "Partner, Sarathi Academy, Kharagpur",
      image: "https://lh3.googleusercontent.com/d/1m0IZusLXkuKGW10ML1A07ZwHX2pA8fl-"
    },
    {
      name: "Ramya",
      role: "Asst Prof, Aarhus University, Denmark",
      image: "https://lh3.googleusercontent.com/d/1SbPDf4MowuJpG-WXgMH5UMi60zg6nega"
    },
    {
      name: "Asha Dalmia",
      role: "Housewife",
      image: "https://lh3.googleusercontent.com/d/1uHGOhY7Kk_ts-_rbxfw6Z0BQ1G3IgtJO"
    },
    {
      name: "Kavita Arya",
      role: "Self employed",
      image: "https://lh3.googleusercontent.com/d/1Bujnab59c6j5gT7hirhrECZ2jKjn3xTa"
    },
    {
      name: "Sneha Biswas Nawale",
      role: "Masters in IR, Jadavpur University",
      image: "https://lh3.googleusercontent.com/d/1uQwXkzUnvC72JHk9jf49G8QSbxFc36o-"
    },
    {
      name: "M Poojitha",
      role: "B.Tech. (Dual) 5th yr, IIT Kharagpur",
      image: "https://lh3.googleusercontent.com/d/1O8M16BwUMEB1tZydMkxNJyyBYWKk6tft"
    },
    {
      name: "Annewsa Manna",
      role: "BS MS 4th yr, IIT Kharagpur",
      image: "https://lh3.googleusercontent.com/d/1EGgSatBlABCRtq0nqlXs0SCXC-x4WjxY"
    },
    {
      name: "Reshmitha K",
      role: "B.Tech. 2nd yr, IIT Kharagpur",
      image: "https://lh3.googleusercontent.com/d/1CtcKCvzL0EEh-NkJhQGGsEKQ5x2sM8JA"
    },
    {
      name: "B Shramitha",
      role: "Associate, PwC India",
      image: "https://lh3.googleusercontent.com/d/1cE40UYATTuAkx61kHo3zwsPGzJI8VY4Q"
    },
    {
      name: "Babu Ranjan Thakur",
      role: "Asst. Prof, IIEST, Shibpur",
      image: "https://lh3.googleusercontent.com/d/1JcyGosZx2XL1qA3r4RAs34YheMeMU3R4"
    }
  ];

  // Responsive state for Advisory Board slider
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [activeBannerTab, setActiveBannerTab] = useState<'team' | 'report' | 'volunteer' | 'partnership'>('team');
  const [happeningIndex, setHappeningIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure startIndex remains in-bounds if itemsToShow changes
  useEffect(() => {
    if (startIndex > advisoryBoard.length - itemsToShow) {
      setStartIndex(Math.max(0, advisoryBoard.length - itemsToShow));
    }
  }, [itemsToShow, startIndex, advisoryBoard.length]);

  const nextSlide = () => {
    if (startIndex < advisoryBoard.length - itemsToShow) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const nextHappening = () => {
    if (happeningIndex < happeningsData.length - 2) {
      setHappeningIndex((prev) => prev + 1);
    }
  };

  const prevHappening = () => {
    if (happeningIndex > 0) {
      setHappeningIndex((prev) => prev - 1);
    }
  };

  // Construct visible items for the slider (non-wrapping bounded slider)
  const visibleAdvisory = advisoryBoard.slice(startIndex, startIndex + itemsToShow);

  return (
    <div id="our-team-page-container" className="w-full bg-white min-h-screen">
      
      {/* 1. BREADCRUMB / ACCENT PATHWAY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-left select-none">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-widest font-mono">
          <span className="h-0.5 w-10 bg-slate-400" />
          <button 
            onClick={() => onViewChange('home')}
            className="cursor-pointer hover:text-brand-orange transition-colors uppercase outline-none"
          >
            HOME
          </button>
        </div>
      </div>

      {/* 2. SECTION 1: COLLAGE HERO */}
      <section className="py-12 bg-white overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Statement column */}
          <div className="lg:col-span-6 text-left space-y-6">
            <h1 className="font-display font-bold text-slate-800 text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              We are a <span className="font-extrabold text-slate-900">non-profit organization</span> committed to strengthen communities through <span className="font-extrabold text-slate-900">value-based initiatives</span>
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
              Susamskar Foundation bridges value-based learning, humanitarian relief, and active community transformation to empower children, youth, and families across urban and rural ecosystems.
            </p>
          </div>

          {/* Collage columns (matching the visual mockup perfectly) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-[1.3] mx-auto">
              
              {/* Background Image: IIT Students Group */}
              <div className="absolute right-0 top-0 w-[65%] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/80 z-10">
                <img 
                  src="https://lh3.googleusercontent.com/d/14J3mChvDqDh70Zpu3oIMyhsVlXVyjMXM" 
                  alt="IIT Students Group"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Foreground Main Image: Hands holding soil and sapling */}
              <div className="absolute left-0 bottom-0 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
                <img 
                  src="https://lh3.googleusercontent.com/d/1qJJtPqO6UFrPh-zrrCTyD6exMpRWR1OR" 
                  alt="Hands holding soil and sapling"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center p-3 text-center">
                  <button 
                    onClick={onOpenWatchIntro}
                    className="h-12 w-12 rounded-full bg-brand-orange hover:bg-brand-orange/90 hover:scale-110 flex items-center justify-center text-white shadow-lg transition-all cursor-pointer outline-none border-none"
                  >
                    <Play className="h-5 w-5 fill-white ml-0.5" />
                  </button>
                  <button 
                    onClick={onOpenWatchIntro}
                    className="mt-2.5 px-3 py-1 bg-brand-orange text-white text-[10px] font-bold rounded-full hover:scale-105 transition-all cursor-pointer outline-none border-none"
                  >
                    Watch our intro!
                  </button>
                </div>
              </div>

              {/* Behind layout accents */}
              <div className="absolute -bottom-2 -left-2 w-44 h-44 rounded-full bg-brand-yellow/15 -z-10" />

            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION 2: ADVISORY BOARD WITH SLIDER */}
      <section className="py-20 bg-slate-100/50 border-y border-slate-100 relative overflow-hidden select-none">
        {/* Subtle background waves or graphics */}
        <div className="absolute -left-10 top-0 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-10 bottom-0 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">Wisdom that leads the way</span>
              <span className="h-[1.5px] w-14 bg-brand-orange" />
            </div>
            <h2 className="font-display font-black text-slate-800 text-3xl sm:text-4xl tracking-tight uppercase">
              Our Advisory Board
            </h2>
            <p className="text-slate-500 text-sm max-w-4xl mt-4 leading-relaxed font-sans">
              Our Advisory Board is composed of distinguished leaders from academia, healthcare, technology, culture, and public service. Their diverse expertise provides strategic guidance, helping Susamskar Foundation maintain standard operations and high social impact.
            </p>
          </div>

          {/* Slider Layout with Circular Chevrons outside */}
          <div className="relative flex items-center gap-4 sm:gap-6 lg:gap-8">
            
            {/* Left Button */}
            <button 
              onClick={prevSlide}
              disabled={startIndex === 0}
              className={`hidden sm:flex w-12 h-12 rounded-full border border-slate-200 bg-white items-center justify-center text-slate-600 shadow-sm transition-all shrink-0 z-20 ${
                startIndex === 0 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:bg-slate-50 hover:text-brand-orange hover:border-slate-300 active:scale-95 cursor-pointer'
              }`}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-6 w-6 stroke-[2]" />
            </button>

            {/* Deck of cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 overflow-hidden py-4">
              {visibleAdvisory.map((member, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-[24px] border border-slate-100/80 shadow-[0_15px_35px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col items-stretch h-[380px] sm:h-[400px] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Top photo cutout */}
                  <div className="flex-1 bg-white flex items-center justify-center p-4 relative overflow-hidden select-none">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="max-h-[220px] max-w-full object-contain select-none transition-transform duration-500"
                    />
                  </div>
                  {/* Bottom yellow information block */}
                  <div className="bg-[#fccf55] p-5 text-center flex flex-col justify-center items-center shrink-0 min-h-[140px] rounded-b-[24px] select-none">
                    <h3 className="font-display font-black text-slate-900 text-sm sm:text-base leading-tight uppercase mb-1">
                      {member.name}
                    </h3>
                    {member.name === "Dr. Mrigank Sharad" && (
                      <span className="text-[10px] font-bold text-slate-700 block mb-1 font-mono uppercase">
                        (MA)
                      </span>
                    )}
                    <p className="text-slate-800 font-semibold text-[10px] sm:text-xs leading-tight uppercase font-mono mb-1">
                      {member.role}
                    </p>
                    <p className="text-slate-900 font-extrabold text-[11px] sm:text-xs leading-tight uppercase tracking-wide">
                      {member.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button 
              onClick={nextSlide}
              disabled={startIndex >= advisoryBoard.length - itemsToShow}
              className={`hidden sm:flex w-12 h-12 rounded-full border border-slate-200 bg-white items-center justify-center text-slate-600 shadow-sm transition-all shrink-0 z-20 ${
                startIndex >= advisoryBoard.length - itemsToShow 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:bg-slate-50 hover:text-brand-orange hover:border-slate-300 active:scale-95 cursor-pointer'
              }`}
              aria-label="Next Slide"
            >
              <ChevronRight className="h-6 w-6 stroke-[2]" />
            </button>

          </div>

          {/* Mobile Arrows indicator */}
          <div className="flex sm:hidden justify-center items-center gap-4 mt-6">
            <button 
              onClick={prevSlide}
              disabled={startIndex === 0}
              className={`w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 shadow-xs transition-all ${
                startIndex === 0 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:bg-slate-50 active:scale-95 cursor-pointer'
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-xs font-mono font-bold text-slate-400">
              {startIndex + 1} / {advisoryBoard.length}
            </span>
            <button 
              onClick={nextSlide}
              disabled={startIndex >= advisoryBoard.length - itemsToShow}
              className={`w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 shadow-xs transition-all ${
                startIndex >= advisoryBoard.length - itemsToShow 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:bg-slate-50 active:scale-95 cursor-pointer'
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. SECTION 3: OUR TEAM GRID */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold text-[#f26522] uppercase tracking-widest font-mono">The hearts and hands behind Susamskar</span>
              <span className="h-[1.5px] w-14 bg-[#f26522]" />
            </div>
            <h2 className="font-display font-black text-slate-800 text-3xl sm:text-4xl tracking-tight uppercase">
              Our Team
            </h2>
          </div>

          {/* Team Grid - 3 columns, clean horizontal row layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {coreTeam.map((member, i) => (
              <div key={i} className="flex items-center gap-4 select-none hover:scale-[1.02] transition-transform duration-300">
                {/* Profile Photo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shrink-0 relative shadow-xs">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                  />
                </div>
                {/* Profile Details */}
                <div className="space-y-0.5 text-left">
                  <h3 className="font-display font-extrabold text-slate-800 text-sm sm:text-base uppercase leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs leading-tight">
                    {member.role}
                  </p>
                  {member.designation && (
                    <p className="text-[#f26522] font-extrabold text-[9px] sm:text-[10px] leading-tight uppercase tracking-wider">
                      {member.designation}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECTION 4: STATS COUNTER */}
      <section className="py-16 bg-white border-t border-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center select-none">
          
          {[
            { value: "35", label: "Schools Reached", icon: School },
            { value: "1500+", label: "Youth & Children Inspired", icon: Sparkles },
            { value: "300+", label: "Underprivileged Families Supported", icon: Award },
            { value: "8", label: "Years Of Service", icon: Calendar }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex flex-col items-center space-y-3 p-4">
                <div className="p-3.5 bg-brand-yellow/10 rounded-full text-brand-orange">
                  <Icon className="h-6 w-6 stroke-[2]" />
                </div>
                <span className="font-display font-black text-slate-900 text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-none block">
                  {stat.value}
                </span>
                <span className="font-display font-bold text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider block max-w-[160px] mx-auto leading-normal">
                  {stat.label}
                </span>
              </div>
            );
          })}

        </div>
      </section>

      {/* 6. SECTION 5: "1+1=11" YELLOW BANNER */}
      <section className="py-16 bg-brand-yellow relative overflow-hidden select-none border-y border-amber-300">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
          
          {/* Main Symmetrical Container for 1+1=11 Speech Bubbles */}
          <div className="relative w-full max-w-4xl h-auto lg:h-[350px] flex flex-col lg:block mb-8">
            
            {/* Massive 1+1=11 Center Divider */}
            <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 text-center py-6 lg:py-0 z-10 select-none">
              <span className="font-display font-black text-slate-900 text-6xl sm:text-7xl lg:text-[96px] tracking-tight leading-none">
                1 + 1 = 11
              </span>
            </div>

            {/* Grid of pills below lg, absolute floating on lg and up */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:contents gap-4 sm:gap-6 lg:gap-0">
              
              {/* Top Left Pill */}
              <div className="w-full lg:w-auto lg:absolute lg:top-2 lg:left-4 xl:left-12 flex justify-center p-2 lg:p-0 z-20">
                <div 
                  onClick={() => {
                    setActiveBannerTab('team');
                    onViewChange('team');
                  }}
                  className="bg-white rounded-[24px] sm:rounded-[28px] px-6 py-4 flex items-center gap-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full max-w-sm sm:w-[320px] md:w-[335px] cursor-pointer relative overflow-visible group"
                >
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

              {/* Top Right Pill */}
              <div className="w-full lg:w-auto lg:absolute lg:top-2 lg:right-4 xl:right-12 flex justify-center p-2 lg:p-0 z-20">
                <div 
                  onClick={() => setActiveBannerTab('report')}
                  className="bg-white rounded-[24px] sm:rounded-[28px] px-6 py-4 flex items-center gap-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full max-w-sm sm:w-[320px] md:w-[335px] cursor-pointer relative overflow-visible group"
                >
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

              {/* Bottom Left Pill */}
              <div className="w-full lg:w-auto lg:absolute lg:bottom-2 lg:left-16 xl:left-28 flex justify-center p-2 lg:p-0 z-20">
                <div 
                  onClick={() => {
                    setActiveBannerTab('volunteer');
                    if (onOpenVolunteer) onOpenVolunteer();
                  }}
                  className="bg-white rounded-[24px] sm:rounded-[28px] px-6 py-4 flex items-center gap-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full max-w-sm sm:w-[320px] md:w-[335px] cursor-pointer relative overflow-visible group"
                >
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

              {/* Bottom Right Pill */}
              <div className="w-full lg:w-auto lg:absolute lg:bottom-2 lg:right-16 xl:right-28 flex justify-center p-2 lg:p-0 z-20">
                <div 
                  onClick={() => setActiveBannerTab('partnership')}
                  className="bg-white rounded-[24px] sm:rounded-[28px] px-6 py-4 flex items-center gap-4 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full max-w-sm sm:w-[320px] md:w-[335px] cursor-pointer relative overflow-visible group"
                >
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

          {/* Action Wording & Buttons */}
          <div className="space-y-6 w-full max-w-2xl mx-auto">
            <h4 className="font-display font-black text-slate-900 text-3xl sm:text-[40px] tracking-tight leading-none mt-12 mb-8 uppercase">
              Together we can do much more.
            </h4>
            <div className="flex justify-center items-center gap-6 pt-2">
              <button 
                onClick={onOpenDonate}
                className="flex items-center justify-between gap-4 pl-6 pr-2 py-2 bg-white hover:bg-slate-50 text-slate-900 rounded-full text-sm font-extrabold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer min-w-[170px] outline-none border-none"
              >
                <span>Donate Now</span>
                <div className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Heart className="h-4 w-4 fill-white text-white" />
                </div>
              </button>
              <button 
                onClick={onOpenVolunteer}
                className="flex items-center justify-between gap-4 pl-6 pr-2 py-2 bg-[#00829a] hover:bg-[#007085] text-white rounded-full text-sm font-extrabold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer min-w-[170px] outline-none border-none"
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

      {/* 7. SECTION 6: SOME OF OUR BENEFICIARIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-left mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold text-[#f26522] uppercase tracking-widest font-mono">Some of our</span>
              <span className="h-[2.5px] w-14 bg-[#f26522]" />
            </div>
            <h2 className="font-display font-black text-slate-800 text-3xl sm:text-4xl tracking-tight leading-none uppercase">
              Beneficiaries
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
            {beneficiariesData.map((b) => (
              <div 
                key={b.id} 
                className="p-5 bg-white border border-slate-100 rounded-[24px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group hover:shadow-lg hover:border-slate-200/80 hover:bg-slate-50/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="h-20 w-20 rounded-full bg-slate-50/50 border border-slate-100/80 flex items-center justify-center p-3.5 mb-4 relative overflow-hidden group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-xs">
                  {b.logoUrl ? (
                    <img 
                      src={b.logoUrl} 
                      alt={b.name} 
                      className="max-h-full max-w-full object-contain select-none transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fb = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fb) fb.style.display = 'flex';
                      }}
                    />
                  ) : null}
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

      {/* 8. SECTION 7: GALLERY */}
      <section className="py-20 bg-slate-50 border-t border-slate-100 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="font-display font-black text-slate-800 text-3xl uppercase tracking-tight mb-10">
            Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Box 1 (Value Education program in schools) */}
            <div className="md:col-span-4 lg:col-span-3 bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                <img 
                  src="https://lh3.googleusercontent.com/d/19Pd5mZgcAexJAHlpfLl9bz5fSrG32YxK" 
                  alt="Value Education program in schools" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-mono font-bold text-[#00829a] uppercase tracking-wider">Children</span>
                <h4 className="font-display font-bold text-slate-800 text-xs mt-1 uppercase">Value Education program in schools</h4>
              </div>
            </div>

            {/* Box 2 (Value Education program in IIT Kgp) */}
            <div className="md:col-span-8 lg:col-span-6 bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
              <div className="aspect-[21/10] relative overflow-hidden bg-slate-100">
                <img 
                  src="https://lh3.googleusercontent.com/d/13mTOukkq06wFkwWMLUm4gpXgC19Ni6N1" 
                  alt="Value Education program in IIT Kgp" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-mono font-bold text-[#00829a] uppercase tracking-wider">Youth</span>
                <h4 className="font-display font-bold text-slate-800 text-xs mt-1 uppercase">Value Education program in IIT Kgp</h4>
              </div>
            </div>

            {/* Box 3 (Mentoring workshops for youth) */}
            <div className="md:col-span-4 lg:col-span-3 bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                <img 
                  src="https://lh3.googleusercontent.com/d/13Pfg78Zupk_Lh8wgsNVXnTSDjFpqa0JS" 
                  alt="Mentoring workshops for youth" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-mono font-bold text-[#00829a] uppercase tracking-wider">Youth</span>
                <h4 className="font-display font-bold text-slate-800 text-xs mt-1 uppercase">Mentoring workshops for youth</h4>
              </div>
            </div>

            {/* Box 4 (Our Team) */}
            <div className="md:col-span-4 lg:col-span-3 bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                <img 
                  src="https://lh3.googleusercontent.com/d/1dmJtqLe3nS0lQRkXvBYq_U6BUKVANkio" 
                  alt="Our Dedicated Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-mono font-bold text-[#00829a] uppercase tracking-wider">Community</span>
                <h4 className="font-display font-bold text-slate-800 text-xs mt-1 uppercase">Our Team</h4>
              </div>
            </div>

            {/* Box 5 (Cloth distribution) */}
            <div className="md:col-span-8 lg:col-span-6 bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
              <div className="aspect-[21/10] relative overflow-hidden bg-slate-100">
                <img 
                  src="https://lh3.googleusercontent.com/d/14oWFP7uAWiybl-Xqi_4gk2r7GhGvHobL" 
                  alt="Cloth distribution for underprivileged" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-mono font-bold text-[#00829a] uppercase tracking-wider">Welfare</span>
                <h4 className="font-display font-bold text-slate-800 text-xs mt-1 uppercase">Cloth distribution for underprivileged</h4>
              </div>
            </div>

            {/* Box 6 (Sustainable farming) */}
            <div className="md:col-span-4 lg:col-span-3 bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                <img 
                  src="https://lh3.googleusercontent.com/d/1E12N5cdSKugAv8NfXwfh5LkOsUFIvGTc" 
                  alt="Sustainable farming workshop" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-mono font-bold text-[#00829a] uppercase tracking-wider">Farming</span>
                <h4 className="font-display font-bold text-slate-800 text-xs mt-1 uppercase">Sustainable farming</h4>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. SECTION 8: RECENT HAPPENINGS */}
      <section className="py-20 bg-slate-50 border-t border-slate-100 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div className="text-left">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block font-mono">Inspiring Voices, Real Change</span>
              <h2 className="font-display font-bold text-slate-800 text-2xl sm:text-3xl uppercase tracking-tight mt-1">Recent Happenings</h2>
              <div className="h-1 w-14 bg-brand-orange rounded-full mt-2" />
            </div>

            <div className="flex items-center space-x-2">
              <button 
                onClick={prevHappening}
                disabled={happeningIndex === 0}
                className="p-2 border border-slate-200 disabled:opacity-40 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors cursor-pointer outline-none bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextHappening}
                disabled={happeningIndex >= happeningsData.length - 2}
                className="p-2 border border-slate-200 disabled:opacity-40 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors cursor-pointer outline-none bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

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
                    className="flex items-center gap-1 text-xs font-bold text-brand-teal hover:text-brand-orange transition-colors cursor-pointer outline-none border-none bg-transparent"
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

      {/* 10. SECTION 9: APPRECIATION & RECOGNITION (TESTIMONIALS) */}
      <section className="py-24 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          
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
