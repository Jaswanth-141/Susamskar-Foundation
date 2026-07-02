import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  ArrowUpRight, 
  Heart, 
  HeartHandshake, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { projectsData, galleryItems, happeningsData, testimonialsData } from '../data';

interface WorkplaceHarmonyDetailProps {
  onBack: () => void;
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
  onNavigateToProject?: (id: number) => void;
}

export default function WorkplaceHarmonyDetail({ 
  onBack, 
  onOpenDonate, 
  onOpenVolunteer,
  onNavigateToProject
}: WorkplaceHarmonyDetailProps) {
  
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

  // Testimonials active dot index (decorative or functional slider)
  const [testimonialActiveIndex, setTestimonialActiveIndex] = useState(0);

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* SECTION 1: YELLOW HEADER (HERO BANNER) */}
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
            Workplace harmony<br />initiatives
          </h1>
        </div>
      </section>

      {/* SECTION 2: TWO-COLUMN INTRO */}
      <section className="py-16 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Bio/Intro Text */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              At Susamskar Foundation, we act as external counselors, partnering with organizations to nurture emotionally intelligent and harmonious workplaces. Through our workplace sensitization sessions, we address crucial aspects such as respect, empathy, communication, and inclusion.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              These sessions are designed to help employees understand workplace stress, manage stress effectively, and contribute to a healthier work environment. Our goal is to ensure that every workplace we engage with becomes a space where individual well-being and organizational growth coexist seamlessly.
            </p>
          </div>

          {/* Right: Family with white background and brush watercolor stroke */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[300px] sm:min-h-[360px]">
            {/* Soft decorative splash behind */}
            <div className="absolute inset-x-0 bottom-4 h-16 bg-brand-yellow/30 blur-md rounded-full pointer-events-none transform scale-90" />
            
            {/* Main Image */}
            <div className="relative w-full max-w-md aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 group bg-white">
              <img 
                src="https://lh3.googleusercontent.com/d/1YAZGtesdcu5mCDE1xMpAzXERrvy5-4MO" 
                alt="Workplace harmony initiatives"
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
              <h3 className="font-display font-black text-slate-800 text-xl sm:text-2xl tracking-tight uppercase border-l-4 border-[#00829a] pl-4 mb-3">
                POSH Act Representation
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Our members serve as external representatives on Internal Complaints Committees (ICC) under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. Through thoughtful participation and guidance, we assist organizations in handling cases with fairness, sensitivity, and integrity.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3">
                A member of our foundation was officially nominated by the Commissioner of Commercial Taxes, West Bengal, to serve on the ICC for:
              </p>
              <ul className="list-disc pl-5 text-slate-600 text-sm space-y-2">
                <li>Directorate of Commercial Taxes, 14 Beliaghata Road, Kolkata – 700015</li>
                <li>Directorate of Commercial Taxes, Jalasampad Bhawan, Salt Lake, Kolkata – 700091</li>
              </ul>
            </div>

            {/* Block 2 */}
            <div>
              <h3 className="font-display font-black text-slate-800 text-xl sm:text-2xl tracking-tight uppercase border-l-4 border-[#00829a] pl-4 mb-3">
                Gender Sensitization Programs
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We conduct customized awareness sessions and workshops for corporate employees and government officials. These sessions focus on recognizing unconscious bias, promoting mutual respect, and creating inclusive workplaces that encourage collaboration and understanding.
              </p>
            </div>

            {/* Block 3 */}
            <div>
              <h3 className="font-display font-black text-slate-800 text-xl sm:text-2xl tracking-tight uppercase border-l-4 border-[#00829a] pl-4 mb-3">
                Counseling and Emotional Support
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our counselors provide one-on-one and group counseling for employees to help them manage workplace stress, interpersonal conflicts, and emotional challenges. The approach blends empathy with practical guidance, fostering a supportive culture where individuals feel safe to express themselves and seek help without hesitation.
              </p>
            </div>

            {/* Block 4 */}
            <div>
              <h3 className="font-display font-black text-slate-800 text-xl sm:text-2xl tracking-tight uppercase border-l-4 border-[#00829a] pl-4 mb-3">
                Promoting Long-term Workplace Wellbeing
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Beyond immediate interventions, we emphasize continuous development of workplace ethics and emotional health. By collaborating with organizations, we design frameworks for ongoing training, periodic awareness sessions, and leadership guidance. These sustained efforts help build trust, morale, and a culture where diversity and compassion thrive.
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
                {projectsData.filter(p => p.id !== 4).map((proj) => (
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
              { value: "2", label: "Offices Reached" },
              { value: "12", label: "Sessions Conducted" },
              { value: "25", label: "Hours Of Service" },
              { value: "250", label: "Lives Impacted" }
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
                <span className="text-[10px] font-mono font-bold text-[#00829a] uppercase tracking-wider">Children</span>
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
                <span className="text-[10px] font-mono font-bold text-[#00829a] uppercase tracking-wider">Youth</span>
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
                <span className="text-[10px] font-mono font-bold text-[#00829a] uppercase tracking-wider">Youth</span>
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
                <span className="text-[10px] font-mono font-bold text-[#00829a] uppercase tracking-wider">Community</span>
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
                <span className="text-[10px] font-mono font-bold text-[#00829a] uppercase tracking-wider">Welfare</span>
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
                <span className="text-[10px] font-mono font-bold text-[#00829a] uppercase tracking-wider">Farming</span>
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

      {/* SECTION 7: APPRECIATION & RECOGNITION (TESTIMONIALS SLIDER AS SHOWN IN SCREENSHOT) */}
      <section className="py-24 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-slate-800 text-3xl sm:text-4xl tracking-tight leading-none uppercase">
              Appreciation & Recognition
            </h2>
          </div>

          {/* Testimonial Cards Grid (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((item, index) => (
              <div 
                key={item.id} 
                className={`bg-white p-8 sm:p-10 rounded-[32px] border border-slate-100/60 shadow-[15px_15px_30px_rgba(0,0,0,0.12)] text-left flex flex-col justify-between hover:shadow-[20px_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.01] ${testimonialActiveIndex === index ? 'ring-4 ring-brand-teal/20' : ''}`}
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

          {/* Beautiful Dot indicator with Nav Arrows as shown in the screenshot */}
          <div className="flex items-center justify-center space-x-4 pt-6">
            <button 
              onClick={() => setTestimonialActiveIndex(prev => (prev > 0 ? prev - 1 : testimonialsData.length - 1))}
              className="text-slate-700 hover:text-slate-900 transition-colors p-2 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6 stroke-[3]" />
            </button>
            <div className="flex items-center space-x-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <button 
                  key={i}
                  onClick={() => i < testimonialsData.length && setTestimonialActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    testimonialActiveIndex === i 
                      ? 'bg-slate-800 scale-125' 
                      : i < testimonialsData.length ? 'bg-slate-400 hover:bg-slate-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={() => setTestimonialActiveIndex(prev => (prev < testimonialsData.length - 1 ? prev + 1 : 0))}
              className="text-slate-700 hover:text-slate-900 transition-colors p-2 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6 stroke-[3]" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
