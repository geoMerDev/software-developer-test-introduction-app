The Musical Lake

## Run (docker-compose)

Requirements: Docker y docker-compose isntalleds.

# Build
docker compose build

# Start
docker compose up

# App URL (by default)
# http://localhost:3000

## Techs:

Language: JavaScript (Node.js + Express)

Run via: docker-compose

Endpoint: GET /continue?sound=<value>[&all=true]



Project structure
.
├─ src/
│  ├─ index.js     # Express server + routes + minimal UI
│  └─ logic.js     # SONGS + continuation logic
├─ package.json
├─ docker-compose.yml
└─ README.md



Input: a single sound (e.g. brr, birip, plop, croac, brrah, etc.)

Output: only the matches, each with: