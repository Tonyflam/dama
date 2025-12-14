/*
DATABASE SETUP INSTRUCTIONS:

1. Install PostgreSQL or use ICP Canister Storage

2. Create tables:
   - agents (marketplace listings)
   - deployments (user agent instances)
   - users (user accounts)
   - transactions (payment records)
   - reviews (agent reviews)

3. Replace all MOCK_DATA references with actual database queries

4. Add authentication (Internet Identity for ICP)

5. Implement real payment processing (ICP Ledger)

6. Set up agent hosting infrastructure (Docker + your servers)

7. Connect to real OpenChat API when available

For SQL schema, see: DATABASE_SCHEMA.md
For ICP Canister code, see: CANISTER_SETUP.md
*/

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AgentDetail from './pages/AgentDetail';
import PaymentPage from './pages/PaymentPage';
import ConfigPortal from './pages/ConfigPortal';
import Dashboard from './pages/Dashboard';

// Developer Portal Components
import DeveloperHub from './components/developer/DeveloperHub';
import DeveloperRegistration from './components/developer/DeveloperRegistration';
import DeveloperDashboard from './components/developer/DeveloperDashboard';
import SubmitAgent from './components/developer/AgentSubmission/SubmitAgent';
import EarningsAnalytics from './components/developer/EarningsAnalytics';
import DeveloperSettings from './components/developer/DeveloperSettings';
import ManageAgent from './components/developer/ManageAgent';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agent/:id" element={<AgentDetail />} />
        <Route path="/payment/:id" element={<PaymentPage />} />
        <Route path="/portal/:deploymentId" element={<ConfigPortal />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Developer Portal Routes */}
        <Route path="/developer" element={<DeveloperHub />} />
        <Route path="/developer/register" element={<DeveloperRegistration />} />
        <Route path="/developer/dashboard" element={<DeveloperDashboard />} />
        <Route path="/developer/submit" element={<SubmitAgent />} />
        <Route path="/developer/earnings" element={<EarningsAnalytics />} />
        <Route path="/developer/settings" element={<DeveloperSettings />} />
        <Route path="/developer/agents/:id" element={<ManageAgent />} />
      </Routes>
    </Layout>
  );
}

export default App;
