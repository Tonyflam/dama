import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Calendar } from 'lucide-react';
import StatsCard from './shared/StatsCard';
import RevenueChart from './shared/RevenueChart';
import { MOCK_EARNINGS } from '../../data/mockData';

const EarningsAnalytics: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/developer/dashboard" className="text-text-secondary hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-3xl font-bold text-white">Earnings & Analytics</h1>
        </div>
        <div className="flex gap-3">
          <button className="bg-card hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium border border-gray-600 transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Last 30 Days
          </button>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium shadow-lg shadow-primary/25 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" /> Export Report
          </button>
        </div>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="md:col-span-3 bg-card rounded-xl border border-gray-700 p-6">
          <h3 className="text-lg font-bold text-white mb-2">Revenue Growth</h3>
          <RevenueChart />
        </div>
        <div className="space-y-6">
          <StatsCard title="Total Earnings" value="$12,450" subtitle="All time" />
          <StatsCard title="Pending Payout" value="$245.50" subtitle="Next payout: Dec 20" />
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition-colors">
            Request Early Payout
          </button>
        </div>
      </div>

      {/* Earnings by Agent */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-card rounded-xl border border-gray-700 p-6">
          <h3 className="text-lg font-bold text-white mb-6">Earnings by Agent</h3>
          <div className="space-y-6">
            {[
              { name: 'Crypto Trading Bot', amount: '$8,450', percent: 68, color: 'bg-blue-500' },
              { name: 'Content Creator Bot', amount: '$2,780', percent: 22, color: 'bg-purple-500' },
              { name: 'Moderation Assistant', amount: '$1,220', percent: 10, color: 'bg-green-500' }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white font-medium">{item.name}</span>
                  <span className="text-gray-400">{item.amount} ({item.percent}%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl border border-gray-700 p-6">
          <h3 className="text-lg font-bold text-white mb-6">Recent Transactions</h3>
          <div className="space-y-4">
            {MOCK_EARNINGS.map((earn) => (
              <div key={earn.id} className="flex justify-between items-center p-3 bg-background rounded-lg border border-gray-700">
                <div>
                  <div className="text-white font-medium">{earn.type === 'sale' ? 'One-time Purchase' : 'Subscription'}</div>
                  <div className="text-xs text-gray-500">{earn.date} • {earn.transactionId}</div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-bold">+{earn.amount} {earn.currency}</div>
                  <div className="text-xs text-gray-500 capitalize">{earn.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsAnalytics;
