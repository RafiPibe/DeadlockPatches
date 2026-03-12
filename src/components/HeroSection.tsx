import type { HeroChange } from '../types';
import HeroCard from './HeroCard';
import SectionHeader from './SectionHeader';

interface HeroSectionProps {
  heroChanges: HeroChange[];
}

export default function HeroSection({ heroChanges }: HeroSectionProps) {
  return (
    <section id="heroes" className="mb-14 scroll-mt-20">
      <SectionHeader
        id="heroes"
        title="Heroes"
        color="orange"
        count={heroChanges.length}
      />

      <div className="grid gap-3">
        {heroChanges.map((hero, index) => (
          <HeroCard key={hero.id} hero={hero} index={index} />
        ))}
      </div>
    </section>
  );
}
