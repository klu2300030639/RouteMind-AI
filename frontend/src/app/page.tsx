'use client';

import React, { useState } from 'react';
import AppShell from '@/components/layout/AppShell';
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
import LoginView from '@/components/views/LoginView';
import { NavTab } from '@/lib/types';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userRole, setUserRole] = useState('Logistics Supervisor');
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [isDark, setIsDark] = useState(true);

  if (!isAuthenticated) {
    return (
      <LoginView
        onLogin={(role: string) => {
          setUserRole(role);
          setIsAuthenticated(true);
        }}
      />
    );
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
      {activeTab === 'dashboard' && <DashboardView />}
      {activeTab === 'route-planner' && <RoutePlannerView />}
      {activeTab === 'live-routes' && <LiveRoutesView />}
      {activeTab === 'route-comparison' && <RouteComparisonView />}
      {activeTab === 'ai-command' && <AiCommandView />}
      {activeTab === 'event-simulator' && <EventSimulatorView />}
      {activeTab === 'ai-insights' && <AiInsightsView />}
      {activeTab === 'analytics' && <AnalyticsView />}
      {activeTab === 'reports' && <ReportsView />}
      {activeTab === 'settings' && <SettingsView isDark={isDark} setIsDark={setIsDark} />}
    </AppShell>
  );
}
