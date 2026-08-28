import React from 'react';
import { 
  Sparkles, 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  FileText, 
  Award, 
  Target 
} from 'lucide-react';
import { ANALYTICAL_INSIGHTS, OPERATIONAL_STRATEGIES } from '../data/communityData';

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnalysisModal: React.FC<AnalysisModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-white/20 rounded-2xl max-w-4xl w-full p-6 text-slate-100 shadow-2xl relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                影刀社区运营数据初步分析结论报告 (Executive Briefing)
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                基于 2026-08-24 ~ 2026-08-27 样本数据，对用户活跃度、留存率、内容生态及痛点进行全维度归因
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-6 pr-1">
          {/* 1. Executive Summary */}
          <div className="bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-purple-900/30 p-4 rounded-2xl border border-white/10">
            <h3 className="text-sm font-bold text-blue-300 mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> 1. 核心综述 (Executive Summary)
            </h3>
            <p className="text-xs text-slate-200 leading-relaxed">
              本次分析共追踪 90 篇社区发帖与 10,098 次浏览互动。社区呈现显著的<strong>“强工具属性、强排障导向、高工作日双峰活跃”</strong>特征。技术问答占比高达 74.4%，消极情绪（主要为报错求助）占 45.6%。用户次日留存率为 42.0%，3日留存下滑至 21.6%，反映出用户普遍在遇到阻塞性技术问题时才访问社区，问题解决后回访频次降低。
            </p>
          </div>

          {/* 2. Four Key Insights */}
          <div>
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-indigo-400" /> 2. 四大深度归因分析
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ANALYTICAL_INSIGHTS.map((item, idx) => (
                <div key={item.id} className="bg-slate-800/50 p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        维度 0{idx + 1}: {item.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">{item.severity === 'high' ? '🚨 高优先级' : '✨ 机会点'}</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-100 mb-1.5">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">{item.description}</p>
                  </div>

                  <div className="pt-2 border-t border-white/5 space-y-1">
                    <div className="text-[10px] text-slate-400 font-semibold">核心建议：</div>
                    {item.recommendations.map((rec, rIdx) => (
                      <div key={rIdx} className="text-[11px] text-slate-300 flex items-start gap-1">
                        <span className="text-blue-400">•</span>
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Action Roadmap */}
          <div>
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-400" /> 3. 落地运营策略规划 (P0 / P1 / P2)
            </h3>

            <div className="space-y-3">
              {OPERATIONAL_STRATEGIES.map((strat) => (
                <div key={strat.id} className="bg-white/5 p-3.5 rounded-xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500 text-white">
                        {strat.phase}
                      </span>
                      <strong className="text-slate-100">{strat.title}</strong>
                    </div>
                    <div className="text-slate-400 text-[11px]">{strat.targetMetric}</div>
                  </div>
                  <div className="text-slate-300 text-[11px] shrink-0 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-white/5">
                    责任部门: {strat.ownerRole}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 font-bold text-xs text-white shadow-lg shadow-blue-500/25 transition-all"
          >
            已阅读并确认
          </button>
        </div>
      </div>
    </div>
  );
};
