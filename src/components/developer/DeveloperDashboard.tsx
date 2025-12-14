import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, DollarSign, Users, Box, Settings, BarChart2, Edit, Eye, Trash2 } from 'lucide-react';
import StatsCard from './shared/StatsCard';
import AgentStatusBadge from './shared/AgentStatusBadge';
import { MOCK_SUBMISSIONS } from '../../data/mockData';

const DeveloperDashboard: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Developer Dashboard</h1>
          <p className="text-text-secondary">Welcome back, @cryptodev</p>
        </div>
        <div className="flex gap-3">
          <Link 
            to="/developer/earnings"
            className="bg-card hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium border border-gray-600 transition-colors flex items-center gap-2"
          >
            <BarChart2 className="w-4 h-4" /> View Earnings
          </Link>
          <Link 
            to="/developer/submit"
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium shadow-lg shadow-primary/25 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Submit New Agent
          </Link>
          <Link 
            to="/developer/settings"
            className="bg-card hover:bg-gray-700 text-white p-2 rounded-lg border border-gray-600 transition-colors"
          >
            <Settings className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard 
          title="Total Earnings" 
          value="$12,450" 
          subtitle="+$2,450 this month" 
          icon={<DollarSign className="w-6 h-6" />} 
        />
        <StatsCard 
          title="Active Users" 
          value="847" 
          subtitle="+124 this week" 
          icon={<Users className="w-6 h-6" />} 
        />
        <StatsCard 
          title="Published Agents" 
          value="3" 
          subtitle="1 pending review" 
          icon={<Box className="w-6 h-6" />} 
        />
      </div>

      {/* Agent List */}
      <div className="bg-card rounded-xl border border-gray-700 overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Your Agents</h2>
        </div>
        <div className="divide-y divide-gray-700">
          {MOCK_SUBMISSIONS.map((agent) => (
            <div key={agent.id} className="p-6 hover:bg-gray-800/50 transition-colors">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-background border border-gray-600 overflow-hidden flex-shrink-0">
                    <img src={agent.iconUrl} alt={agent.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-white">{agent.name}</h3>
                      <AgentStatusBadge status={agent.status} />
                    </div>
                    <div className="text-sm text-text-secondary flex items-center gap-4">
                      <span>Submitted: {new Date(agent.submittedAt).toLocaleDateString()}</span>
                      {agent.status === 'published' && (
                        <>
                          <span>•</span>
                          <span>342 users</span>
                          <span>•</span>
                          <span className="text-green-400">$1,250/mo</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link 
                    to={`/developer/agents/${agent.id}`}
                    className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" /> Details
                  </Link>
                  <button className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors flex items-center gap-2">
                    <BarChart2 className="w-4 h-4" /> Analytics
                  </button>
                  <button className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-card rounded-xl border border-gray-700 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { text: 'New purchase: Crypto Trading Bot (+$100)', time: '2 hours ago', icon: <DollarSign className="w-4 h-4 text-green-400" /> },
            { text: 'Review received: 5 stars on Content Creator', time: '5 hours ago', icon: <Users className="w-4 h-4 text-blue-400" /> },
            { text: 'Agent deployed: 3 new users today', time: '1 day ago', icon: <Box className="w-4 h-4 text-purple-400" /> }
          ].map((activity, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                {activity.icon}
              </div>
              <span className="text-gray-300 flex-grow">{activity.text}</span>
              <span className="text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperDashboard;
