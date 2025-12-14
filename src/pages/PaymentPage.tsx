import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Wallet, CheckCircle, Loader2 } from 'lucide-react';
import { MOCK_AGENTS } from '../data/mockData';
import { formatCHAT as fmtCHAT, formatICP as fmtICP } from '../utils/currency';
import { generateDeploymentId as genDepId } from '../utils/generators';

const PaymentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const agent = MOCK_AGENTS.find(a => a.id === id);
  
  const [paymentMethod, setPaymentMethod] = useState<'chat' | 'icp'>('icp');
  const [isProcessing, setIsProcessing] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  if (!agent) return <div>Agent not found</div>;

  const platformFee = agent.pricing.chatTokens * 0.1;
  const totalChat = agent.pricing.chatTokens + platformFee;
  const totalIcp = agent.pricing.icpEquivalent * 1.1;

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment delay
    setTimeout(() => {
      setIsProcessing(false);
      const deploymentId = genDepId();
      navigate(`/portal/${deploymentId}?agentId=${agent.id}`);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-text-secondary hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Cancel Purchase
      </button>

      <div className="bg-card rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-gray-700 bg-gray-800/50">
          <h1 className="text-2xl font-bold text-white">Complete Your Purchase</h1>
          <p className="text-text-secondary">You are purchasing a license for {agent.name}</p>
        </div>

        <div className="p-6 space-y-8">
          {/* Order Summary */}
          <div className="bg-background rounded-lg p-4 border border-gray-700">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-300">
                <span>{agent.name} License</span>
                <span>{fmtCHAT(agent.pricing.chatTokens)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Platform Fee (10%)</span>
                <span>{fmtCHAT(platformFee)}</span>
              </div>
              <div className="border-t border-gray-700 pt-3 flex justify-between items-end">
                <span className="font-bold text-white">Total</span>
                <div className="text-right">
                  <div className="text-xl font-bold text-primary">{fmtCHAT(totalChat)}</div>
                  <div className="text-sm text-gray-500">≈ {fmtICP(totalIcp)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Payment Method</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setPaymentMethod('icp')}
                className={`p-4 rounded-lg border flex flex-col items-center gap-2 transition-all ${
                  paymentMethod === 'icp' 
                    ? 'bg-primary/10 border-primary text-white' 
                    : 'bg-background border-gray-700 text-gray-400 hover:border-gray-500'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs">ICP</div>
                <span className="font-medium">ICP Token</span>
                {paymentMethod === 'icp' && <CheckCircle className="w-4 h-4 text-primary" />}
              </button>

              <button
                onClick={() => setPaymentMethod('chat')}
                className={`p-4 rounded-lg border flex flex-col items-center gap-2 transition-all ${
                  paymentMethod === 'chat' 
                    ? 'bg-primary/10 border-primary text-white' 
                    : 'bg-background border-gray-700 text-gray-400 hover:border-gray-500'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs">CHAT</div>
                <span className="font-medium">CHAT Token</span>
                {paymentMethod === 'chat' && <CheckCircle className="w-4 h-4 text-primary" />}
              </button>
            </div>
          </div>

          {/* Wallet Connection */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Wallet</h3>
            {!walletConnected ? (
              <button 
                onClick={() => setWalletConnected(true)}
                className="w-full py-3 border-2 border-dashed border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
              >
                <Wallet className="w-5 h-5" />
                Connect Wallet to Pay
              </button>
            ) : (
              <div className="bg-background rounded-lg p-4 border border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center text-green-400">
                    <Wallet className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Connected</div>
                    <div className="text-xs text-gray-500">0x71C...9A23</div>
                  </div>
                </div>
                <button 
                  onClick={() => setWalletConnected(false)}
                  className="text-xs text-red-400 hover:text-red-300"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <button
            onClick={handlePayment}
            disabled={!walletConnected || isProcessing}
            className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all ${
              !walletConnected || isProcessing
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:scale-[1.01]'
            }`}
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing Transaction...
              </>
            ) : (
              <>
                Confirm Payment of {paymentMethod === 'icp' ? fmtICP(totalIcp) : fmtCHAT(totalChat)}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
