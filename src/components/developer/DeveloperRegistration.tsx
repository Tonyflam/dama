import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Wallet, Loader2 } from 'lucide-react';

const DeveloperRegistration: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Smith',
    username: 'johnsmith',
    email: 'john@example.com',
    bio: 'AI developer specializing in trading bots and automation. 5 years experience with machine learning...',
    website: 'https://johnsmith.dev',
    github: 'https://github.com/johnsmith',
    twitter: '@johnsmith',
    icpWallet: 'icp1-2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m',
    agreeTerms: false,
    confirmRights: false,
    maintainAgent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/developer/dashboard');
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button 
        onClick={() => navigate('/developer')} 
        className="flex items-center gap-2 text-text-secondary hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="bg-card rounded-xl border border-gray-700 overflow-hidden shadow-lg">
        <div className="p-6 border-b border-gray-700 bg-gray-800/50">
          <h1 className="text-2xl font-bold text-white">Become a Developer</h1>
          <p className="text-text-secondary">Join the marketplace to publish agents and earn revenue.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Developer Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Developer Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Developer Name *</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Username *</label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">@</span>
                  <input 
                    type="text" 
                    required
                    value={formData.username}
                    onChange={e => setFormData({...formData, username: e.target.value})}
                    className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 pl-8 text-white focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Bio</label>
              <textarea 
                rows={4}
                value={formData.bio}
                onChange={e => setFormData({...formData, bio: e.target.value})}
                className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white focus:border-primary focus:outline-none resize-none"
                placeholder="Tell users about yourself..."
              />
              <div className="text-right text-xs text-gray-500 mt-1">{formData.bio.length}/500</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Website</label>
                <input 
                  type="url" 
                  value={formData.website}
                  onChange={e => setFormData({...formData, website: e.target.value})}
                  className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">GitHub</label>
                <input 
                  type="url" 
                  value={formData.github}
                  onChange={e => setFormData({...formData, github: e.target.value})}
                  className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Twitter/X</label>
                <input 
                  type="text" 
                  value={formData.twitter}
                  onChange={e => setFormData({...formData, twitter: e.target.value})}
                  className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Payout Info */}
          <div className="space-y-4 pt-4 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Payout Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">ICP Wallet Address *</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  required
                  value={formData.icpWallet}
                  onChange={e => setFormData({...formData, icpWallet: e.target.value})}
                  className="flex-grow bg-background border border-gray-600 rounded-lg py-2 px-4 text-white focus:border-primary focus:outline-none font-mono"
                />
                <button type="button" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                  <Wallet className="w-4 h-4" /> Verify
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Payments are sent weekly. Minimum payout threshold is $50.</p>
            </div>
          </div>

          {/* Terms */}
          <div className="space-y-3 pt-4 border-t border-gray-700 bg-gray-800/30 p-4 rounded-lg">
            <label className="flex items-start gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                required
                checked={formData.agreeTerms}
                onChange={e => setFormData({...formData, agreeTerms: e.target.checked})}
                className="mt-1 w-4 h-4 rounded border-gray-600 text-primary focus:ring-primary bg-background" 
              />
              <span className="text-sm text-gray-300">I agree to the Developer Terms and Conditions</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                required
                checked={formData.confirmRights}
                onChange={e => setFormData({...formData, confirmRights: e.target.checked})}
                className="mt-1 w-4 h-4 rounded border-gray-600 text-primary focus:ring-primary bg-background" 
              />
              <span className="text-sm text-gray-300">I confirm I own the rights to any agents I submit</span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                required
                checked={formData.maintainAgent}
                onChange={e => setFormData({...formData, maintainAgent: e.target.checked})}
                className="mt-1 w-4 h-4 rounded border-gray-600 text-primary focus:ring-primary bg-background" 
              />
              <span className="text-sm text-gray-300">I will maintain my agents and fix critical issues</span>
            </label>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button 
              type="button"
              onClick={() => navigate('/developer')}
              className="px-6 py-2 text-text-secondary hover:text-white font-medium transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-lg font-bold shadow-lg shadow-primary/25 transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Register Developer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeveloperRegistration;
