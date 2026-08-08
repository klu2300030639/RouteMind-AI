'use client';

import React from 'react';

export default function AiCommandView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">AI Command Center</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Review and action real-time AI recommendations based on current network anomalies.</p>
      </div>

      {/* 3 AI Recommendation Cards Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Severe Traffic Delay (Yellow / Amber Theme) */}
        <div className="bg-white dark:bg-slate-900 border-2 border-amber-400/80 dark:border-amber-600 rounded-2xl p-6 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-500 text-[22px]">warning</span>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">Severe Traffic Delay</h3>
            </div>
            <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              94% Match
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Time Saved</span>
              <p className="text-emerald-600 font-extrabold text-sm mt-0.5">+42 mins</p>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Affected Stops</span>
              <p className="font-extrabold text-slate-800 dark:text-slate-200 text-xs mt-0.5">14 (Route 3B)</p>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase">Business Impact</span>
            <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mt-0.5">High Risk of SLA Breach (3 Deliveries)</p>
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase">AI REASONING</span>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Accident reported on I-95 South. Recommended reroute via Route 1 avoids projected 50-minute standstill while only adding 8 miles to total distance.
            </p>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => alert('Approved reroute for Severe Traffic Delay!')}
              className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 transition cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">check</span>
              <span>Approve</span>
            </button>
            <button className="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-50 transition cursor-pointer">
              ✕ Reject
            </button>
            <button className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-700 transition cursor-pointer">
              <span className="material-symbols-outlined text-[18px]">info</span>
            </button>
          </div>
        </div>

        {/* Card 2: Vehicle Breakdown (Red Theme) */}
        <div className="bg-white dark:bg-slate-900 border-2 border-rose-400/80 dark:border-rose-600 rounded-2xl p-6 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-rose-500 text-[22px]">car_repair</span>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">Vehicle Breakdown (TRK-402)</h3>
            </div>
            <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              98% Match
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Time to Rescue</span>
              <p className="font-extrabold text-slate-800 dark:text-slate-200 text-sm mt-0.5">18 mins</p>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Pending Stops</span>
              <p className="text-rose-600 font-extrabold text-sm mt-0.5">22</p>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase">Business Impact</span>
            <p className="text-xs font-bold text-rose-600 dark:text-rose-400 mt-0.5">Critical - Medical Supplies Pending</p>
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase">AI REASONING</span>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              TRK-402 reported engine failure. TRK-109 is currently empty, 12 miles away, and has sufficient capacity to complete the remaining manifest within SLAs.
            </p>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => alert('Dispatched TRK-109 for rescue mission!')}
              className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 transition cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">check</span>
              <span>Dispatch TRK-109</span>
            </button>
            <button className="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-50 transition cursor-pointer">
              ✕ Ignore
            </button>
          </div>
        </div>

        {/* Card 3: Urgent Ad-Hoc Pickup (Blue Theme) */}
        <div className="bg-white dark:bg-slate-900 border-2 border-blue-400/80 dark:border-blue-600 rounded-2xl p-6 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-500 text-[22px]">add_location</span>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">Urgent Ad-Hoc Pickup</h3>
            </div>
            <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              82% Match
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Added Distance</span>
              <p className="font-extrabold text-slate-800 dark:text-slate-200 text-sm mt-0.5">+3.2 mi</p>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Target Vehicle</span>
              <p className="font-extrabold text-slate-800 dark:text-slate-200 text-xs mt-0.5">VAN-08</p>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase">Business Impact</span>
            <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-0.5">Revenue Opportunity (Premium SLA)</p>
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase">AI REASONING</span>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              New high-priority request at 420 Tech Park. VAN-08 is passing within 2 miles, has 15% spare capacity, and is currently running 20 minutes ahead of schedule.
            </p>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => alert('Inserted stop at 420 Tech Park into VAN-08 manifest!')}
              className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 transition cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">check</span>
              <span>Insert Stop</span>
            </button>
            <button className="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-50 transition cursor-pointer">
              ✕ Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
