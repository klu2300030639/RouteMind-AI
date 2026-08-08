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
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const navItems = [
    { id: 'dashboard' as NavTab, label: 'Dashboard', icon: 'grid_view' },
    { id: 'route-planner' as NavTab, label: 'Route Operations', icon: 'alt_route' },
    { id: 'ai-command' as NavTab, label: 'AI Operations', icon: 'psychology' },
    { id: 'analytics' as NavTab, label: 'Analytics', icon: 'bar_chart' },
    { id: 'reports' as NavTab, label: 'Reports', icon: 'assessment' },
    { id: 'settings' as NavTab, label: 'Settings', icon: 'settings' },
  ];

  return (
    <div className={`min-h-screen flex ${isDark ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Stitch SideNavBar */}
      <aside className={`fixed left-0 top-0 h-full z-40 flex flex-col border-r transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-[260px]'
      } bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800`}>
        {/* Logo & Brand Header */}
        <div className="p-5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          {!collapsed ? (
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-600/30">
                <span className="material-symbols-outlined fill text-xl">route</span>
              </div>
              <div>
                <h1 className="font-extrabold text-base text-blue-600 dark:text-blue-400 tracking-tight leading-none">RouteMind</h1>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Enterprise Logistics</p>
              </div>
            </div>
          ) : (
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white mx-auto cursor-pointer" onClick={() => setActiveTab('dashboard')}>
              <span className="material-symbols-outlined fill text-xl">route</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 transition cursor-pointer hidden md:flex"
          >
            <span className="material-symbols-outlined text-[18px]">{collapsed ? 'chevron_right' : 'chevron_left'}</span>
          </button>
        </div>

        {/* CTA Button */}
        {!collapsed && (
          <div className="p-4">
            <button
              onClick={() => setActiveTab('route-planner')}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-600/25 transition cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>New Optimization</span>
            </button>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-xs transition cursor-pointer border ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/60 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${isActive ? 'fill' : ''}`}>{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Footer Controls */}
        <div className="p-3 border-t border-slate-200/80 dark:border-slate-800 space-y-1">
          <button
            onClick={() => setActiveTab('settings')}
            className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">help_outline</span>
            {!collapsed && <span>Support Desk</span>}
          </button>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            {!collapsed && <span>Log Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${collapsed ? 'md:ml-20' : 'md:ml-[260px]'}`}>
        {/* Stitch TopNavBar */}
        <header className="h-16 border-b border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-30">
          {/* Search Bar */}
          <div className="flex-1 max-w-md relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
            <input
              type="text"
              placeholder="Search routes, vehicles, or drivers..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Header Controls */}
          <div className="flex items-center gap-3 relative">
            {/* Notification Bell Modal */}
            <div className="relative">
              <button
                onClick={() => { setShowNotifications(!showNotifications); setShowProfileMenu(false); }}
                className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer relative"
              >
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-2 right-2 animate-pulse" />
              </button>

              {showNotifications && (
                <div className="absolute right-0 top-12 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4 space-y-3 z-50">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                    <h4 className="font-extrabold text-xs text-slate-900 dark:text-slate-100">Live AI Alerts</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600">3 New</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40">
                      <p className="font-bold text-amber-800 dark:text-amber-300">Severe Traffic Delay on I-95</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Recommended reroute via Route 1 saves 32 mins.</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40">
                      <p className="font-bold text-rose-800 dark:text-rose-300">TRK-402 Engine Failure</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Empty rescue vehicle TRK-109 ready to dispatch.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>

            {/* User Profile Dropdown Modal */}
            <div className="relative">
              <button
                onClick={() => { setShowProfileMenu(!showProfileMenu); setShowNotifications(false); }}
                className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  JS
                </div>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 top-12 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4 space-y-3 z-50">
                  <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      JS
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs text-slate-900 dark:text-slate-100">John Smith</h4>
                      <p className="text-[11px] text-slate-500">{userRole}</p>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
                    <button
                      onClick={() => { setActiveTab('settings'); setShowProfileMenu(false); }}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition text-left cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">manage_accounts</span>
                      <span>Account Settings</span>
                    </button>
                    <button
                      onClick={() => { setActiveTab('analytics'); setShowProfileMenu(false); }}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition text-left cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">bar_chart</span>
                      <span>Fleet Performance</span>
                    </button>
                    <button
                      onClick={onLogout}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition text-left cursor-pointer border-t border-slate-100 dark:border-slate-800 pt-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">logout</span>
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main View Area */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
