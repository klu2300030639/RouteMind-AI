'use client';

import React, { useState } from 'react';

interface LoginViewProps {
  onLogin: (role: string) => void;
}

export default function LoginView({ onLogin }: LoginViewProps) {
  const [accessLevel, setAccessLevel] = useState<'Operator' | 'Supervisor'>('Operator');
  const [email, setEmail] = useState('user@company.com');
  const [password, setPassword] = useState('••••••••');

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Brand & Visual Preview */}
        <div className="bg-blue-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4 z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <span className="material-symbols-outlined fill text-2xl">route</span>
              </div>
              <h1 className="text-2xl font-extrabold tracking-tight">RouteMind</h1>
            </div>
            <p className="text-xl font-bold leading-snug">Adaptive AI for Smarter Logistics.</p>
          </div>

          {/* Graphic Preview */}
          <div className="mt-8 rounded-2xl bg-slate-950/30 backdrop-blur-md p-4 border border-white/20 shadow-xl z-10">
            <div className="flex items-center justify-between text-xs mb-2 text-white/80">
              <span className="font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Fleet Network
              </span>
              <span>Global VRP v2.4</span>
            </div>
            <div className="h-36 rounded-xl bg-slate-900 flex items-center justify-center relative overflow-hidden border border-white/10">
              <span className="material-symbols-outlined text-6xl text-blue-400/40 animate-pulse">public</span>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            </div>
          </div>

          <div className="text-[11px] text-white/60 z-10 mt-6">
            © 2026 RouteMind Inc. Enterprise Autonomous Dispatch System.
          </div>
        </div>

        {/* Right Side: Welcome Back Form */}
        <div className="p-10 flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Welcome Back</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sign in to access your dashboard.</p>
          </div>

          {/* Access Level Selector */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Access Level</label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <button
                type="button"
                onClick={() => setAccessLevel('Operator')}
                className={`py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                  accessLevel === 'Operator'
                    ? 'bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Operator
              </button>
              <button
                type="button"
                onClick={() => setAccessLevel('Supervisor')}
                className={`py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                  accessLevel === 'Supervisor'
                    ? 'bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-700'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Supervisor
              </button>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); onLogin(accessLevel); }} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined text-[18px] text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2">mail</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined text-[18px] text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2">lock</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs font-medium text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-blue-600" />
                <span>Remember me</span>
              </label>
              <a href="#" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/30 transition cursor-pointer mt-2"
            >
              Sign In
            </button>
          </form>

          <p className="text-[11px] text-center text-slate-400 font-medium border-t border-slate-100 dark:border-slate-800 pt-4">
            Secure Enterprise Login via RouteMind SSO
          </p>
        </div>
      </div>
    </div>
  );
}
