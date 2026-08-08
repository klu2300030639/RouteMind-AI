'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function AnalyticsView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Enterprise Fleet Analytics</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Deep operational metrics, fuel efficiency trends, and driver leaderboards</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" /> Weekly Efficiency Trend (%)
          </h3>
          <div className="h-64 flex items-end justify-between gap-4 pt-8 px-4 border-b border-slate-100 dark:border-slate-800">
            {[
              { day: 'Mon', h: '70%' },
              { day: 'Tue', h: '82%' },
              { day: 'Wed', h: '88%' },
              { day: 'Thu', h: '94%' },
              { day: 'Fri', h: '98%' },
            ].map((b, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-blue-600 rounded-t-lg transition-all" style={{ height: b.h }} />
                <span className="text-xs font-semibold text-slate-500">{b.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
            🏆 Top Performing Fleet Drivers
          </h3>
          <div className="space-y-2 text-xs">
            {[
              { name: 'Elena Rostova', rate: '99.5%', rating: '4.95 ★' },
              { name: 'Carlos Mendez', rate: '98.8%', rating: '4.92 ★' },
              { name: 'Marcus Vance', rate: '98.2%', rating: '4.90 ★' },
            ].map((d, i) => (
              <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 flex items-center justify-between font-semibold border border-slate-100 dark:border-slate-800">
                <span>{d.name}</span>
                <span className="text-emerald-600">{d.rate} On-Time ({d.rating})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
