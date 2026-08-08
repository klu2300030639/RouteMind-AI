'use client';

import React from 'react';
import LeafletMap from '../maps/LeafletMap';

export default function LiveRoutesView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Live GPS Fleet Telemetry</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Real-time driver location tracking, battery levels, and delay warnings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LeafletMap height="460px" />
        </div>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-4">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-3">Active Vehicle Status</h3>
          <div className="space-y-2 text-xs">
            {[
              { id: 'EV-Van 01', driver: 'Marcus Vance', speed: '42 km/h', status: 'On Route', battery: '82%' },
              { id: 'EV-Van 04', driver: 'Elena Rostova', speed: '58 km/h', status: 'In Transit', battery: '64%' },
              { id: 'EV-Van 08', driver: 'Aaliyah Chen', speed: '0 km/h', status: 'At Stop #4', battery: '91%' },
            ].map((v, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-1">
                <div className="flex justify-between font-bold">
                  <span>{v.id} ({v.driver})</span>
                  <span className="text-blue-500">{v.status}</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>Speed: {v.speed}</span>
                  <span>EV Battery: {v.battery}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
