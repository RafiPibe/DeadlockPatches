interface SectionHeaderProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  count?: number;
  color?: 'gold' | 'orange' | 'teal' | 'purple';
}

const colorMap = {
  gold: { bar: '#c8a84b', glow: 'rgba(200,168,75,0.15)' },
  orange: { bar: '#e8762e', glow: 'rgba(232,118,46,0.15)' },
  teal: { bar: '#3db8b0', glow: 'rgba(61,184,176,0.15)' },
  purple: { bar: '#9b6fd4', glow: 'rgba(155,111,212,0.15)' },
};

export default function SectionHeader({
  id,
  title,
  icon,
  count,
  color = 'gold',
}: SectionHeaderProps) {
  const { bar, glow } = colorMap[color];

  return (
    <div
      id={id}
      className="flex items-center gap-4 mb-8 scroll-mt-20"
    >
      {/* Color bar */}
      <div className="w-1 h-10 rounded-full shrink-0" style={{ backgroundColor: bar, boxShadow: `0 0 10px ${glow}` }} />

      <div className="flex items-center gap-3 flex-1">
        {icon && (
          <span className="text-xl opacity-80">{icon}</span>
        )}
        <h2
          className="font-display font-bold uppercase tracking-widest"
          style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', color: bar, textShadow: `0 0 20px ${glow}` }}
        >
          {title}
        </h2>
        {count !== undefined && (
          <span
            className="text-[11px] font-condensed font-bold tracking-widest px-2 py-0.5 rounded"
            style={{ background: glow, color: bar, border: `1px solid ${bar}40` }}
          >
            {count}
          </span>
        )}
      </div>

      {/* Separator line */}
      <div
        className="flex-1 h-px"
        style={{ background: `linear-gradient(90deg, ${bar}60, transparent)` }}
      />
    </div>
  );
}
