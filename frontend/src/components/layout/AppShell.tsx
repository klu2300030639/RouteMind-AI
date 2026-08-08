'use client';

import React, { useState } from 'react';
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
    { id: 'dashboard' as NavTab, label: 'Dashboard', icon: 'dashboard' },
    { id: 'route-planner' as NavTab, label: 'Route Operations', icon: 'route' },
    { id: 'live-routes' as NavTab, label: 'Live Telemetry', icon: 'sensors' },
    { id: 'route-comparison' as NavTab, label: 'Route Comparison', icon: 'compare_arrows' },
    { id: 'ai-command' as NavTab, label: 'AI Operations', icon: 'psychology' },
    { id: 'event-simulator' as NavTab, label: 'Disruption Sandbox', icon: 'bolt' },
    { id: 'ai-insights' as NavTab, label: 'AI ROI Insights', icon: 'trending_up' },
    { id: 'analytics' as NavTab, label: 'Analytics', icon: 'leaderboard' },
    { id: 'reports' as NavTab, label: 'Reports', icon: 'assessment' },
    { id: 'settings' as NavTab, label: 'Settings', icon: 'settings' },
  ];

  return (
    <div className={`min-h-screen flex ${isDark ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Stitch SideNavBar */}
      <aside className={`fixed left-0 top-0 h-full z-40 flex flex-col border-r transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-[280px]'
      } bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800`}>
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
          {!collapsed ? (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-600/30">
                <span className="material-symbols-outlined fill text-2xl">route</span>
              </div>
              <div>
                <h1 className="font-extrabold text-lg text-blue-600 dark:text-blue-400 tracking-tight leading-none">RouteMind</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Enterprise Logistics</p>
              </div>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white mx-auto">
              <span className="material-symbols-outlined fill text-2xl">route</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 transition cursor-pointer hidden md:flex"
          >
            <span className="material-symbols-outlined">{collapsed ? 'chevron_right' : 'chevron_left'}</span>
          </button>
        </div>

        {/* CTA Button */}
        {!collapsed && (
          <div className="p-4">
            <button
              onClick={() => setActiveTab('route-planner')}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 transition cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>New Optimization</span>
            </button>
          </div>
        )}

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-xs transition cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${isActive ? 'fill' : ''}`}>{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 space-y-1">
          {!collapsed && (
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 mb-2">
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{userRole}</p>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Fleet Connected
              </p>
            </div>
          )}
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            {!collapsed && <span>Log Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${collapsed ? 'md:ml-20' : 'md:ml-[280px]'}`}>
        {/* Stitch TopNavBar */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-30">
          {/* Search Bar on Left */}
          <div className="flex-1 max-w-md relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
            <input
              type="text"
              placeholder="Search routes, vehicles, or drivers..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Right Status Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer text-slate-600 dark:text-slate-300"
            >
              <span className="material-symbols-outlined text-[20px]">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
              OP
            </div>
          </div>
        </header>

        {/* Main View Container */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
