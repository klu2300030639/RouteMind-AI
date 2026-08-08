'use client';

import React from 'react';
import { Download, FileSpreadsheet } from 'lucide-react';

export default function ReportsView() {
  const reports = [
    { name: 'Daily Fleet Mileage Report (CSV)', date: '2026-08-07', size: '240 KB' },
    { name: 'VRP Fuel & Carbon Reduction Audit (PDF)', date: '2026-08-06', size: '1.4 MB' },
    { name: 'On-Time SLA Delivery Log (CSV)', date: '2026-08-05', size: '512 KB' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Export Reports and Audits</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Download CSV and PDF reports for operational auditing</p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-3">
        {reports.map((r, i) => (
          <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileSpreadsheet className="w-5 h-5 text-emerald-500" />
              <div>
                <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">{r.name}</h4>
                <p className="text-[10px] text-slate-500">Generated: {r.date} • Size: {r.size}</p>
              </div>
            </div>
            <button
              onClick={() => alert(`Downloading ${r.name}...`)}
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center gap-1.5 hover:bg-blue-700 transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Export
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
