import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, Globe, Wrench, BarChart2, ArrowRight } from 'lucide-react';

const DeveloperHub: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Link to="/" className="flex items-center gap-2 text-text-secondary hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Marketplace
      </Link>

      <div className="text-center py-16 space-y-6">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Build & Monetize AI Agents
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Join hundreds of developers earning from their AI agents on OpenChat's marketplace.
          Deploy instantly to thousands of users.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link 
            to="/developer/register"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg shadow-primary/25 transition-all hover:scale-105 flex items-center gap-2"
          >
            Become a Developer <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="bg-card hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium border border-gray-600 transition-colors">
            View Documentation
          </button>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div className="bg-card p-6 rounded-xl border border-gray-700">
          <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-4 text-green-400">
            <DollarSign className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Earn Money</h3>
          <p className="text-text-secondary text-sm">Keep 85% of all sales and subscriptions. Payouts in ICP or CHAT tokens.</p>
        </div>
        <div className="bg-card p-6 rounded-xl border border-gray-700">
          <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-400">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Reach Users</h3>
          <p className="text-text-secondary text-sm">Instantly access 10k+ active OpenChat users looking for AI tools.</p>
        </div>
        <div className="bg-card p-6 rounded-xl border border-gray-700">
          <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 text-purple-400">
            <Wrench className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Easy Setup</h3>
          <p className="text-text-secondary text-sm">Simple submission process. Just upload your ElizaOS character file.</p>
        </div>
        <div className="bg-card p-6 rounded-xl border border-gray-700">
          <div className="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 text-orange-400">
            <BarChart2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Analytics</h3>
          <p className="text-text-secondary text-sm">Track revenue, usage, and user feedback in real-time.</p>
        </div>
      </div>

      {/* How it Works */}
      <div className="bg-card rounded-2xl border border-gray-700 p-8 md:p-12 mb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-700 -z-10"></div>
          
          {[
            { step: 1, title: 'Build Agent', desc: 'Create your agent using ElizaOS framework' },
            { step: 2, title: 'Submit', desc: 'Upload character file and configure settings' },
            { step: 3, title: 'Set Pricing', desc: 'Choose subscription or one-time fee' },
            { step: 4, title: 'Start Earning', desc: 'Get paid automatically when users deploy' }
          ].map((item) => (
            <div key={item.step} className="text-center bg-card">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-card relative z-10">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Spotlight */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8">Developer Spotlight</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: '@cryptodev', agents: 5, earned: '$12,450', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' },
            { name: '@aibuilder', agents: 3, earned: '$8,920', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice' },
            { name: '@botmaster', agents: 7, earned: '$15,780', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bot' }
          ].map((dev, i) => (
            <div key={i} className="bg-card p-6 rounded-xl border border-gray-700 flex items-center gap-4">
              <img src={dev.avatar} alt={dev.name} className="w-12 h-12 rounded-full bg-gray-800" />
              <div>
                <h4 className="font-bold text-white">{dev.name}</h4>
                <p className="text-sm text-text-secondary">{dev.agents} agents • <span className="text-green-400">{dev.earned} earned</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperHub;
