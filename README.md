# 🚚 RouteMind AI: Autonomous Fleet & Vehicle Routing Optimization Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.3.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100.0-009688?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Google OR-Tools](https://img.shields.io/badge/Google_OR--Tools-VRP_Engine-4285F4?style=for-the-badge&logo=google)](https://developers.google.com/optimization)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

**RouteMind AI** is an enterprise-grade, AI-powered **Vehicle Routing Problem (VRP) & Fleet Control Center** designed for logistics operators, dispatchers, and fleet managers. Powered by **Google OR-Tools CVRPTW optimization algorithms**, dynamic traffic re-routing AI agents, real-time GPS telemetry, and interactive Leaflet vector mapping.

---

## 🌟 Key Features & Modules

- 📊 **Command Dashboard**: Live operational metrics, vehicle telemetry, active alerts, and real-time AI recommendation triggers.
- 🎯 **VRP Solver Engine**: Capacitated Vehicle Routing Problem with Time Windows (CVRPTW) optimizer with custom vehicle capacities, time window constraints, and CSV stop uploaders.
- 📡 **Live Telemetry & Tracking**: Real-time vehicle GPS tracking, speed monitoring, and EV battery telemetry on interactive Leaflet maps.
- ⚖️ **Route Comparison & Audit**: Before-vs-After audit engine measuring distance reductions (~28.4%), fuel savings, and carbon footprint reduction.
- 🤖 **AI Autonomous Command Center**: Automated incident response logging, traffic congestion bypass triggers, and AI decision confidence metrics.
- ⚡ **Disruption Event Simulator**: Interactive disruption sandbox for stress-testing fleet resilience against severe weather, road closures, and sudden order surges.
- 📈 **AI ROI Insights**: Cumulative financial savings tracking, supervisor acceptance rates, and overtime reduction analytics.
- 📊 **Fleet Analytics & Leaderboards**: Weekly fuel efficiency trends and driver performance leaderboards.
- 📄 **Exportable Reports**: One-click exports for CSV fleet logs and PDF optimization audits.
- 🎨 **Modern Executive UI**: Responsive dark/light high-contrast theme powered by Next.js, TailwindCSS, and Lucide Icons.

---

## 🏗️ Architecture & Technology Stack

```
RouteMind-AI Monorepo
├── frontend/             # Next.js 16 (React 19, TailwindCSS, Lucide Icons, Leaflet Maps)
│   ├── src/
│   │   ├── app/          # App Router & Tab Navigation
│   │   ├── components/   # UI Controls, Maps, Views & Layout Shell
│   │   └── lib/          # API Integration & TypeScript Models
│   └── package.json
└── backend/              # Python FastAPI Server (Google OR-Tools Solver)
    ├── app/              # VRP Engine, Telemetry Routes & OpenAPI Specs
    ├── main.py           # Uvicorn FastAPI Entrypoint
    └── requirements.txt
```

### Stack Details:
- **Frontend**: Next.js 16 (App Router), React 19, TypeScript, TailwindCSS v3.4, Lucide React, Leaflet Vector Mapping.
- **Backend**: Python 3.11+, FastAPI, Uvicorn, Google OR-Tools, Pydantic, NumPy.
- **Optimization Algorithm**: Capacitated Vehicle Routing Problem with Time Windows (CVRPTW) using Google OR-Tools Guided Local Search metaheuristics.

---

## 🚀 Quickstart & Local Setup

### Prerequisites
- Node.js (v18+)
- Python (v3.10+)

### 1. Start the FastAPI Backend Server
```bash
cd backend
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```
> Fast API server live on `http://127.0.0.1:8000` (Swagger docs: `http://127.0.0.1:8000/docs`).

### 2. Start the Next.js Web Application
```bash
cd frontend
npm install
npm run dev
```
> Access application live in browser at `http://localhost:3000`.

---

## ☁️ Deployment

### Deploying Frontend to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run Vercel deployment inside `frontend/`:
```bash
cd frontend
vercel --prod
```

### Deploying Backend to Render / Railway / AWS
The FastAPI backend can be containerized via Docker or deployed to Render/Railway:
```bash
docker build -t routemind-backend ./backend
docker run -p 8000:8000 routemind-backend
```

---

## 📜 License
Licensed under the MIT License. Developed for modern enterprise logistics operations.
