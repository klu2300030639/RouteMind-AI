'use client';

import React, { useState, useEffect } from 'react';
import AppShell from '@/components/layout/AppShell';
import LoginView from '@/components/views/LoginView';
import DashboardView from '@/components/views/DashboardView';
import RoutePlannerView from '@/components/views/RoutePlannerView';
import LiveRoutesView from '@/components/views/LiveRoutesView';
import RouteComparisonView from '@/components/views/RouteComparisonView';
import AiCommandView from '@/components/views/AiCommandView';
import EventSimulatorView from '@/components/views/EventSimulatorView';
import AiInsightsView from '@/components/views/AiInsightsView';
import AnalyticsView from '@/components/views/AnalyticsView';
import ReportsView from '@/components/views/ReportsView';
import SettingsView from '@/components/views/SettingsView';

import { NavTab, Order, Vehicle, Driver, TrafficEvent } from '@/lib/types';
import { api } from '@/lib/api';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userRole, setUserRole] = useState('Logistics Supervisor');
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [isDark, setIsDark] = useState(true);

  const [orders, setOrders] = useState<Order[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [trafficEvents, setTrafficEvents] = useState<TrafficEvent[]>([]);

  useEffect(() => {
    async function loadInitialData() {
      const [o, v, d, t] = await Promise.all([
        api.getOrders(),
        api.getVehicles(),
        api.getDrivers(),
        api.getTrafficEvents(),
      ]);
      setOrders(o);
      setVehicles(v);
      setDrivers(d);
      setTrafficEvents(t);
    }
    loadInitialData();
  }, []);

  if (!isAuthenticated) {
    return <LoginView onLogin={(role) => { setUserRole(role); setIsAuthenticated(true); }} />;
  }

  return (
    <AppShell
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      userRole={userRole}
      isDark={isDark}
      setIsDark={setIsDark}
      onLogout={() => setIsAuthenticated(false)}
    >
      {activeTab === 'dashboard' &&
        <DashboardView orders={orders} vehicles={vehicles} trafficEvents={trafficEvents} onNavigate={setActiveTab} />
      }
      {activeTab === 'route-planner' && <RoutePlannerView orders={op¸§y} vehicles={vehicles} />}
      {activeTab === 'live-routes' && <LiveRoutesView vehicles={vehicles} drivers={drivers} orders={orders} />}
      {activeTab === 'route-comparison' && <RouteComparisonView />}
      {activeTab === 'ai-command' && <AiCommandView />}
      {activeTab === 'event-simulator' && <EventSimulatorView />}
      {activeTab === 'ai-insights' && <AiInsightsView />}
      {activeTab === 'analytics' && <AnalyticsView />}
      {activeTab === 'reports' && <ReportsView orders={op¸§y} vehicles={vehicles} drivers={drivers} />}
      {activeTab === 'settings' && <SettingsView isDark={isDark} setIsDark={setIsDark} />}
    </AppShell>
  );
}