import React from 'react';
import { AgentFormData } from './SubmitAgent';
import { FileJson, Github } from 'lucide-react';

interface Props {
  data: AgentFormData;
}

const StepReview: React.FC<Props> = ({ data }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white mb-6">Review Submission</h2>

      <div className="space-y-6">
        <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">Basic Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500 block">Name</span>
              <span className="text-white font-medium">{data.name}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Category</span>
              <span className="text-white font-medium capitalize">{data.category}</span>
            </div>
            <div className="md:col-span-2">
              <span className="text-gray-500 block">Description</span>
              <span className="text-white">{data.shortDescription}</span>
            </div>
            <div className="md:col-span-2">
              <span className="text-gray-500 block">Tags</span>
              <div className="flex gap-2 mt-1">
                {data.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">Technical Details</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-300">
              <Github className="w-5 h-5" />
              <a href={data.repositoryUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                {data.repositoryUrl}
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <FileJson className="w-5 h-5" />
              <span>{data.characterFile ? data.characterFile.name : 'No file uploaded'}</span>
            </div>
            <div>
              <span className="text-gray-500 text-sm">Version: </span>
              <span className="text-white font-mono">{data.version}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">Pricing</h3>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-500 block">Model</span>
              <span className="text-white font-medium capitalize">{data.pricingType.replace('-', ' ')}</span>
            </div>
            {data.pricingType !== 'free' && (
              <div className="text-right">
                <span className="text-gray-500 block">Price</span>
                <span className="text-2xl font-bold text-green-400">{data.price} {data.currency}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-blue-900/20 border border-blue-800 p-4 rounded-lg text-sm text-blue-200">
        <p>By submitting this agent, you agree to the Developer Terms of Service. Your agent will be reviewed by our team within 24-48 hours.</p>
      </div>
    </div>
  );
};

export default StepReview;
