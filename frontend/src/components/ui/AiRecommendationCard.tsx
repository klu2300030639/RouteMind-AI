'use client';

import React from 'react';
import { Bot, Check, X, Sparkles } from 'lucide-react';

interface AiRecommendationCardProps {
  title: string;
  description: string;
  impact: string;
  confidence: number;
  onAccept: () => void;
  onReject: () => void;
}

export default function AiRecommendationCard({
  title,
  description,
  impact,
  confidence,
  onAccept,
  onReject,
}: AiRecommendationCardProps) {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-500/30 rounded-2xl p-5 shadow-xl text-white space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-600 text-white">
            <Bot className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">AI Autonomous Agent</span>
        </div>
        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> {confidence}% Confidence
        </span>
      </div>

      <div>
        <h4 className="font-extrabold text-sm text-slate-100">{title}</h4>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">{description}</p>
      </div>

      <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 text-xs font-semibold text-emerald-400">
        Impact: {impact}
      </div>

      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={onAccept}
          className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 transition cursor-pointer"
        >
          <Check className="w-4 h-4" /> Apply AI Optimization
        </button>
        <button
          onClick={onReject}
          className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
