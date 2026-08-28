import React from 'react';
import { 
  FileText, 
  Eye, 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  Flame, 
  RotateCcw,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { FrostedGlassCard } from './FrostedGlassCard';
import { ProcessedPost } from '../types/dashboard';

interface MetricCardsProps {
  posts: ProcessedPost[];
}

export const MetricCards: React.FC<MetricCardsProps> = ({ posts }) => {
  const totalPosts = posts.length;
  const totalViews = posts.reduce((sum, p) => sum + p.views, 0);
  const avgViews = totalPosts > 0 ? (totalViews / totalPosts).toFixed(1) : '0';
  
  const uniqueAuthors = new Set(posts.map(p => p.author)).size;
  const repeatAuthorsCount = Object.values(
    posts.reduce((acc, p) => {
      acc[p.author] = (acc[p.author] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).filter(c => c > 1).length;

  const negativeCount = posts.filter(p => p.normalizedSentiment === '消极').length;
  const negativeRate = totalPosts > 0 ? ((negativeCount / totalPosts) * 100).toFixed(1) : '0';

  const techQCount = posts.filter(p => p.normalizedCategory === '技术问答与求助类').length;
  const techRate = totalPosts > 0 ? ((techQCount / totalPosts) * 100).toFixed(1) : '0';

  const highTrafficPost = [...posts].sort((a, b) => b.views - a.views)[0];

  const cards = [
    {
      id: 'kpi-posts',
      title: '社区总发帖量 (Volume)',
      value: totalPosts,
      subValue: '近4天累计发帖',
      delta: '+12.5%',
      isPositiveDelta: true,
      deltaLabel: '日均 22.5 帖',
      icon: FileText,
      color: 'from-blue-500 to-cyan-400',
      textColor: 'text-blue-400',
      glow: 'blue' as const,
      detail: `技术求助占比 ${techRate}%`
    },
    {
      id: 'kpi-views',
      title: '累计互动浏览量 (Views)',
      value: totalViews.toLocaleString(),
      subValue: '人均浏览深度',
      delta: `${avgViews} 次/帖`,
      isPositiveDelta: true,
      deltaLabel: '单帖最高 425',
      icon: Eye,
      color: 'from-indigo-500 to-blue-500',
      textColor: 'text-indigo-400',
      glow: 'indigo' as const,
      detail: `爆款: ${highTrafficPost?.author || '社区用户'}`
    },
    {
      id: 'kpi-authors',
      title: '活跃作者数 (Creators)',
      value: uniqueAuthors,
      subValue: '高频核心作者',
      delta: `${repeatAuthorsCount} 人多频次发帖`,
      isPositiveDelta: true,
      deltaLabel: `复发率 ${((repeatAuthorsCount / Math.max(1, uniqueAuthors)) * 100).toFixed(0)}%`,
      icon: Users,
      color: 'from-emerald-500 to-teal-400',
      textColor: 'text-emerald-400',
      glow: 'emerald' as const,
      detail: '高频活跃用户粘性良好'
    },
    {
      id: 'kpi-sentiment',
      title: '消极情绪占比 (Negative)',
      value: `${negativeRate}%`,
      subValue: `${negativeCount} 条求助/报错`,
      delta: '预警区间',
      isPositiveDelta: false,
      deltaLabel: '需技术优先排障',
      icon: AlertTriangle,
      color: 'from-rose-500 to-pink-500',
      textColor: 'text-rose-400',
      glow: 'rose' as const,
      detail: '插件/元素/Excel相关集中'
    },
    {
      id: 'kpi-retention',
      title: '次日留存率 (Day 1)',
      value: '42.0%',
      subValue: '3日留存 21.6%',
      delta: '+3.2%',
      isPositiveDelta: true,
      deltaLabel: '高于行业均值(35%)',
      icon: RotateCcw,
      color: 'from-amber-500 to-orange-400',
      textColor: 'text-amber-400',
      glow: 'none' as const,
      detail: '解决问题后回访需激励'
    },
    {
      id: 'kpi-traffic-peak',
      title: '流量高峰时段 (Peak)',
      value: '14:00 - 16:00',
      subValue: '早峰 10:00 - 11:00',
      delta: '双峰分布',
      isPositiveDelta: true,
      deltaLabel: '工作日办公调试节律',
      icon: Flame,
      color: 'from-purple-500 to-indigo-400',
      textColor: 'text-purple-400',
      glow: 'none' as const,
      detail: '覆盖 68.5% 访问流量'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-6">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <FrostedGlassCard
            key={card.id}
            id={card.id}
            glow={card.glow}
            className="p-4 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-medium text-slate-400 truncate">
                  {card.title.split(' ')[0]}
                </span>
                <div className={`p-1.5 rounded-lg bg-gradient-to-tr ${card.color} bg-opacity-10 text-white shadow-sm`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-xl font-bold tracking-tight text-white mb-1">
                {card.value}
              </div>
              <div className="text-[11px] text-slate-400 truncate mb-2">
                {card.subValue}
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
              <span className={`font-semibold flex items-center gap-0.5 ${card.textColor}`}>
                {card.isPositiveDelta ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {card.delta}
              </span>
              <span className="text-slate-400 truncate max-w-[80px]">
                {card.deltaLabel}
              </span>
            </div>
          </FrostedGlassCard>
        );
      })}
    </div>
  );
};
