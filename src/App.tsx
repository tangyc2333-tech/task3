import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { MetricCards } from './components/MetricCards';
import { GrowthTrendChart } from './components/Charts/GrowthTrendChart';
import { UserActivityChart } from './components/Charts/UserActivityChart';
import { RetentionCohortChart } from './components/Charts/RetentionCohortChart';
import { CategorySentimentChart } from './components/Charts/CategorySentimentChart';
import { TopicKeywordsCloud } from './components/TopicKeywordsCloud';
import { InsightsSection } from './components/InsightsSection';
import { PostListTable } from './components/PostListTable';
import { ExportHtmlModal } from './components/ExportHtmlModal';
import { AnalysisModal } from './components/AnalysisModal';
import { PROCESSED_POSTS } from './data/communityData';

export default function App() {
  const [dateFilter, setDateFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedKeyword, setSelectedKeyword] = useState<string>('');
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState<boolean>(false);

  // Filter posts based on user selections
  const filteredPosts = useMemo(() => {
    return PROCESSED_POSTS.filter((post) => {
      // Date filter
      if (dateFilter !== 'all' && post.date !== dateFilter) {
        return false;
      }
      // Category filter
      if (categoryFilter !== 'all' && post.normalizedCategory !== categoryFilter) {
        return false;
      }
      // Keyword filter from cloud
      if (selectedKeyword && !post.topicKeywords.includes(selectedKeyword)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(query);
        const matchesContent = post.content.toLowerCase().includes(query);
        const matchesAuthor = post.author.toLowerCase().includes(query);
        const matchesKeywords = post.topicKeywords.some(kw => kw.toLowerCase().includes(query));
        return matchesTitle || matchesContent || matchesAuthor || matchesKeywords;
      }
      return true;
    });
  }, [dateFilter, categoryFilter, selectedKeyword, searchQuery]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 relative overflow-x-hidden font-sans pb-16">
      {/* Background Frosted Glass Glowing Orbs */}
      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed top-[40%] right-[30%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
        {/* Header with Search & Date Filters */}
        <Header
          dateFilter={dateFilter}
          onDateFilterChange={setDateFilter}
          categoryFilter={categoryFilter}
          onCategoryFilterChange={setCategoryFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onOpenExportModal={() => setIsExportModalOpen(true)}
          onOpenAnalysisModal={() => setIsAnalysisModalOpen(true)}
          totalFilteredCount={filteredPosts.length}
        />

        {/* 1. Core KPIs Metric Cards */}
        <MetricCards posts={filteredPosts} />

        {/* 2. Charts Row: Growth Trend & 24-Hour Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <GrowthTrendChart />
          </div>
          <div className="lg:col-span-5">
            <UserActivityChart />
          </div>
        </div>

        {/* 3. Category Distribution & Sentiment Health */}
        <CategorySentimentChart />

        {/* 4. User Retention Cohort Analysis & Topic Hotspots */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <RetentionCohortChart />
          </div>
          <div className="lg:col-span-5">
            <TopicKeywordsCloud
              selectedKeyword={selectedKeyword}
              onSelectKeyword={setSelectedKeyword}
            />
          </div>
        </div>

        {/* 5. Deep Analytical Insights & Operational Roadmap */}
        <InsightsSection />

        {/* 6. Raw Data Ledger / Posts Explorer */}
        <PostListTable posts={filteredPosts} />

        {/* Footer */}
        <footer className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>影刀社区数据运营看板 · Frosted Glass Edition</span>
          </div>
          <div className="flex items-center gap-3">
            <span>数据源: 社区讨论区发帖全量表</span>
            <span>·</span>
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline underline-offset-2"
            >
              导出 / 查看独立 HTML Demo 代码
            </button>
          </div>
        </footer>
      </div>

      {/* Standalone HTML Code Export Modal */}
      <ExportHtmlModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />

      {/* Deep Executive Briefing Analysis Modal */}
      <AnalysisModal
        isOpen={isAnalysisModalOpen}
        onClose={() => setIsAnalysisModalOpen(false)}
      />
    </div>
  );
}
