import React, { useState } from 'react';
import { X, Users, Smile, Heart, Check, BookOpen, GraduationCap, Sprout, ArrowRight } from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occupation: '',
    hours: '2-4 hours',
    interest: 'Value Education for Children',
    experience: '',
    motivation: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      occupation: '',
      hours: '2-4 hours',
      interest: 'Value Education for Children',
      experience: '',
      motivation: ''
    });
    setSubmitted(false);
    onClose();
  };

  return (
    <div id="volunteer-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <div 
        id="volunteer-modal-container"
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-brand-teal" />
            <h3 className="font-display font-semibold text-slate-800 text-lg">Join as a Volunteer</h3>
          </div>
          <button 
            id="close-volunteer-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Introduction Text */}
              <div className="p-3.5 bg-brand-teal/5 border border-brand-teal/10 rounded-xl flex items-start gap-2.5">
                <Smile className="h-5 w-5 text-brand-teal mt-0.5 shrink-0" />
                <p className="text-xs text-slate-600 leading-normal">
                  Thank you for your interest in Susamskar Foundation! By volunteering your time, you'll play an active role in building strong values in children, mentoring college youth, or serving rural families.
                </p>
              </div>

              {/* Personal Details */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">1. General Information</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-1 focus:ring-brand-teal focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-1 focus:ring-brand-teal focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-1 focus:ring-brand-teal focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Occupation / Institution *"
                      required
                      value={formData.occupation}
                      onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                      className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-1 focus:ring-brand-teal focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Area of Interest */}
              <div className="space-y-2 pt-1">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">2. Area of Interest & Commitment</label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { title: "Value Education for Children", icon: BookOpen, desc: "Teaching moral values and storytelling to kids" },
                    { title: "Youth Skill Development & Mentorship", icon: GraduationCap, desc: "Mentoring university students & soft-skills seminars" },
                    { title: "Rural Welfare & Sustainable Farming", icon: Sprout, desc: "Participating in rural outreach, food drives & field training" }
                  ].map((field) => {
                    const Icon = field.icon;
                    return (
                      <button
                        key={field.title}
                        type="button"
                        onClick={() => setFormData({ ...formData, interest: field.title })}
                        className={`flex items-start gap-3 p-3 text-left border rounded-xl transition-all ${
                          formData.interest === field.title
                          ? 'border-brand-teal bg-brand-teal/5 text-brand-teal'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${formData.interest === field.title ? 'bg-brand-teal/10' : 'bg-slate-100'}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-semibold">{field.title}</h5>
                          <p className="text-[10px] text-slate-500 mt-0.5">{field.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Weekly commitment hours selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Weekly Availability *</label>
                <select
                  value={formData.hours}
                  onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                  className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs bg-white focus:ring-1 focus:ring-brand-teal focus:outline-hidden"
                >
                  <option>1-2 hours / week</option>
                  <option>2-4 hours / week</option>
                  <option>4-8 hours / week</option>
                  <option>8+ hours / week</option>
                </select>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">Why would you like to volunteer with us? (Briefly)</label>
                <textarea
                  rows={2}
                  placeholder="Share what inspires you to join our foundation..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="block w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-1 focus:ring-brand-teal focus:outline-hidden"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end pt-3 border-t border-slate-100">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-2.5 bg-brand-teal hover:bg-brand-teal/90 disabled:bg-slate-400 text-white font-semibold rounded-xl text-xs shadow-md shadow-brand-teal/10 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Registering...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* SUCCESS STATE */
            <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 border-4 border-teal-100 text-brand-teal">
                <Check className="h-7 w-7 stroke-[3px]" />
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xl font-bold font-display text-slate-800">Application Received!</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>! Our volunteer onboarding coordinator will reach out to you at <span className="font-medium text-slate-800">{formData.email}</span> within 2-3 business days to schedule an introductory call.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-left text-xs max-w-sm mx-auto space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Selected Profile</span>
                <div>
                  <span className="text-slate-500">Interest:</span> <span className="font-medium text-slate-800">{formData.interest}</span>
                </div>
                <div>
                  <span className="text-slate-500">Availability:</span> <span className="font-medium text-slate-800">{formData.hours}</span>
                </div>
                <div>
                  <span className="text-slate-500">Status:</span> <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px]">Pending Interview</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-xl transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
