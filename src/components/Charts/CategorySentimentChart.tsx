import React from 'react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  Legend, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid 
} from 'recharts';
import { FrostedGlassCard } from '../FrostedGlassCard';
import { CATEGORY_STATS, SENTIMENT_STATS } from '../../data/communityData';
import { PieChart as PieIcon, MessageSquare, AlertCircle, Heart } from 'lucide-react';

export const CategorySentimentChart: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* 1. Category Distribution & Engagement */}
      <FrostedGlassCard glow="none" className="p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <h2 className="text-sm font-bold text-white tracking-wide">
                帖子类型分布与热度 (Content Category & Engagement)
              </h2>
            </div>
            <span className="text-xs text-slate-400">技术求助占 74.4%</span>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={CATEGORY_STATS}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" horizontal={false} />
                <XAxis type="number" stroke="#94a3b8" fontSize={10} tickLine={false} />
                <YAxis
                  dataKey="name"
                  type="category"
                  stroke="#cbd5e1"
                  fontSize={10}
                  tickLine={false}
                  width={110}
                  tickFormatter={(val) => val.replace('类', '')}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="p-3 bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-xl shadow-xl text-xs space-y-1">
                          <div className="font-bold text-white mb-1">{data.name}</div>
                          <div className="flex justify-between gap-4">
                            <span className="text-slate-400">发帖数量:</span>
                            <span className="text-cyan-300 font-semibold">{data.count} 篇 ({data.percentage}%)</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span className="text-slate-400">单帖均浏览:</span>
                            <span className="text-amber-300 font-semibold">{data.avgViews} 次/帖</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span className="text-slate-400">负面情绪率:</span>
                            <span className="text-rose-400 font-semibold">{data.negativeRate}%</span>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="count" name="发帖数" radius={[0, 6, 6, 0]}>
                  {CATEGORY_STATS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insight note */}
        <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
          <span>💡 职场综合类单帖均浏览 <strong>238.6次</strong>（最高）</span>
          <span>技术求助单帖均浏览 <strong>111.6次</strong></span>
        </div>
      </FrostedGlassCard>

      {/* 2. Sentiment Polarity & Health Index */}
      <FrostedGlassCard glow="rose" className="p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-400"></div>
              <h2 className="text-sm font-bold text-white tracking-wide">
                社区用户情绪极性分析 (Sentiment Polarity Health)
              </h2>
            </div>
            <span className="text-xs text-rose-400 font-semibold bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
              消极率 45.6% (高预警)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            {/* Donut Chart */}
            <div className="h-52 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="p-2.5 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-xl text-xs space-y-1 text-white">
                            <div className="font-bold">{data.name}情绪</div>
                            <div>数量: {data.count} 篇 ({data.percentage}%)</div>
                            <div>累计浏览: {data.totalViews} 次</div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Pie
                    data={SENTIMENT_STATS}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={4}
                    dataKey="count"
                  >
                    {SENTIMENT_STATS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(0,0,0,0.4)" strokeWidth={2} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xs text-slate-400">总样本</span>
                <span className="text-base font-bold text-white">90 篇</span>
              </div>
            </div>

            {/* Sentiment Breakdown Legend & Bars */}
            <div className="space-y-3">
              {SENTIMENT_STATS.map((item) => (
                <div key={item.name} className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                      <span className="font-medium text-slate-200">{item.name}情绪</span>
                    </div>
                    <span className="font-bold text-white">{item.percentage}% ({item.count}篇)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insight note */}
        <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-slate-400">
          ⚠️ 消极情绪主因：Chrome 频繁掉插件、Excel 复杂写入报错、桌面图像息屏识别失效。
        </div>
      </FrostedGlassCard>
    </div>
  );
};
