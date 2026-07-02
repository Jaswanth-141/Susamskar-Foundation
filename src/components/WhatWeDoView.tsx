import React, { useState, useEffect } from 'react';
import { Heart, Users, GraduationCap, CheckCircle2, ArrowRight, School, HeartHandshake, Award, FileText, Building, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Project } from '../types';
import { projectsData, beneficiariesData } from '../data';
import ValueEducationDetail from './ValueEducationDetail';
import YouthSkillDevelopmentDetail from './YouthSkillDevelopmentDetail';
import TeachingParentingGuidanceDetail from './TeachingParentingGuidanceDetail';
import WorkplaceHarmonyDetail from './WorkplaceHarmonyDetail';
import SustainableFarmingDetail from './SustainableFarmingDetail';

interface WhatWeDoViewProps {
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
  initialDetailProject?: string | null;
  onClearInitialDetailProject?: () => void;
  onViewChange?: (view: any) => void;
}

export default function WhatWeDoView({ 
  onOpenDonate, 
  onOpenVolunteer,
  initialDetailProject = null,
  onClearInitialDetailProject,
  onViewChange
}: WhatWeDoViewProps) {
  const [selectedDetailProject, setSelectedDetailProject] = useState<string | null>(initialDetailProject);

  useEffect(() => {
    if (initialDetailProject) {
      setSelectedDetailProject(initialDetailProject);
      if (onClearInitialDetailProject) {
        onClearInitialDetailProject();
      }
    }
  }, [initialDetailProject, onClearInitialDetailProject]);

  useEffect(() => {
    if (selectedDetailProject) {
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    }
  }, [selectedDetailProject]);

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
    <div className="w-full bg-[#fafbfc]">
      
      {/* HERO HEADER - Blue Banner with Paper Planes */}
      <section className="bg-[#0e82a7] px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden h-[580px] md:h-[440px] lg:h-[460px] flex items-center">
        
        {/* White paper planes on floating paths */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Flight Trail 1 */}
          <svg className="absolute top-[10%] right-[10%] w-[400px] h-[150px] opacity-25" viewBox="0 0 400 150" fill="none">
            <path d="M 0,150 Q 150,80 400,10" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
          </svg>
          <img 
            src="https://lh3.googleusercontent.com/d/1W4VcfH3khiUPGJDIphb0cl6foeH6uMmx" 
            alt="Paper plane" 
            className="absolute top-[6%] right-[8%] w-12 h-12 object-contain opacity-80 rotate-[12deg]"
            referrerPolicy="no-referrer"
          />

          {/* Flight Trail 2 */}
          <svg className="absolute top-[35%] right-[25%] w-[300px] h-[120px] opacity-25" viewBox="0 0 300 120" fill="none">
            <path d="M 0,120 Q 100,50 300,10" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
          </svg>
          <img 
            src="https://lh3.googleusercontent.com/d/1W4VcfH3khiUPGJDIphb0cl6foeH6uMmx" 
            alt="Paper plane" 
            className="absolute top-[32%] right-[24%] w-10 h-10 object-contain opacity-70 rotate-[8deg]"
            referrerPolicy="no-referrer"
          />

          {/* Flight Trail 3 */}
          <svg className="absolute top-[50%] right-[5%] w-[250px] h-[100px] opacity-20" viewBox="0 0 250 100" fill="none">
            <path d="M 0,100 Q 80,40 250,10" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
          </svg>
          <img 
            src="https://lh3.googleusercontent.com/d/1W4VcfH3khiUPGJDIphb0cl6foeH6uMmx" 
            alt="Paper plane" 
            className="absolute top-[48%] right-[4%] w-11 h-11 object-contain opacity-60 rotate-[15deg]"
            referrerPolicy="no-referrer"
          />

          {/* Flight Trail 4 (Left side) */}
          <svg className="absolute top-[20%] left-[5%] w-[350px] h-[140px] opacity-15" viewBox="0 0 350 140" fill="none">
            <path d="M 0,140 Q 120,60 350,10" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
          </svg>
          <img 
            src="https://lh3.googleusercontent.com/d/1W4VcfH3khiUPGJDIphb0cl6foeH6uMmx" 
            alt="Paper plane" 
            className="absolute top-[15%] left-[25%] w-9 h-9 object-contain opacity-50 rotate-[5deg]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Yellow paper plane on center bottom border */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 pointer-events-none select-none">
          <img 
            src="https://lh3.googleusercontent.com/d/1SgZew6BMNMszCq_IXCqCTxLBatiSQhx7" 
            alt="Yellow paper plane" 
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content container */}
        <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col justify-center select-none">
          <div className="flex items-center gap-2 text-xs font-bold text-white/95 tracking-widest font-mono mb-8">
            <span className="h-[2.5px] w-8 bg-white" />
            <button 
              onClick={() => onViewChange && onViewChange('home')}
              className="cursor-pointer hover:text-white/80 transition-colors uppercase outline-none"
            >
              HOME
            </button>
          </div>
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase max-w-2xl">
            Change is in the air<br />and on your feed
          </h1>
        </div>

      </section>

      {/* INTRO SECTION */}
      <section className="py-16 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-sans">What we do</span>
            <span className="h-[2px] w-8 bg-brand-orange" />
          </div>
          <h2 className="font-display font-black text-slate-800 text-3xl uppercase tracking-tight mb-6">
            Our Projects
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our projects span across diverse areas, reaching children, youth, parents, teachers, corporate professionals, and rural communities. From nurturing values in schools and empowering young minds at IIT, to guiding educators and supporting inclusive workplaces, we strive to create meaningful impact. Through farming awareness and distribution drives, we also extend care to villages and the underprivileged, fostering both growth and compassion.
          </p>
        </div>
      </section>

      {/* PROJECTS CARDS SECTION */}
      <section className="py-10 space-y-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* PROJECT 1: Value Education for Children */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row items-stretch min-h-[220px] transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
            <div className="md:w-[30%] shrink-0 relative overflow-hidden min-h-[200px] md:min-h-auto">
              <img 
                src="https://lh3.googleusercontent.com/d/1842s8d6axB73kh1Rj-ymB8dOg0TjTY7F" 
                alt="Value Education for Children" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-[50%] p-8 flex flex-col justify-center text-left">
              <h3 className="font-display font-black text-slate-800 text-lg sm:text-xl uppercase tracking-tight mb-2">
                Value Education for Children
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                We conduct programs in schools for students of all ages where they learn empathy, discipline and responsibility through interactive workshops.
              </p>
            </div>
            <div className="md:w-[20%] bg-[#f15a24] p-6 flex flex-col justify-center items-center gap-4 text-center shrink-0">
              <button 
                onClick={onOpenDonate}
                className="w-full flex items-center justify-between pl-4 pr-1.5 py-1.5 bg-white text-[#333333] hover:text-[#f15a24] rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Donate Now</span>
                <div className="w-6 h-6 rounded-full bg-[#0e82a7] text-white flex items-center justify-center shrink-0">
                  <Heart className="h-3.5 w-3.5 fill-white text-white" />
                </div>
              </button>
              <button 
                onClick={() => setSelectedDetailProject('value-education')}
                className="flex items-center gap-2 text-white hover:opacity-85 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-white text-[#f15a24] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
                <span>Read More</span>
              </button>
            </div>
          </div>

          {/* PROJECT 2: Youth Skill Development and Mentorship */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row items-stretch min-h-[220px] transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
            <div className="md:w-[20%] bg-[#fccf55] p-6 flex flex-col justify-center items-center gap-4 text-center shrink-0 md:order-1">
              <button 
                onClick={onOpenDonate}
                className="w-full flex items-center justify-between pl-4 pr-1.5 py-1.5 bg-white text-[#333333] hover:text-[#fccf55] rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Donate Now</span>
                <div className="w-6 h-6 rounded-full bg-[#0e82a7] text-white flex items-center justify-center shrink-0">
                  <Heart className="h-3.5 w-3.5 fill-white text-white" />
                </div>
              </button>
              <button 
                onClick={() => setSelectedDetailProject('youth-skill')}
                className="flex items-center gap-2 text-white hover:opacity-85 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-white text-[#fccf55] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
                <span>Read More</span>
              </button>
            </div>
            <div className="md:w-[50%] p-8 flex flex-col justify-center text-left md:order-2">
              <h3 className="font-display font-black text-slate-800 text-lg sm:text-xl uppercase tracking-tight mb-2">
                Youth Skill Development and Mentorship
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Our youth programs at IIT Kharagpur and other institutions engage students through mentoring circles, discussions, and service activities.
              </p>
            </div>
            <div className="md:w-[30%] shrink-0 relative overflow-hidden min-h-[200px] md:min-h-auto md:order-3">
              <img 
                src="https://lh3.googleusercontent.com/d/1L7zN12tCkkw0UtJkaatRcsdzJdwq2Im6" 
                alt="Youth Skill Development and Mentorship" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* PROJECT 3: Teaching and Parenting Guidance */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row items-stretch min-h-[220px] transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
            <div className="md:w-[30%] shrink-0 relative overflow-hidden min-h-[200px] md:min-h-auto">
              <img 
                src="https://lh3.googleusercontent.com/d/1IGvoMsB6uoHioa-DyjopHdJ_We9OqTVO" 
                alt="Teaching and Parenting Guidance" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-[50%] p-8 flex flex-col justify-center text-left">
              <h3 className="font-display font-black text-slate-800 text-lg sm:text-xl uppercase tracking-tight mb-2">
                Teaching and Parenting Guidance
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                We organize interactive workshops to strengthen communication and shared responsibility in shaping children's character.
              </p>
            </div>
            <div className="md:w-[20%] bg-[#f15a24] p-6 flex flex-col justify-center items-center gap-4 text-center shrink-0">
              <button 
                onClick={onOpenDonate}
                className="w-full flex items-center justify-between pl-4 pr-1.5 py-1.5 bg-white text-[#333333] hover:text-[#f15a24] rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Donate Now</span>
                <div className="w-6 h-6 rounded-full bg-[#0e82a7] text-white flex items-center justify-center shrink-0">
                  <Heart className="h-3.5 w-3.5 fill-white text-white" />
                </div>
              </button>
              <button 
                onClick={() => setSelectedDetailProject('teaching-parenting')}
                className="flex items-center gap-2 text-white hover:opacity-85 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-white text-[#f15a24] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
                <span>Read More</span>
              </button>
            </div>
          </div>

          {/* PROJECT 4: Workplace harmony initiatives */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row items-stretch min-h-[220px] transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
            <div className="md:w-[20%] bg-[#fccf55] p-6 flex flex-col justify-center items-center gap-4 text-center shrink-0 md:order-1">
              <button 
                onClick={onOpenDonate}
                className="w-full flex items-center justify-between pl-4 pr-1.5 py-1.5 bg-white text-[#333333] hover:text-[#fccf55] rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Donate Now</span>
                <div className="w-6 h-6 rounded-full bg-[#0e82a7] text-white flex items-center justify-center shrink-0">
                  <Heart className="h-3.5 w-3.5 fill-white text-white" />
                </div>
              </button>
              <button 
                onClick={() => setSelectedDetailProject('workplace-harmony')}
                className="flex items-center gap-2 text-white hover:opacity-85 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-white text-[#fccf55] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
                <span>Read More</span>
              </button>
            </div>
            <div className="md:w-[50%] p-8 flex flex-col justify-center text-left md:order-2">
              <h3 className="font-display font-black text-slate-800 text-lg sm:text-xl uppercase tracking-tight mb-2">
                Workplace harmony initiatives
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                As external counselors, we conduct workplace sensitization sessions that foster respect, empathy, and inclusion among employees.
              </p>
            </div>
            <div className="md:w-[30%] shrink-0 relative overflow-hidden min-h-[200px] md:min-h-auto md:order-3">
              <img 
                src="https://lh3.googleusercontent.com/d/1YAZGtesdcu5mCDE1xMpAzXERrvy5-4MO" 
                alt="Workplace harmony initiatives" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* PROJECT 5: Sustainable Farming and Community Welfare */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row items-stretch min-h-[220px] transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
            <div className="md:w-[30%] shrink-0 relative overflow-hidden min-h-[200px] md:min-h-auto">
              <img 
                src="https://lh3.googleusercontent.com/d/1E12N5cdSKugAv8NfXwfh5LkOsUFIvGTc" 
                alt="Sustainable Farming and Community Welfare" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-[50%] p-8 flex flex-col justify-center text-left">
              <h3 className="font-display font-black text-slate-800 text-lg sm:text-xl uppercase tracking-tight mb-2">
                Sustainable Farming and Community Welfare
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Our rural initiatives promote sustainable farming practices while extending support through food, clothes, and blanket distribution.
              </p>
            </div>
            <div className="md:w-[20%] bg-[#f15a24] p-6 flex flex-col justify-center items-center gap-4 text-center shrink-0">
              <button 
                onClick={onOpenDonate}
                className="w-full flex items-center justify-between pl-4 pr-1.5 py-1.5 bg-white text-[#333333] hover:text-[#f15a24] rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Donate Now</span>
                <div className="w-6 h-6 rounded-full bg-[#0e82a7] text-white flex items-center justify-center shrink-0">
                  <Heart className="h-3.5 w-3.5 fill-white text-white" />
                </div>
              </button>
              <button 
                onClick={() => setSelectedDetailProject('sustainable-farming')}
                className="flex items-center gap-2 text-white hover:opacity-85 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer group"
              >
                <div className="w-6 h-6 rounded-full bg-white text-[#f15a24] flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
                <span>Read More</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* STATISTICS COUNTERS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#f15a24]/10 text-[#f15a24] flex items-center justify-center mb-3">
                <School className="h-6 w-6" />
              </div>
              <span className="font-display font-black text-slate-800 text-3xl sm:text-4xl">35</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 max-w-[150px] leading-tight">
                Schools Reached
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#0e82a7]/10 text-[#0e82a7] flex items-center justify-center mb-3">
                <Users className="h-6 w-6" />
              </div>
              <span className="font-display font-black text-slate-800 text-3xl sm:text-4xl">1500+</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 max-w-[150px] leading-tight">
                Youth & Children Inspired
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#f15a24]/10 text-[#f15a24] flex items-center justify-center mb-3">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <span className="font-display font-black text-slate-800 text-3xl sm:text-4xl">300+</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 max-w-[150px] leading-tight">
                Underprivileged Families Supported
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#0e82a7]/10 text-[#0e82a7] flex items-center justify-center mb-3">
                <Award className="h-6 w-6" />
              </div>
              <span className="font-display font-black text-slate-800 text-3xl sm:text-4xl">8</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 max-w-[150px] leading-tight">
                Years Of Service
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* YELLOW BANNER - 1 + 1 = 11 */}
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
                    if (onViewChange) onViewChange('about');
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
                    // No action requested for report
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
                  onClick={onOpenVolunteer}
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
                    // No action requested
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

      {/* BENEFICIARIES LOGO ROW */}
      <section className="py-16 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-display font-black text-slate-800 text-2xl uppercase tracking-tight leading-none">
              Some of our<br />Beneficiaries
            </h2>
            <div className="h-[2px] w-16 bg-brand-orange mt-1" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {beneficiariesData.map((b) => (
              <div key={b.id} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-white border border-slate-100 p-2.5 shadow-xs group-hover:scale-105 group-hover:shadow-md transition-all flex items-center justify-center">
                  {b.logoUrl ? (
                    <img 
                      src={b.logoUrl} 
                      alt={b.name} 
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="font-mono text-xs font-bold text-slate-400">{b.logoText}</span>
                  )}
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-3 max-w-[125px] leading-tight">
                  {b.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GALLERY SECTION */}
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

    </div>
  );
}
