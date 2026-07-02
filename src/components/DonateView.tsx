import React, { useState } from 'react';
import { Heart, Shield, Check, CreditCard, ChevronDown } from 'lucide-react';

interface DonateViewProps {
  onViewChange: (view: any) => void;
}

type PaymentMethod = 'card' | 'paypal';

export default function DonateView({ onViewChange }: DonateViewProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null); // null means Custom is active
  const [customAmount, setCustomAmount] = useState<string>('6000');
  const [selectedProject, setSelectedProject] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [cardNumber, setCardNumber] = useState<string>('');
  
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const amountOptions = [100, 250, 500, 1000, 5000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
  };

  const handleCustomClick = () => {
    setSelectedAmount(null);
  };

  const finalAmount = selectedAmount !== null ? selectedAmount : (parseInt(customAmount, 10) || 0);

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount <= 0) {
      alert('Please select or enter a valid donation amount.');
      return;
    }
    if (!selectedProject) {
      alert('Please select a project to support.');
      return;
    }
    if (paymentMethod === 'card' && !cardNumber) {
      alert('Please enter your credit card number.');
      return;
    }
    if (!donorInfo.firstName || !donorInfo.lastName || !donorInfo.email) {
      alert('Please fill out your personal information.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSelectedAmount(null);
    setCustomAmount('6000');
    setSelectedProject('');
    setCardNumber('');
    setDonorInfo({ firstName: '', lastName: '', email: '' });
  };

  return (
    <div className="w-full bg-white relative overflow-hidden min-h-screen flex flex-col font-sans selection:bg-[#f26522]/20 selection:text-[#f26522]">
      
      {/* 1. BLUE HEADER BANNER */}
      <div className="w-full bg-[#118AB2] text-white px-4 sm:px-6 lg:px-8 relative z-10 shadow-lg h-[580px] md:h-[440px] lg:h-[460px] flex items-center">
        <div className="max-w-7xl w-full mx-auto text-left select-none">
          {/* Breadcrumb with light line accent */}
          <div className="flex items-center gap-3 text-xs font-bold text-[#b4e3f2] tracking-widest font-mono mb-8">
            <span className="h-[2px] w-10 bg-[#7cd1e5]" />
            <button 
              onClick={() => onViewChange('home')}
              className="cursor-pointer hover:text-white transition-colors uppercase outline-none"
            >
              HOME
            </button>
          </div>

          {/* Big Header Title */}
          <h1 className="font-display font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight uppercase max-w-4xl">
            Each effort, big or <br />small helps!
          </h1>
        </div>
      </div>

      {/* 2. BODY CONTENT SECTION WITH GRAPHIC DECORATIONS */}
      <div className="flex-1 w-full relative z-20 -mt-8 px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Artistic Gold Watercolor/Brush Splat Absolute Background (behind the card) */}
        <div className="absolute right-0 top-[10%] w-[320px] sm:w-[500px] md:w-[680px] h-[500px] sm:h-[750px] pointer-events-none -z-10 opacity-80 sm:opacity-90">
          <svg viewBox="0 0 400 500" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#gold-glow)">
              <path d="M120 380 C 40 330, 20 250, 80 180 C 140 110, 240 80, 310 140 C 380 200, 390 300, 340 370 C 290 440, 200 430, 120 380 Z" fill="url(#gold-gradient)" opacity="0.15" />
            </g>
            <path d="M220 180 Q 250 80, 320 120 T 360 220 T 310 350 T 180 340 T 150 250 Z" fill="url(#gold-gradient2)" opacity="0.12" />
            
            {/* Splashy textured dry-brush marks (organic representation) */}
            <path d="M260 110 C290 100, 310 130, 315 150 C325 180, 290 220, 320 260 C340 290, 380 280, 375 320 C370 360, 310 380, 290 410 C270 440, 220 460, 180 430 C150 405, 130 350, 155 310 C180 270, 210 285, 230 230 C250 175, 230 120, 260 110 Z" fill="url(#gold-gradient)" opacity="0.25" />
            
            {/* Decorative Splatters */}
            <circle cx="280" cy="80" r="14" fill="#f8be41" opacity="0.25" />
            <circle cx="340" cy="130" r="8" fill="#facb66" opacity="0.3" />
            <circle cx="365" cy="180" r="18" fill="#f8be41" opacity="0.2" />
            <circle cx="380" cy="270" r="11" fill="#f2a511" opacity="0.15" />
            <circle cx="310" cy="420" r="15" fill="#f8be41" opacity="0.2" />
            <circle cx="220" cy="460" r="9" fill="#facb66" opacity="0.25" />
            <circle cx="110" cy="390" r="12" fill="#f8be41" opacity="0.15" />
            <circle cx="140" cy="210" r="16" fill="#facb66" opacity="0.2" />

            {/* Finer details and paint brush dynamic strands */}
            <path d="M240 130 L280 90 M290 190 L340 160 M330 280 L380 290 M270 370 L310 410" stroke="#f8be41" strokeWidth="3" strokeLinecap="round" opacity="0.2" />
            <path d="M210 240 Q160 210, 120 270" stroke="#facb66" strokeWidth="5" strokeLinecap="round" opacity="0.15" />

            <defs>
              <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#facb66" />
                <stop offset="50%" stopColor="#f8be41" />
                <stop offset="100%" stopColor="#f2a511" />
              </linearGradient>
              <linearGradient id="gold-gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fff3d1" />
                <stop offset="100%" stopColor="#f8be41" />
              </linearGradient>
              <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="30" result="blur" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Center Title */}
        <div className="max-w-xl mx-auto text-center pt-8 pb-6 relative z-10">
          <h2 className="font-display font-black text-[#111827] text-2xl sm:text-3xl tracking-tight uppercase">
            Donate for a Cause
          </h2>
        </div>

        {/* 3. MAIN DONATION CARD CONTAINER */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-[0_10px_45px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden relative z-30">
          
          {isSuccess ? (
            /* SUCCESS THANK YOU PANEL */
            <div className="p-8 sm:p-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border-4 border-emerald-100 text-emerald-500">
                <Check className="h-8 w-8 stroke-[3]" />
              </div>
              
              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-1 rounded-full uppercase tracking-wider">Transaction Complete</span>
                <h4 className="text-2xl font-display font-black text-slate-800 uppercase tracking-tight">Heartfelt Thank You!</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your generous contribution of <span className="font-bold text-slate-900">₹{finalAmount}</span> has been successfully processed. You are making an active difference in our project: <span className="italic text-[#f26522] font-semibold">"{selectedProject || 'Where it\'s needed most'}"</span>.
                </p>
              </div>

              {/* Receipt details */}
              <div className="border border-dashed border-slate-200 bg-slate-50 p-6 rounded-xl max-w-md mx-auto text-left space-y-3.5">
                <div className="border-b border-slate-200 pb-2">
                  <h5 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Transaction Details</h5>
                </div>
                <div className="grid grid-cols-2 gap-y-2.5 text-xs">
                  <span className="text-slate-500">Donor Name:</span>
                  <span className="font-bold text-slate-800 text-right">{donorInfo.firstName} {donorInfo.lastName}</span>
                  <span className="text-slate-500">Email Address:</span>
                  <span className="font-semibold text-slate-800 text-right">{donorInfo.email}</span>
                  <span className="text-slate-500">Amount Paid:</span>
                  <span className="font-black text-[#f26522] text-right text-sm">₹{finalAmount}</span>
                  <span className="text-slate-500">Allocated Project:</span>
                  <span className="font-bold text-slate-800 text-right">{selectedProject}</span>
                  <span className="text-slate-500">Tax Benefit Status:</span>
                  <span className="font-semibold text-emerald-600 text-right">80G Benefit Confirmed</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 bg-[#f26522] hover:bg-[#e25412] text-white text-xs font-bold rounded-lg uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  Donate Again
                </button>
                <button
                  type="button"
                  onClick={() => onViewChange('home')}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
                >
                  Return Home
                </button>
              </div>
            </div>
          ) : (
            /* INTERACTIVE DONATION FORM */
            <form onSubmit={handleDonateSubmit} className="p-6 sm:p-10 space-y-8 text-left">
              
              {/* SECTION A: DONATION AMOUNT */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-slate-800 text-lg sm:text-xl">
                  Donation Amount
                </h3>
                
                {/* Fixed Pills & Custom Amount Toggle Row */}
                <div className="flex flex-wrap gap-2.5">
                  {amountOptions.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`px-5 py-2.5 text-xs font-bold rounded-full border transition-all duration-150 cursor-pointer ${
                        selectedAmount === amount
                          ? 'border-[#f26522] bg-[#f26522] text-white shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white text-slate-700'
                      }`}
                    >
                      ₹ {amount}
                    </button>
                  ))}
                  
                  <button
                    type="button"
                    onClick={handleCustomClick}
                    className={`px-5 py-2.5 text-xs font-bold rounded-full border transition-all duration-150 cursor-pointer ${
                      selectedAmount === null
                        ? 'border-[#f26522] bg-[#f26522] text-white shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white text-slate-700'
                    }`}
                  >
                    CUSTOM AMOUNT
                  </button>
                </div>

                {/* Amount Input Box (active when Custom Amount is selected) */}
                {selectedAmount === null && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="relative rounded-full bg-[#f8fafc] border-0 max-w-[240px] flex items-center px-4 py-2.5 group">
                      <span className="text-slate-800 font-extrabold text-lg mr-2">₹</span>
                      <input
                        type="text"
                        pattern="[0-9]*"
                        value={customAmount}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, '');
                          setCustomAmount(val);
                        }}
                        className="block w-full bg-transparent border-0 p-0 text-slate-800 font-extrabold text-lg focus:outline-hidden focus:ring-0 placeholder:text-slate-400"
                        placeholder="0"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* SECTION B: PROJECT DROP-DOWN */}
              <div className="space-y-3">
                <label className="block font-display font-bold text-slate-800 text-sm">
                  Project
                </label>
                <div className="relative">
                  <select
                    value={selectedProject}
                    required
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-600 focus:outline-hidden focus:ring-2 focus:ring-[#f26522] cursor-pointer appearance-none pr-10"
                  >
                    <option value="">Select Project</option>
                    <option value="Value Education for Children">Value Education for Children</option>
                    <option value="Youth Mentorship & Skills">Youth Mentorship & Skills</option>
                    <option value="Teaching & Parenting Guidance">Teaching & Parenting Guidance</option>
                    <option value="Workplace Harmony">Workplace Harmony</option>
                    <option value="Sustainable Farming & Rural Welfare">Sustainable Farming & Rural Welfare</option>
                    <option value="Where it's needed most">Where it's needed most</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* SECTION C: SELECT PAYMENT METHOD */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-slate-800 text-sm">
                  Select Payment Method
                </h3>
                
                <div className="flex items-center gap-6">
                  {/* Credit Card Option */}
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="sr-only"
                    />
                    <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center">
                      {paymentMethod === 'card' && (
                        <div className="w-3 h-3 rounded-full bg-[#f26522]" />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-slate-700">Credit Card</span>
                  </label>

                  {/* PayPal Option */}
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      className="sr-only"
                    />
                    <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center">
                      {paymentMethod === 'paypal' && (
                        <div className="w-3 h-3 rounded-full bg-[#f26522]" />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-slate-700">Pay Pal</span>
                  </label>
                </div>

                {/* Card input if 'card' selected */}
                {paymentMethod === 'card' && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Credit Card Number
                    </label>
                    <div className="relative flex items-center bg-[#f8fafc] rounded-lg">
                      <div className="absolute left-3.5 text-slate-400">
                        <CreditCard className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="Card Number"
                        required={paymentMethod === 'card'}
                        value={cardNumber}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, '');
                          setCardNumber(val);
                        }}
                        className="block w-full pl-10 pr-4 py-3 bg-transparent border-0 text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-0"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* SECTION D: PERSONAL INFORMATION */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-slate-800 text-sm">
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      value={donorInfo.firstName}
                      onChange={(e) => setDonorInfo({ ...donorInfo, firstName: e.target.value })}
                      className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      value={donorInfo.lastName}
                      onChange={(e) => setDonorInfo({ ...donorInfo, lastName: e.target.value })}
                      className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                    className="block w-full px-4 py-3 bg-[#f8fafc] border-0 rounded-lg text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#f26522]"
                  />
                </div>
              </div>

              {/* SECTION E: FORM ACTIONS & TOTAL */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center text-sm font-extrabold text-slate-800 select-none">
                  <span>Donation Total:&nbsp;</span>
                  <span className="text-[#f26522] text-base">₹ {finalAmount}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-[#f26522] hover:bg-[#e25412] active:scale-95 text-white rounded-lg text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg disabled:bg-slate-400 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-3 w-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      PROCESSING...
                    </>
                  ) : (
                    'DONATE NOW'
                  )}
                </button>
              </div>

              {/* Secure statement */}
              <div className="flex items-center gap-1.5 justify-center pt-2 text-[10px] text-slate-400 font-medium">
                <Shield className="h-3 w-3 text-emerald-500" />
                <span>256-Bit SSL Secured Transaction • 80G Tax Deductible Reciept</span>
              </div>

            </form>
          )}

        </div>

      </div>

      {/* 4. PRE-FOOTER WAVE SPLASH BRUSH DIVIDER */}
      <div className="w-full h-12 relative z-10 pointer-events-none -mt-4 bg-[#002229]">
        <div className="absolute bottom-full left-0 w-full overflow-hidden leading-[0] transform translate-y-[2px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C150,90 350,110 500,80 C650,50 800,20 950,40 C1100,60 1150,90 1200,80 L1200,120 L0,120 Z" fill="#002229" />
            <path d="M0,15 C200,80 400,120 600,60 C800,0 1000,70 1200,30 L1200,120 L0,120 Z" fill="#002229" opacity="0.4" />
            <path d="M0,35 C180,95 360,60 540,80 C720,100 900,45 1080,75 C1120,80 1160,85 1200,90 L1200,120 L0,120 Z" fill="#002229" opacity="0.2" />
          </svg>
        </div>
      </div>

    </div>
  );
}
