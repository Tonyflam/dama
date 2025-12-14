import React from 'react';

const RevenueChart: React.FC = () => {
  // Mock chart visualization using CSS
  const data = [20, 35, 45, 30, 55, 65, 50, 70, 85, 80, 95, 100];
  
  return (
    <div className="h-64 flex items-end justify-between gap-2 pt-8">
      {data.map((value, index) => (
        <div key={index} className="w-full flex flex-col items-center gap-2 group">
          <div 
            className="w-full bg-primary/20 border-t-2 border-primary rounded-t-sm transition-all duration-300 group-hover:bg-primary/40 relative"
            style={{ height: `${value}%` }}
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-700">
              ${value * 100}
            </div>
          </div>
          <span className="text-xs text-gray-500">
            {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RevenueChart;
