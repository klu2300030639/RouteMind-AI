'use client';

import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export default function AnalyticsView() {
  const deliveryData = [
    { month: 'Jan', onTime: 88, delayed: 12 },
    { month: 'Feb', onTime: 90, delayed: 10 },
    { month: 'Mar', onTime: 87, delayed: 13 },
    { month: 'Apr', onTime: 92, delayed: 8 },
    { month: 'May', onTime: 94, delayed: 6 },
    { month: 'Jun', onTime: 91, delayed: 9 },
    { month: 'Jul', onTime: 95, delayed: 5 },
    { month: 'Aug', onTime: 93, delayed: 7 },
    { month: 'Sep', onTime: 96, delayed: 4 },
    { month: 'Oct', onTime: 94, delayed: 6 },
    { month: 'Nov', onTime: 97, delayed: 3 },
    { month: 'Dec', onTime: 98, delayed: 2 },
  ];

  const efficiencyData = [
    { name: 'AI Optimized', value: 78, color: '#2563eb' },
    { name: 'Manual Routing', value: 22, color: '#94a3b8' },
  ];

  const fuelData = [
    { month: 'Jan', projected: 200, actual: 180 },
    { month: 'Feb', projected: 400, actual: 390 },
    { month: 'Mar', projected: 650, actual: 610 },
    { month: 'Apr', projected: 850, actual: 820 },
    { month: 'May', projected: 1100, actual: 1050 },
    { month: 'Jun', projected: 1400, actual: 1320 },
  ];

  const safetyData = [
    { region: 'NA East', score: 88 },
    { region: 'NA West', score: 82 },
    { region: 'EMEA North', score: 91 },
    { region: 'EMEA South', score: 86 },
    { region: 'APAC', score: 79 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Fleet Analytics</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Deep operational metrics, fuel efficiency trends, and regional safety leaderboards.</p>
      </div>

      {/* Top Row: Delivery Performance Trend & Route Efficiency Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">Delivery Performance Trend</h3>
              <p className="text-[11px] text-slate-500">On-time vs Delayed deliveries over 12 months</p>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={deliveryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="onTime" stroke="#2563eb" strokeWidth={3} name="On-Time (%)" />
                <Line type="monotone" dataKey="delayed" stroke="#f43f5e" strokeWidth={2} name="Delayed (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">Route Efficiency</h3>
            <p className="text-[11px] text-slate-500">AI Optimized vs Manual</p>
          </div>
          <div className="h-56 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={efficiencyData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" paddingAngle={5}>
                  {efficiencyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
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
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400" /> Manual Routing
              </span>
              <span className="text-slate-500">22%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row: Cumulative Fuel Savings & Regional Safety Scores */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
          <div>
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">Cumulative Fuel Savings</h3>
            <p className="text-[11px] text-slate-500">Projected vs Actual ($USD)</p>
          </div>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={fuelData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={3} name="Actual Savings ($)" />
                <Line type="monotone" dataKey="projected" stroke="#64748b" strokeDasharray="5 5" name="Projected ($)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
          <div>
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">Regional Driver Safety Scores</h3>
            <p className="text-[11px] text-slate-500">Average score by region (0-100)</p>
          </div>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={safetyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" tick={{ fontSize: 11 }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="score" fill="#3b82f6" radius={[6, 6, 0, 0]} name="Safety Score" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
