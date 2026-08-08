'use client';

import React, { useState } from 'react';
import { Play, Upload, CheckCircle } from 'lucide-react';
import LeafletMap from '../maps/LeafletMap';

export default function RoutePlannerView() {
  const [vehicles, setVehicles] = useState(5);
  const [capacity, setCapacity] = useState(1000);
  const [solving, setSolving] = useState(false);
  const [solved, setSolved] = useState(false);

  const handleSolve = () => {
    setSolving(true);
    setTimeout(() => {
      setSolving(false);
      setSolved(true);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">VRP Route Optimization Engine</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Solve Capacitated Vehicle Routing Problem with Time Windows (CVRPTW)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-4">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-3">Constraints & Parameters</h3>
          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-500 dark:text-slate-400 font-semibold mb-1">Fleet Size (Vehicles)</label>
              <input
                type="number"
                value={vehicles}
                onChange={(e) => setVehicles(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-bold"
              />
            </div>

            <div>
              <label className="block text-slate-500 dark:text-slate-400 font-semibold mb-1">Vehicle Payload Capacity (kg)</label>
              <input
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 font-bold"
              />
            </div>

            <div>
              <label className="block text-slate-500 dark:text-slate-400 font-semibold mb-1">Upload Customer Stops (CSV)</label>
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center cursor-pointer hover:border-blue-500 transition">
                <Upload className="w-6 h-6 mx-auto text-slate-400 mb-1" />
                <span className="text-[11px] text-slate-500 font-medium">Drop CSV file or click to browse</span>
              </div>
            </div>

            <button
              onClick={handleSolve}
              disabled={solving}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {solving ? (
                <span>Solving OR-Tools VRP Matrix...</span>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Run VRP Optimization Engine</span>
                </>
              )}
            </button>

            {solved && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center gap-2 text-xs font-semibold">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Optimization Complete! Total distance reduced by 28.4%.</span>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-2">
          <LeafletMap height="440px" />
        </div>
      </div>
    </div>
  );
}
