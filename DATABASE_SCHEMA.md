# Database Schema

This document outlines the database schema required for the AI Agent Marketplace.

## Tables

### `users`
Stores user information.
- `id` (UUID, PK)
- `username` (VARCHAR)
- `principal_id` (VARCHAR, Unique) - ICP Identity
- `created_at` (TIMESTAMP)

### `developers`
Stores registered developer profiles.
- `id` (UUID, PK)
- `user_id` (UUID, FK -> users.id)
- `name` (VARCHAR)
- `email` (VARCHAR)
- `bio` (TEXT)
- `website` (VARCHAR)
- `github_url` (VARCHAR)
- `twitter_handle` (VARCHAR)
- `icp_wallet_address` (VARCHAR)
- `api_key` (VARCHAR)
- `created_at` (TIMESTAMP)

### `agents`
Stores the marketplace listings.
- `id` (UUID, PK)
- `name` (VARCHAR)
- `short_description` (VARCHAR)
- `full_description` (TEXT)
- `category` (VARCHAR) - 'trading', 'content', 'community', 'utility'
- `tags` (VARCHAR[])
- `developer_id` (UUID, FK -> developers.id)
- `status` (VARCHAR) - 'draft', 'pending', 'published', 'rejected'
- `version` (VARCHAR)
- `repository_url` (VARCHAR)
- `pricing_type` (VARCHAR) - 'free', 'one-time', 'subscription'
- `price` (DECIMAL)
- `currency` (VARCHAR)
- `rating` (DECIMAL)
- `total_reviews` (INTEGER)
- `character_file_template` (JSONB) - Default character file
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### `agent_submissions`
Stores the history of agent submissions/updates.
- `id` (UUID, PK)
- `agent_id` (UUID, FK -> agents.id)
- `version` (VARCHAR)
- `changelog` (TEXT)
- `status` (VARCHAR)
- `submitted_at` (TIMESTAMP)
- `reviewed_at` (TIMESTAMP)
- `reviewer_notes` (TEXT)

### `earnings`
Stores developer earnings records.
- `id` (UUID, PK)
- `developer_id` (UUID, FK -> developers.id)
- `agent_id` (UUID, FK -> agents.id)
- `transaction_id` (UUID, FK -> transactions.id)
- `amount` (DECIMAL)
- `currency` (VARCHAR)
- `type` (VARCHAR) - 'sale', 'subscription'
- `status` (VARCHAR) - 'pending', 'paid'
- `created_at` (TIMESTAMP)

### `agent_features`
- `id` (UUID, PK)
- `agent_id` (UUID, FK -> agents.id)
- `feature` (VARCHAR)

### `agent_requirements`
- `id` (UUID, PK)
- `agent_id` (UUID, FK -> agents.id)
- `name` (VARCHAR)
- `description` (VARCHAR)
- `is_required` (BOOLEAN)

### `deployments`
Stores active agent instances.
- `id` (UUID, PK)
- `user_id` (UUID, FK -> users.id)
- `agent_id` (UUID, FK -> agents.id)
- `status` (VARCHAR) - 'running', 'paused', 'error', 'deploying'
- `principal_id` (VARCHAR) - The agent's canister ID
- `endpoint` (VARCHAR)
- `character_file` (JSONB) - User customized character file
- `env_vars_encrypted` (TEXT) - Encrypted environment variables
- `deployed_at` (TIMESTAMP)
- `last_active` (TIMESTAMP)

### `transactions`
- `id` (UUID, PK)
- `user_id` (UUID, FK -> users.id)
- `agent_id` (UUID, FK -> agents.id)
- `amount` (DECIMAL)
- `currency` (VARCHAR) - 'CHAT' or 'ICP'
- `status` (VARCHAR)
- `tx_hash` (VARCHAR)
- `created_at` (TIMESTAMP)

### `reviews`
- `id` (UUID, PK)
- `agent_id` (UUID, FK -> agents.id)
- `user_id` (UUID, FK -> users.id)
- `rating` (INTEGER)
- `comment` (TEXT)
- `created_at` (TIMESTAMP)
