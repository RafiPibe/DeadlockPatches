import { GamemodeChange } from '../types';
import ChangeTag from './ChangeTag';

interface GamemodeSectionProps {
  gamemodeChanges: GamemodeChange[];
}

export default function GamemodeSection({ gamemodeChanges }: GamemodeSectionProps) {
  if (!gamemodeChanges || gamemodeChanges.length === 0) return null;

  return (
    <section id="gamemodes" className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-display font-bold text-white tracking-[0.2em] uppercase">
          Game <span className="text-deadlock-gold">Modes</span>
        </h2>
        <div className="h-px bg-deadlock-border flex-1" />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {gamemodeChanges.map((mode, i) => (
          <div 
            key={i} 
            className="group bg-deadlock-bg-secondary border border-deadlock-border p-6 hover:border-deadlock-gold/30 transition-all duration-300"
          >
            <h3 className="text-sm font-bold text-deadlock-gold uppercase tracking-widest mb-4 border-b border-deadlock-border pb-2">
              {mode.name}
            </h3>
            
            <ul className="space-y-3">
              {mode.changes.map((change, j) => (
                <li key={j} className="flex gap-3 text-sm group/li items-start">
                  <ChangeTag type={change.type} />
                  <p className="text-deadlock-text text-sm leading-snug">
                    {change.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
