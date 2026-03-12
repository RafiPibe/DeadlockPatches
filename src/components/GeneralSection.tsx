import { motion } from 'framer-motion';
import type { GeneralChange } from '../types';
import ChangeTag from './ChangeTag';
import SectionHeader from './SectionHeader';

interface GeneralSectionProps {
  changes: GeneralChange[];
  baseChanges: GeneralChange[];
}

export default function GeneralSection({ changes, baseChanges }: GeneralSectionProps) {
  return (
    <section className="mb-14">
      <SectionHeader id="general" title="General" color="gold" count={changes.length} />

      <div className="space-y-2 mb-10">
        {changes.map((change, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3 py-2.5 px-4 rounded-sm border border-deadlock-border/60 bg-deadlock-bg-card/60 hover:bg-deadlock-bg-card hover:border-deadlock-border transition-all duration-200"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
          >
            <div className="mt-0.5 shrink-0">
              <ChangeTag type={change.type} />
            </div>
            <p className="text-deadlock-text text-sm leading-relaxed">{change.text}</p>
          </motion.div>
        ))}
      </div>

      {/* All heroes section */}
      <SectionHeader id="all-heroes" title="All Heroes" color="teal" count={baseChanges.length} />
      <div className="space-y-2">
        {baseChanges.map((change, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3 py-2.5 px-4 rounded-sm border border-deadlock-border/60 bg-deadlock-bg-card/60 hover:bg-deadlock-bg-card hover:border-deadlock-border transition-all duration-200"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <div className="mt-0.5 shrink-0">
              <ChangeTag type={change.type} />
            </div>
            <p className="text-deadlock-text text-sm leading-relaxed">{change.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
