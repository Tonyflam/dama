# API Integration Guide

This document explains how to integrate the frontend with the real backend.

## 1. Replace Mock Data

In `src/data/mockData.ts`, replace the static arrays with API calls.

Create a new service file `src/services/api.ts`:

```typescript
import { Agent, Deployment } from '../types';

const API_URL = import.meta.env.VITE_API_URL;

export const api = {
  async getAgents(): Promise<Agent[]> {
    const res = await fetch(`${API_URL}/agents`);
    return res.json();
  },

  async getAgent(id: string): Promise<Agent> {
    const res = await fetch(`${API_URL}/agents/${id}`);
    return res.json();
  },

  async createDeployment(agentId: string, config: any): Promise<Deployment> {
    const res = await fetch(`${API_URL}/deployments`, {
      method: 'POST',
      body: JSON.stringify({ agentId, config })
    });
    return res.json();
  },

  // Developer Endpoints
  async registerDeveloper(data: any): Promise<any> {
    const res = await fetch(`${API_URL}/developers`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    return res.json();
  },

  async submitAgent(data: FormData): Promise<any> {
    const res = await fetch(`${API_URL}/agents/submit`, {
      method: 'POST',
      body: data // FormData handles file uploads
    });
    return res.json();
  },

  async getDeveloperStats(): Promise<any> {
    const res = await fetch(`${API_URL}/developer/stats`);
    return res.json();
  }
};
```

## 2. Authentication (Internet Identity)

Install the auth client:
```bash
npm install @dfinity/auth-client
```

Implement login in `src/components/Layout.tsx`:

```typescript
import { AuthClient } from "@dfinity/auth-client";

// ... inside component
const login = async () => {
  const authClient = await AuthClient.create();
  await authClient.login({
    identityProvider: "https://identity.ic0.app",
    onSuccess: () => {
      const identity = authClient.getIdentity();
      const principal = identity.getPrincipal().toString();
      // Save to state/context
    }
  });
};
```

## 3. Payment Processing

For ICP payments, use the Plug Wallet or standard ICP ledger transfer.

```typescript
// Example using Plug Wallet
const requestTransfer = async () => {
  const params = {
    to: MARKETPLACE_WALLET,
    amount: price,
  };
  const result = await window.ic.plug.requestTransfer(params);
  return result;
};
```

## 4. OpenChat Integration

To register the bot with OpenChat programmatically (if API available):

```typescript
async function registerBot(principalId: string) {
  // Call OpenChat canister
}
```
