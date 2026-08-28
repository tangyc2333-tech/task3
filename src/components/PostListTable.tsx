import React, { useState } from 'react';
import { FrostedGlassCard } from './FrostedGlassCard';
import { ProcessedPost } from '../types/dashboard';
import { 
  Table, 
  ExternalLink, 
  Eye, 
  MessageSquare, 
  Tag, 
  User, 
  Calendar, 
  ArrowUpDown, 
  Filter,
  CheckCircle2,
  AlertCircle,
  X
} from 'lucide-react';

interface PostListTableProps {
  posts: ProcessedPost[];
}

export const PostListTable: React.FC<PostListTableProps> = ({ posts }) => {
  const [sortField, setSortField] = useState<'views' | 'publishTime'>('views');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedPost, setSelectedPost] = useState<ProcessedPost | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  const handleSort = (field: 'views' | 'publishTime') => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortField === 'views') {
      return sortOrder === 'desc' ? b.views - a.views : a.views - b.views;
    } else {
      return sortOrder === 'desc'
        ? new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime()
        : new Date(a.publishTime).getTime() - new Date(b.publishTime).getTime();
    }
  });

  const totalPages = Math.ceil(sortedPosts.length / pageSize) || 1;
  const paginatedPosts = sortedPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const getSentimentBadge = (sentiment: string) => {
    if (sentiment === '消极') {
      return (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30">
          消极 / 故障
        </span>
      );
    }
    if (sentiment === '积极') {
      return (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          积极 / 赞赏
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
        中性 / 咨询
      </span>
    );
  };

  const getCategoryColor = (cat: string) => {
    if (cat.includes('技术问答')) return 'text-sky-400 bg-sky-500/10 border-sky-500/20';
    if (cat.includes('产品反馈')) return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
    if (cat.includes('职场生态')) return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
    if (cat.includes('实战案例')) return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
  };

  return (
    <FrostedGlassCard glow="none" className="p-5">
      {/* Table Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <Table className="w-4 h-4 text-blue-400" />
            <h2 className="text-sm font-bold text-white tracking-wide">
              社区帖子明细与数据台账 (Interactive Posts Ledger)
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            可按浏览量与时间排序，点击任意行可查看详细内容与排障归因
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>共 {sortedPosts.length} 篇帖子</span>
          <span>·</span>
          <span>第 {currentPage} / {totalPages} 页</span>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-slate-400 bg-slate-800/40">
              <th className="py-2.5 px-3 font-medium">帖子标题</th>
              <th className="py-2.5 px-3 font-medium">分类类别</th>
              <th className="py-2.5 px-3 font-medium">作者</th>
              <th
                onClick={() => handleSort('views')}
                className="py-2.5 px-3 font-medium cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>浏览量</span>
                  <ArrowUpDown className="w-3 h-3 text-blue-400" />
                </div>
              </th>
              <th className="py-2.5 px-3 font-medium">情绪评级</th>
              <th
                onClick={() => handleSort('publishTime')}
                className="py-2.5 px-3 font-medium cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>发布时间</span>
                  <ArrowUpDown className="w-3 h-3 text-blue-400" />
                </div>
              </th>
              <th className="py-2.5 px-3 font-medium text-right">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {paginatedPosts.map((post) => (
              <tr
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="hover:bg-white/5 cursor-pointer transition-colors group"
              >
                <td className="py-3 px-3 max-w-[280px]">
                  <div className="font-semibold text-slate-200 group-hover:text-blue-300 transition-colors line-clamp-1">
                    {post.title}
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                    {post.topicKeywords.map((kw, i) => (
                      <span key={i} className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-white/5">
                        {kw}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="py-3 px-3">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-medium border ${getCategoryColor(post.normalizedCategory)}`}>
                    {post.normalizedCategory}
                  </span>
                </td>

                <td className="py-3 px-3 text-slate-300 font-mono">
                  {post.author}
                </td>

                <td className="py-3 px-3 font-bold text-indigo-300">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3 text-slate-400" />
                    <span>{post.views}</span>
                  </div>
                </td>

                <td className="py-3 px-3">
                  {getSentimentBadge(post.normalizedSentiment)}
                </td>

                <td className="py-3 px-3 text-slate-400 font-mono text-[11px] whitespace-nowrap">
                  {post.publishTime.substring(5, 16)}
                </td>

                <td className="py-3 px-3 text-right">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(post.url, '_blank');
                    }}
                    className="p-1 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-all"
                    title="在影刀社区打开原始链接"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Bar */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          上一页
        </button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setCurrentPage(idx + 1)}
              className={`w-6 h-6 rounded-lg text-xs font-semibold ${
                currentPage === idx + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          下一页
        </button>
      </div>

      {/* Post Detail Drawer / Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/20 rounded-2xl max-w-2xl w-full p-6 text-slate-100 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute right-4 top-4 p-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold border ${getCategoryColor(selectedPost.normalizedCategory)}`}>
                {selectedPost.normalizedCategory}
              </span>
              {getSentimentBadge(selectedPost.normalizedSentiment)}
              <span className="text-xs text-slate-400 ml-auto mr-8 font-mono">
                浏览量: {selectedPost.views} 次
              </span>
            </div>

            <h3 className="text-base font-bold text-white mb-2 leading-relaxed">
              {selectedPost.title}
            </h3>

            <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 pb-3 border-b border-white/10">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-blue-400" /> 作者: {selectedPost.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" /> 发布时间: {selectedPost.publishTime}
              </span>
            </div>

            <div className="mb-4">
              <div className="text-xs font-semibold text-slate-400 mb-1.5">帖子完整文本内容：</div>
              <div className="bg-slate-950/80 p-4 rounded-xl border border-white/10 text-xs text-slate-200 leading-relaxed font-mono whitespace-pre-wrap max-h-60 overflow-y-auto">
                {selectedPost.content || '（该帖子暂无附带文本正文，主要为截图或标题求助）'}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                {selectedPost.topicKeywords.map((kw, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    #{kw}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-3.5 py-1.5 text-xs rounded-xl bg-white/5 hover:bg-white/10 text-slate-300"
                >
                  关闭
                </button>
                <button
                  onClick={() => window.open(selectedPost.url, '_blank')}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-1 shadow-lg shadow-blue-500/25"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>访问社区原帖</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </FrostedGlassCard>
  );
};
