import React, { useState } from 'react';
import { Check, Shield, ArrowLeft, Heart, Sparkles, Building, Briefcase, Mail, Phone, MapPin } from 'lucide-react';

interface VolunteeringViewProps {
  onViewChange: (view: any) => void;
}

export default function VolunteeringView({ onViewChange }: VolunteeringViewProps) {
  // States for Volunteer Form
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [isVolunteerSubmitting, setIsVolunteerSubmitting] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // States for Partner Form
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [isPartnerSubmitting, setIsPartnerSubmitting] = useState(false);
  const [partnerForm, setPartnerForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    designation: '',
    fullAddress: ''
  });

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerForm.firstName || !volunteerForm.lastName || !volunteerForm.email || !volunteerForm.phone) {
      alert('Please fill out the required fields.');
      return;
    }
    setIsVolunteerSubmitting(true);
    setTimeout(() => {
      setIsVolunteerSubmitting(false);
      setVolunteerSubmitted(true);
    }, 1500);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.firstName || !partnerForm.lastName || !partnerForm.email || !partnerForm.phone) {
      alert('Please fill out the required fields.');
      return;
    }
    setIsPartnerSubmitting(true);
    setTimeout(() => {
      setIsPartnerSubmitting(false);
      setPartnerSubmitted(true);
    }, 1500);
  };

  return (
    <div className="w-full bg-white relative overflow-hidden min-h-screen flex flex-col font-sans selection:bg-[#f26522]/20 selection:text-[#f26522]">
      
      {/* 1. TOP BREADCRUMB & LOGO/ACCENT ROW */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-center gap-3 text-xs font-bold text-slate-400 tracking-widest font-mono select-none">
          <span className="h-[2px] w-10 bg-slate-300" />
          <button 
            onClick={() => onViewChange('home')}
            className="cursor-pointer hover:text-[#f26522] transition-colors uppercase outline-none"
          >
            HOME
          </button>
        </div>
      </div>

      {/* 2. OVERLAPPING YELLOW ASYMMETRIC HEADER SECTION */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative">
        <div className="relative flex flex-col items-start gap-4 md:gap-6">
          
          {/* Box 1: "Volunteering" */}
          <div className="relative bg-[#FFD15C] text-[#111827] px-8 py-5 md:px-12 md:py-7 rounded-[24px] shadow-[0_15px_30px_rgba(248,190,65,0.15)] max-w-sm sm:max-w-md animate-in fade-in slide-in-from-left-4 duration-500">
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-none uppercase">
              Volunteering
            </h1>
          </div>

          {/* Connected Ampersand "&" */}
          <div className="pl-16 sm:pl-28 md:pl-40 -my-2 z-10 select-none">
            <span className="font-serif italic font-black text-[#111827] text-4xl sm:text-5xl md:text-6xl lg:text-7xl block transform -rotate-12">
              &
            </span>
          </div>

          {/* Box 2: "Partnership Opportunities" */}
          <div className="relative bg-[#FFD15C] text-[#111827] px-8 py-5 md:px-12 md:py-7 rounded-[24px] shadow-[0_15px_30px_rgba(248,190,65,0.15)] max-w-[90%] sm:max-w-[650px] ml-6 sm:ml-12 md:ml-24 animate-in fade-in slide-in-from-right-4 duration-500 delay-150">
            <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl tracking-tight leading-none uppercase">
              Partnership Opportunities
            </h1>
          </div>

        </div>
      </div>

      {/* 3. SECTION ONE: WHY VOLUNTEER WITH US */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        
        {/* Why Volunteer Intro */}
        <div className="max-w-5xl text-left space-y-4">
          <h2 className="font-display font-black text-[#111827] text-2xl sm:text-3xl uppercase tracking-tight">
            Why Volunteer With Us?
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            Volunteering with Susamskar Foundation offers a chance to create genuine impact — not just through service, but through meaningful connection. Volunteers play a vital role in conducting value-based sessions in schools, mentoring youth, organizing cultural and educational events, and supporting rural outreach initiatives. Each effort, big or small, helps us nurture values, uplift communities, and bring positive change where it's needed most.
          </p>
          <p className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide uppercase pt-2">
            Here's how you can contribute-
          </p>
        </div>

        {/* 4 Column Icon Row (Volunteering areas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center space-y-3.5 group">
            {/* Custom Multi-colored line SVG */}
            <div className="w-16 h-16 flex items-center justify-center p-2 rounded-2xl bg-[#FFD15C]/10 group-hover:bg-[#FFD15C]/20 transition-all duration-300">
              <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hands holding */}
                <path d="M12 38C12 38 18 48 32 48C46 48 52 38 52 38" stroke="#118AB2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 44C20 44 24 52 32 52C40 52 44 44 44 44" stroke="#f26522" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Heart/Shield with gold value star inside */}
                <path d="M32 14C32 14 26 18 26 24C26 30 32 34 32 34C32 34 38 30 38 24C38 18 32 14 32 14Z" fill="#FFD15C" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Star center */}
                <circle cx="32" cy="24" r="3" fill="#ffffff" />
              </svg>
            </div>
            <h4 className="text-[13px] sm:text-[14px] font-black text-slate-800 leading-snug">
              Conduct or assist in value education sessions for children
            </h4>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center space-y-3.5 group">
            <div className="w-16 h-16 flex items-center justify-center p-2 rounded-2xl bg-[#FFD15C]/10 group-hover:bg-[#FFD15C]/20 transition-all duration-300">
              <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Brain + Lightbulb fusion */}
                <path d="M22 28C16 28 16 20 22 18C28 16 30 22 32 24" stroke="#118AB2" strokeWidth="3" strokeLinecap="round" />
                {/* Lightbulb side */}
                <path d="M32 14C36 14 44 16 44 24C44 32 38 36 38 40H26C26 36 24 34 24 30" stroke="#f26522" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {/* Lightbulb glowing filament / gears */}
                <path d="M32 20V26" stroke="#FFD15C" strokeWidth="3" strokeLinecap="round" />
                <circle cx="32" cy="46" r="3" fill="#111827" />
              </svg>
            </div>
            <h4 className="text-[13px] sm:text-[14px] font-black text-slate-800 leading-snug">
              Mentor youth through discussions and skill workshops
            </h4>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center space-y-3.5 group">
            <div className="w-16 h-16 flex items-center justify-center p-2 rounded-2xl bg-[#FFD15C]/10 group-hover:bg-[#FFD15C]/20 transition-all duration-300">
              <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Calendar frame */}
                <rect x="14" y="16" width="36" height="34" rx="4" stroke="#111827" strokeWidth="3" />
                <path d="M14 26H50" stroke="#118AB2" strokeWidth="3" />
                {/* Ring binders */}
                <path d="M22 12V18" stroke="#f26522" strokeWidth="3" strokeLinecap="round" />
                <path d="M42 12V18" stroke="#f26522" strokeWidth="3" strokeLinecap="round" />
                {/* Grid checkboxes */}
                <circle cx="24" cy="34" r="2.5" fill="#FFD15C" />
                <circle cx="32" cy="34" r="2.5" fill="#118AB2" />
                <circle cx="40" cy="34" r="2.5" fill="#f26522" />
                <circle cx="24" cy="42" r="2.5" fill="#111827" />
                <circle cx="32" cy="42" r="2.5" fill="#FFD15C" />
              </svg>
            </div>
            <h4 className="text-[13px] sm:text-[14px] font-black text-slate-800 leading-snug">
              Support event coordination, arts, or cultural activities
            </h4>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center space-y-3.5 group">
            <div className="w-16 h-16 flex items-center justify-center p-2 rounded-2xl bg-[#FFD15C]/10 group-hover:bg-[#FFD15C]/20 transition-all duration-300">
              <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Team & flag icon */}
                <path d="M14 48H50" stroke="#111827" strokeWidth="3" />
                {/* Rural house/community representation */}
                <path d="M18 48V32L32 22L46 32V48" stroke="#118AB2" strokeWidth="3" strokeLinejoin="round" />
                <path d="M28 48V38H36V48" stroke="#f26522" strokeWidth="2.5" />
                <circle cx="32" cy="14" r="4" fill="#FFD15C" />
              </svg>
            </div>
            <h4 className="text-[13px] sm:text-[14px] font-black text-slate-800 leading-snug">
              Contribute to community and rural outreach initiatives
            </h4>
          </div>

        </div>

      </div>

      {/* 4. GRID SECTION: LEFT IMAGE (5 WOMEN) + RIGHT FORM (VOLUNTEER APPLICATION) */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Dynamic Image with Custom Gold Splashes Behind */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Absolute Gold Watercolor Graphic Behind (bottom-left and top-right) */}
            <div className="absolute -left-6 -bottom-8 w-48 sm:w-64 h-48 sm:h-64 pointer-events-none -z-10 opacity-70">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,100 C10,50 60,10 120,20 C180,30 190,90 150,140 C110,190 30,150 20,100 Z" fill="#facb66" opacity="0.35" />
                <circle cx="40" cy="140" r="10" fill="#f8be41" opacity="0.4" />
                <circle cx="160" cy="50" r="12" fill="#facb66" opacity="0.3" />
              </svg>
            </div>
            <div className="absolute -right-6 -top-8 w-44 sm:w-56 h-44 sm:h-56 pointer-events-none -z-10 opacity-75">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,150 C30,90 80,40 140,50 C200,60 180,130 130,160 C80,190 70,210 50,150 Z" fill="#FFD15C" opacity="0.3" />
                <circle cx="150" cy="150" r="8" fill="#f8be41" opacity="0.3" />
              </svg>
            </div>

            {/* Main Portrait Image: 5 Women Standing */}
            <div className="w-full max-w-[360px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10 group">
              <img 
                src="https://lh3.googleusercontent.com/d/1YPbC2V_lfKH700-aNhTX-vFdwZRzqIO1" 
                alt="Susamskar Foundation Volunteers" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Optional nice gradient overlay to match aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

          </div>

          {/* Right Side: Volunteer Registration Form inside pristine Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden relative">
              
              {volunteerSubmitted ? (
                /* SUCCESS THANK YOU */
                <div className="p-8 sm:p-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border-4 border-emerald-100 text-emerald-500">
                    <Check className="h-8 w-8 stroke-[3]" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-1 rounded-full uppercase tracking-wider">Application Received</span>
                    <h3 className="text-2xl font-display font-black text-slate-800 uppercase tracking-tight">Welcome, {volunteerForm.firstName}!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for offering your valuable time and passion. Our volunteer onboarding team will review your application and reach out to you soon at <span className="font-bold text-slate-900">{volunteerForm.email}</span>.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setVolunteerSubmitted(false);
                      setVolunteerForm({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 bg-[#f26522] hover:bg-[#e25412] text-white text-xs font-bold rounded-lg uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Submit Another Response
                  </button>
                </div>
              ) : (
                /* INTERACTIVE FORM */
                <form onSubmit={handleVolunteerSubmit} className="p-6 sm:p-10 space-y-6 text-left">
                  
                  {/* Two-Column First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">First Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="First Name"
                        value={volunteerForm.firstName}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, firstName: e.target.value })}
                        className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Last Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Last Name"
                        value={volunteerForm.lastName}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, lastName: e.target.value })}
                        className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                      />
                    </div>
                  </div>

                  {/* Two-Column Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="Email Address"
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Phone number</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="Phone number"
                        value={volunteerForm.phone}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                        className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                      />
                    </div>
                  </div>

                  {/* Subject input field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Subject</label>
                    <input 
                      type="text" 
                      placeholder="Subject"
                      value={volunteerForm.subject}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, subject: e.target.value })}
                      className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                    />
                  </div>

                  {/* Message textarea */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Type your message here..."
                      value={volunteerForm.message}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                      className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                    />
                  </div>

                  {/* Footer Row inside Card */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-slate-50">
                    <span className="text-[11px] font-semibold text-slate-400 tracking-wide select-none">
                      Susamskar Foundation team will reach out to you soon.
                    </span>
                    <button
                      type="submit"
                      disabled={isVolunteerSubmitting}
                      className="w-full sm:w-auto px-8 py-3 bg-[#f26522] hover:bg-[#e25412] active:scale-[0.97] text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg disabled:bg-slate-300 shrink-0 cursor-pointer text-center"
                    >
                      {isVolunteerSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* 5. SOLID FULL-WIDTH DIVIDER BAR (exactly matches teal banner block in screenshot) */}
      <div className="w-full bg-[#118AB2] h-12 md:h-16 shadow-inner" />

      {/* 6. SECTION TWO: WHY PARTNER WITH US */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        
        {/* Why Partner Intro */}
        <div className="max-w-5xl text-left space-y-4">
          <h2 className="font-display font-black text-[#111827] text-2xl sm:text-3xl uppercase tracking-tight">
            Why Partner With Us?
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            We partner with organizations committed to creating meaningful social impact. Through our CSR collaborations, you can support initiatives in value education, youth mentorship, and community development—aligned with national CSR priorities such as education, skill enhancement, and rural upliftment. With on-ground experience, transparent reporting, and measurable outcomes, we serve as a trusted ally in building a value-driven and compassionate society.
          </p>
          <p className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide uppercase pt-2">
            Areas where your company can support-
          </p>
        </div>

        {/* 4 Column Icon Row (Partnership areas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center space-y-3.5 group">
            <div className="w-16 h-16 flex items-center justify-center p-2 rounded-2xl bg-[#FFD15C]/10 group-hover:bg-[#FFD15C]/20 transition-all duration-300">
              <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Shield / emblem */}
                <path d="M32 10L16 16V34C16 44 26 51 32 54C38 51 48 44 48 34V16L32 10Z" fill="#118AB2" stroke="#111827" strokeWidth="3" strokeLinejoin="round" />
                {/* Inlay star/heart */}
                <circle cx="32" cy="30" r="6" fill="#FFD15C" />
                <path d="M32 20V24" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <h4 className="text-[13px] sm:text-[14px] font-black text-slate-800 leading-snug">
              Value education programs in schools and communities
            </h4>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center space-y-3.5 group">
            <div className="w-16 h-16 flex items-center justify-center p-2 rounded-2xl bg-[#FFD15C]/10 group-hover:bg-[#FFD15C]/20 transition-all duration-300">
              <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Brain/Skill fusion gears */}
                <path d="M22 24C18 28 20 38 32 42C44 38 46 28 42 24" stroke="#111827" strokeWidth="3" />
                <circle cx="32" cy="24" r="10" stroke="#f26522" strokeWidth="3" />
                <path d="M32 18V30M26 24H38" stroke="#FFD15C" strokeWidth="2.5" />
              </svg>
            </div>
            <h4 className="text-[13px] sm:text-[14px] font-black text-slate-800 leading-snug">
              Youth mentorship and skill development initiatives
            </h4>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center space-y-3.5 group">
            <div className="w-16 h-16 flex items-center justify-center p-2 rounded-2xl bg-[#FFD15C]/10 group-hover:bg-[#FFD15C]/20 transition-all duration-300">
              <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Village welfare */}
                <path d="M12 46H52" stroke="#111827" strokeWidth="3" />
                <rect x="18" y="24" width="28" height="22" rx="3" stroke="#118AB2" strokeWidth="3" />
                <polygon points="32,12 14,26 50,26" stroke="#f26522" strokeWidth="3" fill="#FFD15C" strokeLinejoin="round" />
              </svg>
            </div>
            <h4 className="text-[13px] sm:text-[14px] font-black text-slate-800 leading-snug">
              Village awareness campaigns and social welfare drives
            </h4>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center space-y-3.5 group">
            <div className="w-16 h-16 flex items-center justify-center p-2 rounded-2xl bg-[#FFD15C]/10 group-hover:bg-[#FFD15C]/20 transition-all duration-300">
              <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Infrastructure gear + building support */}
                <rect x="18" y="30" width="28" height="18" rx="2" stroke="#111827" strokeWidth="3" />
                <path d="M26 30V22M38 30V22" stroke="#118AB2" strokeWidth="3" />
                {/* Gear top */}
                <circle cx="32" cy="16" r="6" stroke="#f26522" strokeWidth="3" fill="#FFD15C" />
              </svg>
            </div>
            <h4 className="text-[13px] sm:text-[14px] font-black text-slate-800 leading-snug">
              Infrastructure or resource support for educational outreach
            </h4>
          </div>

        </div>

      </div>

      {/* 7. GRID SECTION: LEFT FORM (CSR/PARTNERSHIP) + RIGHT IMAGE (MEETING WITH ELDERLY) */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: CSR / Partnership Registration Form in Card */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden relative">
              
              {partnerSubmitted ? (
                /* SUCCESS THANK YOU */
                <div className="p-8 sm:p-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border-4 border-emerald-100 text-emerald-500">
                    <Check className="h-8 w-8 stroke-[3]" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-1 rounded-full uppercase tracking-wider">Proposal Received</span>
                    <h3 className="text-2xl font-display font-black text-slate-800 uppercase tracking-tight">Thank you, {partnerForm.firstName}!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      We appreciate your organization's interest in partnering with us. Our corporate relations coordinator will connect with you at <span className="font-bold text-slate-900">{partnerForm.email}</span> within 24-48 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setPartnerSubmitted(false);
                      setPartnerForm({ firstName: '', lastName: '', email: '', phone: '', companyName: '', designation: '', fullAddress: '' });
                    }}
                    className="px-6 py-2.5 bg-[#f26522] hover:bg-[#e25412] text-white text-xs font-bold rounded-lg uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Submit Another Response
                  </button>
                </div>
              ) : (
                /* INTERACTIVE FORM */
                <form onSubmit={handlePartnerSubmit} className="p-6 sm:p-10 space-y-5 text-left">
                  
                  {/* Two-Column First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">First Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="First Name"
                        value={partnerForm.firstName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, firstName: e.target.value })}
                        className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Last Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Last Name"
                        value={partnerForm.lastName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, lastName: e.target.value })}
                        className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                      />
                    </div>
                  </div>

                  {/* Two-Column Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Email Address</label>
                      <input 
                        type="email" 
                        required
                        placeholder="Email Address"
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                        className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Phone number</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="Phone number"
                        value={partnerForm.phone}
                        onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                        className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                      />
                    </div>
                  </div>

                  {/* Two-Column Company Name & Designation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Company Name</label>
                      <input 
                        type="text" 
                        placeholder="Company Name"
                        value={partnerForm.companyName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, companyName: e.target.value })}
                        className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Designation</label>
                      <input 
                        type="text" 
                        placeholder="Designation"
                        value={partnerForm.designation}
                        onChange={(e) => setPartnerForm({ ...partnerForm, designation: e.target.value })}
                        className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                      />
                    </div>
                  </div>

                  {/* Full Address input/textarea */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">Full Address</label>
                    <textarea 
                      rows={3}
                      placeholder="Full Address"
                      value={partnerForm.fullAddress}
                      onChange={(e) => setPartnerForm({ ...partnerForm, fullAddress: e.target.value })}
                      className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                    />
                  </div>

                  {/* Footer Row inside Card */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-slate-50">
                    <span className="text-[11px] font-semibold text-slate-400 tracking-wide select-none">
                      Susamskar Foundation team will reach out to you soon.
                    </span>
                    <button
                      type="submit"
                      disabled={isPartnerSubmitting}
                      className="w-full sm:w-auto px-8 py-3 bg-[#f26522] hover:bg-[#e25412] active:scale-[0.97] text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg disabled:bg-slate-300 shrink-0 cursor-pointer text-center"
                    >
                      {isPartnerSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Side: Dynamic Image (Meeting with elderly man) with Custom Gold Splashes Behind */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center">
            
            {/* Absolute Gold Watercolor Graphic Behind (bottom-right and top-left) */}
            <div className="absolute -right-6 -bottom-8 w-48 sm:w-64 h-48 sm:h-64 pointer-events-none -z-10 opacity-70">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,100 C10,50 60,10 120,20 C180,30 190,90 150,140 C110,190 30,150 20,100 Z" fill="#facb66" opacity="0.35" transform="rotate(90, 100, 100)" />
                <circle cx="160" cy="140" r="10" fill="#f8be41" opacity="0.4" />
                <circle cx="40" cy="50" r="12" fill="#facb66" opacity="0.3" />
              </svg>
            </div>
            <div className="absolute -left-6 -top-8 w-44 sm:w-56 h-44 sm:h-56 pointer-events-none -z-10 opacity-75">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,150 C30,90 80,40 140,50 C200,60 180,130 130,160 C80,190 70,210 50,150 Z" fill="#FFD15C" opacity="0.3" transform="rotate(-45, 100, 100)" />
                <circle cx="50" cy="50" r="8" fill="#f8be41" opacity="0.3" />
              </svg>
            </div>

            {/* Main Portrait Image: Meeting with elderly */}
            <div className="w-full max-w-[360px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10 group">
              <img 
                src="https://lh3.googleusercontent.com/d/1tRhmdA4ImjA6Vz8SW0DswQ_jqcy7IUQY" 
                alt="Susamskar Foundation Partnerships" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
