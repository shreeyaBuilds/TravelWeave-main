import React, { useState, useEffect } from 'react';
import { TripInputForm } from './components/TripInputForm';
import { LoadingState } from './components/LoadingState';
import { ItineraryResults } from './components/ItineraryResults';
import { ShareModal } from './components/ShareModal';
import { ItineraryService } from './services/itineraryService';
import { TripInput, Itinerary, AppState } from './types';

function App() {
  const [appState, setAppState] = useState<AppState>('input');
  const [currentItinerary, setCurrentItinerary] = useState<Itinerary | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  // Check for shared itinerary on load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const shareId = urlParams.get('share');
    
    if (shareId) {
      const sharedItinerary = ItineraryService.loadItinerary(shareId);
      if (sharedItinerary) {
        setCurrentItinerary(sharedItinerary);
        setAppState('shared');
        return;
      }
    }

    // Check for existing session itinerary
    const sessionItinerary = ItineraryService.loadItinerary();
    if (sessionItinerary) {
      setCurrentItinerary(sessionItinerary);
      setAppState('results');
    }
  }, []);

  const handleTripSubmit = async (tripInput: TripInput) => {
    setAppState('loading');
    
    try {
      const itinerary = await ItineraryService.generateItinerary(tripInput);
      ItineraryService.saveItinerary(itinerary);
      setCurrentItinerary(itinerary);
      setAppState('results');
    } catch (error) {
      console.error('Failed to generate itinerary:', error);
      setAppState('input');
      // In a real app, you'd show an error message here
    }
  };

  const handleShare = () => {
    if (currentItinerary) {
      const url = ItineraryService.generateShareUrl(currentItinerary.shareId);
      setShareUrl(url);
      setShowShareModal(true);
    }
  };

  const handleBack = () => {
    setAppState('input');
    setCurrentItinerary(null);
    // Clear URL params
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  const handleNewItinerary = () => {
    setAppState('input');
    setCurrentItinerary(null);
    sessionStorage.removeItem('currentItinerary');
    // Clear URL params
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  return (
    <>
      {appState === 'input' && (
        <TripInputForm 
          onSubmit={handleTripSubmit} 
          isLoading={appState === 'loading'} 
        />
      )}

      {appState === 'loading' && <LoadingState />}

      {(appState === 'results' || appState === 'shared') && currentItinerary && (
        <ItineraryResults
          itinerary={currentItinerary}
          onShare={handleShare}
          onBack={appState === 'shared' ? handleNewItinerary : handleBack}
        />
      )}

      {showShareModal && (
        <ShareModal
          shareUrl={shareUrl}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </>
  );
}

export default App;