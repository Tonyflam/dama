import React from 'react';

interface AgentStatusBadgeProps {
  status: 'draft' | 'pending' | 'approved' | 'rejected' | 'published';
}

const AgentStatusBadge: React.FC<AgentStatusBadgeProps> = ({ status }) => {
  const styles = {
    draft: 'bg-gray-700 text-gray-300 border-gray-600',
    pending: 'bg-yellow-900/50 text-yellow-400 border-yellow-800',
    approved: 'bg-green-900/50 text-green-400 border-green-800',
    published: 'bg-green-900/50 text-green-400 border-green-800',
    rejected: 'bg-red-900/50 text-red-400 border-red-800',
  };

  const labels = {
    draft: 'Draft',
    pending: 'Pending Review',
    approved: 'Approved',
    published: 'Published',
    rejected: 'Rejected',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wider border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
};

export default AgentStatusBadge;
