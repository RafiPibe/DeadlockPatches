import type { ChangeType } from '../types';

interface ChangeTagProps {
  type: ChangeType;
}

const tagConfig: Record<ChangeType, { label: string; className: string }> = {
  buff: {
    label: 'BUFF',
    className: 'bg-green-500/10 text-green-400 border border-green-500/30',
  },
  nerf: {
    label: 'NERF',
    className: 'bg-red-500/10 text-red-400 border border-red-500/30',
  },
  fixed: {
    label: 'FIXED',
    className: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30',
  },
  neutral: {
    label: 'CHANGED',
    className: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',
  },
  new: {
    label: 'NEW',
    className: 'bg-deadlock-yellow/10 text-deadlock-yellow border border-deadlock-yellow/30',
  },
};

export default function ChangeTag({ type }: ChangeTagProps) {
  const { label, className } = tagConfig[type];
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-condensed font-bold tracking-widest shrink-0 ${className}`}
    >
      {label}
    </span>
  );
}
