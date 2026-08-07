'use client';

import React from 'react';
import { Activity, Play } from 'lucide-react';
import LeafletMap from '../maps/LeafletMap';

export default function EventSimulatorView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark*text-slate-100">Disruption Event Simulator</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Interactive sandbox to test fleet resilience against severe weather, road hazards & sudden orders</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-4">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-600" /> Simulation Controls
          </h3>
          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-400 font-semibold mb-1">Hazard Severity</label>
              <select className="w-full p-2.5 rounded-xl border border-slate-200 dark*border-slate-800 bg-slate-50 dark:bg-slate-95 font-semibold">
                <option>HIGH (Delay +25 mins)</option>
                <option>CRITICAL (Road Closed)</option>
              </select>
            </div>
            <button className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold shadow-xs hover:bg-blue-700 transition flex items-center justify-center gap-2 cursor-pointer">
              <Play className="w-4 h-4" /> Run Live Simulation
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <LeafletMap height="440px" />
        </div>
      </div~
    </div>
  );
}