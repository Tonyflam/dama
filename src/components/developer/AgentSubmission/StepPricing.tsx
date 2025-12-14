import React from 'react';
import { DollarSign } from 'lucide-react';
import { AgentFormData } from './SubmitAgent';

interface Props {
  data: AgentFormData;
  updateData: (data: Partial<AgentFormData>) => void;
}

const StepPricing: React.FC<Props> = ({ data, updateData }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white mb-6">Pricing & Monetization</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { id: 'free', title: 'Free', desc: 'Free for everyone' },
          { id: 'one-time', title: 'One-time Purchase', desc: 'Pay once, own forever' },
          { id: 'subscription', title: 'Subscription', desc: 'Recurring monthly payment' }
        ].map((type) => (
          <div 
            key={type.id}
            onClick={() => updateData({ pricingType: type.id as any })}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              data.pricingType === type.id 
                ? 'bg-primary/20 border-primary' 
                : 'bg-background border-gray-700 hover:border-gray-500'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-white">{type.title}</span>
              {data.pricingType === type.id && <div className="w-3 h-3 rounded-full bg-primary"></div>}
            </div>
            <p className="text-sm text-gray-400">{type.desc}</p>
          </div>
        ))}
      </div>

      {data.pricingType !== 'free' && (
        <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
          <label className="block text-sm font-medium text-gray-300 mb-2">Price Amount</label>
          <div className="flex gap-4">
            <div className="relative flex-grow">
              <DollarSign className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
              <input 
                type="number" 
                min="0"
                step="0.01"
                value={data.price}
                onChange={(e) => updateData({ price: parseFloat(e.target.value) })}
                className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 pl-10 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <select 
              value={data.currency}
              onChange={(e) => updateData({ currency: e.target.value as any })}
              className="w-32 bg-background border border-gray-600 rounded-lg py-2 px-4 text-white focus:border-primary focus:outline-none"
            >
              <option value="ICP">ICP</option>
              <option value="CHAT">CHAT</option>
            </select>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Platform fee: 15%. You will receive 85% of each sale.
          </p>
        </div>
      )}
    </div>
  );
};

export default StepPricing;
