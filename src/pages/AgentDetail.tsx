import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, CheckCircle, Shield, Zap, Code } from 'lucide-react';
import { MOCK_AGENTS } from '../data/mockData';
import { formatCHAT, formatICP } from '../utils/currency';

const AgentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const agent = MOCK_AGENTS.find(a => a.id === id);

  if (!agent) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white">Agent not found</h2>
        <Link to="/" className="text-primary hover:underline mt-4 inline-block">Return to Marketplace</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-text-secondary hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Marketplace
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Main Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header Card */}
          <div className="bg-card rounded-xl p-6 border border-gray-700 shadow-lg">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-background p-2 border border-gray-600 flex-shrink-0">
                <img 
                  src={agent.developer.avatar} 
                  alt={agent.name} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{agent.name}</h1>
                    <div className="flex items-center gap-2 text-text-secondary mb-4">
                      <span>by {agent.developer.username}</span>
                      <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-medium text-white">{agent.rating}</span>
                        <span className="text-gray-500">({agent.totalReviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <span className={`hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    agent.category === 'trading' ? 'bg-blue-900/50 text-blue-200 border border-blue-700' :
                    agent.category === 'content' ? 'bg-purple-900/50 text-purple-200 border border-purple-700' :
                    agent.category === 'community' ? 'bg-green-900/50 text-green-200 border border-green-700' :
                    'bg-gray-700 text-gray-300 border border-gray-600'
                  }`}>
                    {agent.category}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">{agent.longDescription}</p>
              </div>
            </div>
          </div>

          {/* Features & Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Capabilities
              </h3>
              <ul className="space-y-3">
                {agent.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-secondary" />
                Requirements
              </h3>
              <ul className="space-y-3">
                {agent.requirements.length > 0 ? (
                  agent.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${req.required ? 'bg-red-400' : 'bg-gray-400'}`}></div>
                      <div>
                        <span className="font-medium text-white block">{req.name}</span>
                        <span className="text-sm text-gray-500">{req.description}</span>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400 italic">No specific requirements.</li>
                )}
              </ul>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-card rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-6">Reviews</h3>
            <div className="space-y-6">
              {agent.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-700 last:border-0 pb-6 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xs font-bold">
                        {review.username.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="font-medium text-white">@{review.username}</span>
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Pricing & CTA */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl p-6 border border-gray-700 shadow-lg sticky top-24">
            <h3 className="text-lg font-medium text-gray-400 mb-2">One-time Purchase</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold text-white">{formatCHAT(agent.pricing.chatTokens)}</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">≈ {formatICP(agent.pricing.icpEquivalent)}</p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Shield className="w-4 h-4 text-accent" />
                <span>Verified Developer</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Instant Deployment</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>24/7 Support</span>
              </div>
            </div>

            <Link 
              to={`/payment/${agent.id}`}
              className="block w-full bg-primary hover:bg-primary/90 text-white text-center font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/25"
            >
              Purchase & Deploy
            </Link>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              100% Money-back guarantee for 7 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetail;
