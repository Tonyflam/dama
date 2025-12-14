import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users } from 'lucide-react';
import { Agent } from '../types';
import { formatCHAT, formatICP } from '../utils/currency';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-gray-700 flex flex-col h-full group">
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-lg bg-background p-1 overflow-hidden border border-gray-600 group-hover:border-primary transition-colors">
            <img 
              src={agent.developer.avatar} 
              alt={agent.developer.name} 
              className="w-full h-full object-cover rounded"
            />
          </div>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wider ${
            agent.category === 'trading' ? 'bg-blue-900/50 text-blue-200 border border-blue-700' :
            agent.category === 'content' ? 'bg-purple-900/50 text-purple-200 border border-purple-700' :
            agent.category === 'community' ? 'bg-green-900/50 text-green-200 border border-green-700' :
            'bg-gray-700 text-gray-300 border border-gray-600'
          }`}>
            {agent.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">{agent.name}</h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2 flex-grow">{agent.description}</p>

        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-medium">{agent.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{agent.activeDeployments} active</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-700 flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-primary font-bold">{formatCHAT(agent.pricing.chatTokens)}</span>
            <span className="text-xs text-gray-500">≈ {formatICP(agent.pricing.icpEquivalent)}</span>
          </div>
          <Link 
            to={`/agent/${agent.id}`}
            className="bg-primary hover:bg-primary/90 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
