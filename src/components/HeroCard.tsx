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

// Verified fallback URLs in case the primary URL fails
const FALLBACK_HERO_IMAGES: Record<string, string> = {
  'apollo':       'https://deadlock.wiki/images/thumb/0/0f/Apollo_card.png/88px-Apollo_card.png',
  'calico':       'https://deadlock.wiki/images/thumb/e/e4/Calico_card.png/88px-Calico_card.png',
  'celeste':      'https://deadlock.wiki/images/thumb/9/90/Celeste_card.png/88px-Celeste_card.png',
  'the-doorman':  'https://deadlock.wiki/images/thumb/6/6f/The_Doorman_card.png/88px-The_Doorman_card.png',
  'drifter':      'https://deadlock.wiki/images/thumb/4/4d/Drifter_card.png/88px-Drifter_card.png',
  'ivy':          'https://deadlock.wiki/images/thumb/2/2c/Ivy_card.png/88px-Ivy_card.png',
  'lash':         'https://deadlock.wiki/images/thumb/5/5a/Lash_card.png/88px-Lash_card.png',
  'mcginnis':     'https://deadlock.wiki/images/thumb/5/55/McGinnis_card.png/88px-McGinnis_card.png',
  'mirage':       'https://deadlock.wiki/images/thumb/7/77/Mirage_card.png/88px-Mirage_card.png',
  'mo-krill':     'https://deadlock.wiki/images/thumb/a/a1/Mo_%26_Krill_card.png/88px-Mo_%26_Krill_card.png',
  'paradox':      'https://deadlock.wiki/images/thumb/0/08/Paradox_card.png/88px-Paradox_card.png',
  'pocket':       'https://deadlock.wiki/images/thumb/0/06/Pocket_card.png/88px-Pocket_card.png',
  'seven':        'https://deadlock.wiki/images/thumb/c/cf/Seven_card.png/88px-Seven_card.png',
  'shiv':         'https://deadlock.wiki/images/thumb/b/b8/Shiv_card.png/88px-Shiv_card.png',
  'silver':       'https://deadlock.wiki/images/thumb/1/1e/Silver_card.png/88px-Silver_card.png',
  'victor':       'https://deadlock.wiki/images/thumb/3/3d/Victor_card.png/88px-Victor_card.png',
  'vindicta':     'https://deadlock.wiki/images/thumb/6/69/Vindicta_card.png/88px-Vindicta_card.png',
  'viscous':      'https://deadlock.wiki/images/thumb/5/53/Viscous_card.png/88px-Viscous_card.png',
  'warden':       'https://deadlock.wiki/images/thumb/1/10/Warden_card.png/88px-Warden_card.png',
  'wraith':       'https://deadlock.wiki/images/thumb/8/85/Wraith_card.png/88px-Wraith_card.png',
};

export default function HeroCard({ hero, index }: HeroCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgFailed, setImgFailed] = useState(false);
  const [imgSrc, setImgSrc] = useState(hero.imageUrl);

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
      const fallback = FALLBACK_HERO_IMAGES[hero.id];
      if (fallback && fallback !== imgSrc) {
        setImgSrc(fallback);
      }
    }
  };

  const buffCount = hero.changes.filter(c => c.type === 'buff').length;
  const nerfCount = hero.changes.filter(c => c.type === 'nerf').length;
  const fixedCount = hero.changes.filter(c => c.type === 'fixed').length;

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
          <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
            <h3 className="font-display font-bold text-white tracking-wide text-lg leading-none">
              {hero.name}
            </h3>
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

          {/* Changes list */}
          <ul className="space-y-2">
            {hero.changes.map((change, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <ChangeTag type={change.type} />
                <span className="text-deadlock-text text-sm leading-snug">{change.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
