'use client';

import React, { useState } from 'react';
import SatelliteLeafletMap from '../maps/SatelliteLeafletMap';

export default function DashboardView() {
  const [alertDismissed, setAlertDismissed] = useState(false);
  const [rerouteApproved, setRerouteApproved] = useState(false);

  const activeRoutes = [
    { id: 'RT-8802', driver: 'John Smith', initials: 'JS', bg: 'bg-blue-600', vehicle: 'TRK-442 (Van)', status: 'In Transit', color: 'emerald', eta: '14:30 EST' },
    { id: 'RT-8803', driver: 'Alice Doe', initials: 'AD', bg: 'bg-amber-600', vehicle: 'TRK-109 (Heavy)', status: 'Delayed', color: 'amber', eta: '15:45 EST (+15m)' },
    { id: 'RT-8804', driver: 'Marcus Reed', initials: 'MR', bg: 'bg-cyan-600', vehicle: 'TRK-299 (Van)', status: 'Loading', color: 'slate', eta: '--:--' },
  ];

  return (
    <div className="space-y-6">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Live Operations</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Real-time overview of fleet performance and AI optimization status.</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
            System Optimal
          </span>
        </div>
      </div>

      {/* KPI Cards Row (6 Cards) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider">ACTIVE DELIVERIES</span>
            <span className="material-symbols-outlined text-[18px] text-blue-500">local_shipping</span>
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-slate-100">1,248</div>
          <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-1">+4.2% from avg</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider">VEHICLES ONLINE</span>
            <span className="material-symbols-outlined text-[18px] text-blue-500">directions_car</span>
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-slate-100">342 <span className="text-xs font-medium text-slate-400">/ 350</span></div>
          <div className="text-[10px] font-bold text-slate-500 mt-1">97.7% Utilization</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider">AVAILABLE DRIVERS</span>
            <span className="material-symbols-outlined text-[18px] text-amber-500">person</span>
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-slate-100">28</div>
          <div className="text-[10px] font-bold text-amber-600 dark:text-amber-400 mt-1">Nearing shift limit</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider">FUEL SAVED</span>
            <span className="material-symbols-outlined text-[18px] text-emerald-500">eco</span>
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-slate-100">412 gal</div>
          <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-1">$1,420 est. value</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider">ROUTES OPTIMIZED</span>
            <span className="material-symbols-outlined text-[18px] text-blue-500">alt_route</span>
          </div>
          <div className="text-xl font-black text-slate-900 dark:text-slate-100">86</div>
          <div className="text-[10px] font-bold text-slate-500 mt-1">Last 24 hours</div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider">AI ALERTS</span>
            <span className="material-symbols-outlined text-[18px] text-rose-500">notifications_active</span>
          </div>
          <div className="text-xl font-black text-rose-600 dark:text-rose-400">3</div>
          <div className="text-[10px] font-bold text-rose-600 dark:text-rose-400 mt-1">Requires attention</div>
        </div>
      </div>

      {/* Middle Section: Satellite Map + AI Alert Card & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Satellite Map Container */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600">satellite_alt</span>
              <span>Live Fleet Satellite Topology</span>
            </h3>
          </div>
          <SatelliteLeafletMap height="400px" />
        </div>

        {/* Right Side Cards */}
        <div className="space-y-4">
          {/* AI Recommendation Card */}
          {!alertDismissed && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">Route Deviation Detected</h4>
                  <p className="text-[11px] text-slate-500">High confidence intervention recommended for Route NY-402.</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs space-y-1">
                <div className="flex justify-between font-bold text-slate-800 dark:text-slate-200">
                  <span>Vehicle ID: TRK-882</span>
                  <span className="text-rose-600 font-extrabold">Traffic Incident</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-[11px]">Accident on I-95 South causing +45m delay. Rerouting via Route 1 saves 32m.</p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => setRerouteApproved(true)}
                  className={`py-2.5 rounded-xl font-bold text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-1 ${
                    rerouteApproved ? 'bg-emerald-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">{rerouteApproved ? 'check_circle' : 'check'}</span>
                  <span>{rerouteApproved ? 'Reroute Approved!' : 'Approve Reroute'}</span>
                </button>
                <button
                  onClick={() => setAlertDismissed(true)}
                  className="py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}

          {/* Quick Actions 2x2 Grid */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => alert('Assigning driver to pending route...')} className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition text-center space-y-1 cursor-pointer">
                <span className="material-symbols-outlined text-[22px] text-blue-600">person_add</span>
                <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200">Assign Driver</p>
              </button>
              <button onClick={() => alert('Dispatching emergency vehicle TRK-109...')} className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition text-center space-y-1 cursor-pointer">
                <span className="material-symbols-outlined text-[22px] text-blue-600">local_shipping</span>
                <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200">Dispatch Vehicle</p>
              </button>
              <button onClick={() => alert('Downloading daily dispatch report PDF...')} className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition text-center space-y-1 cursor-pointer">
                <span className="material-symbols-outlined text-[22px] text-blue-600">description</span>
                <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200">Generate Report</p>
              </button>
              <button onClick={() => alert('Connecting to 24/7 Support Desk...')} className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition text-center space-y-1 cursor-pointer">
                <span className="material-symbols-outlined text-[22px] text-blue-600">support_agent</span>
                <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200">Contact Support</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Table: Active Route Status */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">Active Route Status</h3>
          <a href="#" className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">View All Routes</a>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
              <tr>
                <th className="px-4 py-3">ROUTE ID</th>
                <th className="px-4 py-3">DRIVER</th>
                <th className="px-4 py-3">VEHICLE</th>
                <th className="px-4 py-3">STATUS</th>
                <th className="px-4 py-3">ETA</th>
                <th className="px-4 py-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {activeRoutes.map((r, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                  <td className="px-4 py-3.5 font-extrabold text-slate-900 dark:text-slate-100">{r.id}</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2 font-semibold">
                      <div className={`w-6 h-6 rounded-full ${r.bg} text-white text-[10px] font-bold flex items-center justify-center`}>
                        {r.initials}
                      </div>
                      <span>{r.driver}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 font-medium text-slate-600 dark:text-slate-400">{r.vehicle}</td>
                  <td className="px-4 py-3.5">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      r.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                      r.color === 'amber' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' : 'bg-slate-500/10 text-slate-500'
                    }`}>
                      ● {r.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 font-bold text-slate-800 dark:text-slate-200">{r.eta}</td>
                  <td className="px-4 py-3.5 text-right text-slate-400 cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">more_vert</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
