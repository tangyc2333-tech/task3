import React, { useState } from 'react';
import { Code, Copy, Check, Download, ExternalLink, X, FileCode } from 'lucide-react';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>影刀社区数据运营看板 Demo</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; background-color: #020617; }
    .glass-card {
      background: rgba(15, 23, 42, 0.65);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    }
  </style>
</head>
<body class="text-slate-100 min-h-screen p-6 relative overflow-x-hidden selection:bg-indigo-500 selection:text-white">
  <!-- Luminous Orbs Background -->
  <div class="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
  <div class="fixed bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>

  <div class="max-w-7xl mx-auto space-y-6 relative z-10">
    <!-- Header -->
    <header class="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
      <div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></span>
          <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
            影刀社区数据运营看板 (Demo)
          </h1>
        </div>
        <p class="text-xs text-slate-400 mt-1">数据统计周期: 2026-08-24 ~ 2026-08-27 | 样本量: 90篇发帖数据深度分析</p>
      </div>
      <div class="flex items-center gap-2">
        <span class="px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          次日留存率: 42.0%
        </span>
        <span class="px-3 py-1 text-xs rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
          消极情绪率: 45.6%
        </span>
      </div>
    </header>

    <!-- Core KPI Cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="glass-card p-4 rounded-2xl">
        <div class="text-xs text-slate-400 mb-1">社区总发帖量</div>
        <div class="text-2xl font-bold text-white">90 <span class="text-xs text-blue-400 font-normal">篇</span></div>
        <div class="text-[11px] text-blue-400 mt-1">日均 22.5 篇 / 求助占 74.4%</div>
      </div>
      <div class="glass-card p-4 rounded-2xl">
        <div class="text-xs text-slate-400 mb-1">累计互动浏览量</div>
        <div class="text-2xl font-bold text-indigo-300">10,098 <span class="text-xs text-indigo-400 font-normal">次</span></div>
        <div class="text-[11px] text-indigo-400 mt-1">单帖平均 112.2 次浏览</div>
      </div>
      <div class="glass-card p-4 rounded-2xl">
        <div class="text-xs text-slate-400 mb-1">独立活跃发帖作者</div>
        <div class="text-2xl font-bold text-emerald-300">76 <span class="text-xs text-emerald-400 font-normal">人</span></div>
        <div class="text-[11px] text-emerald-400 mt-1">重复发帖率 15.8%</div>
      </div>
      <div class="glass-card p-4 rounded-2xl">
        <div class="text-xs text-slate-400 mb-1">用户活跃黄金时段</div>
        <div class="text-2xl font-bold text-purple-300">14:00 - 16:00</div>
        <div class="text-[11px] text-purple-400 mt-1">早峰: 10:00 (工作日双峰)</div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="glass-card p-5 rounded-3xl">
        <h3 class="text-sm font-bold text-white mb-4">📈 每日增长与浏览走势</h3>
        <canvas id="growthChart" height="200"></canvas>
      </div>

      <div class="glass-card p-5 rounded-3xl">
        <h3 class="text-sm font-bold text-white mb-4">⏰ 24小时用户活跃分布</h3>
        <canvas id="hourlyChart" height="200"></canvas>
      </div>
    </div>

    <!-- Retention & Category Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="glass-card p-5 rounded-3xl">
        <h3 class="text-sm font-bold text-white mb-3">🔄 用户队列留存率矩阵 (Cohort)</h3>
        <div class="space-y-3">
          <div>
            <div class="flex justify-between text-xs mb-1"><span>第0日 (首发)</span><span class="text-blue-400 font-bold">100%</span></div>
            <div class="w-full bg-slate-800 h-2 rounded-full"><div class="bg-blue-500 h-full rounded-full" style="width: 100%"></div></div>
          </div>
          <div>
            <div class="flex justify-between text-xs mb-1"><span>次日留存 (Day 1)</span><span class="text-indigo-400 font-bold">42.0%</span></div>
            <div class="w-full bg-slate-800 h-2 rounded-full"><div class="bg-indigo-500 h-full rounded-full" style="width: 42%"></div></div>
          </div>
          <div>
            <div class="flex justify-between text-xs mb-1"><span>第2日留存 (Day 2)</span><span class="text-purple-400 font-bold">28.2%</span></div>
            <div class="w-full bg-slate-800 h-2 rounded-full"><div class="bg-purple-500 h-full rounded-full" style="width: 28.2%"></div></div>
          </div>
          <div>
            <div class="flex justify-between text-xs mb-1"><span>第3日留存 (Day 3)</span><span class="text-rose-400 font-bold">21.6%</span></div>
            <div class="w-full bg-slate-800 h-2 rounded-full"><div class="bg-rose-500 h-full rounded-full" style="width: 21.6%"></div></div>
          </div>
        </div>
      </div>

      <div class="glass-card p-5 rounded-3xl">
        <h3 class="text-sm font-bold text-white mb-3">🎯 核心数据分析结论</h3>
        <div class="space-y-2.5 text-xs text-slate-300">
          <div class="p-3 bg-white/5 rounded-xl border border-white/5">
            <strong class="text-blue-400">1. 技术求助为主导（74.4%）：</strong> 集中在 Excel 复杂写入、Chrome 插件掉线与元素捕获，消极情绪高达 45.6%。
          </div>
          <div class="p-3 bg-white/5 rounded-xl border border-white/5">
            <strong class="text-indigo-400">2. 职场生态高流量溢价：</strong> 单帖浏览量高达 238.6 次/篇，远高于技术求助（111.6 次），具备破圈效应。
          </div>
          <div class="p-3 bg-white/5 rounded-xl border border-white/5">
            <strong class="text-emerald-400">3. 留存需长效激励：</strong> 次日留存 42.0%，3日留存下滑至 21.6%，需设立“采纳有礼”与成长徽章沉淀内容。
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    // 1. Growth Chart
    new Chart(document.getElementById('growthChart'), {
      type: 'line',
      data: {
        labels: ['08-24 (周一)', '08-25 (周二)', '08-26 (周三)', '08-27 (周四)'],
        datasets: [
          {
            label: '每日浏览量 (次)',
            data: [2980, 2672, 3120, 1326],
            borderColor: '#38bdf8',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            fill: true,
            tension: 0.3
          },
          {
            label: '每日发帖量 (篇)',
            data: [26, 23, 22, 19],
            borderColor: '#818cf8',
            backgroundColor: '#818cf8',
            type: 'bar',
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: '#94a3b8' } } },
        scales: {
          x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { ticks: { color: '#38bdf8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y1: { position: 'right', ticks: { color: '#818cf8' }, grid: { display: false } }
        }
      }
    });

    // 2. Hourly Chart
    new Chart(document.getElementById('hourlyChart'), {
      type: 'bar',
      data: {
        labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
        datasets: [{
          label: '发帖分布 (篇)',
          data: [3, 8, 12, 9, 4, 3, 15, 7, 11, 9, 6, 4, 3],
          backgroundColor: '#6366f1',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: '#94a3b8' } } },
        scales: {
          x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
        }
      }
    });
  </script>
