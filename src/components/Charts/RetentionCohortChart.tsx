import React from 'react';
import { FrostedGlassCard } from '../FrostedGlassCard';
import { RETENTION_COHORTS } from '../../data/communityData';
import { Users, RotateCcw, AlertCircle, ArrowDown } from 'lucide-react';

export const RetentionCohortChart: React.FC = () => {
  // Function to determine cell heat color
  const getHeatBg = (rate: number) => {
    if (rate === 100) return 'bg-blue-500/80 text-white font-bold';
    if (rate >= 40) return 'bg-indigo-500/60 text-indigo-100 font-semibold';
    if (rate >= 25) return 'bg-indigo-600/40 text-indigo-200';
    if (rate > 0) return 'bg-indigo-900/30 text-indigo-300';
    return 'bg-slate-800/20 text-slate-400';
  };

  return (
    <FrostedGlassCard glow="none" className="p-5 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <h2 className="text-sm font-bold text-white tracking-wide">
              发帖用户队列留存率分析 (Retention Cohort Matrix)
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            追踪新增/活跃发帖用户在第 1、2、3 日的持续回访与二次发帖行为
          </p>
        </div>

        <div className="text-right">
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            次日留存均值 42.0%
          </span>
        </div>
      </div>

      {/* Cohort Heatmap Table */}
      <div className="overflow-x-auto my-auto">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-slate-400">
              <th className="pb-2 font-medium">人群批次</th>
              <th className="pb-2 font-medium text-center">发帖人数</th>
              <th className="pb-2 font-medium text-center">第0日 (首发)</th>
              <th className="pb-2 font-medium text-center">次日留存 (Day 1)</th>
              <th className="pb-2 font-medium text-center">第2日 (Day 2)</th>
              <th className="pb-2 font-medium text-center">第3日 (Day 3)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {RETENTION_COHORTS.map((cohort, index) => (
              <tr key={cohort.cohortDate} className="hover:bg-white/5 transition-colors">
                <td className="py-2.5 font-medium text-slate-200">
                  {cohort.cohortDate}
                </td>
                <td className="py-2.5 text-center text-slate-300 font-mono">
                  {cohort.initialAuthors} 人
                </td>
                <td className="py-2.5 px-2 text-center">
                  <div className={`py-1 px-2 rounded-lg text-[11px] ${getHeatBg(cohort.day0)}`}>
                    100%
                  </div>
                </td>
                <td className="py-2.5 px-2 text-center">
                  <div className={`py-1 px-2 rounded-lg text-[11px] ${getHeatBg(cohort.day1)}`}>
                    {cohort.day1}% <span className="text-[9px] opacity-75">({cohort.day1Count}人)</span>
                  </div>
                </td>
                <td className="py-2.5 px-2 text-center">
                  <div className={`py-1 px-2 rounded-lg text-[11px] ${getHeatBg(cohort.day2)}`}>
                    {cohort.day2 > 0 ? `${cohort.day2}%` : '-'} 
                    {cohort.day2Count > 0 && <span className="text-[9px] opacity-75"> ({cohort.day2Count}人)</span>}
                  </div>
                </td>
                <td className="py-2.5 px-2 text-center">
                  <div className={`py-1 px-2 rounded-lg text-[11px] ${getHeatBg(cohort.day3)}`}>
                    {cohort.day3 > 0 ? `${cohort.day3}%` : '-'}
                    {cohort.day3Count > 0 && <span className="text-[9px] opacity-75"> ({cohort.day3Count}人)</span>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Retention Summary & Insight */}
      <div className="mt-4 pt-3 border-t border-white/5 bg-slate-800/40 p-3 rounded-xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-amber-300">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span className="text-[11px] text-slate-300">
            <strong className="text-amber-300 font-semibold">留存衰减特征：</strong>
            次日留存良好（42.0%），但3日留存急剧下滑至21.6%。用户呈现“问题解决即离开”工具倾向。
          </span>
        </div>
        <div className="text-[10px] text-slate-400 shrink-0 font-medium">
          建议增加：问题采纳奖励机制与打卡激励
        </div>
      </div>
    </FrostedGlassCard>
  );
};
