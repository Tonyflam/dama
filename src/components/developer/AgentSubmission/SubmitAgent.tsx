import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import StepBasicInfo from './StepBasicInfo';
import StepRepository from './StepRepository';
import StepPricing from './StepPricing';
import StepReview from './StepReview';

export type AgentFormData = {
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  tags: string[];
  repositoryUrl: string;
  characterFile: File | null;
  version: string;
  pricingType: 'free' | 'one-time' | 'subscription';
  price: number;
  currency: 'ICP' | 'CHAT';
};

const steps = [
  { id: 1, title: 'Basic Info' },
  { id: 2, title: 'Repository & Files' },
  { id: 3, title: 'Pricing' },
  { id: 4, title: 'Review' }
];

const SubmitAgent: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<AgentFormData>({
    name: '',
    shortDescription: '',
    fullDescription: '',
    category: 'productivity',
    tags: [],
    repositoryUrl: '',
    characterFile: null,
    version: '1.0.0',
    pricingType: 'free',
    price: 0,
    currency: 'ICP'
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      console.log('Submitting:', formData);
      navigate('/developer/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/developer/dashboard');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={handleBack} 
        className="flex items-center gap-2 text-text-secondary hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        {currentStep === 1 ? 'Cancel' : 'Back'}
      </button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Submit New Agent</h1>
        <p className="text-text-secondary">Fill in the details to publish your AI agent to the marketplace.</p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-between items-center mb-12 relative">
        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-700 -z-10"></div>
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center bg-background px-4">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors ${
                step.id < currentStep 
                  ? 'bg-green-500 text-white' 
                  : step.id === currentStep 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-700 text-gray-400'
              }`}
            >
              {step.id < currentStep ? <Check className="w-6 h-6" /> : step.id}
            </div>
            <span className={`text-sm font-medium ${step.id === currentStep ? 'text-white' : 'text-gray-500'}`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>

      {/* Form Content */}
      <div className="bg-card rounded-xl border border-gray-700 p-8 mb-8">
        {currentStep === 1 && (
          <StepBasicInfo data={formData} updateData={(d) => setFormData({...formData, ...d})} />
        )}
        {currentStep === 2 && (
          <StepRepository data={formData} updateData={(d) => setFormData({...formData, ...d})} />
        )}
        {currentStep === 3 && (
          <StepPricing data={formData} updateData={(d) => setFormData({...formData, ...d})} />
        )}
        {currentStep === 4 && (
          <StepReview data={formData} />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-4">
        {currentStep > 1 && (
          <button 
            onClick={handleBack}
            className="px-6 py-3 text-text-secondary hover:text-white font-medium transition-colors"
          >
            Back
          </button>
        )}
        <button 
          onClick={handleNext}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-primary/25 transition-all"
        >
          {currentStep === steps.length ? 'Submit Agent' : 'Next Step'}
        </button>
      </div>
    </div>
  );
};

export default SubmitAgent;
