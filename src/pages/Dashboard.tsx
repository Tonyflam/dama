import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Trash2, FileText, Settings, Copy, ExternalLink, Activity } from 'lucide-react';
import { MOCK_DEPLOYMENTS } from '../data/mockData';
import { copyToClipboard } from '../utils/clipboard';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">My Agents</h1>
        <Link 
          to="/" 
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          + Deploy New Agent
        </Link>
      </div>

      <div className="space-y-6">
        {MOCK_DEPLOYMENTS.map((deployment) => (
          <div key={deployment.id} className="bg-card rounded-xl border border-gray-700 overflow-hidden shadow-lg hover:border-gray-600 transition-colors">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-xl font-bold text-white">{deployment.agentName}</h2>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-1 ${
                      deployment.status === 'running' ? 'bg-green-900/50 text-green-400 border border-green-800' :
                      deployment.status === 'paused' ? 'bg-yellow-900/50 text-yellow-400 border border-yellow-800' :
                      'bg-red-900/50 text-red-400 border border-red-800'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        deployment.status === 'running' ? 'bg-green-400 animate-pulse' :
                        deployment.status === 'paused' ? 'bg-yellow-400' :
                        'bg-red-400'
                      }`}></span>
                      {deployment.status}
                    </span>
                  </div>
                  <div className="text-sm text-text-secondary flex items-center gap-4">
                    <span>ID: {deployment.id}</span>
                    <span>Deployed: {new Date(deployment.deployedAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right hidden md:block">
                    <div className="text-sm text-gray-400">Uptime</div>
                    <div className="text-lg font-bold text-white">{deployment.uptime}%</div>
                  </div>
                  <div className="text-right hidden md:block">
                    <div className="text-sm text-gray-400">Messages</div>
                    <div className="text-lg font-bold text-white">{deployment.messagesSent.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-background rounded-lg p-3 border border-gray-700 flex items-center justify-between group">
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Principal ID</span>
                    <code className="text-sm text-primary font-mono truncate">{deployment.principalId}</code>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(deployment.principalId)}
                    className="text-gray-500 hover:text-white p-2 rounded transition-colors opacity-0 group-hover:opacity-100"
                    title="Copy Principal ID"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-background rounded-lg p-3 border border-gray-700 flex items-center justify-between group">
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Endpoint</span>
                    <code className="text-sm text-primary font-mono truncate">{deployment.endpoint}</code>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(deployment.endpoint)}
                    className="text-gray-500 hover:text-white p-2 rounded transition-colors opacity-0 group-hover:opacity-100"
                    title="Copy Endpoint"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-700">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium transition-colors">
                  <Activity className="w-4 h-4" /> View Logs
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium transition-colors">
                  <Settings className="w-4 h-4" /> Reconfigure
                </button>
                {deployment.status === 'running' ? (
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-yellow-400 text-sm font-medium transition-colors">
                    <Pause className="w-4 h-4" /> Pause
                  </button>
                ) : (
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-green-400 text-sm font-medium transition-colors">
                    <Play className="w-4 h-4" /> Resume
                  </button>
                )}
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-red-900/50 text-red-400 text-sm font-medium transition-colors ml-auto">
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        {MOCK_DEPLOYMENTS.length === 0 && (
          <div className="text-center py-20 bg-card rounded-xl border border-gray-700 border-dashed">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No Agents Deployed</h3>
            <p className="text-text-secondary mb-6">You haven't deployed any agents yet.</p>
            <Link 
              to="/" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Browse Marketplace
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
