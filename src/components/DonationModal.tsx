import React, { useState } from 'react';
import { X, Heart, Shield, Check, CreditCard, Landmark, ArrowRight, Sparkles, Receipt } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type DonationStep = 'select' | 'payment' | 'success';

interface ImpactOption {
  amount: number;
  label: string;
  description: string;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [step, setStep] = useState<DonationStep>('select');
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<string>('Value Education for Children');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [upiId, setUpiId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const impactOptions: ImpactOption[] = [
    { amount: 250, label: "Study Kit", description: "Provides study kits & value-education workbooks for 2 rural children." },
    { amount: 500, label: "Child Education", description: "Sponsors value-education classes for 1 underprivileged child for an entire term." },
    { amount: 1000, label: "Nutritious Meals", description: "Provides 10 high-quality nutritious lunch boxes to children in Balarampur." },
    { amount: 2500, label: "Farming Support", description: "Assists 1 rural farming family with organic seed kits and eco-friendly manure training." },
    { amount: 5000, label: "Youth Mentorship", description: "Sponsors specialized youth mentorship and focus circles for 1 college batch." },
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) {
      setSelectedAmount(parseInt(val, 10));
    }
  };

  const finalAmount = customAmount ? parseInt(customAmount, 10) || 0 : selectedAmount;

