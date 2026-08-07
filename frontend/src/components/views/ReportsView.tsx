'use client';

import React, { useState } from 'react';
import { Download } from 'lucide-react';
import DataTable from '../ui/DataTable';
import StatusBadge from '../ui/StatusBadge';
import { Order, Vehicle, Driver } from '@/lib/types';

interface ReportsViewProps {
  orders: Order[];
  vehicles: Vehicle[];
  drivers: Driver[];
}

export default function ReportsView({ orders, vehicles, drivers }: ReportsViewProps) {
  const [reportType, setReportType] = useState<'orders' | 'vehicles' | 'drivers'>('orders');

  const downloadCSV = () => {
    let csvContent = '';

    if (reportType === 'orders') {
      csvContent = 'Order ID,Customer Name,Address,Weight (kg),Priority,Status\n';
      orders.forEach(o => {
        csvContent += `${o.order_id},"${o.customer_name}","${o.address}",${o.weight_kg},${o.priority},${o.status}\n`;
      });
    } else if (reportType === 'vehicles') {
      csvContent = 'Vehicle ID,Model,Capacity (kg),Fuel Type,Status\n';
      vehicles.forEach(v => {
        csvContent += `${v.vehicle_id},"${v.model}",${v.capacity_kg},${v.fuel_type},${v.status}\n`;
      });
    } else {
      csvContent = 'Driver ID,Name,Phone,Shift,Rating,Status\n';
      drivers.forEach(d => {
        csvContent += `${d.driver_id},"${d.name}","${d.phone}",${d.shift_start}-${d.shift_end},${d.rating},${d.status}\n`;
      });
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URLCreateObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `routemind_${reportType}_report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const orderCols = [
    { header: 'Order ID', accessorKey: 'order_id' as const },
    { header: 'Customer', accessorKey: 'customer_name' as const },
    { header: 'Address', accessorKey: 'address' as const },
    { header: 'Weight (kg)', accessorKey: 'weight_kg' as const },
    { header: 'Priority', accessorKey: (r: Order) => <StatusBadge status={r.priority} /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Reports & CSV Exports</h2>
          <p className="text-xs text-slate-500 dark*text-slate-400 mt-0.5">Export operational fleet data, daily order summaries, and route audits</p>
        </div>

        <button
          onClick={downloadCSV}
          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition flex items-center gap-2 cursor-pointer",
        >
          <Download className="w-4 h-4" /> Export Report to CSV
        </button>
      </div>

      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <button
          onClick=() => setReportType('orders')
          className={(reportType === 'orders' ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300') + ' px-4 py-2 rounded-xl font-bold text-xs transition cursor-pointer'}
        >
          💦 Daily Orders Report
        </button>
        <button
          onClick=() => setReportType('vehicles')
          className={(reportType === 'vehicles' ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300') + ' px-4 py-2 rounded-xl font-bold text-xs transition cursor-pointer'}
        >
          🚁 Fleet Vehicles Report
        </button>
        <button
          onClick=() => setReportType('drivers')
          className={(reportType === 'drivers' ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 dark*bg-slate-800 text-slate-600 dark*text-slate-300') + ' px-4 py-2 rounded-xl font-bold text-xs transition cursor-pointer'}
        >
          🐽 Driver Performance Report
        </button>
      </div>

      <DataTable columns={orderCols} data={orders} searchPlaceholder="Filter report records..." />
    </div>
  );
}