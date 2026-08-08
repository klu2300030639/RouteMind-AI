'use client';

import React, { useState } from 'react';
import { Bot, Zap } from 'lucide-react';
import LeafletMap from '../maps/LeafletMap';

export default function AiCommandView() {
  const [logs, setLogs] = useState<string[]>([
    '[01:45 PM] INIT: AI Agent Heartbeat live on Chicago Depot',
    '[01:46 PM] MONITOR: OR-Tools VRP Optimizer evaluating 42 stops',
  ]);

  const triggerEvent = (eventType: string) => {
    setLogs((vr) => [
      `[${new Date().toLocaleTimeString()}] AI ACTION: Triggered re-route for ${eventType}`,
      ...vr,
    ]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">AI Command Center and Decision Engine</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Autonomous AI fleet re-routing, incident response, and audit logs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4 bg-slate-900 border border-slate-800 rounded-xl p-5 text-white">
          <h3 className="font-bold text-sm flex items-center gap-2">
            <Bot className="w-4 h-4 text-blue-400" /> AI Decision Logs
          </h3>
          <div className="h-64 overflow-y-auto bg-slate-950 p-3 rounded-lg font-mono text-[11px] space-y-1.5 text-emerald-400">
            {logs.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>

          <div className="space-y-2">
            <button
              onClick={() => triggerEvent('TRAFFIC_DELAY')}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition cursor-pointer"
            >
              Trigger AI Traffic Re-Route
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <LeafletMap height="440px" />
        </div>
      </div>
    </div>
  );
}
