import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PatchSelector from './PatchSelector';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-deadlock-border"
      style={{
        background: 'linear-gradient(180deg, rgba(8,12,20,0.98) 0%, rgba(8,12,20,0.92) 100%)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="relative">
            <div className="w-8 h-8 rounded-sm border border-deadlock-gold/50 flex items-center justify-center bg-deadlock-gold/5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#c8a84b" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#c8a84b" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#c8a84b" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div>
            <span className="font-display font-bold text-white text-base leading-none tracking-widest uppercase">
              DEADLOCK
            </span>
            <div className="text-deadlock-gold text-[9px] tracking-[0.25em] font-condensed font-semibold uppercase leading-none mt-0.5">
              Patch Notes
            </div>
          </div>
        </div>

        {/* Center tag */}
        <div className="hidden md:flex items-center">
          <PatchSelector />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href="https://forums.playdeadlock.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-deadlock-muted hover:text-deadlock-gold transition-colors text-xs font-condensed tracking-wider uppercase hidden sm:block"
          >
            Official Forums
          </a>
          <div className="h-4 w-px bg-deadlock-border hidden sm:block" />
          <a
            href="https://deadlock.wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-deadlock-muted hover:text-deadlock-gold transition-colors text-xs font-condensed tracking-wider uppercase"
          >
            Wiki
          </a>
        </div>
      </div>
    </nav>
  );
}
