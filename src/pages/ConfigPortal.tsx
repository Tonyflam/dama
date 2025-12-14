import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Save, RefreshCw, CheckCircle, Copy, ExternalLink, Play, Terminal } from 'lucide-react';
import { MOCK_AGENTS } from '../data/mockData';
import { generatePrincipalId, generateEndpoint } from '../utils/generators';
import { copyToClipboard } from '../utils/clipboard';

const ConfigPortal: React.FC = () => {
  const { deploymentId } = useParams<{ deploymentId: string }>();
  const [searchParams] = useSearchParams();
  const agentId = searchParams.get('agentId');
  const agent = MOCK_AGENTS.find(a => a.id === agentId);

  const [step, setStep] = useState(1);
  const [characterJson, setCharacterJson] = useState('');
  const [envVars, setEnvVars] = useState<Record<string, string>>({});
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployProgress, setDeployProgress] = useState(0);
  const [deploymentResult, setDeploymentResult] = useState<{ principal: string, endpoint: string } | null>(null);

  useEffect(() => {
    if (agent) {
      setCharacterJson(JSON.stringify(agent.characterFile, null, 2));
      const initialEnv: Record<string, string> = {};
      agent.requirements.forEach(req => {
        if (req.name.includes('API Key') || req.name.includes('Token') || req.name.includes('Secret')) {
          initialEnv[req.name] = '';
        }
      });
      setEnvVars(initialEnv);
    }
  }, [agent]);

  const handleDeploy = () => {
    setIsDeploying(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setDeployProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsDeploying(false);
        setDeploymentResult({
          principal: generatePrincipalId(),
          endpoint: generateEndpoint(deploymentId || 'unknown')
        });
      }
    }, 150); // 3 seconds total
  };

  if (!agent) return <div>Agent not found</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Configure Your Agent</h1>
        <div className="flex items-center gap-2 text-text-secondary text-sm">
          <span>Deployment ID:</span>
          <code className="bg-gray-800 px-2 py-1 rounded text-gray-300">{deploymentId}</code>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8 relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-700 -z-10"></div>
        {[1, 2, 3].map((s) => (
          <div 
            key={s}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
              step >= s ? 'bg-primary text-white' : 'bg-gray-700 text-gray-400'
            }`}
          >
            {step > s ? <CheckCircle className="w-6 h-6" /> : s}
          </div>
        ))}
      </div>

      {/* Step 1: Character File */}
      {step === 1 && (
        <div className="bg-card rounded-xl border border-gray-700 overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-4">
          <div className="p-6 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Step 1: Edit Character File</h2>
            <button 
              onClick={() => setCharacterJson(JSON.stringify(agent.characterFile, null, 2))}
              className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" /> Reset to Default
            </button>
          </div>
          <div className="p-6">
            <p className="text-text-secondary mb-4">Customize your agent's personality, lore, and behavior patterns.</p>
            <div className="relative">
              <textarea
                value={characterJson}
                onChange={(e) => setCharacterJson(e.target.value)}
                className="w-full h-96 bg-background border border-gray-600 rounded-lg p-4 font-mono text-sm text-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                spellCheck={false}
              />
            </div>
          </div>
          <div className="p-6 border-t border-gray-700 flex justify-end">
            <button
              onClick={() => setStep(2)}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Environment Variables */}
      {step === 2 && (
        <div className="bg-card rounded-xl border border-gray-700 overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-4">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Step 2: Configure Environment Variables</h2>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-text-secondary">Set up the necessary API keys and configuration for your agent to function.</p>
            
            {Object.keys(envVars).map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {key} <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={envVars[key]}
                    onChange={(e) => setEnvVars({...envVars, [key]: e.target.value})}
                    className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white"
                    placeholder={`Enter ${key}`}
                  />
                </div>
                <div className="mt-1 flex justify-between">
                  <a href="#" className="text-xs text-primary hover:underline flex items-center gap-1">
                    Where to get this? <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}

            {/* Custom Settings Mock */}
            <div className="pt-4 border-t border-gray-700">
              <h3 className="text-lg font-medium text-white mb-4">Custom Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Check Interval (minutes)</label>
                  <input type="number" defaultValue={5} className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Log Level</label>
                  <select className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white">
                    <option>Info</option>
                    <option>Debug</option>
                    <option>Error</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-700 flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="text-text-secondary hover:text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Deploy */}
      {step === 3 && !deploymentResult && (
        <div className="bg-card rounded-xl border border-gray-700 overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-4">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Step 3: Deploy Your Agent</h2>
          </div>
          <div className="p-6 text-center py-12">
            {!isDeploying ? (
              <div className="space-y-6">
                <div className="flex flex-col items-center gap-4 mb-8">
                  <div className="flex items-center gap-3 text-green-400 text-lg">
                    <CheckCircle className="w-6 h-6" /> Character configured
                  </div>
                  <div className="flex items-center gap-3 text-green-400 text-lg">
                    <CheckCircle className="w-6 h-6" /> Environment variables set
                  </div>
                </div>
                <button
                  onClick={handleDeploy}
                  className="bg-primary hover:bg-primary/90 text-white text-lg font-bold px-12 py-4 rounded-xl shadow-lg shadow-primary/25 hover:scale-105 transition-all"
                >
                  Deploy Agent
                </button>
              </div>
            ) : (
              <div className="space-y-6 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-white">Deploying Agent...</h3>
                <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                  <div 
                    className="bg-primary h-full transition-all duration-150 ease-linear"
                    style={{ width: `${deployProgress}%` }}
                  ></div>
                </div>
                <p className="text-text-secondary">Provisioning canister... {deployProgress}%</p>
                <div className="font-mono text-xs text-left bg-background p-4 rounded-lg text-gray-400 h-32 overflow-y-auto">
                  <p>{'>'} Initializing deployment...</p>
                  {deployProgress > 20 && <p>{'>'} Verifying configuration...</p>}
                  {deployProgress > 40 && <p>{'>'} Allocating resources...</p>}
                  {deployProgress > 60 && <p>{'>'} Uploading character file...</p>}
                  {deployProgress > 80 && <p>{'>'} Starting service...</p>}
                </div>
              </div>
            )}
          </div>
          {!isDeploying && (
            <div className="p-6 border-t border-gray-700 flex justify-start">
              <button
                onClick={() => setStep(2)}
                className="text-text-secondary hover:text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            </div>
          )}
        </div>
      )}

      {/* Success Screen */}
      {deploymentResult && (
        <div className="bg-card rounded-xl border border-gray-700 overflow-hidden shadow-lg animate-in zoom-in-95 duration-300">
          <div className="p-8 text-center border-b border-gray-700 bg-gradient-to-b from-primary/20 to-card">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Your Agent is Ready!</h1>
            <p className="text-text-secondary">Successfully deployed to the Internet Computer</p>
          </div>

          <div className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Principal ID</label>
                <div className="flex gap-2">
                  <code className="flex-grow bg-background border border-gray-600 rounded-lg p-3 text-sm text-primary font-mono break-all">
                    {deploymentResult.principal}
                  </code>
                  <button 
                    onClick={() => copyToClipboard(deploymentResult.principal)}
                    className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">API Endpoint</label>
                <div className="flex gap-2">
                  <code className="flex-grow bg-background border border-gray-600 rounded-lg p-3 text-sm text-primary font-mono break-all">
                    {deploymentResult.endpoint}
                  </code>
                  <button 
                    onClick={() => copyToClipboard(deploymentResult.endpoint)}
                    className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-background/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4">Next Steps: Register on OpenChat</h3>
              <ol className="space-y-4 text-gray-300 list-decimal list-inside">
                <li className="pl-2">Open <a href="https://oc.app" target="_blank" className="text-primary hover:underline">OpenChat</a> in a new tab</li>
                <li className="pl-2">Go to <strong>Settings → Bots → Add Bot</strong></li>
                <li className="pl-2">Enter the <strong>Principal ID</strong> shown above</li>
                <li className="pl-2">Set the <strong>API Endpoint</strong> shown above</li>
                <li className="pl-2">Grant permissions and activate</li>
              </ol>
              <div className="mt-6 flex gap-4">
                <button className="text-primary hover:underline text-sm flex items-center gap-1">
                  <Play className="w-3 h-3" /> Watch Tutorial
                </button>
                <button className="text-primary hover:underline text-sm flex items-center gap-1">
                  <Terminal className="w-3 h-3" /> Read Documentation
                </button>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <Link 
                to="/"
                className="text-text-secondary hover:text-white font-medium transition-colors"
              >
                Configure Another Agent
              </Link>
              <Link 
                to="/dashboard"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfigPortal;
