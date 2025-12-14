import React from 'react';
import { AgentFormData } from './SubmitAgent';

interface Props {
  data: AgentFormData;
  updateData: (data: Partial<AgentFormData>) => void;
}

const StepBasicInfo: React.FC<Props> = ({ data, updateData }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white mb-6">Basic Information</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Agent Name *</label>
        <input 
          type="text" 
          value={data.name}
          onChange={(e) => updateData({ name: e.target.value })}
          placeholder="e.g. Crypto Trading Bot"
          className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white focus:border-primary focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Short Description *</label>
        <input 
          type="text" 
          value={data.shortDescription}
          onChange={(e) => updateData({ shortDescription: e.target.value })}
          placeholder="Brief summary (max 100 chars)"
          maxLength={100}
          className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white focus:border-primary focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Full Description *</label>
        <textarea 
          rows={6}
          value={data.fullDescription}
          onChange={(e) => updateData({ fullDescription: e.target.value })}
          placeholder="Detailed description of features and capabilities..."
          className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white focus:border-primary focus:outline-none resize-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Category *</label>
          <select 
            value={data.category}
            onChange={(e) => updateData({ category: e.target.value })}
            className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white focus:border-primary focus:outline-none"
          >
            <option value="productivity">Productivity</option>
            <option value="finance">Finance & Trading</option>
            <option value="social">Social & Community</option>
            <option value="entertainment">Entertainment</option>
            <option value="education">Education</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Tags (comma separated)</label>
          <input 
            type="text" 
            value={data.tags.join(', ')}
            onChange={(e) => updateData({ tags: e.target.value.split(',').map(t => t.trim()) })}
            placeholder="e.g. crypto, trading, automation"
            className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 text-white focus:border-primary focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default StepBasicInfo;
