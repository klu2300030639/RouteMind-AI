'use client';

import React from 'react';
import { Activity, ShieldCheck, Zap, AlertTriangle, Truck } from 'lucide-react';
import KpiCard from '../ui/KpiCard';
import StatusBadge from '../ui/StatusBadge';
import AiRecommendationCard from '../ui/AiRecommendationCard';
import DataTable from '../ui/DataTable';
import LeafletMap from '../maps/LeafletMap';

export default function DashboardView() {
  const routesData = [
    { id: 'RT-101', driver: 'Elena Rostova', vehicle: 'EV-Van 04', status: 'In Transit', progress: '78%', eta: '14:20' },
    { id: 'RT-102', driver: 'Carlos Mendez', vehicle: 'Diesel Heavy 02', status: 'Optimal', progress: '92%', eta: '15:05' },
    { id: 'RT-103', driver: 'Marcus Vance', vehicle: 'EV-Van 01', status: 'Delayed', progress: '45%', eta: '16:45' },
    { id: 'RT-104', driver: 'Aaliyah Chen', vehicle: 'EV-Van 08', status: 'Optimal', progress: '30%', eta: '17:10' },
  ];

  const columns = [
    { header: 'Route ID', accessor: 'id' as const },
    { header: 'Driver', accessor: 'driver' as const },
    { header: 'Vehicle', accessor: 'vehicle' as const },
    {
      header: 'Status',
      accessor: (item: any) => <StatusBadge status={item.status} />,
    },
    { header: 'Progress', accessor: 'progress' as const },
    { header: 'ETA', accessor: 'eta' as const },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Live Operations Dashboard</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Real-time VRP route monitoring and automated dispatch overview</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5" />
            OR-Tools Engine Active
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Active Routes" value="24 / 28" change="+12%" icon={<Truck className="w-5 h-5" />} subtitle="Vehicles on ground" />
        <KpiCard title="On-Time Delivery" value="96.4%" change="+2.1%" icon={<ShieldCheck className="w-5 h-5" />} subtitle="Target > 95%" />
        <KpiCard title="Fuel Saved (Today)" value="142.5 L" change="-18.4%" icon={<Zap className="w-5 h-5" />} subtitle="vs. Static Routing" />
        <KpiCard title="Disruption Alerts" value="2 Active" change="High" icon={<AlertTriangle className="w-5 h-5" />} subtitle="Weather delay on I-90" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LeafletMap height="420px" />
        </div>
        <div>
          <AiRecommendationCard
            title="Congestion Bypass Recommended"
            description="Heavy traffic build-up detected near Sector 7. Re-routing RT-103 saves 24 minutes and 3.8L fuel."
            impact="Saves 24 mins • $14.20 fuel"
            confidence={94}
            onAccept={() => alert('AI Recommendation Accepted! Route RT-103 re-routed via Bypass A-4.')}
            onReject={() => alert('Recommendation dismissed.')}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">Live Active Telemetry</h3>
        <DataTable data={routesData} columns={columns} />
      </div>
    </div>
  );
}
