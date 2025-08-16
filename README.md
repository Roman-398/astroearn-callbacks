# AstroEarn Callbacks (Vercel)
Minimal serverless endpoint to receive BitLabs reward callbacks.

Endpoints:
- GET/POST /api/reward — reward callback
- GET /api/health — healthcheck

Deploy:
1) Push this folder to GitHub.
2) In Vercel import repo, deploy.
3) Project Settings → Environment Variables → add BITLABS_S2S_KEY.
4) Redeploy and set Reward callback in BitLabs to https://<project>.vercel.app/api/reward