  const currentImpactText = () => {
    if (finalAmount <= 0) return "Please enter a valid amount.";
    const matchingOption = impactOptions.find(o => finalAmount >= o.amount);
    if (matchingOption) {
      return matchingOption.description;
    }
    return `Provides extensive developmental support and educational kits across our school and rural chapters.`;
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorInfo.name || !donorInfo.email || !donorInfo.phone) {
      alert('Please fill out the required donor information.');
      return;
    }
    setStep('payment');
  };

  const handleCompletePayment = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 1500);
  };

  const handleReset = () => {
    setStep('select');
    setSelectedAmount(1000);
    setCustomAmount('');
    setDonorInfo({ name: '', email: '', phone: '', pan: '' });
    onClose();
  };

  return (
    <div id="donation-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <div 
        id="donation-modal-container"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-brand-orange fill-brand-orange" />
            <h3 className="font-display font-semibold text-slate-800 text-lg">Support Our Mission</h3>
          </div>
          <button 
            id="close-donation-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {/* STEP 1: SELECT AMOUNT & FILL DONOR INFO */}
          {step === 'select' && (
            <form onSubmit={handleProceedToPayment} className="space-y-6">
              
              {/* Project Category Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">1. Choose Impact Project</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Value Education for Children",
                    "Youth Mentorship & Skills",
                    "Rural Welfare & Farming",
                    "Where it's needed most"
                  ].map((proj) => (
                    <button
                      key={proj}
                      type="button"
                      onClick={() => setSelectedProject(proj)}
                      className={`px-4 py-2.5 text-left text-sm rounded-xl border font-medium transition-all ${
                        selectedProject === proj 
                        ? 'border-brand-orange bg-brand-orange/5 text-brand-orange shadow-xs' 
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      {proj}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Cards */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">2. Choose Contribution Amount</label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {impactOptions.map((opt) => (
                    <button
                      key={opt.amount}
                      type="button"
                      onClick={() => handleAmountSelect(opt.amount)}
                      className={`py-3 rounded-xl border flex flex-col items-center justify-center transition-all ${
                        selectedAmount === opt.amount && !customAmount
                        ? 'border-brand-orange bg-brand-orange text-white shadow-md' 
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <span className="text-xs font-medium">{opt.label}</span>
                      <span className="text-base font-bold mt-1">₹{opt.amount}</span>
                    </button>
                  ))}
                </div>

                {/* Custom Amount Field */}
                <div className="mt-3">
                  <div className="relative rounded-xl shadow-xs">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-slate-500 font-medium">₹</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Or enter custom contribution amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="block w-full pl-8 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all placeholder:text-slate-400 font-semibold"
                    />
                  </div>
                </div>
              </div>

              {/* Real-world Impact Callout */}
              {finalAmount > 0 && (
                <div className="p-4 bg-brand-orange/5 border border-brand-orange/20 rounded-xl flex gap-3">
                  <div className="p-2 h-max rounded-lg bg-brand-orange/10 text-brand-orange">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800 text-sm">Your Contribution Impact</h5>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{currentImpactText()}</p>
                  </div>
                </div>
              )}

              {/* Donor Information */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">3. Donor Contact Information</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                      className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-hidden focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                      className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-hidden focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={donorInfo.phone}
                      onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                      className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-hidden focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="PAN Card (For 80G Tax Exemption - Optional)"
                      value={donorInfo.pan}
                      onChange={(e) => setDonorInfo({ ...donorInfo, pan: e.target.value })}
                      className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-hidden focus:ring-1 focus:ring-brand-orange uppercase"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 leading-normal">
                  * All donations are eligible for tax deductions under section 80G. Receipt will be sent to the provided email.
                </p>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-xl text-sm font-semibold hover:bg-brand-orange/90 transition-all shadow-md shadow-brand-orange/10 cursor-pointer"
                >
                  Proceed to Payment (₹{finalAmount})
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </form>
          )}

          {/* STEP 2: SIMULATED SECURE PAYMENT */}
          {step === 'payment' && (
            <div className="space-y-6 py-2">
              <div className="text-center">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Secure Gateway</span>
                <h4 className="text-base font-bold text-slate-800 font-display mt-0.5">Choose Payment Method</h4>
                <div className="flex justify-center gap-2 mt-4">
                  {[
                    { id: 'upi', label: 'UPI / QR', icon: Sparkles },
                    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
                    { id: 'netbanking', label: 'NetBanking', icon: Landmark }
                  ].map((m) => {
                    const Icon = m.icon;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setPaymentMethod(m.id as any)}
                        className={`flex items-center gap-2 px-4 py-2.5 border text-xs font-semibold rounded-xl transition-all ${
                          paymentMethod === m.id
                          ? 'border-brand-orange bg-brand-orange/5 text-brand-orange'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {m.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Payment Input Details */}
              <div className="p-5 border border-slate-100 bg-slate-50/50 rounded-xl max-w-md mx-auto">
                {paymentMethod === 'upi' && (
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-600">Enter UPI ID (GPay / PhonePe / Paytm)</label>
                    <input
                      type="text"
                      placeholder="username@upi"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs bg-white focus:outline-hidden focus:ring-1 focus:ring-brand-orange"
                    />
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 justify-center pt-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>Or scan standard UPI QR on the next screen</span>
                    </div>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="space-y-3 text-left">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="•••• •••• •••• ••••"
                        className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs bg-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">CVV</label>
                        <input
                          type="password"
                          placeholder="•••"
                          maxLength={3}
                          className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'netbanking' && (
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-600">Select Bank</label>
                    <select className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs bg-white">
                      <option>State Bank of India (SBI)</option>
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>Axis Bank</option>
                      <option>Punjab National Bank</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Checkout details */}
              <div className="flex flex-col items-center space-y-2 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleCompletePayment}
                  disabled={isSubmitting}
                  className="w-full max-w-xs py-3 bg-brand-orange text-white rounded-xl text-sm font-semibold hover:bg-brand-orange/90 disabled:bg-slate-400 transition-all shadow-md shadow-brand-orange/15 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Securing Transaction...
                    </>
                  ) : (
                    <>
                      Pay ₹{finalAmount} Securely
                    </>
                  )}
                </button>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
                  <Shield className="h-3 w-3 text-emerald-500" />
                  <span>256-Bit SSL Encryption • Your transaction is 100% secure</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: SUCCESS CERTIFICATE */}
          {step === 'success' && (
            <div className="text-center py-6 space-y-5 animate-in fade-in zoom-in-95 duration-300">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 border-4 border-emerald-100 text-emerald-500">
                <Check className="h-7 w-7 stroke-[3px]" />
              </div>
              
              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">Transaction Complete</span>
                <h4 className="text-2xl font-bold font-display text-slate-800">Heartfelt Thank You, {donorInfo.name}!</h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                  Your generous contribution of <span className="font-bold text-slate-800">₹{finalAmount}</span> has been received successfully. You are making an active difference in our project: <span className="italic text-brand-orange font-medium">"{selectedProject}"</span>.
                </p>
              </div>

              {/* Mock Receipt Card */}
              <div className="border border-dashed border-slate-200 bg-slate-50/50 p-5 rounded-xl max-w-sm mx-auto text-left space-y-3 relative">
                <div className="absolute top-3 right-3 text-slate-300">
                  <Receipt className="h-10 w-10 opacity-20" />
                </div>
                <div className="border-b border-slate-200 pb-2">
                  <h5 className="text-[10px] uppercase font-bold text-slate-400">Transaction Details</h5>
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-xs">
                  <span className="text-slate-500">Receipt No:</span>
                  <span className="font-semibold text-slate-800 text-right">SSF-2026-8921</span>
                  <span className="text-slate-500">Donor Name:</span>
                  <span className="font-semibold text-slate-800 text-right">{donorInfo.name}</span>
                  <span className="text-slate-500">Amount Paid:</span>
                  <span className="font-bold text-brand-orange text-right">₹{finalAmount}</span>
                  <span className="text-slate-500">Category:</span>
                  <span className="font-semibold text-slate-800 text-right">{selectedProject}</span>
                  <span className="text-slate-500">80G Benefit:</span>
                  <span className="font-semibold text-emerald-600 text-right">Eligible (Receipt Emailed)</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
