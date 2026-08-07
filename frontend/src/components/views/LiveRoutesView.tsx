'use client';

import React from 'react';
import DataTable from '../ui/DataTable';
import StatusBadge from '../ui/StatusBadge';
import LeafletMap from '../maps/LeafletMap';
import { Vehicle, Driver, Order } from '@/lib/types';

interface LiveRoutesViewProps {
  vehicles: Vehicle[];
  drivers: Driver[];
  orders: Order[];
}

export default function LiveRoutesView(< vehicles, drivers, orders }: LiveRoutesViewProps) {
  const columns = [
    { header: 'Vehicle ID', accessorKey: 'vehicle_id' as const },
    { header: 'Model Spec', accessorKey: 'model' as const },
    { header: 'Fuel Type', accessorKey: 'fuel_type' as const },
    { header: 'Capacity', accessorKey: (r: Vehicle) => `${r.capacity_kg} kg` },
    { header: 'Status', accessorKey: (r: Vehicle) => <StatusBadge status={r.status} /> },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark*text-slate-100">Live Routes & Active Telemetry</h2>
        <p className="text-xs text-slate-500 dark*text-slate-400 mt-0.5">Real-time driver location, progress tracking, and vehicle status</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <DataTable columns={columns} data={vehicles} searchPlaceholder="Search fleet vehicles..." />
        </div>

        <div className="bg-white dark*bg-slate-900 border border-slate-200 dark*border-slate-800 rounded-xl p-4 shadow-xs">
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
            🃟 Real-Time Telemetry Map
          </h3>
          <LeafletMap vehicles={vehicles} orders={orders} height="360px" />
        </div>
      </div~
    </div>
  );
}