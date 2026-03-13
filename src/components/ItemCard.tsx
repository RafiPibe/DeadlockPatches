import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ItemChange } from '../types';
import ChangeTag from './ChangeTag';

interface ItemCardProps {
  item: ItemChange;
  index: number;
}

const categoryStyle: Record<string, { pill: string; glow: string }> = {
  Weapon: { pill: 'pill-weapon', glow: 'rgba(232,118,46,0.10)' },
  Vitality: { pill: 'pill-vitality', glow: 'rgba(76,175,110,0.10)' },
  Spirit: { pill: 'pill-spirit', glow: 'rgba(155,111,212,0.10)' },
};

const FALLBACK_ITEM_IMAGES: Record<string, string> = {
  'golden-goose-egg': 'https://deadlock.wiki/images/thumb/9/9e/Golden_Goose_Egg_Icon.png/64px-Golden_Goose_Egg_Icon.png',
  'vortex-web': 'https://deadlock.wiki/images/thumb/6/6d/Vortex_Web_Icon.png/64px-Vortex_Web_Icon.png',
};

export default function ItemCard({ item, index }: ItemCardProps) {
  const [imgError, setImgError] = useState(false);
  const [imgSrc, setImgSrc] = useState(item.imageUrl);
  const style = categoryStyle[item.category] ?? categoryStyle.Weapon;

  const handleImgError = () => {
    // Try to recover if it's an old-style path or just broken
    if (!imgSrc.includes(' (')) {
      const folder = item.category === 'Weapon' ? 'Weapon (Orange)' : item.category === 'Vitality' ? 'Vitality (Green)' : 'Spirit (Purple)';
      const guessedPath = `/images/items/${folder}/${item.name.replace(/ /g, '_')}.png`;
      if (imgSrc !== guessedPath) {
        setImgSrc(guessedPath);
        return;
      }
    }

    if (!imgError) {
      setImgError(true);
      const fallback = FALLBACK_ITEM_IMAGES[item.id];
      if (fallback) setImgSrc(fallback);
    }
  };

  return (
    <motion.div
      className="card-bg hero-card-hover overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
      whileHover={{ scale: 1.005 }}
      style={{
        boxShadow: `inset 0 0 40px ${style.glow}`,
      }}
    >
      <div className="flex items-start gap-4 p-4">
        {/* Item icon */}
        <div
          className="shrink-0 w-14 h-14 rounded-sm border border-deadlock-border flex items-center justify-center overflow-hidden"
          style={{ background: 'rgba(0,0,0,0.3)' }}
        >
          {!imgError ? (
            <img
              src={imgSrc}
              alt={item.name}
              onError={handleImgError}
              className="w-12 h-12 object-contain"
              style={{ imageRendering: 'crisp-edges' }}
            />
          ) : (
            <span className="text-[9px] text-deadlock-muted text-center leading-tight px-1 font-condensed">
              {item.name}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3 className="font-display font-bold text-white tracking-wide text-base leading-none">
              {item.name}
            </h3>
            <span className={`text-[9px] font-condensed font-bold tracking-widest px-1.5 py-0.5 rounded uppercase ${style.pill}`}>
              {item.category}
            </span>
          </div>

          <ul className="space-y-1.5">
            {item.changes.map((change, i) => (
              <li key={i} className="flex items-start gap-2">
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
