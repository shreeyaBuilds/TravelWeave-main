import React from 'react';
import { Plane, MapPin, Calendar } from 'lucide-react';

export const LoadingState: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Animated Icons */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center space-x-8">
            <div className="animate-bounce delay-0">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <div className="animate-bounce delay-150">
              <Plane className="w-8 h-8 text-green-600" />
            </div>
            <div className="animate-bounce delay-300">
              <Calendar className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Designing your perfect itinerary...
        </h2>
        
        <div className="space-y-2 text-gray-600">
          <p className="animate-pulse">🗺️ Analyzing your destination</p>
          <p className="animate-pulse delay-500">🎯 Finding the best activities</p>
          <p className="animate-pulse delay-1000">🍽️ Selecting local food experiences</p>
          <p className="animate-pulse delay-1500">✨ Adding insider travel tips</p>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          This usually takes 3-5 seconds...
        </p>
      </div>
    </div>
  );
};