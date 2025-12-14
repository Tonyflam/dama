import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save, RefreshCw } from 'lucide-react';

const DeveloperSettings: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/developer/dashboard" className="text-text-secondary hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold text-white">Developer Settings</h1>
      </div>

      <div className="space-y-8">
        {/* Profile Info */}
        <div className="bg-card rounded-xl border border-gray-700 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Profile Information</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Developer Name</label>
                <input type="text" defaultValue="John Smith" className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
                <input type="text" defaultValue="@cryptodev" disabled className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-gray-400 cursor-not-allowed" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input type="email" defaultValue="john@crypto.dev" className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white" />
            </div>
          </div>
        </div>

        {/* Payout Settings */}
        <div className="bg-card rounded-xl border border-gray-700 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Payout Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">ICP Wallet Address</label>
              <div className="flex gap-2">
                <input type="text" defaultValue="icp1-2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m" className="flex-grow bg-background border border-gray-600 rounded-lg py-2 px-4 text-white font-mono" />
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium">Change</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Payout Frequency</label>
                <select className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white">
                  <option>Weekly</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Minimum Threshold</label>
                <select className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white">
                  <option>$50</option>
                  <option>$100</option>
                  <option>$500</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-card rounded-xl border border-gray-700 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Notifications</h2>
          <div className="space-y-3">
            {['New purchase notifications', 'New review notifications', 'Payout confirmations', 'Support ticket updates'].map((item, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-600 text-primary focus:ring-primary bg-background" />
                <span className="text-gray-300">{item}</span>
              </label>
            ))}
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-primary focus:ring-primary bg-background" />
              <span className="text-gray-300">Marketing emails</span>
            </label>
          </div>
        </div>

        {/* API Access */}
        <div className="bg-card rounded-xl border border-gray-700 p-6">
          <h2 className="text-xl font-bold text-white mb-6">API Access</h2>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">API Key</label>
            <div className="flex gap-2">
              <input type="password" value="mk_live_x7k9m2n4p5q8r3s1t6u9v0w2" readOnly className="flex-grow bg-background border border-gray-600 rounded-lg py-2 px-4 text-gray-400 font-mono" />
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium flex items-center gap-2">
                <RefreshCw className="w-4 h-4" /> Regenerate
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Keep this key secret. It allows full access to your developer account.</p>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-primary/25 transition-all flex items-center gap-2">
            <Save className="w-5 h-5" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSettings;
