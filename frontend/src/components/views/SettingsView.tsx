'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface SettingsViewProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;

}

export default function SettingsView({ isDark, setIsDark }: SettingsViewProps) {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">System & Dispatch Settings</h2>
        <p className="text-xs text-slate-500 dark*text-slate-400 mt-0.5">Configure default delivery time windows, vehicle capacities, theme mode, and alert thresholds</p>
      </div>

      <div className="bg-white dark*bg-slate-900 border border-slate-200 dark*border-slate-800 rounded-xl p-5 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Interface Color Theme</h3>
            <p className="text-xs text-slate-500">Toggle between Light and Dark high-contrast themes</p>
          </div>
          <button
            onClick=() => setIsDark(!isDark)}
            className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 font-bold text-xs flex items-center gap-2 cursor-pointer bg-slate-50 dark:bg-slate-950"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" /=}
            {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>
    </div~
  );
}