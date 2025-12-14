import React, { useState } from 'react';
import AgentCard from '../components/AgentCard';
import { MOCK_AGENTS } from '../data/mockData';
import { Agent } from '../types';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredAgents = selectedCategory === 'all' 
    ? MOCK_AGENTS 
    : MOCK_AGENTS.filter(agent => agent.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Agents' },
    { id: 'trading', label: 'Trading' },
    { id: 'content', label: 'Content' },
    { id: 'community', label: 'Community' },
    { id: 'utility', label: 'Utility' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Discover AI Agents for OpenChat
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Build, Deploy, and Monetize Intelligent Bots. Enhance your community with powerful AI tools.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                : 'bg-card text-text-secondary hover:bg-gray-700 hover:text-white'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Agent Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAgents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>

      {filteredAgents.length === 0 && (
        <div className="text-center py-20 text-text-secondary">
          <p className="text-lg">No agents found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
