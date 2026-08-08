'use client';

import React from 'react';

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  subtitle: string;
}

export default function KpiCard({ title, value, change, icon, subtitle }: KpiCardProps) {
  const isPositive = change.startsWith('+');
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs transition hover:shadow-md">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{title}</span>
        <div className="p-2 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400">{icon}</div>
      </div>
      <div className="flex items-baseline justify-between">
        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">{value}</h3>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${isPositive ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'}`}>
          {change}
        </span>
      </div>
      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-2 font-medium">{subtitle}</p>
    </div>
  );
}
