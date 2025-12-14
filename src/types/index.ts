export interface Agent {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: 'trading' | 'content' | 'community' | 'utility';
  developer: {
    name: string;
    username: string;
    avatar: string;
  };
  pricing: {
    chatTokens: number;
    icpEquivalent: number;
  };
  rating: number;
  totalReviews: number;
  activeDeployments: number;
  features: string[];
  requirements: {
    name: string;
    required: boolean;
    description: string;
  }[];
  characterFile: {
    name: string;
    bio: string;
    lore: string[];
    messageExamples: [string, string][];
    style: {
      tone: string;
      personality: string[];
    };
    topics: string[];
  };
  screenshots: string[];
  reviews: Review[];
}

export interface Deployment {
  id: string;
  agentId: string;
  agentName: string;
  status: 'running' | 'paused' | 'error' | 'deploying';
  principalId: string;
  endpoint: string;
  characterFile: object;
  environmentVariables: Record<string, string>;
  deployedAt: string;
  uptime: number; // percentage
  messagesSent: number;
  lastActive: string;
}

export interface Review {
  id: string;
  userId: string;
  username: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Developer {
  id: string;
  name: string;
  username: string;
  email: string;
  bio: string;
  website?: string;
  github?: string;
  twitter?: string;
  icpWallet: string;
  totalEarnings: number;
  publishedAgents: number;
  joinedAt: string;
  verified: boolean;
  avatar?: string;
}

export interface AgentSubmission {
  id: string;
  developerId: string;
  status: 'draft' | 'pending' | 'approved' | 'rejected' | 'published';
  
  // Basic Info
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  
  // Technical
  githubUrl: string;
  characterFile: any;
  readmeUrl?: string;
  
  // Requirements
  requirements: {
    variableName: string;
    displayName: string;
    type: 'api_key' | 'token' | 'url' | 'text';
    required: boolean;
    description: string;
  }[];
  
  // Config Fields
  configFields: {
    name: string;
    displayName: string;
    type: 'text' | 'number' | 'boolean' | 'select';
    defaultValue: any;
    description: string;
    options?: string[]; // for select type
  }[];
  
  // Pricing
  pricingModel: 'subscription' | 'one-time' | 'free';
  monthlyPrice?: number; // in CHAT tokens
  annualPrice?: number;
  
  // Media
  iconUrl: string;
  screenshots: string[];
  demoVideoUrl?: string;
  
  // Metadata
  submittedAt: string;
  reviewedAt?: string;
  publishedAt?: string;
  rejectionReason?: string;
}

export interface Earning {
  id: string;
  developerId: string;
  agentId: string;
  amount: number;
  currency: 'CHAT' | 'ICP';
  type: 'sale' | 'subscription';
  transactionId: string;
  date: string;
  status: 'pending' | 'paid';
}