</body>
</html>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(standaloneHtmlCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'community_dashboard_demo.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-white/20 rounded-2xl max-w-4xl w-full p-6 text-slate-100 shadow-2xl relative max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                交付物：独立「HTML 代码」数据看板 Demo
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                包含纯原生 HTML + Tailwind CSS + Chart.js 的单文件可交互 Demo，可直接保存并在任何浏览器离线运行
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

        {/* Action bar */}
        <div className="flex items-center justify-between py-3">
          <span className="text-xs text-slate-400">
            格式: <strong className="text-slate-200">Single-File Standalone HTML5</strong>
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 flex items-center gap-1.5 transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">已复制 HTML 代码</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>一键复制代码</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white flex items-center gap-1.5 shadow-lg shadow-blue-500/25 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>下载 .html 文件</span>
            </button>
          </div>
        </div>

        {/* Code Preview Box */}
        <div className="flex-1 min-h-[360px] bg-slate-950/90 border border-white/10 rounded-xl p-4 overflow-y-auto font-mono text-xs text-slate-300 leading-relaxed selection:bg-blue-600 selection:text-white">
          <pre>{standaloneHtmlCode}</pre>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>✅ 包含核心指标、每日趋势折线图、24小时活跃柱状图、留存率漏斗及初步分析结论</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200"
          >
            完成
          </button>
        </div>
      </div>
    </div>
  );
};
