'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function RouteComparisonView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Route Comparison and Audit</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Before vs. After OR-Tools AI Optimization Audit</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-rose-600 flex items-center gap-2">
            ❌ Unoptimized Manual Route
          </h3>
          <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
            <p>Total Distance: <b>138.4 km</b></p>
            <p>Estimated Fuel: <b>34.2 L</b></p>
            <p>Estimated Time: <b>5 hrs 20 mins</b></p>
          </div>
        </div>

        <div className="bg-slate-900 border border-emerald-500/40 rounded-xl p-5 shadow-xs space-y-3 text-white">
          <h3 className="font-bold text-sm text-emerald-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> RouteMind AI Optimized Route
          </h3>
          <div className="space-y-2 text-xs text-slate-300">
            <p>Total Distance: <b className="text-emerald-400">96.2 km (-30.5%)</b></p>
            <p>Estimated Fuel: <b className="text-emerald-400">23.7 L (-30.7%)</b></p>
            <p>Estimated Time: <b className="text-emerald-400">3 hrs 50 mins (-25.0%)</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}
