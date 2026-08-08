'use client';

import React, { useState } from 'react';
import {
  LayoutDashboard,
  Route,
  Activity,
  GitCompare,
  Bot,
  Zap,
  TrendingUp,
  FileSpreadsheet,
  Settings,
  LogOut,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { NavTab } from '@/lib/types';

interface AppShellProps {
  children: React.ReactNode;
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  userRole: string;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  onLogout: () => void;
}

export default function AppShell({
  children,
  activeTab,
  setActiveTab,
  userRole,
  isDark,
  setIsDark,
  onLogout,
}: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { id: 'dashboard' as NavTab, label: 'Command Dashboard', icon: LayoutDashboard },
    { id: 'route-planner' as NavTab, label: 'Route Planner VRP', icon: Route },
    { id: 'live-routes' as NavTab, label: 'Live Telemetry', icon: Activity },
    { id: 'route-comparison' as NavTab, label: 'Route Audit', icon: GitCompare },
    { id: 'ai-command' as NavTab, label: 'AI Control Center', icon: Bot },
    { id: 'event-simulator' as NavTab, label: 'Disruption Sandbox', icon: Zap },
    { id: 'ai-insights' as NavTab, label: 'AI ROI Insights', icon: TrendingUp },
    { id: 'analytics' as NavTab, label: 'Fleet Analytics', icon: TrendingUp },
    { id: 'reports' as NavTab, label: 'Reports & CSV', icon: FileSpreadsheet },
    { id: 'settings' as NavTab, label: 'Dispatch Settings', icon: Settings },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} flex transition-colors duration-200`}>
      <aside className={`${collapsed ? 'w-20' : 'w-64'} bg-slate-900 border-r border-slate-800 flex flex-col transition-all duration-300 relative z-20`}>
        <div className="p-4 flex items-center justify-between border-b border-slate-800">
          {!collapsed && (
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-blue-600/30">
                R
              </div>
              <div>
                <h1 className="font-extrabold text-sm text-slate-100 tracking-tight leading-none">RouteMind AI</h1>
                <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider">Enterprise VRP</span>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer mx-auto"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold text-xs transition cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t border-slate-800 space-y-2">
          {!collapsed && (
            <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <p className="text-[11px] font-bold text-slate-200">{userRole}</p>
              <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                ● Live Fleet Connected
              </p>
            </div>
          )}
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-950/30 transition cursor-pointer"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!collapsed && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-10">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Control Center</span>
            <h2 className="text-sm font-extrabold text-slate-900 dark:text-slate-100 capitalize">
              {activeTab.replace('-', ' ')}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold text-xs">
              OP
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
