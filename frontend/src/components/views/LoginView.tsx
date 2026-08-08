'use client';

import React, { useState } from 'react';
import { ShieldCheck, Lock, Mail, ArrowRight } from 'lucide-react';

interface LoginViewProps {
  onLogin: (role: string) => void;
}

export default function LoginView({ onLogin }: LoginViewProps) {
  const [role, setRole] = useState('Logistics Supervisor');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 backdrop-blur-xl rounded-2xl p-8 shadow-2xl z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-600/30">
            R
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">RouteMind AI</h1>
            <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Enterprise Logistics Platform</p>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onLogin(role); }} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-xs font-semibold text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="Logistics Supervisor">Logistics Supervisor</option>
              <option value="Fleet Manager">Fleet Manager</option>
              <option value="Dispatch Director">Dispatch Director</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Work Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="email"
                defaultValue="supervisor@routemind.ai"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="password"
                defaultValue="password123"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <span>Sign In to Control Center</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-500 flex items-center justify-between gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Enterprise SSO and Google OR-Tools VRP Ready</span>
        </div>
      </div>
    </div>
  );
}
