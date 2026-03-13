import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PatchHeaderProps {
  displayDate: string;
  heroesCount: number;
  itemsCount: number;
  generalCount: number;
}

export default function PatchHeader({ displayDate, heroesCount, itemsCount, generalCount }: PatchHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const lineLeftRef = useRef<HTMLDivElement>(null);
  const lineRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(lineLeftRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'power2.out' })
      .fromTo(lineRightRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'power2.out' }, '<')
      .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .fromTo(subtitleRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');
  }, []);

  return (
    <header
      ref={containerRef}
      className="relative w-full pt-14 overflow-hidden"
      style={{ minHeight: '340px' }}
    >
      {/* Dark layered background */}
      <div className="absolute inset-0 bg-deadlock-bg" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,168,75,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,168,75,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow top center */}
      <div
        className="ambient-glow absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,168,75,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Bottom glow strip */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,168,75,0.4), transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-16 px-6">
        {/* Decorative lines */}
        <div className="flex items-center gap-4 mb-6 w-full max-w-2xl">
          <div
            ref={lineLeftRef}
            className="h-px flex-1 origin-right"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(200,168,75,0.6))' }}
          />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rotate-45 bg-deadlock-gold/60" />
            <span className="text-deadlock-gold/70 text-[10px] font-condensed tracking-[0.4em] uppercase">
              Gameplay Update
            </span>
            <div className="w-1.5 h-1.5 rotate-45 bg-deadlock-gold/60" />
          </div>
          <div
            ref={lineRightRef}
            className="h-px flex-1 origin-left"
            style={{ background: 'linear-gradient(270deg, transparent, rgba(200,168,75,0.6))' }}
          />
        </div>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="font-display font-bold text-white text-shadow-gold text-center"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', letterSpacing: '0.08em', lineHeight: 1.1 }}
        >
          {displayDate} <span className="text-deadlock-gold">UPDATE</span>
        </h1>

        {/* Subtitle */}
        <div ref={subtitleRef} className="mt-6 flex items-center gap-4">
          <div className="h-px w-8 bg-deadlock-border-light" />
          <span className="text-deadlock-muted text-sm font-condensed tracking-widest uppercase">
            Deadlock — Patch Notes
          </span>
          <div className="h-px w-8 bg-deadlock-border-light" />
        </div>

        {/* Stats row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {[
            { label: 'Heroes Changed', value: heroesCount },
            { label: 'Items Changed', value: itemsCount },
            { label: 'General Changes', value: generalCount > 10 ? `${generalCount}+` : generalCount },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-display font-bold text-deadlock-gold text-2xl">{value}</span>
              <span className="text-deadlock-muted text-[10px] font-condensed tracking-widest uppercase mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
