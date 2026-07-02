import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import WhoWeAreView from './components/WhoWeAreView';
import WhatWeDoView from './components/WhatWeDoView';
import GalleryView from './components/GalleryView';
import DonateView from './components/DonateView';
import VolunteeringView from './components/VolunteeringView';
import OurTeamView from './components/OurTeamView';
import WatchIntroModal from './components/WatchIntroModal';
import DonationModal from './components/DonationModal';
import VolunteerModal from './components/VolunteerModal';
import { ViewType } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [initialProjectForWhatWeDo, setInitialProjectForWhatWeDo] = useState<string | null>(null);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [isWatchIntroOpen, setIsWatchIntroOpen] = useState(false);

  const handleViewChange = (view: ViewType, initialProject?: string | null) => {
    if (view === 'projects' && initialProject) {
      setInitialProjectForWhatWeDo(initialProject);
    } else if (view !== 'projects') {
      setInitialProjectForWhatWeDo(null);
    }
    setCurrentView(view);
  };

  // Automatically scroll to the top of the page when changing tabs/views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div id="root-app-container" className="min-h-screen bg-white flex flex-col font-sans selection:bg-brand-orange/10 selection:text-brand-orange">
      
      {/* GLOBAL HEADER BAR & NAVIGATION */}
      <Header 
        currentView={currentView}
        onViewChange={handleViewChange}
        onOpenDonate={() => handleViewChange('donate')}
        onOpenVolunteer={() => handleViewChange('volunteer')}
      />

      {/* RENDER THE SELECTED PAGE VIEW COMPONENT */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView 
            onViewChange={handleViewChange}
            onOpenDonate={() => handleViewChange('donate')}
            onOpenVolunteer={() => handleViewChange('volunteer')}
            onOpenWatchIntro={() => setIsWatchIntroOpen(true)}
          />
        )}

        {currentView === 'about' && (
          <WhoWeAreView 
            onViewChange={handleViewChange}
            onOpenDonate={() => handleViewChange('donate')}
            onOpenVolunteer={() => handleViewChange('volunteer')}
            onOpenWatchIntro={() => setIsWatchIntroOpen(true)}
          />
        )}

        {currentView === 'projects' && (
          <WhatWeDoView 
            initialDetailProject={initialProjectForWhatWeDo}
            onClearInitialDetailProject={() => setInitialProjectForWhatWeDo(null)}
            onOpenDonate={() => handleViewChange('donate')}
            onOpenVolunteer={() => handleViewChange('volunteer')}
            onViewChange={handleViewChange}
          />
        )}

        {currentView === 'gallery' && (
          <GalleryView onViewChange={handleViewChange} />
        )}

        {currentView === 'donate' && (
          <DonateView onViewChange={handleViewChange} />
        )}

        {currentView === 'volunteer' && (
          <VolunteeringView onViewChange={handleViewChange} />
        )}

        {currentView === 'team' && (
          <OurTeamView 
            onViewChange={handleViewChange}
            onOpenDonate={() => handleViewChange('donate')}
            onOpenVolunteer={() => handleViewChange('volunteer')}
            onOpenWatchIntro={() => setIsWatchIntroOpen(true)}
          />
        )}
      </main>

      {/* GLOBAL FOOTER COMPONENT */}
      <Footer 
        onViewChange={handleViewChange}
        onOpenDonate={() => handleViewChange('donate')}
        onOpenVolunteer={() => handleViewChange('volunteer')}
      />

      {/* INTERACTIVE COMPREHENSIVE OVERLAY MODALS */}
      <WatchIntroModal 
        isOpen={isWatchIntroOpen}
        onClose={() => setIsWatchIntroOpen(false)}
      />

      <DonationModal 
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
      />

      <VolunteerModal 
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />

    </div>
  );
}
