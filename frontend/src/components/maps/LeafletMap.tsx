'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface LeafletMapProps {
  height?: string;
}

export default function LeafletMap({ height = '400px' }: LeafletMapProps) {
  return (
    <div
      style={{ height }}
      className="w-full rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden flex flex-col justify-between p-4 shadow-xl"
    >
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs font-bold text-white">
          <Navigation className="w-3.5 h-3.5 text-blue-400 animate-spin" />
          <span>Interactive VRP Vector Route Map (Chicago Depot)</span>
        </div>
        <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          ● Live Telemetry Sync
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-96 h-96 rounded-full border border-blue-500/40 animate-ping" />
      </div>

      <div className="z-10 flex items-end justify-between">
        <div className="p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-[11px] space-y-1 text-slate-300">
          <div className="flex items-center gap-2 font-bold text-white">
            <MapPin className="w-3.5 h-3.5 text-rose-500" /> Depot: 41.8781° N, 87.6298° W
          </div>
          <div>Active Vehicles: 24 EVs • Optimized Stops: 142</div>
        </div>
      </div>
    </div>
  );
}
