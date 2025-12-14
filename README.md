# AI Agent Marketplace for OpenChat

A fully functional marketplace for discovering, configuring, and deploying AI agents for OpenChat.

## 🚀 Features

- **Marketplace**: Browse agents by category (Trading, Content, Community).
- **Agent Details**: View capabilities, pricing, and reviews.
- **Payment System**: Support for CHAT and ICP tokens with real-time conversion.
- **Configuration Portal**: 
  - Character file editor (JSON)
  - Environment variable management
  - Deployment wizard
- **Dashboard**: Manage your deployed agents.
- **Developer Portal**:
  - **Registration**: Sign up as a developer and link ICP wallet.
  - **Submission**: Multi-step wizard to submit new agents (Repo, Character File, Pricing).
  - **Analytics**: Track earnings, active users, and reviews.
  - **Management**: Update agent versions and manage support tickets.

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS (OpenChat Theme)
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Build Tool**: Vite

## 🏃‍♂️ Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components
├── data/          # Mock data (replace with API calls)
├── pages/         # Page components
├── types/         # TypeScript interfaces
├── utils/         # Helper functions
└── App.tsx        # Main application component
```

## 🔌 Integration

See the following guides for backend integration:
- [Database Schema](DATABASE_SCHEMA.md)
- [Canister Setup](CANISTER_SETUP.md)
- [API Integration](API_INTEGRATION.md)
- [Deployment](DEPLOYMENT.md)

## 🎨 Theme

The application uses the OpenChat color palette:
- Primary: Purple (#6C5CE7)
- Secondary: Blue (#0984E3)
- Background: Dark Gray (#2D3436)
