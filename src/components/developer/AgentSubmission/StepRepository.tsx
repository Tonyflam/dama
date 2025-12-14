import React from 'react';
import { Upload, Github } from 'lucide-react';
import { AgentFormData } from './SubmitAgent';

interface Props {
  data: AgentFormData;
  updateData: (data: Partial<AgentFormData>) => void;
}

const StepRepository: React.FC<Props> = ({ data, updateData }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white mb-6">Repository & Files</h2>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">GitHub Repository URL *</label>
        <div className="relative">
          <Github className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
          <input 
            type="url" 
            value={data.repositoryUrl}
            onChange={(e) => updateData({ repositoryUrl: e.target.value })}
            placeholder="https://github.com/username/repo"
            className="w-full bg-background border border-gray-600 rounded-lg py-2 px-4 pl-10 text-white focus:border-primary focus:outline-none"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">Repository must be public or grant access to our bot.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Version *</label>
        <input 
          type="text" 
          value={data.version}
          onChange={(e) => updateData({ version: e.target.value })}
          placeholder="1.0.0"
          className="w-full md:w-1/3 bg-background border border-gray-600 rounded-lg py-2 px-4 text-white focus:border-primary focus:outline-none"
        />
      </div>

      <div className="pt-4 border-t border-gray-700">
        <label className="block text-sm font-medium text-gray-300 mb-2">Character File (.json) *</label>
        <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer bg-gray-800/30">
          <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-300 font-medium mb-1">Click to upload or drag and drop</p>
          <p className="text-sm text-gray-500">ElizaOS character configuration file (max 5MB)</p>
          <input 
            type="file" 
            accept=".json"
            className="hidden" 
            onChange={(e) => {
              if (e.target.files?.[0]) {
                updateData({ characterFile: e.target.files[0] });
              }
            }}
          />
        </div>
        {data.characterFile && (
          <div className="mt-2 flex items-center gap-2 text-green-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            {data.characterFile.name} uploaded
          </div>
        )}
      </div>
    </div>
  );
};

export default StepRepository;
