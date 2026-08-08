'use client';

import React from 'react';
import LeafletMap from '../maps/LeafletMap';

export default function LiveRoutesView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Live Telemetry</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Real-time driver location tracking, vehicle battery levels, and delay warnings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LeafletMap height="460px" />
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-3">Active Vehicle Status</h3>
          <div className="space-y-3 text-xs">
            {[
              { id: 'TRK-492', driver: 'Sarah Jenkins', status: 'On-Track', color: 'emerald', eta: '14:30', progress: 65, heading: 'Logistics Hub Alpha' },
              { id: 'VAN-105', driver: 'Marcus Chen', status: 'Delayed', color: 'amber', eta: '15:45 (was 15:15)', progress: 30, heading: 'Traffic incident on Route 9' },
            ].map((v, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between font-extrabold text-slate-900 dark:text-slate-100">
                  <span>{v.id} <span className={`ml-2 text-[10px] px-2 py-0.5 rounded-full font-bold bg-${v.color}-500/10 text-${v.color}-600 dark:text-${v.color}-400`}>{v.status}</span></span>
                  <span className="text-sm font-black">{v.eta}</span>
                </div>
                <p className="text-slate-500 text-[11px]">Driver: {v.driver}</p>
                <div className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">📍 {v.heading}</div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-1">
                  <div className={`h-full ${v.color === 'emerald' ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${v.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
