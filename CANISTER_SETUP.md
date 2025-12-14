# Canister Setup Guide

This guide explains how to set up the Internet Computer (ICP) canisters for the AI Agent Marketplace.

## Prerequisites
- DFINITY Canister SDK (`dfx`)
- Rust or Motoko

## Architecture
The marketplace consists of two main canister types:
1. **Marketplace Canister**: Handles listings, users, and payments.
2. **Agent Canister**: The actual AI agent code (spawned per deployment).

## Marketplace Canister (Motoko)

```motoko
actor Marketplace {
  // Store agents and deployments
  stable var agents : Trie<Text, Agent>;
  stable var deployments : Trie<Text, Deployment>;

  public func listAgent(agent : Agent) : async Text {
    // Logic to list an agent
  };

  // Developer Functions
  public func registerDeveloper(profile : DeveloperProfile) : async Result<Text, Error> {
    // Register a new developer
  };

  public func submitAgent(submission : AgentSubmission) : async Result<Text, Error> {
    // Submit a new agent for review
  };

  public func getDeveloperEarnings(developerId : Text) : async EarningsReport {
    // Calculate and return earnings
  };

  public func purchaseAgent(agentId : Text) : async Result<DeploymentId, Error> {
    // Logic to verify payment and spawn agent canister
  };
}
```

## Agent Canister (Rust)

The agent canister is a template that is instantiated for each user.

```rust
#[ic_cdk::update]
async fn chat(message: String) -> String {
    // 1. Load character file
    // 2. Call LLM (OpenAI via HTTPS Outcalls)
    // 3. Return response
}

#[ic_cdk::init]
fn init(config: AgentConfig) {
    // Initialize with user's character file and env vars
}
```

## Deployment Process (Spawning)

When a user purchases an agent:
1. Frontend calls `Marketplace.purchaseAgent()`.
2. Marketplace verifies transaction.
3. Marketplace uses `IC Management Canister` to create a new canister.
4. Marketplace installs the `Agent Canister` WASM code into the new canister.
5. Marketplace initializes the new canister with the user's configuration.
6. Returns the new Canister ID (Principal) to the frontend.
