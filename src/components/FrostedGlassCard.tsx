import React from 'react';

interface FrostedGlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: 'blue' | 'indigo' | 'rose' | 'emerald' | 'none';
  onClick?: () => void;
  id?: string;
}

export const FrostedGlassCard: React.FC<FrostedGlassCardProps> = ({
  children,
  className = '',
  glow = 'none',
  onClick,
  id
}) => {
  const glowClasses = {
    none: '',
    blue: 'shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)]',
    indigo: 'shadow-[0_0_40px_-10px_rgba(99,102,241,0.2)]',
    rose: 'shadow-[0_0_40px_-10px_rgba(244,63,94,0.2)]',
    emerald: 'shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)]'
  };

  return (
    <div
      id={id}
      onClick={onClick}
      className={`relative rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 text-slate-100 transition-all duration-300 ${glowClasses[glow]} ${className}`}
    >
      {children}
    </div>
  );
};
