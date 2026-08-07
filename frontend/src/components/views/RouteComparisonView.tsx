'use client';

import React from 'react';

export default function RouteComparisonView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Route Comparison & Audit</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Side-by-side metric comparison between Baseline routes and AI-Optimized OR-Tools routes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark*bg-slate-900 border border-slate-200 dark*border-slate-800 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-base text-slate-800 dark:text-slate-200">Baseline Manual Route</h3>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Unoptimized</span>
          </div>
          <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
            <p className="flex justify-between"><span>Total Distance:</span> <b>142.8 km</b></p>
            <p className="flex justify-between"><span>Total Time:</span> <b>380 mins</b></p>
            <p className="flex justify-between"><span>Est. Fuel Used:</span> <b>28.4 L</b></p>
            <p className="flex justify-between"><span>Time Window Violations:</span> <b className="text-rose-500">2 Orders Delayed</b></p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900/20 to-emerald-900/20 border border-blue-500/50 rounded-xl p-6 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-blue-500/30 pb-3">
            <h3 className="font-bold text-base text-blue-600 dark:text-blue-400 flex items-center gap-2">
              ⚡ RouteMind AI-Optimized (OR-Tools)
            </h3>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">96.4 Score</span>
          </div>
          <div className="space-y-2 text-xs text-slate-800 dark:text-slate-200">
            <p className="flex justify-between"><span>Total Distance:</span> <b className="text-emerald-500">124.3 km (-18.5 km)</b></p>
            <p className="flex justify-between"><span>Total Time:</span> <b className="text-emerald-500">342 mins (-38 mins)</b></p>
            <p className="flex justify-between"><span>Est. Fuel Used:</span> <b className="text-emerald-500">24.2 L (-4.2 L)</b></p>
            <p className="flex justify-between"><span>Time Window Violations:</span> <b className="text-emerald-500">0 Violations (100% On-Time)</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}