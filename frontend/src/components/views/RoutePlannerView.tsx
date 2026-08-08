'use client';

import React, { useState } from 'react';
import LeafletMap from '../maps/LeafletMap';
import { api } from '@/lib/api';

export default function RoutePlannerView() {
  const [selectedFleet, setSelectedFleet] = useState('Medium Duty (Class B)');
  const [isSolving, setIsSolving] = useState(false);
  const [optResults, setOptResults] = useState({
    distance: '1,245',
    duration: '24h 30m',
    efficiency: '8.4',
    status: 'Ready'
  });

  const handleGenerateRoute = async () => {
    setIsSolving(true);
    try {
      const res = await api.solveVrp({
        vehicles: 5,
        capacity: 10000,
        stops: [
          { id: 'S1', lat: 40.7128, lng: -74.0060, demand: 1500 },
          { id: 'S2', lat: 40.7589, lng: -73.9851, demand: 2300 },
          { id: 'S3', lat: 40.7829, lng: -73.9654, demand: 1800 },
          { id: 'S4', lat: 40.7061, lng: -74.0088, demand: 3100 },
        ]
      });
      setOptResults({
        distance: res.total_distance ? res.total_distance.toLocaleString() : '1,120',
        duration: '21h 15m',
        efficiency: '9.2',
        status: 'OR-Tools Optimal'
      });
    } catch {
      setOptResults({
        distance: '1,180',
        duration: '22h 10m',
        efficiency: '8.9',
        status: 'Simulated Optimal'
      });
    } finally {
      setIsSolving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Route Planner</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Configure parameters and generate optimized logistics routes via Google OR-Tools.</p>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 hover:bg-slate-50 transition cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">upload_file</span>
            <span>CSV Upload</span>
          </button>
          <button className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 hover:bg-slate-50 transition cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">restart_alt</span>
            <span>Reset</span>
          </button>
          <button
            onClick={handleGenerateRoute}
            disabled={isSolving}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-xs font-bold shadow-md shadow-blue-600/30 flex items-center gap-1.5 transition cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">{isSolving ? 'sync' : 'auto_awesome'}</span>
            <span>{isSolving ? 'Solving OR-Tools VRP...' : 'Generate Route'}</span>
          </button>
        </div>
      </div>

      {/* Top Grid (3 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Vehicle Fleet */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Vehicle Fleet</h3>
            <a href="#" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">Edit Fleet</a>
          </div>

          <div className="space-y-2.5">
            {[
              { name: 'Heavy Freight (Class A)', capacity: '20,000 lbs', available: '12', dot: 'bg-emerald-500' },
              { name: 'Medium Duty (Class B)', capacity: '10,000 lbs', available: '24', dot: 'bg-emerald-500' },
              { name: 'Sprinter Vans', capacity: '3,500 lbs', available: '8', dot: 'bg-amber-500' },
            ].map((fleet, i) => {
              const isSelected = selectedFleet === fleet.name;
              return (
                <div
                  key={i}
                  onClick={() => setSelectedFleet(fleet.name)}
                  className={`p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-300 dark:border-blue-700 shadow-xs'
                      : 'bg-white dark:bg-slate-950 border-slate-200/80 dark:border-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                      <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">{fleet.name}</h4>
                      <p className="text-[11px] text-slate-500">Capacity: {fleet.capacity} • Available: {fleet.available}</p>
                    </div>
                  </div>
                  <span className={`w-2.5 h-2.5 rounded-full ${fleet.dot}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Center: Live Traffic Map */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
          <LeafletMap height="280px" />
        </div>

        {/* Right: Optimization Results */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Optimization Results</h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              {optResults.status}
            </span>
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">TOTAL DISTANCE</span>
              <div className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-0.5">
                {optResults.distance} <span className="text-sm font-medium text-slate-500">miles</span>
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">~ -12% vs previous</span>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">EST. DURATION</span>
              <div className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-0.5">{optResults.duration}</div>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">FUEL EFFICIENCY</span>
              <div className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-0.5">
                {optResults.efficiency} <span className="text-sm font-medium text-slate-500">mpg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Constraints & Route Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Constraints & Rules */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Constraints & Rules</h3>
            <button className="text-slate-400 hover:text-slate-700 transition cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
            </button>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 flex items-start gap-3">
              <span className="material-symbols-outlined text-amber-500 text-[20px]">schedule</span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Delivery Time Windows</h4>
                <p className="text-[11px] text-slate-500">Strict enforcement on 45 stops.</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 flex items-start gap-3">
              <span className="material-symbols-outlined text-blue-500 text-[20px]">scale</span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Max Weight Capacity</h4>
                <p className="text-[11px] text-slate-500">Prevent overloading (Auto-balance).</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 flex items-start gap-3 opacity-60">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">block</span>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Avoid Toll Roads</h4>
                <p className="text-[11px] text-slate-500">Disabled for current optimization.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Route Schedule Table */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Route Schedule</h3>
            <a href="#" className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">download</span> Export
            </a>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                <tr>
                  <th className="px-4 py-3">STOP</th>
                  <th className="px-4 py-3">LOCATION</th>
                  <th className="px-4 py-3">ETA</th>
                  <th className="px-4 py-3">VEHICLE</th>
                  <th className="px-4 py-3">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                  <td className="px-4 py-3 font-extrabold text-slate-900 dark:text-slate-100">01</td>
                  <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">Distribution Center Alpha</td>
                  <td className="px-4 py-3 font-bold">08:00 AM</td>
                  <td className="px-4 py-3 font-medium text-slate-600 dark:text-slate-400">Truck #1042</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      Optimized
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                  <td className="px-4 py-3 font-extrabold text-slate-900 dark:text-slate-100">02</td>
                  <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">Store #402 (Northside)</td>
                  <td className="px-4 py-3 font-bold">09:15 AM</td>
                  <td className="px-4 py-3 font-medium text-slate-600 dark:text-slate-400">Truck #1042</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      Optimized
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                  <td className="px-4 py-3 font-extrabold text-slate-900 dark:text-slate-100">03</td>
                  <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200">Warehouse Hub B</td>
                  <td className="px-4 py-3 font-bold">11:30 AM</td>
                  <td className="px-4 py-3 font-medium text-slate-600 dark:text-slate-400">Truck #2011</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      Tight Window
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
