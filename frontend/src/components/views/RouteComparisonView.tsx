'use client';

import React from 'react';

export default function RouteComparisonView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Route Comparison and Audit</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Before vs. After Google OR-Tools AI Optimization Audit.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Unoptimized Manual Route */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-rose-600 font-extrabold text-sm border-b border-slate-100 dark:border-slate-800 pb-3">
            <span className="material-symbols-outlined">cancel</span>
            <span>Unoptimized Manual Route</span>
          </div>

          <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950">
              <span>Total Distance</span>
              <b className="text-slate-900 dark:text-slate-100">138.4 km</b>
            </div>
            <div className="flex justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950">
              <span>Estimated Fuel Consumption</span>
              <b className="text-slate-900 dark:text-slate-100">34.2 L</b>
            </div>
            <div className="flex justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950">
              <span>Estimated Duration</span>
              <b className="text-slate-900 dark:text-slate-100">5 hrs 20 mins</b>
            </div>
          </div>
        </div>

        {/* RouteMind AI Optimized Route */}
        <div className="bg-slate-900 text-white border-2 border-emerald-500/60 rounded-2xl p-5 shadow-md space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm border-b border-slate-800 pb-3">
            <span className="material-symbols-outlined">check_circle</span>
            <span>RouteMind AI Optimized Route</span>
          </div>

          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex justify-between p-3 rounded-xl bg-slate-950">
              <span>Total Distance</span>
              <b className="text-emerald-400 text-sm">96.2 km (-30.5%)</b>
            </div>
            <div className="flex justify-between p-3 rounded-xl bg-slate-950">
              <span>Estimated Fuel Consumption</span>
              <b className="text-emerald-400 text-sm">23.7 L (-30.7%)</b>
            </div>
            <div className="flex justify-between p-3 rounded-xl bg-slate-950">
              <span>Estimated Duration</span>
              <b className="text-emerald-400 text-sm">3 hrs 50 mins (-25.0%)</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
