export type SentimentType = '消极' | '中性' | '积极' | '中级';

export type CategoryType = 
  | '技术问答与求助类'
  | '产品反馈与建议类'
  | '职场生态与综合交流类'
  | '实战案例与干货分享类'
  | '其他 / 待分类';

export interface RawPost {
  title: string;
  url: string;
  id: string;
  author: string;
  authorUrl: string;
  content: string;
  publishTime: string;
  views: number;
  category: string;
  sentiment: string;
}

export interface ProcessedPost extends RawPost {
  normalizedCategory: CategoryType;
  normalizedSentiment: '消极' | '中性' | '积极';
  date: string; // YYYY-MM-DD
  hour: number; // 0-23
  dayOfWeek: string;
  topicKeywords: string[];
}

export interface MetricCardData {
  id: string;
  title: string;
  value: string | number;
  subValue?: string;
  delta?: string;
  isPositiveDelta?: boolean;
  trendText?: string;
  iconName: string;
  color: string;
  tooltip: string;
}

export interface DailyTrendData {
  date: string;
  displayDate: string;
  posts: number;
  views: number;
  avgViews: number;
  cumulativePosts: number;
  cumulativeViews: number;
  negativeCount: number;
  neutralCount: number;
  positiveCount: number;
}

export interface HourlyActivityData {
  hour: number;
  hourLabel: string;
  posts: number;
  views: number;
  isPeak: boolean;
}

export interface RetentionCohortData {
  cohortDate: string;
  initialAuthors: number;
  day0: number; // 100%
  day1: number; // %
  day2: number; // %
  day3: number; // %
  day1Count: number;
  day2Count: number;
  day3Count: number;
}

export interface CategoryStatData {
  name: CategoryType;
  count: number;
  percentage: number;
  totalViews: number;
  avgViews: number;
  negativeRate: number;
  color: string;
}

export interface SentimentStatData {
  name: '消极' | '中性' | '积极';
  count: number;
  percentage: number;
  totalViews: number;
  avgViews: number;
  color: string;
}

export interface TopicKeywordData {
  keyword: string;
  category: string;
  count: number;
  totalViews: number;
  avgViews: number;
  negativeRatio: number;
}

export interface AuthorActivityStat {
  author: string;
  authorUrl: string;
  postCount: number;
  totalViews: number;
  categories: string[];
  firstPostDate: string;
  lastPostDate: string;
  sentimentBreakdown: {
    negative: number;
    neutral: number;
    positive: number;
  };
}

export interface AnalyticalInsight {
  id: string;
  title: string;
  subtitle: string;
  category: '核心结论' | '问题归因' | '流量特征' | '用户粘性';
  severity: 'high' | 'medium' | 'info';
  description: string;
  keyMetrics: { label: string; value: string }[];
  recommendations: string[];
}

export interface OperationalStrategy {
  id: string;
  phase: '立即执行 (P0)' | '短期优化 (P1)' | '中长期建设 (P2)';
  title: string;
  targetMetric: string;
  actionItems: string[];
  ownerRole: string;
  expectedOutcome: string;
}
