import React from 'react';
import { 
  BarChart3, 
  Download, 
  Sparkles, 
  Search, 
  Calendar, 
  Layers, 
  Activity,
  Code,
  CheckCircle2
} from 'lucide-react';

interface HeaderProps {
  dateFilter: string;
  onDateFilterChange: (date: string) => void;
  categoryFilter: string;
  onCategoryFilterChange: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenExportModal: () => void;
  onOpenAnalysisModal: () => void;
  totalFilteredCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  dateFilter,
  onDateFilterChange,
  categoryFilter,
  onCategoryFilterChange,
  searchQuery,
  onSearchChange,
  onOpenExportModal,
  onOpenAnalysisModal,
  totalFilteredCount
}) => {
  return (
    <header className="relative z-20 mb-6">
      {/* Top Brand Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1px] flex items-center justify-center shadow-lg shadow-blue-500/25">
            <div className="w-full h-full bg-slate-950/80 rounded-[11px] backdrop-blur-md flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-blue-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                影刀社区数据运营看板
              </h1>
              <span className="px-2 py-0.5 text-[11px] font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                PROD DEMO
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              基于 2026-08-24 ~ 2026-08-27 社区真实发帖、浏览量、用户活跃度及留存多维数据分析
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-2.5">
          <button
            id="btn-open-analysis"
            onClick={onOpenAnalysisModal}
            className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30 hover:border-indigo-400/50 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>核心分析结论报告</span>
          </button>

          <button
            id="btn-export-html"
            onClick={onOpenExportModal}
            className="px-3.5 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center gap-1.5 shadow-lg shadow-blue-500/25 active:scale-95"
          >
            <Code className="w-3.5 h-3.5" />
            <span>获取 HTML 代码 Demo</span>
          </button>
        </div>
      </div>

      {/* Filter Control Bar */}
      <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/40 p-3 rounded-2xl border border-white/5 backdrop-blur-md">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            id="input-search-posts"
            type="text"
            placeholder="搜索帖子标题、作者、报错关键词（如 Excel、Chrome、验证码）..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-800/60 border border-white/10 rounded-xl text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
            >
              ×
            </button>
          )}
        </div>

        {/* Date Filter Pills */}
        <div className="flex items-center gap-1 bg-slate-800/60 p-1 rounded-xl border border-white/10 overflow-x-auto">
          <Calendar className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-0.5 shrink-0" />
          {[
            { label: '全部日期', value: 'all' },
            { label: '08-24', value: '2026-08-24' },
            { label: '08-25', value: '2026-08-25' },
            { label: '08-26', value: '2026-08-26' },
            { label: '08-27', value: '2026-08-27' },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => onDateFilterChange(item.value)}
              className={`px-2.5 py-1 text-xs rounded-lg transition-all whitespace-nowrap ${
                dateFilter === item.value
                  ? 'bg-blue-500 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Category Selector */}
        <div className="flex items-center gap-1 bg-slate-800/60 p-1 rounded-xl border border-white/10 shrink-0">
          <Layers className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-0.5 shrink-0" />
          <select
            id="select-category-filter"
            value={categoryFilter}
            onChange={(e) => onCategoryFilterChange(e.target.value)}
            className="bg-transparent text-xs text-slate-200 py-1 pr-2 rounded-lg focus:outline-none cursor-pointer"
          >
            <option value="all" className="bg-slate-900 text-slate-200">所有帖子类型 (全部)</option>
            <option value="技术问答与求助类" className="bg-slate-900 text-slate-200">技术问答与求助类</option>
            <option value="产品反馈与建议类" className="bg-slate-900 text-slate-200">产品反馈与建议类</option>
            <option value="职场生态与综合交流类" className="bg-slate-900 text-slate-200">职场生态与综合交流类</option>
            <option value="实战案例与干货分享类" className="bg-slate-900 text-slate-200">实战案例与干货分享类</option>
          </select>
        </div>

        {/* Result Badge */}
        <div className="text-xs text-slate-400 font-medium shrink-0 flex items-center gap-1.5 px-2">
          <span>当前筛选:</span>
          <span className="text-blue-400 font-bold">{totalFilteredCount}</span>
          <span>条帖子</span>
        </div>
      </div>
    </header>
  );
};
