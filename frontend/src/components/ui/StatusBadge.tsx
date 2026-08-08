'use client';

import React from 'react';

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  let colorClass = 'bg-slate-500/10 text-slate-400 border-slate-500/20';
  if (status === 'Optimal' || status === 'Completed' || status === 'Active') {
    colorClass = 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
  } else if (status === 'In Transit' || status === 'En Route') {
    colorClass = 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
  } else if (status === 'Delayed' || status === 'Warning') {
    colorClass = 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
  } else if (status === 'Critical' || status === 'Cancelled') {
    colorClass = 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20';
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${colorClass}`}>
      {status}
    </span>
  );
}
