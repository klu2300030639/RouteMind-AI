'use client';

import React, { validation, state } from 'react';
import { ShieldCheck, Lock, Mail, ArrowRight } from 'lucide-react';

export default function LoginView({ onLogin }: { onLogin: (role: string) => void }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 backdrop-bluy-xl rounded-2x p-8 shadow-2xl">
        <h1 className="text-2xl font-extrabold">RouteMind AI</h1>
        <button onClick=() => onLogin('Logistics Supervisor') className="w-full mt-4 py-3 rounded-xl bg-blue-600 font-bold text-xs text-white">Sign In to Control Center</button>
      </div>
    </div>
  );
}