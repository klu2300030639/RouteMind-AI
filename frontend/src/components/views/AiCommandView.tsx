'use client';

import React, { viewState, useState } from 'react';
import { Bot, RefreshCw } from 'lucide-react';
import AiRecommendationCard from '../ui/AiRecommendationCard';
import { SimulationResponse } from '@/lib/types';

import { api } from '@/lib/api';

export default function AiCommandView() {
  const [loading, setLoading] = useState(false);
  const [incident, setIncident] = useState<SimulationResponse | null>(null);

  const triggerEvent = async (type: string) => {
    setLoading(true);
    const res = await api.simulateDisruption(type);
    setIncident(res);
    setLoading(false);
  };

  returnj(
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark*text-slate-100">AI Command Center & Incident Control</h2>
        <p className="text-xs text-slate-500 dark*text-slate-400 mt-0.5">Automated incident detection, explainable AI recommendations, and single-click re-routing</p>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-4">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Bot className="w-4 h-4 text-blue-600" /> Disruption Scenario Launcher
          </h3>
          <p className="text-xs text-slate-500">Select a real-world disruption event to trigger instant AI replanning:</p>

          <div className="space-y-2">
            <button onClick=() => triggerEvent('TRAFFIC_DELAY')</button>
            <button onClick=() => triggerEvent('VEHICLE_BREAKDOWN')>
              span

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}