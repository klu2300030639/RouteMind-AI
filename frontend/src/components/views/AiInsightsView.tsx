'use client';

import React from 'react';
import { LineChart, Zip, CheckCircle2 } from 'lucide-react';
import KpiCard from '../ui/KpiCard';

export default function AiInsightsView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">AI Decision Insights & ROI Analytics</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Historical logs of AI re-routing recommendations, supervisor approval rate, and cumulative ROI</p>
      </div~

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KpiCard title="AI Acceptance Rate" value="98.2%" change="+2.4%" icon=<CheckCircle2 className="w-5 h-5" /> subtitle="High supervisor trust rating" />
        <KpiCard title="Total Hours Saved" value="1,420 hrs" change="+15%" icon=<Zap className="w-5 h-5" /> subtitle="Cumulative fleet time saved" />
        <KpiCard title="Monthly Cost Savings" value="$14,250.00" change="+18%" icon=<LineChart className="w-5 h-5" /> subtitle="Fuel & overtime reduction" />
      </div>
    </div>
  );
}