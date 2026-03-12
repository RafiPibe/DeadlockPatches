import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ItemChange } from '../types';
import ItemCard from './ItemCard';
import SectionHeader from './SectionHeader';

interface ItemSectionProps {
  itemChanges: ItemChange[];
}

type Filter = 'All' | 'Weapon' | 'Vitality' | 'Spirit';
const FILTERS: Filter[] = ['All', 'Weapon', 'Vitality', 'Spirit'];

const filterStyle: Record<Filter, { active: string; pill: string }> = {
  All: { active: 'bg-deadlock-gold text-deadlock-bg', pill: 'text-deadlock-gold border-deadlock-gold/40' },
  Weapon: { active: 'bg-deadlock-orange text-white', pill: 'text-deadlock-orange border-deadlock-orange/40' },
  Vitality: { active: 'bg-deadlock-green text-white', pill: 'text-deadlock-green border-deadlock-green/40' },
  Spirit: { active: 'bg-deadlock-purple text-white', pill: 'text-deadlock-purple border-deadlock-purple/40' },
};

export default function ItemSection({ itemChanges }: ItemSectionProps) {
  const [filter, setFilter] = useState<Filter>('All');

  const filtered = filter === 'All'
    ? itemChanges
    : itemChanges.filter(i => i.category === filter);

  return (
    <section id="items" className="mb-14 scroll-mt-20">
      <SectionHeader
        id="items"
        title="Items"
        color="purple"
        count={itemChanges.length}
      />

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {FILTERS.map((f) => {
          const isActive = filter === f;
          const s = filterStyle[f];
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded text-xs font-condensed font-bold tracking-widest uppercase border transition-all duration-200 ${
                isActive
                  ? s.active
                  : `bg-transparent border-deadlock-border ${s.pill} hover:border-current`
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          className="grid gap-3 sm:grid-cols-1 lg:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {filtered.map((item, index) => (
            <ItemCard key={item.id} item={item} index={index} />
          ))}
          {filtered.length === 0 && (
            <p className="text-deadlock-muted text-sm italic col-span-2 py-8 text-center">
              No item changes in this category.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
