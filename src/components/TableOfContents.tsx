import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { HeroChange } from '../types';

interface TocSection {
  id: string;
  label: string;
  sub?: { id: string; label: string }[];
}

interface TableOfContentsProps {
  heroChanges: HeroChange[];
}

export default function TableOfContents({ heroChanges }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('general');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const sections: TocSection[] = [
    { id: 'general', label: 'General' },
    { id: 'all-heroes', label: 'All Heroes' },
    {
      id: 'heroes',
      label: 'Heroes',
      sub: heroChanges.map(h => ({ id: `hero-${h.id}`, label: h.name })),
    },
    { id: 'items', label: 'Items' },
  ];

  useEffect(() => {
    const allIds = [
      'general',
      'all-heroes',
      'heroes',
      ...heroChanges.map(h => `hero-${h.id}`),
      'items',
    ];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-10% 0px -75% 0px', threshold: 0 }
    );

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [heroChanges]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="hidden lg:block w-64 shrink-0"
    >
      <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 custom-scrollbar">
        <div className="border border-deadlock-border bg-deadlock-bg-card rounded-sm p-4">
          <div className="text-deadlock-gold text-[10px] font-condensed font-bold tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
            <div className="w-3 h-px bg-deadlock-gold" />
            Contents
          </div>

          <nav className="space-y-0.5">
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left px-2 py-1.5 rounded text-xs font-condensed tracking-wide transition-all duration-200 font-semibold ${
                    activeId === section.id
                      ? 'text-deadlock-gold bg-deadlock-gold/8 border-l-2 border-deadlock-gold pl-1.5'
                      : 'text-deadlock-text-dim hover:text-deadlock-text hover:bg-white/3'
                  }`}
                >
                  {section.label}
                </button>

                {section.sub && (
                  <div className="ml-2 border-l border-deadlock-border pl-2 mt-0.5 space-y-0.5">
                    {section.sub.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`w-full text-left px-2 py-1 rounded text-[11px] font-body transition-all duration-200 ${
                          activeId === item.id
                            ? 'text-deadlock-gold bg-deadlock-gold/8'
                            : 'text-deadlock-muted hover:text-deadlock-text-dim'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </motion.aside>
  );
}
