import React from 'react';
import { X, Play, Volume2, Shield } from 'lucide-react';

interface WatchIntroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WatchIntroModal({ isOpen, onClose }: WatchIntroModalProps) {
  if (!isOpen) return null;

  return (
    <div id="intro-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        id="intro-modal-container"
        className="relative w-full max-w-4xl overflow-hidden bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center space-x-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-orange animate-pulse" />
            <h3 className="font-display font-medium text-white text-base">Susamskar Foundation - Watch Our Intro</h3>
          </div>
          <button 
            id="close-intro-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          {/* We will embed a high-quality relevant stock video from pexels or a beautiful education card */}
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0" 
            title="Susamskar Foundation Introduction"
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
          
          {/* Cover card overlay (pre-play) */}
          <div className="absolute inset-0 bg-slate-950/40 flex flex-col justify-end p-6 pointer-events-none">
            <div className="max-w-xl text-left bg-gradient-to-t from-black/80 to-transparent p-4 rounded-xl">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-bold">Documentary Intro</span>
              <h4 className="text-xl font-bold text-white font-display mt-1">Nurturing Character & Compassion</h4>
              <p className="text-xs text-slate-200 mt-1">Discover how our value education classes and community mentorship programs are shaping thousands of young lives across schools in IIT Kharagpur, Balarampur, and beyond.</p>
            </div>
          </div>
        </div>

        {/* Info Footer */}
        <div className="p-4 bg-slate-950 text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-brand-orange" />
            <span>Official Media Release — Susamskar Foundation © 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hover:text-white cursor-pointer transition-colors">Learn More</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Share Video</span>
          </div>
        </div>
      </div>
    </div>
  );
}
