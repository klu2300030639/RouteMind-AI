'use client';

import React from 'react';

export default function AnalyticsView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Fleet Analytics</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Deep operational metrics, fuel efficiency trends, and regional safety leaderboards.</p>
      </div>

      {/* Top Row: Delivery Performance Trend & Route Efficiency Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Delivery Performance Trend Line Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">Delivery Performance Trend</h3>
              <p className="text-[11px] text-slate-500">On-time vs Delayed deliveries over 12 months</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-[18px]">more_vert</span>
          </div>

          <div className="h-60 flex items-end justify-between gap-3 pt-6 px-4 border-b border-slate-100 dark:border-slate-800">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-blue-600 rounded-t-md transition-all" style={{ height: `${85 + (i % 5) * 2}%` }} />
                <span className="text-[10px] font-bold text-slate-400">{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Route Efficiency Donut Chart */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">Route Efficiency</h3>
            <p className="text-[11px] text-slate-500">AI Optimized vs Manual</p>
          </div>

          {/* Donut Simulation */}
          <div className="flex items-center justify-center my-4">
            <div className="w-40 h-40 rounded-full border-8 border-blue-600 border-t-slate-200 flex items-center justify-center relative">
              <div className="text-center">
                <span className="text-3xl font-black text-slate-900 dark:text-slate-100">78%</span>
                <p className="text-[10px] font-bold text-slate-400 uppercase">AI Optimized</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-xs border-t border-slate-100 dark:border-slate-800 pt-3">
            <div className="flex items-center justify-between font-bold">
              <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" /> AI Optimized
              </span>
              <span className="text-slate-900 dark:text-slate-100">78%</span>
            </div>
            <div className="flex items-center justify-between font-bold">
              <span className="flex items-center gap-2 text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" /> Manual Routing
              </span>
              <span className="text-slate-500">22%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row: Cumulative Fuel Savings & Regional Safety Scores */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cumulative Fuel Savings */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
          <div>
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">Cumulative Fuel Savings</h3>
            <p className="text-[11px] text-slate-500">Projected vs Actual (USD)</p>
          </div>

          <div className="h-52 flex items-end justify-between gap-3 pt-6 px-4 border-b border-slate-100 dark:border-slate-800">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((m, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-emerald-500 rounded-t-md transition-all" style={{ height: `${30 + i * 8}%` }} />
                <span className="text-[10px] font-bold text-slate-400">{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Driver Safety Scores */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
          <div>
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">Regional Driver Safety Scores</h3>
            <p className="text-[11px] text-slate-500">Average score by region (0-100)</p>
          </div>

          <div className="h-52 flex items-end justify-around gap-4 pt-6 px-4 border-b border-slate-100 dark:border-slate-800">
            {[
              { region: 'NA East', score: 88 },
              { region: 'NA West', score: 82 },
              { region: 'EMEA North', score: 91 },
              { region: 'EMEA South', score: 86 },
              { region: 'APAC', score: 79 },
            ].map((r, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-blue-500 rounded-t-md transition-all" style={{ height: `${r.score}%` }} />
                <span className="text-[10px] font-bold text-slate-400">{r.region}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Box: RouteMind AI Assessment */}
      <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/30">
            <span className="material-symbols-outlined text-2xl">smart_toy</span>
          </div>
          <div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">RouteMind AI Assessment</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed max-w-3xl">
              Analysis indicates a sustained 12% improvement in routing efficiency over the last 6 months, primarily driven by adoption in the NA region. However, APAC regions show a 4% increase in empty miles. Re-calibrating the return-trip ML model for dense urban APAC sectors is recommended to capture an estimated $150k in Q4 savings.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 shrink-0">
          <button
            onClick={() => alert('Initiated ML Model Recalibration for APAC Sectors...')}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition cursor-pointer"
          >
            Initiate Model Recalibration
          </button>
          <button className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition cursor-pointer">
            View Detailed Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
