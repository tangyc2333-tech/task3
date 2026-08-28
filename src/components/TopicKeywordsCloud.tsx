import React from 'react';
import { FrostedGlassCard } from './FrostedGlassCard';
import { TOPIC_KEYWORDS } from '../data/communityData';
import { Tag, AlertTriangle, Eye, Flame } from 'lucide-react';

interface TopicKeywordsCloudProps {
  onSelectKeyword?: (kw: string) => void;
  selectedKeyword?: string;
}

export const TopicKeywordsCloud: React.FC<TopicKeywordsCloudProps> = ({
  onSelectKeyword,
  selectedKeyword
}) => {
  return (
    <FrostedGlassCard glow="none" className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-blue-400" />
            <h2 className="text-sm font-bold text-white tracking-wide">
              高频业务痛点与技术焦点 (Top Pain Points & Hot Topics)
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            按关键词聚类的用户讨论频次、总浏览量及负向情绪浓度（点击可快速联动筛选）
          </p>
        </div>
        <span className="text-xs text-slate-400">共 8 大类高频痛点</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {TOPIC_KEYWORDS.map((item) => {
          const isSelected = selectedKeyword === item.keyword;
          return (
            <div
              key={item.keyword}
              onClick={() => onSelectKeyword?.(isSelected ? '' : item.keyword)}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-blue-500/20 border-blue-400/60 shadow-lg shadow-blue-500/20 scale-[1.02]'
                  : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/15'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <span className="font-semibold text-xs text-slate-100 truncate">
                  {item.keyword}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                  {item.count}篇
                </span>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3 text-slate-400" /> {item.totalViews} 阅
                </span>
                <span
                  className={`flex items-center gap-0.5 font-medium ${
                    item.negativeRatio > 50
                      ? 'text-rose-400'
                      : item.negativeRatio > 30
                      ? 'text-amber-400'
                      : 'text-emerald-400'
                  }`}
                >
                  <AlertTriangle className="w-2.5 h-2.5" /> 负向 {item.negativeRatio}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </FrostedGlassCard>
  );
};
