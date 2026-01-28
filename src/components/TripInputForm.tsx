import React, { useState } from 'react';
import { MapPin, Calendar, DollarSign, Users, Sparkles } from 'lucide-react';
import { TripInput } from '../types';

interface TripInputFormProps {
  onSubmit: (tripInput: TripInput) => void;
  isLoading: boolean;
}

/* ✅ Initial form state (used for reset) */
const INITIAL_FORM_STATE: TripInput = {
  destination: '',
  startDate: '',
  endDate: '',
  budget: 'Medium',
  travelStyle: 'Solo'
};

export const TripInputForm: React.FC<TripInputFormProps> = ({
  onSubmit,
  isLoading
}) => {
  const [formData, setFormData] = useState<TripInput>(INITIAL_FORM_STATE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.destination && formData.startDate && formData.endDate) {
      onSubmit(formData);
    }
  };

  /* ✅ Reset handler */
  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
  };

  // ✅ Generic example (NOT forced to Goa)
  const fillExample = () => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 7);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 2);

    setFormData((prev) => ({
      ...prev,
      destination: prev.destination || 'Goa',
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      budget: 'Medium',
      travelStyle: 'Couple'
    }));
  };

  const isFormValid =
    formData.destination && formData.startDate && formData.endDate;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Travel Planner
          </h1>
          <p className="text-gray-600">
            Generate your perfect itinerary for Goa/Tokyo/Paris in minutes
          </p>
        </div>

        {/* Example Button */}
        <button
          type="button"
          onClick={fillExample}
          className="w-full mb-6 p-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-lg font-medium hover:from-orange-500 hover:to-pink-500 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Plan Your Travel For Goa
        </button>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-6 space-y-6"
        >
          {/* Destination */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-1" />
              Where are you going?
            </label>
            <input
              type="text"
              value={formData.destination}
              onChange={(e) =>
                setFormData({ ...formData, destination: e.target.value })
              }
              placeholder="e.g., Paris, Tokyo, Goa"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Start Date
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="w-4 h-4 inline mr-1" />
              Budget
            </label>
            <select
              value={formData.budget}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  budget: e.target.value as TripInput['budget']
                })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            >
              <option value="Low">Budget-friendly</option>
              <option value="Medium">Moderate</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

          {/* Travel Style */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="w-4 h-4 inline mr-1" />
              Travel Style
            </label>
            <select
              value={formData.travelStyle}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  travelStyle: e.target.value as TripInput['travelStyle']
                })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            >
              <option value="Solo">Solo Adventure</option>
              <option value="Couple">Romantic Getaway</option>
              <option value="Family">Family Trip</option>
              <option value="Group">Group Travel</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-lg font-semibold text-lg disabled:opacity-50"
          >
            {isLoading
              ? 'Generating Your Itinerary...'
              : 'Generate Itinerary'}
          </button>

          {/* ✅ Reset Button */}
          <button
            type="button"
            onClick={handleReset}
            disabled={isLoading}
            className="w-full mt-3 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all disabled:opacity-50"
          >
            Reset Form
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          AI-generated suggestions. Please verify timings & availability.
        </p>
      </div>
    </div>
  );
};