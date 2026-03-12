import Navbar from '../components/Navbar';
import PatchHeader from '../components/PatchHeader';
import TableOfContents from '../components/TableOfContents';
import GeneralSection from '../components/GeneralSection';
import HeroSection from '../components/HeroSection';
import ItemSection from '../components/ItemSection';
import { latestPatch } from '../data/patchNotes';

export default function PatchNotesPage() {
  const patch = latestPatch;

  return (
    <div className="min-h-screen bg-deadlock-bg">
      <Navbar />

      <PatchHeader displayDate={patch.displayDate} />

      {/* Quick nav strip */}
      <div
        className="border-y border-deadlock-border bg-deadlock-bg-secondary"
        style={{ background: 'rgba(13,19,32,0.8)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex gap-6 overflow-x-auto">
          {[
            { id: 'general', label: 'General' },
            { id: 'all-heroes', label: 'All Heroes' },
            { id: 'heroes', label: 'Heroes' },
            { id: 'items', label: 'Items' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                const el = document.getElementById(id);
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="text-deadlock-muted hover:text-deadlock-gold transition-colors text-xs font-condensed font-semibold tracking-widest uppercase whitespace-nowrap border-b border-transparent hover:border-deadlock-gold pb-0.5"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10">
        <div className="flex gap-8">
          {/* Sticky TOC */}
          <TableOfContents heroChanges={patch.heroChanges} />

          {/* Scrollable content */}
          <main className="flex-1 min-w-0">
            <GeneralSection
              changes={patch.generalChanges}
              baseChanges={patch.heroBaseChanges}
            />

            <HeroSection heroChanges={patch.heroChanges} />

            <ItemSection itemChanges={patch.itemChanges} />

            {/* Footer */}
            <footer className="border-t border-deadlock-border pt-8 mt-4 text-center">
              <p className="text-deadlock-muted text-xs font-condensed tracking-widest uppercase">
                Deadlock Patch Notes Archive — Community Fan Project
              </p>
              <p className="text-deadlock-muted/50 text-xs mt-1">
                Data sourced from{' '}
                <a
                  href="https://deadlock.wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-deadlock-gold transition-colors underline"
                >
                  deadlock.wiki
                </a>{' '}
                and{' '}
                <a
                  href="https://forums.playdeadlock.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-deadlock-gold transition-colors underline"
                >
                  forums.playdeadlock.com
                </a>
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
