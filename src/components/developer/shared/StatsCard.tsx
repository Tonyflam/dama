import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon?: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle, icon }) => {
  return (
    <div className="bg-card rounded-xl p-6 border border-gray-700 shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">{title}</p>
          <h3 className="text-3xl font-bold text-white mt-1">{value}</h3>
        </div>
        {icon && (
          <div className="p-3 bg-background rounded-lg border border-gray-600 text-primary">
            {icon}
          </div>
        )}
      </div>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  );
};

export default StatsCard;
