import React, { useState } from 'react';
import { FrostedGlassCard } from './FrostedGlassCard';
import { ANALYTICAL_INSIGHTS, OPERATIONAL_STRATEGIES } from '../data/communityData';
import { 
  Sparkles, 
  Target, 
  TrendingUp, 
  AlertOctagon, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  ShieldAlert, 
  Compass, 
  Layers, 
  Flame 
} from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'conclusions' | 'roadmap'>('conclusions');
  const [selectedInsightId, setSelectedInsightId] = useState<string>('insight-1');

  const selectedInsight = ANALYTICAL_INSIGHTS.find(i => i.id === selectedInsightId) || ANALYTICAL_INSIGHTS[0];

  return (
    <FrostedGlassCard glow="indigo" className="p-6">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-lg bg-indigo-500/20 text-indigo-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-white tracking-wide">
              深度数据分析结论与运营策略建议 (Executive Insights & Action Plan)
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            通过多维数据交叉校验得出的 4 大核心结论与落地运营实施路线图
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('conclusions')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'conclusions'
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>4 大分析结论</span>
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'roadmap'
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>落地行动方案 (P0/P1/P2)</span>
          </button>
        </div>
      </div>

      {activeTab === 'conclusions' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5">
          {/* Left Column: Conclusion selector list */}
          <div className="lg:col-span-5 space-y-2.5">
            {ANALYTICAL_INSIGHTS.map((item, idx) => {
              const isSelected = item.id === selectedInsightId;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedInsightId(item.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-indigo-500/20 border-indigo-400/50 shadow-lg shadow-indigo-500/10'
                      : 'bg-white/5 border-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-white/10 text-indigo-300">
                      结论 0{idx + 1} · {item.category}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        item.severity === 'high'
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          : item.severity === 'medium'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}
                    >
                      {item.severity === 'high' ? '重点关注' : item.severity === 'medium' ? '增长机遇' : '规律洞察'}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-slate-100 line-clamp-2 leading-relaxed">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active conclusion deep dive */}
          <div className="lg:col-span-7 bg-slate-800/40 rounded-2xl p-5 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">
                  {selectedInsight.category} 归因深度剖析
                </span>
                <span className="text-xs text-slate-400">ID: {selectedInsight.id}</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2 leading-relaxed">
                {selectedInsight.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-white/5 mb-4">
                {selectedInsight.description}
              </p>

              {/* Key Metrics Chips */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                {selectedInsight.keyMetrics.map((km, i) => (
                  <div key={i} className="bg-white/5 p-2.5 rounded-xl border border-white/5 text-center">
                    <div className="text-[10px] text-slate-400">{km.label}</div>
                    <div className="text-sm font-bold text-indigo-300 mt-0.5">{km.value}</div>
                  </div>
                ))}
              </div>

              {/* Actionable Recommendations */}
              <div>
                <div className="text-xs font-semibold text-slate-200 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>对应落地解决策略 (Actionable Recommendations)</span>
                </div>
                <div className="space-y-1.5">
                  {selectedInsight.recommendations.map((rec, i) => (
                    <div key={i} className="text-xs text-slate-300 flex items-start gap-2 bg-slate-900/40 p-2 rounded-lg border border-white/5">
                      <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Operational Roadmap (P0/P1/P2) */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          {OPERATIONAL_STRATEGIES.map((strat) => {
            const isP0 = strat.phase.includes('P0');
            const isP1 = strat.phase.includes('P1');
            return (
              <div
                key={strat.id}
                className={`p-5 rounded-2xl border flex flex-col justify-between ${
                  isP0
                    ? 'bg-rose-950/20 border-rose-500/30 shadow-lg shadow-rose-950/20'
                    : isP1
                    ? 'bg-indigo-950/20 border-indigo-500/30'
                    : 'bg-emerald-950/20 border-emerald-500/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        isP0
                          ? 'bg-rose-500 text-white'
                          : isP1
                          ? 'bg-indigo-500 text-white'
                          : 'bg-emerald-500 text-white'
                      }`}
                    >
                      {strat.phase}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {strat.ownerRole.split('&')[0]}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {strat.title}
                  </h3>

                  <div className="text-xs text-slate-300 bg-black/20 p-2.5 rounded-xl border border-white/5 mb-3">
                    <div className="text-[10px] text-amber-400 font-semibold mb-0.5">🎯 目标考核指标 (KPI):</div>
                    <div>{strat.targetMetric}</div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="text-[11px] font-semibold text-slate-200">关键行动项：</div>
                    {strat.actionItems.map((act, idx) => (
                      <div key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <span className="text-blue-400 font-bold">•</span>
                        <span className="leading-relaxed">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>预期成效:</span>
                  <span className="text-slate-200 font-medium text-right max-w-[170px] truncate">
                    {strat.expectedOutcome}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </FrostedGlassCard>
  );
};
