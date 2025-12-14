import { Agent, Deployment, Review } from '../types';

const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    userId: 'u1',
    username: 'crypto_king',
    rating: 5,
    comment: 'This agent changed my trading game completely. Highly recommended!',
    date: '2024-12-10'
  },
  {
    id: 'r2',
    userId: 'u2',
    username: 'nft_collector',
    rating: 4,
    comment: 'Great bot, but needs more customization options for alerts.',
    date: '2024-12-11'
  },
  {
    id: 'r3',
    userId: 'u3',
    username: 'defi_degen',
    rating: 5,
    comment: 'Paid for itself in 2 days. Amazing.',
    date: '2024-12-12'
  },
  {
    id: 'r4',
    userId: 'u4',
    username: 'web3_builder',
    rating: 5,
    comment: 'Very easy to set up and deploy.',
    date: '2024-12-13'
  },
  {
    id: 'r5',
    userId: 'u5',
    username: 'hodler_forever',
    rating: 4,
    comment: 'Solid performance, good support.',
    date: '2024-12-14'
  }
];

export const MOCK_AGENTS: Agent[] = [
  // Trading Agents
  {
    id: 'a1',
    name: 'Crypto Sniper Pro',
    description: 'High-frequency trading bot for DEXs',
    longDescription: 'Crypto Sniper Pro is an advanced high-frequency trading bot designed to execute trades on decentralized exchanges with millisecond precision. It monitors mempool data to snipe new token launches and liquidity adds.',
    category: 'trading',
    developer: {
      name: 'Alex Trader',
      username: '@alextrader',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
    },
    pricing: {
      chatTokens: 3000,
      icpEquivalent: 200
    },
    rating: 4.9,
    totalReviews: 128,
    activeDeployments: 450,
    features: ['Mempool scanning', 'Auto-buy/sell', 'Stop-loss protection', 'Multi-DEX support'],
    requirements: [
      { name: 'Private Key', required: true, description: 'Wallet private key for signing transactions' },
      { name: 'RPC Node', required: true, description: 'Fast RPC node URL' }
    ],
    characterFile: {
      name: 'SniperBot',
      bio: 'I am a ruthless trading machine.',
      lore: ['Born in the bear market', 'Trained on millions of transactions'],
      messageExamples: [['Status report', 'Scanning mempool... 3 opportunities found.']],
      style: { tone: 'concise', personality: ['efficient', 'robotic'] },
      topics: ['trading', 'defi', 'mev']
    },
    screenshots: [],
    reviews: MOCK_REVIEWS
  },
  {
    id: 'a2',
    name: 'Trend Master AI',
    description: 'Trend following bot for major pairs',
    longDescription: 'Trend Master AI uses machine learning to identify and follow market trends on major cryptocurrency pairs. It is designed for swing trading and long-term position holding.',
    category: 'trading',
    developer: {
      name: 'Sarah Quant',
      username: '@sarahquant',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    pricing: {
      chatTokens: 1500,
      icpEquivalent: 100
    },
    rating: 4.7,
    totalReviews: 85,
    activeDeployments: 210,
    features: ['Trend analysis', 'Risk management', 'Portfolio rebalancing'],
    requirements: [
      { name: 'Exchange API Key', required: true, description: 'API Key for your exchange' },
      { name: 'Exchange Secret', required: true, description: 'API Secret for your exchange' }
    ],
    characterFile: {
      name: 'TrendBot',
      bio: 'I follow the waves of the market.',
      lore: ['Surfing the charts since 2017'],
      messageExamples: [['What is the trend?', 'Bitcoin is currently in a strong uptrend.']],
      style: { tone: 'analytical', personality: ['calm', 'observant'] },
      topics: ['technical analysis', 'macroeconomics']
    },
    screenshots: [],
    reviews: MOCK_REVIEWS
  },
  {
    id: 'a3',
    name: 'Arbitrage Hunter',
    description: 'Exploits price differences across exchanges',
    longDescription: 'Arbitrage Hunter monitors prices across multiple centralized and decentralized exchanges to find and exploit price discrepancies for risk-free profit.',
    category: 'trading',
    developer: {
      name: 'Mike Arby',
      username: '@mikearby',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
    },
    pricing: {
      chatTokens: 2250,
      icpEquivalent: 150
    },
    rating: 4.8,
    totalReviews: 92,
    activeDeployments: 180,
    features: ['Cross-exchange monitoring', 'Instant execution', 'Gas optimization'],
    requirements: [
      { name: 'Multiple Exchange Keys', required: true, description: 'API keys for at least 2 exchanges' }
    ],
    characterFile: {
      name: 'ArbyBot',
      bio: 'I find the gaps and fill them with profit.',
      lore: ['The market is inefficient, I am the correction'],
      messageExamples: [['Any opportunities?', 'Found 0.5% spread on ETH/USDT between Binance and Coinbase.']],
      style: { tone: 'excited', personality: ['opportunistic', 'fast'] },
      topics: ['arbitrage', 'market efficiency']
    },
    screenshots: [],
    reviews: MOCK_REVIEWS
  },
  {
    id: 'a4',
    name: 'Grid Trader X',
    description: 'Automated grid trading strategy',
    longDescription: 'Grid Trader X automates the grid trading strategy, placing buy and sell orders at predefined intervals to profit from market volatility.',
    category: 'trading',
    developer: {
      name: 'Grid Master',
      username: '@gridmaster',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Grid'
    },
    pricing: {
      chatTokens: 750,
      icpEquivalent: 50
    },
    rating: 4.5,
    totalReviews: 60,
    activeDeployments: 300,
    features: ['Customizable grids', 'Backtesting', 'Profit tracking'],
    requirements: [
      { name: 'Exchange API Key', required: true, description: 'API Key' }
    ],
    characterFile: {
      name: 'GridBot',
      bio: 'I weave a net of orders to catch profits.',
      lore: ['Volatility is my friend'],
      messageExamples: [['Status?', 'Grid active. 10 buy orders, 10 sell orders placed.']],
      style: { tone: 'steady', personality: ['patient', 'methodical'] },
      topics: ['grid trading', 'volatility']
    },
    screenshots: [],
    reviews: MOCK_REVIEWS
  },

  // Content Creation Agents
  {
    id: 'a5',
    name: 'Viral Tweet Gen',
    description: 'Generates high-engagement Twitter threads',
    longDescription: 'Viral Tweet Gen analyzes trending topics and your niche to generate high-engagement Twitter threads and posts that go viral.',
    category: 'content',
    developer: {
      name: 'Social Guru',
      username: '@socialguru',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Social'
    },
    pricing: {
      chatTokens: 450,
      icpEquivalent: 30
    },
    rating: 4.6,
    totalReviews: 200,
    activeDeployments: 800,
    features: ['Trend analysis', 'Thread generation', 'Hashtag optimization'],
    requirements: [
      { name: 'Twitter API Key', required: true, description: 'X/Twitter API Key' },
      { name: 'OpenAI API Key', required: true, description: 'GPT-4 access' }
    ],
    characterFile: {
      name: 'TweetBot',
      bio: 'I speak the language of the algorithm.',
      lore: ['Raised on memes and engagement metrics'],
      messageExamples: [['Write a thread about AI', 'Here is a 5-tweet thread about the future of AI...']],
      style: { tone: 'engaging', personality: ['witty', 'provocative'] },
      topics: ['social media', 'marketing']
    },
    screenshots: [],
    reviews: MOCK_REVIEWS
  },
  {
    id: 'a6',
    name: 'Blog Post Wizard',
    description: 'SEO-optimized blog post writer',
    longDescription: 'Blog Post Wizard writes full-length, SEO-optimized blog posts based on your keywords and outline. It includes meta descriptions and title suggestions.',
    category: 'content',
    developer: {
      name: 'Content King',
      username: '@contentking',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Content'
    },
    pricing: {
      chatTokens: 900,
      icpEquivalent: 60
    },
    rating: 4.8,
    totalReviews: 150,
    activeDeployments: 500,
    features: ['SEO optimization', 'Long-form content', 'Keyword integration'],
    requirements: [
      { name: 'OpenAI API Key', required: true, description: 'GPT-4 access' }
    ],
    characterFile: {
      name: 'BlogBot',
      bio: 'I write content that ranks.',
      lore: ['Indexed by Google, loved by readers'],
      messageExamples: [['Write a post about crypto', '# The Future of Cryptocurrency\n\nCryptocurrency is...']],
      style: { tone: 'informative', personality: ['professional', 'educational'] },
      topics: ['seo', 'writing']
    },
    screenshots: [],
    reviews: MOCK_REVIEWS
  },
  {
    id: 'a7',
    name: 'Art Generator AI',
    description: 'Creates stunning digital art prompts',
    longDescription: 'Art Generator AI helps you create amazing digital art by generating detailed prompts for Midjourney, Stable Diffusion, and DALL-E.',
    category: 'content',
    developer: {
      name: 'Pixel Artist',
      username: '@pixelartist',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pixel'
    },
    pricing: {
      chatTokens: 600,
      icpEquivalent: 40
    },
    rating: 4.7,
    totalReviews: 110,
    activeDeployments: 400,
    features: ['Prompt engineering', 'Style emulation', 'Negative prompt generation'],
    requirements: [],
    characterFile: {
      name: 'ArtBot',
      bio: 'I dream in pixels and prompts.',
      lore: ['A muse for the digital age'],
      messageExamples: [['Cyberpunk city', 'A futuristic cyberpunk city with neon lights, rain-slicked streets...']],
      style: { tone: 'creative', personality: ['imaginative', 'visual'] },
      topics: ['art', 'design']
    },
    screenshots: [],
    reviews: MOCK_REVIEWS
  },
  {
    id: 'a8',
    name: 'Video Script Pro',
    description: 'Scripts for YouTube and TikTok',
    longDescription: 'Video Script Pro generates engaging scripts for YouTube videos, TikToks, and Reels, including hook, body, and call to action.',
    category: 'content',
    developer: {
      name: 'Video Star',
      username: '@videostar',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Video'
    },
    pricing: {
      chatTokens: 750,
      icpEquivalent: 50
    },
    rating: 4.5,
    totalReviews: 90,
    activeDeployments: 350,
    features: ['Hook generation', 'Viral structures', 'Call to action optimization'],
    requirements: [
      { name: 'OpenAI API Key', required: true, description: 'GPT-4 access' }
    ],
    characterFile: {
      name: 'ScriptBot',
      bio: 'I write scripts that keep viewers watching.',
      lore: ['Retention is key'],
      messageExamples: [['Script for cooking video', '[Hook] You won\'t believe this secret ingredient...']],
      style: { tone: 'energetic', personality: ['entertaining', 'fast-paced'] },
      topics: ['video production', 'storytelling']
    },
    screenshots: [],
    reviews: MOCK_REVIEWS
  },

  // Community Management Agents
  {
    id: 'a9',
    name: 'ModBot 3000',
    description: 'Automated moderation for Discord/Telegram',
    longDescription: 'ModBot 3000 keeps your community safe by automatically removing spam, banning scammers, and enforcing rules 24/7.',
    category: 'community',
    developer: {
      name: 'Safe Space',
      username: '@safespace',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Safe'
    },
    pricing: {
      chatTokens: 600,
      icpEquivalent: 40
    },
    rating: 4.9,
    totalReviews: 300,
    activeDeployments: 1200,
    features: ['Spam filtering', 'Auto-ban', 'Welcome messages', 'Captcha verification'],
    requirements: [
      { name: 'Discord/Telegram Token', required: true, description: 'Bot token' }
    ],
    characterFile: {
      name: 'ModBot',
      bio: 'I am the shield of the community.',
      lore: ['Defender of the chat'],
      messageExamples: [['User posted spam', '[Deleted] User warned.']],
      style: { tone: 'authoritative', personality: ['strict', 'fair'] },
      topics: ['moderation', 'security']
    },
    screenshots: [],
    reviews: MOCK_REVIEWS
  },
  {
    id: 'a10',
    name: 'Support Hero',
    description: 'AI Customer Support Agent',
    longDescription: 'Support Hero answers common customer questions, resolves issues, and escalates complex problems to human agents.',
    category: 'community',
    developer: {
      name: 'Help Desk',
      username: '@helpdesk',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Help'
    },
    pricing: {
      chatTokens: 1800,
      icpEquivalent: 120
    },
    rating: 4.6,
    totalReviews: 180,
    activeDeployments: 600,
    features: ['FAQ answering', 'Ticket creation', 'Sentiment analysis'],
    requirements: [
      { name: 'OpenAI API Key', required: true, description: 'GPT-4 access' },
      { name: 'Knowledge Base', required: true, description: 'Link to your docs' }
    ],
    characterFile: {
      name: 'SupportBot',
      bio: 'I am here to help.',
      lore: ['Service with a smile (emoji)'],
      messageExamples: [['How do I reset password?', 'You can reset your password by...']],
      style: { tone: 'helpful', personality: ['polite', 'patient'] },
      topics: ['support', 'troubleshooting']
    },
    screenshots: [],
    reviews: MOCK_REVIEWS
  },
  {
    id: 'a11',
    name: 'Engagement Booster',
    description: 'Stimulates conversation in communities',
    longDescription: 'Engagement Booster starts interesting conversations, asks questions, and welcomes new members to keep your community active and alive.',
    category: 'community',
    developer: {
      name: 'Chatty Cathy',
      username: '@chattycathy',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chatty'
    },
    pricing: {
      chatTokens: 900,
      icpEquivalent: 60
    },
    rating: 4.4,
    totalReviews: 120,
    activeDeployments: 450,
    features: ['Conversation starters', 'Poll creation', 'Trivia games'],
    requirements: [
      { name: 'Discord/Telegram Token', required: true, description: 'Bot token' }
    ],
    characterFile: {
      name: 'EngageBot',
      bio: 'I keep the party going.',
      lore: ['Silence is the enemy'],
      messageExamples: [['Chat is quiet', 'Who is watching the game tonight?']],
      style: { tone: 'friendly', personality: ['outgoing', 'curious'] },
      topics: ['general chat', 'community building']
    },
    screenshots: [],
    reviews: MOCK_REVIEWS
  },
  {
    id: 'a12',
    name: 'DAO Manager',
    description: 'Facilitates DAO voting and governance',
    longDescription: 'DAO Manager helps decentralized organizations manage proposals, track votes, and announce governance updates.',
    category: 'community',
    developer: {
      name: 'Gov Geek',
      username: '@govgeek',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gov'
    },
    pricing: {
      chatTokens: 2700,
      icpEquivalent: 180
    },
    rating: 4.8,
    totalReviews: 70,
    activeDeployments: 150,
    features: ['Proposal tracking', 'Vote notifications', 'Quorum alerts'],
    requirements: [
      { name: 'Governance Contract Address', required: true, description: 'On-chain address' }
    ],
    characterFile: {
      name: 'GovBot',
      bio: 'I facilitate the will of the people.',
      lore: ['Democracy in code'],
      messageExamples: [['New proposal', 'Proposal #42 is now open for voting.']],
      style: { tone: 'formal', personality: ['neutral', 'informative'] },
      topics: ['governance', 'voting']
    },
    screenshots: [],
    reviews: MOCK_REVIEWS
  }
];

export const MOCK_DEPLOYMENTS: Deployment[] = [
  {
    id: 'dep_8x7k9m2n',
    agentId: 'a1',
    agentName: 'Crypto Sniper Pro',
    status: 'running',
    principalId: 'icp1-2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m',
    endpoint: 'https://agent-dep_8x7k9m2n.ic0.app',
    characterFile: MOCK_AGENTS[0].characterFile,
    environmentVariables: {
      'OPENAI_API_KEY': 'sk-proj-********************',
      'RPC_URL': 'https://mainnet.infura.io/v3/...'
    },
    deployedAt: '2024-12-10T10:23:00Z',
    uptime: 99.2,
    messagesSent: 1247,
    lastActive: '2024-12-14T14:30:00Z'
  },
  {
    id: 'dep_9y8l0n3o',
    agentId: 'a5',
    agentName: 'Viral Tweet Gen',
    status: 'paused',
    principalId: 'icp1-9y8l0n3o1p2q3r4s5t6u7v8w9x0y1z2',
    endpoint: 'https://agent-dep_9y8l0n3o.ic0.app',
    characterFile: MOCK_AGENTS[4].characterFile,
    environmentVariables: {
      'OPENAI_API_KEY': 'sk-proj-********************'
    },
    deployedAt: '2024-12-12T09:15:00Z',
    uptime: 98.5,
    messagesSent: 450,
    lastActive: '2024-12-14T12:00:00Z'
  }
];

import { Developer, AgentSubmission, Earning } from '../types';

export const MOCK_DEVELOPERS: Developer[] = [
  {
    id: 'dev_1',
    name: 'John Smith',
    username: '@cryptodev',
    email: 'john@crypto.dev',
    bio: 'AI developer specializing in trading bots and automation. 5 years experience with machine learning.',
    totalEarnings: 12450,
    publishedAgents: 3,
    joinedAt: '2024-01-15',
    verified: true,
    icpWallet: 'icp1-2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
  },
  {
    id: 'dev_2',
    name: 'Alice Builder',
    username: '@aibuilder',
    email: 'alice@ai.builder',
    bio: 'Building the future of AI agents.',
    totalEarnings: 8920,
    publishedAgents: 2,
    joinedAt: '2024-02-20',
    verified: true,
    icpWallet: 'icp1-9y8l0n3o1p2q3r4s5t6u7v8w9x0y1z2',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice'
  },
  {
    id: 'dev_3',
    name: 'Bot Master',
    username: '@botmaster',
    email: 'master@bot.net',
    bio: 'I create bots that work for you.',
    totalEarnings: 15780,
    publishedAgents: 7,
    joinedAt: '2023-11-10',
    verified: true,
    icpWallet: 'icp1-a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bot'
  }
];

export const MOCK_SUBMISSIONS: AgentSubmission[] = [
  {
    id: 'sub_1',
    developerId: 'dev_1',
    status: 'published',
    name: 'Crypto Trading Bot',
    shortDescription: 'Real-time crypto price alerts and trading automation',
    fullDescription: 'This agent provides comprehensive crypto trading support...',
    category: 'trading',
    githubUrl: 'https://github.com/cryptodev/crypto-bot',
    characterFile: { name: 'CryptoBot' },
    requirements: [
      { variableName: 'OPENAI_API_KEY', displayName: 'OpenAI API Key', type: 'api_key', required: true, description: 'Required for AI' }
    ],
    configFields: [],
    pricingModel: 'subscription',
    monthlyPrice: 1500,
    iconUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoBot',
    screenshots: [],
    submittedAt: '2024-12-01T10:00:00Z',
    publishedAt: '2024-12-03T14:00:00Z'
  },
  {
    id: 'sub_2',
    developerId: 'dev_1',
    status: 'pending',
    name: 'Moderation Assistant',
    shortDescription: 'Automated moderation for communities',
    fullDescription: 'Keeps your community safe...',
    category: 'community',
    githubUrl: 'https://github.com/cryptodev/mod-bot',
    characterFile: { name: 'ModBot' },
    requirements: [],
    configFields: [],
    pricingModel: 'free',
    iconUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ModBot',
    screenshots: [],
    submittedAt: '2024-12-12T09:00:00Z'
  }
];

export const MOCK_EARNINGS: Earning[] = [
  {
    id: 'earn_1',
    developerId: 'dev_1',
    agentId: 'a1',
    amount: 100,
    currency: 'CHAT',
    type: 'sale',
    transactionId: 'tx_123',
    date: '2024-12-14',
    status: 'paid'
  },
  {
    id: 'earn_2',
    developerId: 'dev_1',
    agentId: 'a1',
    amount: 100,
    currency: 'CHAT',
    type: 'sale',
    transactionId: 'tx_124',
    date: '2024-12-13',
    status: 'paid'
  },
  {
    id: 'earn_3',
    developerId: 'dev_1',
    agentId: 'a2',
    amount: 30,
    currency: 'CHAT',
    type: 'subscription',
    transactionId: 'tx_125',
    date: '2024-12-14',
    status: 'paid'
  }
];
