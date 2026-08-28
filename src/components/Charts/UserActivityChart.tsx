import React from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Cell 
} from 'recharts';
import { FrostedGlassCard } from '../FrostedGlassCard';
import { HOURLY_ACTIVITY } from '../../data/communityData';
import { Clock, Sun, Moon, Zap } from 'lucide-react';

export const UserActivityChart: React.FC = () => {
  return (
    <FrostedGlassCard glow="indigo" className="p-5 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
            <h2 className="text-sm font-bold text-white tracking-wide">
              用户 24 小时活跃时段分布 (Hourly Activity)
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            识别用户高频活跃时段、办公提问波峰及最佳客服承接窗口
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="flex items-center gap-1 text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
            <Sun className="w-3 h-3" /> 早峰: 10:00
          </span>
          <span className="flex items-center gap-1 text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
            <Zap className="w-3 h-3" /> 午峰: 14:00-16:00
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 sm:h-72 w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={HOURLY_ACTIVITY} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis dataKey="hourLabel" stroke="#94a3b8" fontSize={10} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
            <Tooltip
              cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="p-3 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl text-xs space-y-1 text-slate-100">
                      <div className="font-bold text-blue-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> 时段: {data.hourLabel}
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">发帖数量:</span>
                        <span className="font-semibold text-white">{data.posts} 篇</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">预估浏览:</span>
                        <span className="font-semibold text-indigo-300">{data.views} 次</span>
                      </div>
                      {data.isPeak && (
                        <div className="pt-1 text-[10px] text-amber-300 font-semibold flex items-center gap-1">
                          ⚡ 属于社区黄金活跃波峰期
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="posts" radius={[6, 6, 0, 0]}>
              {HOURLY_ACTIVITY.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.isPeak
                      ? 'url(#peakGradient)'
                      : entry.posts > 5
                      ? '#6366f1'
                      : '#334155'
                  }
                />
              ))}
            </Bar>
            <defs>
              <linearGradient id="peakGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Hourly Highlights */}
      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded bg-gradient-to-r from-sky-400 to-indigo-500"></div>
          <span>高峰期 (10-11点 & 14-16点，占比 68.5%)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded bg-slate-700"></div>
          <span>常规办公期</span>
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <Moon className="w-3 h-3 text-slate-400" />
          <span>夜间流量稀疏 (建议部署自动化机器人)</span>
        </div>
      </div>
    </FrostedGlassCard>
  );
};
