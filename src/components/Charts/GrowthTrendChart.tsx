import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Legend, 
  Line, 
  ComposedChart, 
  Bar 
} from 'recharts';
import { FrostedGlassCard } from '../FrostedGlassCard';
import { DAILY_TRENDS } from '../../data/communityData';
import { TrendingUp, BarChart2, Zap, ArrowUpRight } from 'lucide-react';

export const GrowthTrendChart: React.FC = () => {
  const [viewMode, setViewMode] = useState<'mixed' | 'views' | 'sentiment'>('mixed');

  return (
    <FrostedGlassCard glow="blue" className="p-5 flex flex-col h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <h2 className="text-sm font-bold text-white tracking-wide">
              用户增长与社区活跃趋势 (Growth & Engagement Trend)
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            统计日发帖量、累计发帖增长曲线、流量波动及情绪分布
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('mixed')}
            className={`px-2.5 py-1 text-xs rounded-lg transition-all ${
              viewMode === 'mixed'
                ? 'bg-blue-500 text-white font-medium shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            综合走势 (发帖+浏览)
          </button>
          <button
            onClick={() => setViewMode('views')}
            className={`px-2.5 py-1 text-xs rounded-lg transition-all ${
              viewMode === 'views'
                ? 'bg-blue-500 text-white font-medium shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            累计增长曲线
          </button>
          <button
            onClick={() => setViewMode('sentiment')}
            className={`px-2.5 py-1 text-xs rounded-lg transition-all ${
              viewMode === 'sentiment'
                ? 'bg-blue-500 text-white font-medium shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            情绪走向 (消极/中性)
          </button>
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-64 sm:h-72 w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          {viewMode === 'mixed' ? (
            <ComposedChart data={DAILY_TRENDS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorViews" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="displayDate" stroke="#94a3b8" fontSize={11} tickLine={false} />
              <YAxis yAxisId="left" stroke="#38bdf8" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis yAxisId="right" orientation="right" stroke="#818cf8" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  fontSize: '12px',
                  color: '#f8fafc'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="views"
                name="总浏览量 (次)"
                fill="url(#colorViews)"
                stroke="#38bdf8"
                strokeWidth={2}
              />
              <Bar
                yAxisId="left"
                dataKey="posts"
                name="单日发帖数 (篇)"
                fill="#6366f1"
                radius={[6, 6, 0, 0]}
                barSize={24}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="negativeCount"
                name="消极/求助帖 (篇)"
                stroke="#f43f5e"
                strokeWidth={2}
                dot={{ r: 4, fill: '#f43f5e' }}
              />
            </ComposedChart>
          ) : viewMode === 'views' ? (
            <AreaChart data={DAILY_TRENDS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCumulativePosts" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="colorCumulativeViews" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#34d399" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="displayDate" stroke="#94a3b8" fontSize={11} tickLine={false} />
              <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(12px)',
                  fontSize: '12px',
                  color: '#f8fafc'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              <Area
                type="monotone"
                dataKey="cumulativePosts"
                name="累计发帖总量 (篇)"
                stroke="#818cf8"
                strokeWidth={2.5}
                fill="url(#colorCumulativePosts)"
              />
              <Line
                type="monotone"
                dataKey="avgViews"
                name="单帖平均浏览深度"
                stroke="#38bdf8"
                strokeWidth={2}
                dot={{ r: 4, fill: '#38bdf8' }}
              />
            </AreaChart>
          ) : (
            <ComposedChart data={DAILY_TRENDS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="displayDate" stroke="#94a3b8" fontSize={11} tickLine={false} />
              <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(12px)',
                  fontSize: '12px',
                  color: '#f8fafc'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              <Bar dataKey="negativeCount" name="消极/报错贴" stackId="a" fill="#f43f5e" radius={[0, 0, 0, 0]} />
              <Bar dataKey="neutralCount" name="中性/咨询贴" stackId="a" fill="#60a5fa" radius={[0, 0, 0, 0]} />
              <Bar dataKey="positiveCount" name="积极/交流贴" stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} />
            </ComposedChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Mini Insight Bar */}
      <div className="mt-3 pt-3 border-t border-white/5 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="text-slate-400 text-[10px]">日均发帖产能</div>
          <div className="text-sm font-bold text-blue-400 mt-0.5">22.5 篇/天</div>
        </div>
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="text-slate-400 text-[10px]">最高单日流量</div>
          <div className="text-sm font-bold text-indigo-400 mt-0.5">3,120 浏览 (08-26)</div>
        </div>
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="text-slate-400 text-[10px]">情绪改善空间</div>
          <div className="text-sm font-bold text-rose-400 mt-0.5">消极率 45.6%</div>
        </div>
      </div>
    </FrostedGlassCard>
  );
};
