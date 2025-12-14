# Deployment Guide

## Hosting the Frontend

1. **Build the React App**
   ```bash
   npm run build
   ```

2. **Deploy to ICP (Asset Canister)**
   
   Update `dfx.json`:
   ```json
   {
     "canisters": {
       "marketplace_assets": {
         "type": "assets",
         "source": ["dist/"],
         "dependencies": []
       }
     }
   }
   ```

   Run deploy:
   ```bash
   dfx deploy marketplace_assets --network ic
   ```

   OR deploy to Vercel/Netlify:
   - Connect your GitHub repo.
   - Set build command: `npm run build`
   - Set output directory: `dist`

## Hosting the Backend (Agents)

The agents are hosted on the Internet Computer as canisters.

1. **Compile Agent WASM**
   Compile your Rust/Motoko agent code to WASM.

2. **Upload WASM to Marketplace**
   The Marketplace canister needs the WASM binary to spawn new agents.
   
   ```bash
   dfx canister call marketplace uploadAgentWasm '(blob "...")'
   ```

## Environment Variables

Ensure your frontend has the following env vars:

- `VITE_MARKETPLACE_CANISTER_ID`: The ID of your main marketplace canister.
- `VITE_ICP_HOST`: `https://ic0.app`

## Domain Setup

1. Go to your domain provider (e.g., GoDaddy).
2. Add a CNAME record pointing to your ICP canister or Vercel deployment.
