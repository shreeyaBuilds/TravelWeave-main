import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Calendar, DollarSign, Users, Sparkles, X } from 'lucide-react';
import { TripInput } from '../types';
import { COUNTRIES, getCountryByCode } from '../data/countries';

interface TripInputFormProps {
  onSubmit: (tripInput: TripInput) => void;
  isLoading: boolean;
}

/* ✅ Initial form state (used for reset) */
const INITIAL_FORM_STATE: TripInput = {
  country: '',
  locations: [],
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
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedCountry = getCountryByCode(formData.country);
  const availableLocations = selectedCountry?.locations || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.country && formData.startDate && formData.endDate) {
      onSubmit(formData);
    }
  };

  const handleCountryChange = (countryCode: string) => {
    setFormData({
      ...formData,
      country: countryCode,
      locations: []
    });
  };

  const toggleLocation = (location: string) => {
    setFormData(prev => ({
      ...prev,
      locations: prev.locations.includes(location)
        ? prev.locations.filter(l => l !== location)
        : [...prev.locations, location]
    }));
  };

  const removeLocation = (location: string) => {
    setFormData(prev => ({
      ...prev,
      locations: prev.locations.filter(l => l !== location)
    }));
  };

  /* ✅ Reset handler */
  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setShowLocationDropdown(false);
  };

  // ✅ Generic example (NOT forced to Goa)
  const fillExample = () => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 7);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 2);

    setFormData({
      country: 'india',
      locations: ['Goa'],
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      budget: 'Medium',
      travelStyle: 'Couple'
    });
  };

  const isFormValid =
    formData.country && formData.startDate && formData.endDate;

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
            Generate your perfect itinerary in minutes
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
          {/* Country Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-1" />
              Select Country
            </label>
            <select
              value={formData.country}
              onChange={(e) => handleCountryChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            >
              <option value="">Choose a country...</option>
              {COUNTRIES.map(country => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Location Multi-Select */}
          {formData.country && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cities & States (Optional)
              </label>

              {/* Selected Locations */}
              {formData.locations.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.locations.map(location => (
                    <span
                      key={location}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {location}
                      <button
                        type="button"
                        onClick={() => removeLocation(location)}
                        className="hover:bg-blue-200 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {/* Location Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left flex items-center justify-between hover:border-gray-400 transition-all"
                >
                  <span className="text-gray-600">
                    {formData.locations.length === 0
                      ? 'Select locations (or leave empty for whole country)'
                      : `${formData.locations.length} location${formData.locations.length > 1 ? 's' : ''} selected`}
                  </span>
                  <span className="text-gray-400">▼</span>
                </button>

                {showLocationDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {availableLocations.map(location => (
                      <label
                        key={location}
                        className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.locations.includes(location)}
                          onChange={() => toggleLocation(location)}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-gray-700">{location}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

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
                min={new Date().toISOString().split('T')[0]}
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
                min={formData.startDate || new Date().toISOString().split('T')[0]}
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