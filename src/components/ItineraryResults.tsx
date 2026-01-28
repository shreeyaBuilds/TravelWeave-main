import React from 'react';
import { Share2, MapPin, Clock, Utensils, Lightbulb, ArrowLeft, Download } from 'lucide-react';
import { Itinerary } from '../types';
import { getCountryByCode } from '../data/locations';
import { generateItineraryPDF } from '../services/pdfService';

interface ItineraryResultsProps {
  itinerary: Itinerary;
  onShare: () => void;
  onBack: () => void;
}

export const ItineraryResults: React.FC<ItineraryResultsProps> = ({
  itinerary,
  onShare,
  onBack
}) => {
  const { tripInput, days } = itinerary;
  const country = getCountryByCode(tripInput.country);

  const destinationDisplay = tripInput.locations && tripInput.locations.length > 0
    ? tripInput.locations.join(', ')
    : country?.name || tripInput.country;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => generateItineraryPDF(itinerary)}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
              <button
                onClick={onShare}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Trip Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">{destinationDisplay}</h1>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="font-medium text-blue-900">Duration</div>
              <div className="text-blue-700">{days.length} days</div>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <div className="font-medium text-green-900">Budget</div>
              <div className="text-green-700">
                {tripInput.budget.currencySymbol}{tripInput.budget.min.toLocaleString()} - {tripInput.budget.currencySymbol}{tripInput.budget.max.toLocaleString()} {tripInput.budget.currency}
              </div>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <div className="font-medium text-purple-900">Style</div>
              <div className="text-purple-700">{tripInput.travelStyle}</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-3">
              <div className="font-medium text-orange-900">Dates</div>
              <div className="text-orange-700">
                {new Date(tripInput.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(tripInput.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
            </div>
          </div>
        </div>

        {/* Daily Itinerary */}
        <div className="space-y-6">
          {days.map((day) => (
            <div key={day.dayNumber} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Day Header */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
                <h2 className="text-2xl font-bold mb-1">Day {day.dayNumber}</h2>
                <p className="text-blue-100">{day.date}</p>
              </div>

              <div className="p-6">
                {/* Time Blocks */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* Morning */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-orange-500" />
                      <h3 className="font-semibold text-gray-900">Morning</h3>
                      <span className="text-sm text-gray-500">9:00 AM</span>
                    </div>
                    <p className="text-gray-700 bg-orange-50 rounded-lg p-3">{day.morning}</p>
                  </div>

                  {/* Afternoon */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <h3 className="font-semibold text-gray-900">Afternoon</h3>
                      <span className="text-sm text-gray-500">2:00 PM</span>
                    </div>
                    <p className="text-gray-700 bg-blue-50 rounded-lg p-3">{day.afternoon}</p>
                  </div>

                  {/* Evening */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-purple-500" />
                      <h3 className="font-semibold text-gray-900">Evening</h3>
                      <span className="text-sm text-gray-500">7:00 PM</span>
                    </div>
                    <p className="text-gray-700 bg-purple-50 rounded-lg p-3">{day.evening}</p>
                  </div>
                </div>

                {/* Food & Tips */}
                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                  {/* Food Suggestion */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Utensils className="w-5 h-5 text-green-600" />
                      <h3 className="font-semibold text-gray-900">Local Food</h3>
                    </div>
                    <p className="text-gray-700 bg-green-50 rounded-lg p-3">{day.foodSuggestion}</p>
                  </div>

                  {/* Travel Tip */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-600" />
                      <h3 className="font-semibold text-gray-900">Travel Tip</h3>
                    </div>
                    <p className="text-gray-700 bg-yellow-50 rounded-lg p-3">{day.travelTip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center space-y-4">
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => generateItineraryPDF(itinerary)}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Download className="w-5 h-5 inline mr-2" />
              Download PDF
            </button>
            <button
              onClick={onShare}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Share2 className="w-5 h-5 inline mr-2" />
              Share Itinerary
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Download your itinerary or share it with your group
          </p>
        </div>
      </div>
    </div>
  );
};