import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Bot, X, Send, Loader2, User, Copy, Check, RefreshCw, AlertCircle, Lightbulb } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  isError?: boolean;
}

const API_URL = 'https://power-api.yingdao.com/oapi/power/v1/rest/flow/751c3dc3-33af-4223-894a-7ed78c42d0b7/execute';

const SUGGESTED_QUESTIONS = [
  '社区消极情绪高的原因是什么？',
  '哪类帖子浏览量最高？',
  '用户活跃高峰在哪些时段？',
  '留存率有什么特征？',
];

function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

function isFallbackReply(content: string): boolean {
  const fallbackPhrases = [
    '请咨询公司 HR',
    '无法识别',
    '补充具体咨询内容',
    '无法回答',
    '不清楚',
  ];
  return fallbackPhrases.some((phrase) => content.includes(phrase));
}

export const AssistantChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        '你好！我是影刀社区数据运营看板助手。\n\n我可以帮你：\n• 解读看板上的图表与指标\n• 分析社区内容、情绪与留存趋势\n• 回答基于知识库的运营问题\n\n点击下方问题快速开始，或直接输入你的问题。',
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async (textOverride?: string) => {
    const text = (textOverride ?? input).trim();
    if (!text || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textOverride) setInput('');
    setLoading(true);

    try {
      const token = import.meta.env.VITE_ASSISTANT_API_TOKEN;
      if (!token) {
        throw new Error('缺少 assistant API token，请检查环境变量 VITE_ASSISTANT_API_TOKEN');
      }

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          input: {
            input_text_0: text,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`请求失败：${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const reply =
        data?.data?.result?.output_text_0 ??
        data?.result?.output_text_0 ??
        '抱歉，我暂时没有获得有效回复。';

      const trimmedReply = reply.trim();
      const finalContent = trimmedReply
        ? trimmedReply
        : '抱歉，我暂时无法回答这个问题，请尝试换种方式提问。';

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: finalContent,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `请求出错：${error instanceof Error ? error.message : '未知错误'}`,
        timestamp: Date.now(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      handleSend();
    }
  };

  const handleCopy = async (message: Message) => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopiedId(message.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // ignore
    }
  };

  const handleRetry = (message: Message) => {
    if (message.role !== 'user') return;
    // Remove subsequent messages and resend
    const messageIndex = messages.findIndex((m) => m.id === message.id);
    if (messageIndex === -1) return;
    setMessages((prev) => prev.slice(0, messageIndex + 1));
    handleSend(message.content);
  };

  const renderMarkdown = (content: string) => (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
        ul: ({ children }) => <ul className="list-disc pl-4 mb-2 last:mb-0 space-y-0.5">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 last:mb-0 space-y-0.5">{children}</ol>,
        li: ({ children }) => <li>{children}</li>,
        strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
        em: ({ children }) => <em className="italic text-slate-300">{children}</em>,
        code: ({ children }) => (
          <code className="px-1 py-0.5 rounded bg-black/30 text-blue-200 text-[11px]">{children}</code>
        ),
        pre: ({ children }) => (
          <pre className="p-2 rounded-lg bg-black/40 overflow-x-auto mb-2 last:mb-0 text-[11px]">{children}</pre>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
          >
            {children}
          </a>
        ),
        h1: ({ children }) => <h1 className="text-sm font-bold text-white mb-2">{children}</h1>,
        h2: ({ children }) => <h2 className="text-xs font-bold text-white mb-2">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xs font-bold text-white mb-1">{children}</h3>,
      }}
    >
      {content}
    </ReactMarkdown>
  );

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 ${
          isOpen
            ? 'bg-slate-700 text-white rotate-90'
            : 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white hover:shadow-blue-500/40'
        }`}
        aria-label={isOpen ? '关闭智能助手' : '打开智能助手'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-7 h-7" />}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-48px)] h-[560px] max-h-[calc(100vh-120px)] glass-panel rounded-2xl flex flex-col overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-300">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">智能运营助手</h3>
                <p className="text-[10px] text-slate-400">基于影刀社区数据看板</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="关闭"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                    msg.role === 'user'
                      ? 'bg-indigo-500/20 text-indigo-300'
                      : 'bg-blue-500/20 text-blue-300'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <User className="w-3.5 h-3.5" />
                  ) : (
                    <Bot className="w-3.5 h-3.5" />
                  )}
                </div>
                <div className="flex flex-col max-w-[82%] gap-1">
                  <div
                    className={`px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-indigo-600 text-white rounded-tr-sm'
                        : msg.isError
                          ? 'bg-rose-950/60 text-rose-100 border border-rose-500/30 rounded-tl-sm'
                          : 'bg-slate-800/80 text-slate-200 border border-white/10 rounded-tl-sm'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    ) : (
                      <div className="assistant-markdown">
                        {renderMarkdown(msg.content)}
                      </div>
                    )}
                  </div>

                  <div
                    className={`flex items-center gap-2 text-[10px] ${
                      msg.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <span className="text-slate-500">{formatTime(msg.timestamp)}</span>
                    {msg.role === 'assistant' && !msg.isError && (
                      <button
                        onClick={() => handleCopy(msg)}
                        className="flex items-center gap-0.5 text-slate-500 hover:text-blue-400 transition-colors"
                        title="复制内容"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>已复制</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>复制</span>
                          </>
                        )}
                      </button>
                    )}
                    {msg.role === 'user' && (
                      <button
                        onClick={() => handleRetry(msg)}
                        className="flex items-center gap-0.5 text-slate-500 hover:text-blue-400 transition-colors"
                        title="重新生成"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>重试</span>
                      </button>
                    )}
                  </div>

                  {msg.role === 'assistant' && isFallbackReply(msg.content) && !msg.isError && (
                    <div className="flex items-start gap-1.5 p-2 rounded-lg bg-amber-950/40 border border-amber-500/20 text-[10px] text-amber-200/90">
                      <Lightbulb className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>
                        当前回复未命中知识库内容。建议检查影刀后台知识库是否已发布、关联到该 flow，或尝试使用更具体的社区数据相关问题。
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2.5">
                <div className="shrink-0 w-7 h-7 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="px-3.5 py-2.5 rounded-2xl rounded-tl-sm bg-slate-800/80 border border-white/10 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                  <span className="text-xs text-slate-400">助手思考中...</span>
                </div>
              </div>
            )}
          </div>

          {/* Suggested questions */}
          {messages.length <= 1 && !loading && (
            <div className="px-4 py-2 border-t border-white/5 bg-slate-900/30">
              <p className="text-[10px] text-slate-500 mb-1.5 flex items-center gap-1">
                <Lightbulb className="w-3 h-3" />
                你可以这样问
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleSend(question)}
                    className="px-2 py-1 rounded-full text-[10px] bg-white/5 text-slate-300 border border-white/10 hover:bg-blue-500/20 hover:text-blue-200 hover:border-blue-500/30 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-white/10 bg-slate-900/50 shrink-0">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/80 border border-white/10 focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/20 transition-all">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="输入问题，按 Enter 发送..."
                className="flex-1 bg-transparent text-xs text-white placeholder:text-slate-500 focus:outline-none"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || loading}
                className="p-1.5 rounded-lg bg-blue-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-500 transition-colors"
                aria-label="发送"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="mt-1.5 text-[10px] text-center text-slate-500">
              智能助手由影刀 Power API 驱动
            </p>
          </div>
        </div>
      )}
    </>
  );
};
