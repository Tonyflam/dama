import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Users, MessageSquare, Clock, AlertCircle } from 'lucide-react';
import AgentStatusBadge from './shared/AgentStatusBadge';
import { MOCK_SUBMISSIONS } from '../../data/mockData';

const ManageAgent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const agent = MOCK_SUBMISSIONS.find(a => a.id === id);

  if (!agent) return <div>Agent not found</div>;

  return (
    <div className="max-w-5xl mx-auto">
      <Link to="/developer/dashboard" className="flex items-center gap-2 text-text-secondary hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>

      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-background border border-gray-600 overflow-hidden">
            <img src={agent.iconUrl} alt={agent.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">{agent.name}</h1>
            <div className="flex items-center gap-3">
              <AgentStatusBadge status={agent.status} />
              <span className="text-text-secondary text-sm">Last updated: Dec 10, 2024</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-card hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium border border-gray-600 transition-colors">
            Unpublish
          </button>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium shadow-lg shadow-primary/25 transition-colors">
            Edit Details
          </button>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-card p-6 rounded-xl border border-gray-700">
          <div className="text-text-secondary text-sm mb-1">Revenue (30d)</div>
          <div className="text-2xl font-bold text-white">$1,250</div>
        </div>
        <div className="bg-card p-6 rounded-xl border border-gray-700">
          <div className="text-text-secondary text-sm mb-1">Active Users</div>
          <div className="text-2xl font-bold text-white">342</div>
        </div>
        <div className="bg-card p-6 rounded-xl border border-gray-700">
          <div className="text-text-secondary text-sm mb-1">Avg Rating</div>
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            4.8 <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </div>
        </div>
        <div className="bg-card p-6 rounded-xl border border-gray-700">
          <div className="text-text-secondary text-sm mb-1">Support Tickets</div>
          <div className="text-2xl font-bold text-white">3</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Reviews */}
          <div className="bg-card rounded-xl border border-gray-700 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Recent Reviews</h2>
              <button className="text-primary hover:underline text-sm">View All</button>
            </div>
            <div className="space-y-6">
              {[
                { user: '@user123', rating: 5, text: "Best trading bot I've used! Alerts are super fast.", date: 'Dec 13' },
                { user: '@trader99', rating: 4, text: "Great bot but wish it had more coins supported.", date: 'Dec 12' }
              ].map((review, i) => (
                <div key={i} className="border-b border-gray-700 last:border-0 pb-6 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{review.user}</span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className={`w-3 h-3 ${j < review.rating ? 'fill-current' : 'text-gray-600'}`} />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{review.text}</p>
                  <button className="text-xs text-primary hover:text-primary/80 flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" /> Reply
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Version History */}
          <div className="bg-card rounded-xl border border-gray-700 p-6">
            <h2 className="text-xl font-bold text-white mb-6">Version History</h2>
            <div className="space-y-6 relative">
              <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gray-700"></div>
              {[
                { ver: 'v1.2.0', date: 'Dec 10, 2024', notes: ['Added 20 new cryptocurrencies', 'Fixed alert delay bug'], current: true },
                { ver: 'v1.1.0', date: 'Dec 1, 2024', notes: ['Initial marketplace release'], current: false }
              ].map((ver, i) => (
                <div key={i} className="relative pl-8">
                  <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${ver.current ? 'bg-primary border-primary' : 'bg-gray-800 border-gray-600'}`}></div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="font-bold text-white mr-2">{ver.ver}</span>
                      {ver.current && <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Current</span>}
                    </div>
                    <span className="text-sm text-gray-500">{ver.date}</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {ver.notes.map((note, j) => (
                      <li key={j}>{note}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-card rounded-xl border border-gray-700 p-6">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-400" /> Support Queue
            </h3>
            <div className="space-y-4">
              <div className="bg-background p-3 rounded-lg border border-gray-700">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Ticket #1234</span>
                  <span>2h ago</span>
                </div>
                <p className="text-sm text-white font-medium">Bot not connecting to wallet</p>
              </div>
              <div className="bg-background p-3 rounded-lg border border-gray-700">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Ticket #1235</span>
                  <span>5h ago</span>
                </div>
                <p className="text-sm text-white font-medium">Refund request</p>
              </div>
              <button className="w-full text-center text-sm text-primary hover:underline mt-2">View all tickets</button>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-gray-700 p-6">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" /> Active Deployments
            </h3>
            <div className="text-center py-4">
              <div className="text-4xl font-bold text-white mb-2">342</div>
              <p className="text-sm text-text-secondary">Users currently running this agent</p>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>98% Healthy</span>
              <span>2% Errors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAgent;
