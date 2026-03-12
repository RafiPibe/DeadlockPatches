import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { HeroChange } from '../types';
import ChangeTag from './ChangeTag';

gsap.registerPlugin(ScrollTrigger);

interface HeroCardProps {
  hero: HeroChange;
  index: number;
}

// No need for external fallback URLs since images are local now.

export default function HeroCard({ hero, index }: HeroCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgFailed, setImgFailed] = useState(false);
  const [nameFailed, setNameFailed] = useState(false);
  const [imgSrc, setImgSrc] = useState(hero.imageUrl);

  // name ids use underscores instead of hyphens
  const nameSvgUrl = `/images/heroes/names/${hero.id.replace(/-/g, '_')}.svg`;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        delay: (index % 5) * 0.06,
      }
    );
  }, [index]);

  const handleImgError = () => {
    if (!imgFailed) {
      setImgFailed(true);
      setImgSrc(''); // Fall back to text
    }
  };

  const handleNameError = () => setNameFailed(true);

  const getCount = (type: string) => 
    hero.changes.filter(c => c.type === type).length + 
    (hero.abilityChanges?.reduce((acc, a) => acc + a.changes.filter(c => c.type === type).length, 0) || 0);

  const buffCount = getCount('buff');
  const nerfCount = getCount('nerf');
  const fixedCount = getCount('fixed');

  return (
    <motion.div
      ref={cardRef}
      id={`hero-${hero.id}`}
      className="card-bg hero-card-hover scroll-mt-20 overflow-hidden"
      whileHover={{ scale: 1.003 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex">
        {/* Hero portrait */}
        <div className="relative shrink-0 w-24 sm:w-32 overflow-hidden" style={{ minHeight: '120px' }}>
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={hero.name}
              onError={handleImgError}
              className="w-full h-full object-cover object-top"
              style={{ filter: 'brightness(0.9) contrast(1.05)' }}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-deadlock-bg px-2">
              <span className="font-display font-bold text-deadlock-muted text-xs text-center leading-tight">
                {hero.name}
              </span>
            </div>
          )}
          {/* Right gradient bleed */}
          <div
            className="absolute inset-y-0 right-0 w-8"
            style={{ background: 'linear-gradient(90deg, transparent, #111826)' }}
          />
          {/* Bottom gradient */}
          <div
            className="absolute inset-x-0 bottom-0 h-6"
            style={{ background: 'linear-gradient(0deg, #111826, transparent)' }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 min-w-0">
          {/* Header row */}
          <div className="flex items-center justify-between mb-4 gap-2 flex-wrap min-h-[30px]">
            {!nameFailed ? (
               <img src={nameSvgUrl} alt={hero.name} onError={handleNameError} className="h-6 object-contain" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
            ) : (
               <h3 className="font-display font-bold text-white tracking-wide text-lg leading-none">
                 {hero.name}
               </h3>
            )}
            <div className="flex items-center gap-1.5 shrink-0">
              {buffCount > 0 && (
                <span className="text-[10px] font-condensed font-bold text-green-400 bg-green-400/10 border border-green-400/25 px-1.5 py-0.5 rounded">
                  +{buffCount} BUFF{buffCount !== 1 ? 'S' : ''}
                </span>
              )}
              {nerfCount > 0 && (
                <span className="text-[10px] font-condensed font-bold text-red-400 bg-red-400/10 border border-red-400/25 px-1.5 py-0.5 rounded">
                  -{nerfCount} NERF{nerfCount !== 1 ? 'S' : ''}
                </span>
              )}
              {fixedCount > 0 && (
                <span className="text-[10px] font-condensed font-bold text-yellow-400 bg-yellow-400/10 border border-yellow-400/25 px-1.5 py-0.5 rounded">
                  {fixedCount} FIX{fixedCount !== 1 ? 'ES' : ''}
                </span>
              )}
            </div>
          </div>

          {/* General non-ability specific changes */}
          {hero.changes.length > 0 && (
            <ul className="space-y-2 mb-6">
              {hero.changes.map((change, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <ChangeTag type={change.type} />
                  <span className="text-deadlock-text text-sm leading-snug">{change.text}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Grouped Ability Changes */}
          {hero.abilityChanges && hero.abilityChanges.length > 0 && (
            <div className="flex flex-col gap-6 pt-2 border-t border-white/5">
              {hero.abilityChanges.map((ability, index) => (
                <div key={index} className="flex gap-4">
                  {/* Ability Icon */}
                  <div className="w-12 h-12 shrink-0 bg-black overflow-hidden border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                    <img src={ability.iconUrl} alt={ability.abilityName} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Ability Info & Changes */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h4 className="font-display font-bold text-[#b4c5d6] text-sm uppercase tracking-wider mb-2">
                      {ability.abilityName}
                    </h4>
                    <ul className="space-y-2">
                      {ability.changes.map((change, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <ChangeTag type={change.type} />
                          <span className="text-deadlock-text text-sm leading-snug">{change.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
