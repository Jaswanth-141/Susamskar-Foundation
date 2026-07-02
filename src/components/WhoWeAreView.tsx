import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Sprout, 
  Lightbulb, 
  Users, 
  Home, 
  Play, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  UserCheck,
  Building,
  School,
  Award,
  Calendar,
  CheckCircle2,
  FileText,
  ChevronLeft,
  ChevronRight,
  HeartHandshake
} from 'lucide-react';
import { Project, Happening, Testimonial } from '../types';
import { projectsData, happeningsData, testimonialsData, galleryItems, beneficiariesData } from '../data';
import ValueEducationDetail from './ValueEducationDetail';
import YouthSkillDevelopmentDetail from './YouthSkillDevelopmentDetail';
import TeachingParentingGuidanceDetail from './TeachingParentingGuidanceDetail';
import WorkplaceHarmonyDetail from './WorkplaceHarmonyDetail';
import SustainableFarmingDetail from './SustainableFarmingDetail';

interface WhoWeAreViewProps {
  onViewChange: (view: any, initialProject?: string | null) => void;
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
  onOpenWatchIntro: () => void;
}

export default function WhoWeAreView({ 
  onViewChange, 
  onOpenDonate, 
  onOpenVolunteer, 
  onOpenWatchIntro 
}: WhoWeAreViewProps) {
  
  // 1. Selected sub-detail page state
  const [selectedDetailProject, setSelectedDetailProject] = useState<string | null>(null);

  useEffect(() => {
    if (selectedDetailProject) {
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    }
  }, [selectedDetailProject]);

  // 2. Projects interactive circle pagination (Tabs 1, 2, 3, 4, 5)
  const [activeProjectTab, setActiveProjectTab] = useState<number>(1);
  const currentProject: Project = projectsData.find(p => p.id === activeProjectTab) || projectsData[0];

  // 3. Banner "1 + 1 = 11" State
  const [activeBannerTab, setActiveBannerTab] = useState<'team' | 'report' | 'volunteer' | 'partnership'>('team');

  // 4. Happenings States (Scroll/Carousel)
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

  // 5. Testimonials States
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  if (selectedDetailProject === 'value-education') {
    return (
      <ValueEducationDetail 
        onBack={() => setSelectedDetailProject(null)} 
        onOpenDonate={onOpenDonate} 
        onOpenVolunteer={onOpenVolunteer} 
        onNavigateToProject={(id) => {
          if (id === 1) setSelectedDetailProject('value-education');
          else if (id === 2) setSelectedDetailProject('youth-skill');
          else if (id === 3) setSelectedDetailProject('teaching-parenting');
          else if (id === 4) setSelectedDetailProject('workplace-harmony');
          else if (id === 5) setSelectedDetailProject('sustainable-farming');
          else setSelectedDetailProject(null);
        }}
      />
    );
  }

  if (selectedDetailProject === 'youth-skill') {
    return (
      <YouthSkillDevelopmentDetail 
        onBack={() => setSelectedDetailProject(null)} 
        onOpenDonate={onOpenDonate} 
        onOpenVolunteer={onOpenVolunteer} 
        onNavigateToProject={(id) => {
          if (id === 1) setSelectedDetailProject('value-education');
          else if (id === 2) setSelectedDetailProject('youth-skill');
          else if (id === 3) setSelectedDetailProject('teaching-parenting');
          else if (id === 4) setSelectedDetailProject('workplace-harmony');
          else if (id === 5) setSelectedDetailProject('sustainable-farming');
          else setSelectedDetailProject(null);
        }}
      />
    );
  }

  if (selectedDetailProject === 'teaching-parenting') {
    return (
      <TeachingParentingGuidanceDetail 
        onBack={() => setSelectedDetailProject(null)} 
        onOpenDonate={onOpenDonate} 
        onOpenVolunteer={onOpenVolunteer} 
        onNavigateToProject={(id) => {
          if (id === 1) setSelectedDetailProject('value-education');
          else if (id === 2) setSelectedDetailProject('youth-skill');
          else if (id === 3) setSelectedDetailProject('teaching-parenting');
          else if (id === 4) setSelectedDetailProject('workplace-harmony');
          else if (id === 5) setSelectedDetailProject('sustainable-farming');
          else setSelectedDetailProject(null);
        }}
      />
    );
  }

  if (selectedDetailProject === 'workplace-harmony') {
    return (
      <WorkplaceHarmonyDetail 
        onBack={() => setSelectedDetailProject(null)} 
        onOpenDonate={onOpenDonate} 
        onOpenVolunteer={onOpenVolunteer} 
        onNavigateToProject={(id) => {
          if (id === 1) setSelectedDetailProject('value-education');
          else if (id === 2) setSelectedDetailProject('youth-skill');
          else if (id === 3) setSelectedDetailProject('teaching-parenting');
          else if (id === 4) setSelectedDetailProject('workplace-harmony');
          else if (id === 5) setSelectedDetailProject('sustainable-farming');
          else setSelectedDetailProject(null);
        }}
      />
    );
  }

  if (selectedDetailProject === 'sustainable-farming') {
    return (
      <SustainableFarmingDetail 
        onBack={() => setSelectedDetailProject(null)} 
        onOpenDonate={onOpenDonate} 
        onOpenVolunteer={onOpenVolunteer} 
        onNavigateToProject={(id) => {
          if (id === 1) setSelectedDetailProject('value-education');
          else if (id === 2) setSelectedDetailProject('youth-skill');
          else if (id === 3) setSelectedDetailProject('teaching-parenting');
          else if (id === 4) setSelectedDetailProject('workplace-harmony');
          else if (id === 5) setSelectedDetailProject('sustainable-farming');
          else setSelectedDetailProject(null);
        }}
      />
    );
  }

  return (
    <div className="w-full">
      
      {/* BREADCRUMB / ACCENT PATHWAY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 text-left select-none">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 tracking-widest font-mono">
          <span className="h-0.5 w-6 bg-brand-orange" />
          <button 
            onClick={() => onViewChange('home')}
            className="cursor-pointer hover:text-brand-orange transition-colors uppercase outline-none"
          >
            HOME
          </button>
          <span className="text-slate-300 cursor-default">/</span>
          <span className="text-brand-orange cursor-default">WHO WE ARE</span>
        </div>
      </div>

      {/* SECTION 1: COLLAGE HERO */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Statement column */}
          <div className="lg:col-span-6 text-left space-y-6">
            <h1 className="font-display font-bold text-slate-800 text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              We are a <span className="text-brand-orange">non-profit organization</span> committed to <span className="text-brand-teal">strengthen communities</span> through <span className="text-brand-orange">value-based initiatives</span>
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
              Susamskar Foundation bridges value-based learning, humanitarian relief, and active community transformation to empower children, youth, and families across urban and rural ecosystems.
            </p>
          </div>

          {/* Collage columns (precisely matching the top collage design with robust proportional scaling) */}
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
              <div className="absolute left-0 bottom-0 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 group">
                <img 
                  src="https://lh3.googleusercontent.com/d/1qJJtPqO6UFrPh-zrrCTyD6exMpRWR1OR" 
                  alt="Hands holding soil and sapling"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-3 text-center">
                  <button 
                    id="collage-play-btn"
                    onClick={onOpenWatchIntro}
                    className="h-12 w-12 rounded-full bg-brand-orange hover:bg-brand-orange/90 hover:scale-110 flex items-center justify-center text-white shadow-lg transition-all cursor-pointer"
                  >
                    <Play className="h-5 w-5 fill-white ml-0.5" />
                  </button>
                  <button 
                    onClick={onOpenWatchIntro}
                    className="mt-2.5 px-3 py-1 bg-brand-orange text-white text-[10px] font-bold rounded-full hover:scale-105 transition-all cursor-pointer"
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

      {/* SECTION 2: WHY WE DO WHAT WE DO — OUR PURPOSE */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left mb-10">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block mb-2 font-mono">Why we do what we do</span>
            <h2 className="font-display font-bold text-slate-800 text-2xl sm:text-3xl tracking-tight uppercase">Our Purpose</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-3xl leading-relaxed mt-2.5">
              Modern education emphasizes academics and professional skills, often at the cost of emotional intelligence and core human values. This imbalance has led to rising issues like anxiety, aggression, and depression — highlighting the urgent need for holistic character development.
            </p>
          </div>

          {/* Replicating the 4 purposeful cards perfectly */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {[
              {
                id: 1,
                title: "To Build strong moral foundations and emotional strength in children",
                icon: Sprout,
                color: "bg-brand-orange/5 border-brand-orange/10 text-brand-orange"
              },
              {
                id: 2,
                title: "To guide young minds with career skills, clarity and confidence",
                icon: Lightbulb,
                color: "bg-amber-500/5 border-amber-500/10 text-amber-600"
              },
              {
                id: 3,
                title: "To promote respect, awareness, and gender sensitivity in communities",
                icon: Users,
                color: "bg-brand-teal/5 border-brand-teal/10 text-brand-teal"
              },
              {
                id: 4,
                title: "To extend care and support to underprivileged and rural families",
                icon: Home,
                color: "bg-emerald-500/5 border-emerald-500/10 text-emerald-600"
              }
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div 
                  key={card.id} 
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all group"
                >
                  <div className={`p-4 rounded-full ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-display font-bold text-slate-800 text-sm leading-relaxed">
                    {card.title}
                  </h4>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* SECTION 3: SUSAMSKAR LOGO BLOCK & FOUNDATION BIO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Logo illustration block */}
          <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-8 border border-slate-100/90 bg-white shadow-md rounded-[32px] w-full max-w-sm mx-auto">
            <img 
              src="https://lh3.googleusercontent.com/d/12Ew3S9roZ4e0EkDWtzHb8VxtRR3OMM7L" 
              alt="Susamskar Foundation Logo" 
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 object-contain hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Bio text block */}
          <div className="md:col-span-7 text-left space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              At Susamskar Foundation, we believe that true education goes beyond textbooks. It is about shaping character, building emotional resilience, and cultivating ethical awareness—preparing students not just for careers, but for life. Children are the future leaders of society. When guided with the right values, they have the potential to uplift not only their own lives, but also inspire and influence others.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founded by a group of dedicated researchers and professionals from IIT, Susamskar Foundation is a registered non-profit initiative committed to personal transformation through value-based learning. With the support of visionary individuals from government, multinational corporations, and educational institutions, we are fostering a paradigm shift in education.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4: BHAGAVAD GITA QUOTE, VISION, MISSION (YELLOW CANVAS) */}
      <section className="py-16 bg-brand-yellow relative overflow-hidden text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Centered Bhagavad Gita quote card */}
          <div className="text-center max-w-3xl mx-auto space-y-3.5">
            <blockquote className="font-display font-extrabold text-slate-900 text-2xl sm:text-3.5xl italic leading-snug tracking-tight">
              "Whatever action a great person performs, others follow. Whatever standards they set, the world pursues."
            </blockquote>
            <cite className="block text-xs sm:text-sm font-semibold tracking-wide uppercase text-slate-800 font-mono">
              — Bhagavad Gita 3.21
            </cite>
          </div>

          {/* Side-by-side Vision and Mission cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 text-left">
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-amber-300">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block font-mono mb-2">01</span>
              <h4 className="font-display font-black text-slate-800 text-lg uppercase tracking-tight">
                Our Vision
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-3">
                To inspire personal excellence, nurture integrated holistic development, and promote social transformation through life skills and value-based initiatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-amber-300">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-wider block font-mono mb-2">02</span>
              <h4 className="font-display font-black text-slate-800 text-lg uppercase tracking-tight">
                Our Mission
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-3">
                To stimulate multidimensional, pragmatic learning experiences by providing multitiered strategies — including supportive policies, rich educational content, expert management services, and impactful outreach programs — all aimed at fostering continuous and comprehensive personal development.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: INTERACTIVE PROJECTS TABBED CIRCLE SELECTOR (1, 2, 3, 4, 5) */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
          
          <div className="space-y-2">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block font-mono">What we do</span>
            <h2 className="font-display font-bold text-slate-800 text-2xl sm:text-3xl uppercase tracking-tight">
              Our Projects
            </h2>
            <div className="h-1.5 w-16 bg-brand-orange rounded-full mx-auto" />
          </div>

          {/* Number circles selector (1, 2, 3, 4, 5) */}
          <div className="flex justify-center items-center gap-3">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => setActiveProjectTab(num)}
                className={`h-11 w-11 rounded-full font-display font-extrabold text-sm sm:text-base border transition-all cursor-pointer ${
                  activeProjectTab === num
                  ? 'bg-brand-orange text-white border-brand-orange shadow-md scale-110'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Compact dynamic project card displaying selected project */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 text-left animate-in fade-in duration-300">
            
            {/* Project Image */}
            <div className="md:col-span-5 h-56 md:h-full relative overflow-hidden bg-slate-100">
              <img 
                src={currentProject.image} 
                alt={currentProject.title}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Project Description & key indicators */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-3.5">
                <span className="text-[10px] font-bold text-brand-orange uppercase bg-brand-orange/10 px-2.5 py-0.5 rounded-full tracking-wider font-mono">
                  Active Project — Option {activeProjectTab}
                </span>
                <h4 className="font-display font-black text-slate-800 text-lg leading-tight uppercase">
                  {currentProject.title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {currentProject.fullDesc}
                </p>

                {/* Bullet items for active key initiatives */}
                <div className="space-y-1.5 pt-1.5">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Key Initiatives:</h5>
                  {currentProject.keyInitiatives.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-teal mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donation and Read More triggers */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2 border-t border-slate-100">
                <button
                  onClick={onOpenDonate}
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-brand-orange text-white rounded-xl text-xs font-bold hover:bg-brand-orange/95 hover:scale-[1.01] transition-all cursor-pointer"
                >
                  Donate Now
                  <Heart className="h-3.5 w-3.5 fill-white" />
                </button>
                <button
                  onClick={() => {
                    if (currentProject.id === 1) {
                      setSelectedDetailProject('value-education');
                    } else if (currentProject.id === 2) {
                      setSelectedDetailProject('youth-skill');
                    } else if (currentProject.id === 3) {
                      setSelectedDetailProject('teaching-parenting');
                    } else if (currentProject.id === 4) {
                      setSelectedDetailProject('workplace-harmony');
                    } else if (currentProject.id === 5) {
                      setSelectedDetailProject('sustainable-farming');
                    } else {
                      onViewChange('projects');
                    }
                  }}
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-brand-teal text-white rounded-xl text-xs font-bold hover:bg-brand-teal/95 hover:scale-[1.01] transition-all cursor-pointer"
                >
                  Explore More
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: STATS COUNTER */}
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

      {/* SECTION 7: INTERACTIVE ACTION BANNER "1 + 1 = 11" (YELLOW CANVAS) */}
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
                    onViewChange('team');
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
      </section>

      {/* SECTION 8: SOME OF OUR BENEFICIARIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold text-[#f26522] uppercase tracking-widest font-mono">Some of our</span>
              <span className="h-[2.5px] w-14 bg-[#f26522]" />
            </div>
            <h2 className="font-display font-black text-slate-800 text-3xl sm:text-4xl tracking-tight leading-none uppercase">Beneficiaries</h2>
          </div>

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
                        // Find hidden text fallback and show it
                        const fb = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fb) fb.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  {/* Text fallback if load fails */}
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

      {/* SECTION 9: RECENT HAPPENINGS / INSPIRING VOICES */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
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
                className="p-2 border border-slate-200 disabled:opacity-40 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextHappening}
                disabled={happeningIndex >= happeningsData.length - 2}
                className="p-2 border border-slate-200 disabled:opacity-40 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors"
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

      {/* SECTION 10: APPRECIATION & RECOGNITION (TESTIMONIALS) */}
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
