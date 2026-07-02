import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  ArrowUpRight, 
  Heart, 
  HeartHandshake, 
  ChevronLeft, 
  ChevronRight,
  School,
  Award,
  Users
} from 'lucide-react';
import { projectsData, galleryItems, happeningsData, testimonialsData } from '../data';

interface YouthSkillDevelopmentDetailProps {
  onBack: () => void;
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
  onNavigateToProject?: (id: number) => void;
}

export default function YouthSkillDevelopmentDetail({ 
  onBack, 
  onOpenDonate, 
  onOpenVolunteer,
  onNavigateToProject
}: YouthSkillDevelopmentDetailProps) {
  
  // Happenings slider state
  const [happeningIndex, setHappeningIndex] = useState(0);
  const nextHappening = () => {
    if (happeningIndex < happeningsData.length - 3) {
      setHappeningIndex(prev => prev + 1);
    }
  };
  const prevHappening = () => {
    if (happeningIndex > 0) {
      setHappeningIndex(prev => prev - 1);
    }
  };

  // Testimonials carousel active dot state
  const [activeTestimonialDot, setActiveTestimonialDot] = useState(0);

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* SECTION 1: YELLOW HEADER (HERO HERO BANNER) */}
      <section className="bg-brand-yellow rounded-b-[48px] sm:rounded-b-[64px] lg:rounded-b-[80px] pt-8 pb-20 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden">
        {/* Subtle decorative background blob */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back button link */}
          <button 
            onClick={onBack}
            className="flex items-center gap-2 group text-xs font-bold text-slate-900 uppercase tracking-widest font-mono cursor-pointer hover:opacity-85 transition-all mb-8"
          >
            <div className="h-[2px] w-8 bg-slate-900 group-hover:w-10 transition-all" />
            <span>BACK TO PROJECTS</span>
          </button>

          {/* Large display title */}
          <h1 className="font-display font-black text-slate-900 text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-4xl leading-tight">
            Youth Skill Development<br />and Mentorship
          </h1>
        </div>
      </section>

      {/* SECTION 2: TWO-COLUMN INTRO */}
      <section className="py-16 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Bio/Intro Text */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              Our youth programs aim to guide college students toward purposeful living, resilience, and service-minded leadership.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We conduct sessions at IIT Kharagpur and other local institutions, engaging students from diverse academic streams and years across B.Tech, M.Tech, and Ph.D. programs. Each year, new students join our regular sessions, finding a space for reflection, mentorship, and personal growth that complements their academic journey.
            </p>
          </div>

          {/* Right: College students with white background and brush watercolor stroke */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[300px] sm:min-h-[360px]">
            {/* Soft decorative splash behind the kids */}
            <div className="absolute inset-x-0 bottom-4 h-16 bg-brand-yellow/30 blur-md rounded-full pointer-events-none transform scale-90" />
            
            {/* Main Image */}
            <div className="relative w-full max-w-md aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 group bg-white">
              <img 
                src="https://lh3.googleusercontent.com/d/1L7zN12tCkkw0UtJkaatRcsdzJdwq2Im6" 
                alt="Youth Skill Development"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: DETAILED ACTIVITIES & OTHER PROJECTS */}
      <section className="py-12 bg-white text-left border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (7 columns): 4 Activities */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Block 1 */}
            <div>
              <h3 className="font-display font-black text-slate-800 text-xl sm:text-2xl tracking-tight uppercase border-l-4 border-brand-teal pl-4 mb-3">
                Skill Development Workshops
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                During summer and winter breaks we run job-oriented workshops for students and older schoolchildren, taught by IIT Kharagpur alumni who are part of the Susamskar network. Sessions cover practical skills such as coding, software development, workplace tools, and other career-relevant competencies. The hands-on classes combine project work, mentorship, and career guidance so participants finish better prepared for internships, jobs, and real-world problem solving.
              </p>
            </div>

            {/* Block 2 */}
            <div>
              <h3 className="font-display font-black text-slate-800 text-xl sm:text-2xl tracking-tight uppercase border-l-4 border-brand-teal pl-4 mb-3">
                Weekly sessions at IIT Kharagpur
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We hold regular value-based classes for IIT Kharagpur students, conducted separately for boys and girls. These sessions include discussions on facing life's challenges, setting priorities, and developing leadership through character and integrity.
              </p>
            </div>

            {/* Block 3 */}
            <div>
              <h3 className="font-display font-black text-slate-800 text-xl sm:text-2xl tracking-tight uppercase border-l-4 border-brand-teal pl-4 mb-3">
                Community Involvement
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Students are also encouraged to take part in rural outreach, community welfare, and event organization. By this students not only gain exposure to societal challenges but also become catalysts for meaningful change within and beyond IIT Kharagpur.
              </p>
            </div>

            {/* Block 4 */}
            <div>
              <h3 className="font-display font-black text-slate-800 text-xl sm:text-2xl tracking-tight uppercase border-l-4 border-brand-teal pl-4 mb-3">
                Reflection Program
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At the end of each year, is a heartfelt event that honors graduating students and the journey they've shared. The program features cultural performances, reflections from mentors and alumni, and a celebration of values and achievements—reminding students to carry integrity, service, and clarity into their next chapter.
              </p>
            </div>

          </div>

          {/* Right Column (5 columns): Other Projects Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-100/80 rounded-[32px] p-6 sm:p-8 space-y-6 shadow-sm sticky top-6">
              <h3 className="font-display font-extrabold text-slate-800 text-xl uppercase tracking-tight">
                Other Projects
              </h3>
              
              <div className="space-y-4">
                {projectsData.filter(p => p.id !== 2).map((proj) => (
                  <div 
                    key={proj.id}
                    className="flex gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 group"
                  >
                    {/* Tiny Image Thumbnail */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0 relative">
                      <img 
                        src={proj.image} 
                        alt={proj.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    {/* Details & Button */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm uppercase tracking-tight line-clamp-1">
                          {proj.title}
                        </h4>
                        <p className="text-slate-500 text-[11px] leading-snug line-clamp-2 mt-1">
                          {proj.shortDesc}
                        </p>
                      </div>

                      {/* Read More mini circular button */}
                      <div className="flex justify-end pt-1">
                        <button 
                          onClick={() => {
                            if (onNavigateToProject) {
                              onNavigateToProject(proj.id);
                            } else {
                              onOpenVolunteer();
                            }
                          }}
                          className="flex items-center gap-1 px-3 py-1 bg-[#00829a]/10 hover:bg-[#00829a] text-[#00829a] hover:text-white rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer"
                        >
                          <span>Read More</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: TOGETHER WE CAN DO MUCH MORE (STATS & CTAs) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 2x2 Stats Grid perfectly aligned as in the layout */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-x-6 gap-y-10 max-w-md mx-auto">
            {[
              { value: "36", label: "Institutes Reached" },
              { value: "500", label: "Sessions Conducted" },
              { value: "110", label: "Hours Of Learning" },
              { value: "600", label: "Youth Impacted" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Colored Box with Number */}
                <div className="w-28 h-24 rounded-3xl bg-[#00829a] flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform duration-300">
                  <span className="font-display font-black text-4xl tracking-tight">
                    {stat.value}
                  </span>
                </div>
                {/* Label centered below */}
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest text-center mt-3 max-w-[120px] leading-tight font-mono">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Text and buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h2 className="font-display font-black text-slate-900 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none uppercase">
              Together we can do<br />much more!
            </h2>
            
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-2">
              <button 
                onClick={onOpenVolunteer}
                className="flex items-center justify-between gap-4 pl-6 pr-2 py-2 bg-[#00829a] hover:bg-[#007085] text-white rounded-full text-sm font-extrabold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer min-w-[180px]"
              >
                <span>Volunteer</span>
                <div className="w-8 h-8 rounded-full bg-[#005e70] text-white flex items-center justify-center shrink-0">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </button>
              
              <button 
                onClick={onOpenDonate}
                className="flex items-center justify-between gap-4 pl-6 pr-2 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 rounded-full text-sm font-extrabold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer min-w-[180px]"
              >
                <span>Donate Now</span>
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <HeartHandshake className="h-4 w-4 text-brand-orange" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: GALLERY */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="font-display font-black text-slate-800 text-3xl sm:text-4xl uppercase tracking-tight mb-10">
            Gallery
          </h2>

          {/* Beautifully aligned layout resembling the grid of pictures */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Column Box (span 4/3): Value Education program in schools */}
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
                <span className="text-[10px] font-mono font-bold text-brand-teal uppercase tracking-wider">Children</span>
                <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm mt-1 uppercase">Value Education program in schools</h4>
              </div>
            </div>

            {/* Middle Column Box (span 8/6): Value Education program in IIT Kgp (Large horizontal card) */}
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
                <span className="text-[10px] font-mono font-bold text-brand-teal uppercase tracking-wider">Youth</span>
                <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm mt-1 uppercase">Value Education program in IIT Kgp</h4>
              </div>
            </div>

            {/* Right Column Box (span 4/3): Mentoring workshops for youth */}
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
                <span className="text-[10px] font-mono font-bold text-brand-teal uppercase tracking-wider">Youth</span>
                <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm mt-1 uppercase">Mentoring workshops for youth</h4>
              </div>
            </div>

            {/* Bottom 1: Our Team */}
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
                <span className="text-[10px] font-mono font-bold text-brand-teal uppercase tracking-wider">Community</span>
                <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm mt-1 uppercase">Our Team</h4>
              </div>
            </div>

            {/* Bottom 2: Cloth distribution */}
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
                <span className="text-[10px] font-mono font-bold text-brand-teal uppercase tracking-wider">Welfare</span>
                <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm mt-1 uppercase">Cloth distribution for underprivileged</h4>
              </div>
            </div>

            {/* Bottom 3: Sustainable farming */}
            <div className="md:col-span-4 lg:col-span-3 bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                <img 
                  src="https://lh3.googleusercontent.com/d/1NpE2mUkMoOKkmKBQ8wp1IMin5vdrQz74" 
                  alt="Sustainable farming workshop" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-mono font-bold text-brand-teal uppercase tracking-wider">Farming</span>
                <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm mt-1 uppercase">Sustainable farming</h4>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: RECENT HAPPENINGS */}
      <section className="py-20 bg-white border-b border-slate-100 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block font-mono">Inspiring Voices, Real Change</span>
              <h2 className="font-display font-bold text-slate-800 text-2xl sm:text-3xl uppercase tracking-tight mt-1">Recent Happenings</h2>
              <div className="h-1 w-14 bg-brand-orange rounded-full mt-2" />
            </div>

            {/* Slider navigation buttons */}
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
                disabled={happeningIndex >= happeningsData.length - 3}
                className="p-2 border border-slate-200 disabled:opacity-40 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Cards list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
            {happeningsData.slice(happeningIndex, happeningIndex + 3).map((item) => (
              <div 
                key={item.id}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-[0_4px_25px_-4px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-slate-200/60 transition-all duration-300 flex flex-col justify-between group h-full"
              >
                {/* Upper block */}
                <div>
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Floating mini trigger top-right */}
                    <button 
                      onClick={onOpenVolunteer}
                      className="absolute top-4 right-4 h-9 w-9 bg-white/95 backdrop-blur-xs text-brand-teal rounded-full flex items-center justify-center shadow-md hover:bg-brand-teal hover:text-white hover:scale-110 transition-all cursor-pointer z-10"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="p-6 space-y-3 text-left">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold font-mono">
                      <Calendar className="h-4 w-4 text-brand-orange shrink-0" />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="font-display font-extrabold text-slate-800 text-base sm:text-lg leading-snug line-clamp-2 uppercase group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: APPRECIATION & RECOGNITION (TESTIMONIALS) */}
      <section className="py-24 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center mb-12">
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

          {/* Slider Pagination Controls exactly matching the image dots and arrows */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => setActiveTestimonialDot(prev => Math.max(0, prev - 1))}
              className="text-slate-600/60 hover:text-slate-800 transition-colors p-2 hover:bg-white/20 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4, 5].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialDot(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeTestimonialDot === idx ? 'bg-slate-800 scale-110' : 'bg-slate-400/50 hover:bg-slate-500/80'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={() => setActiveTestimonialDot(prev => Math.min(5, prev + 1))}
              className="text-slate-600/60 hover:text-slate-800 transition-colors p-2 hover:bg-white/20 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
