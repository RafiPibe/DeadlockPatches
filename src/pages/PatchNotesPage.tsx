import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PatchHeader from '../components/PatchHeader';
import TableOfContents from '../components/TableOfContents';
import GeneralSection from '../components/GeneralSection';
import HeroSection from '../components/HeroSection';
import ItemSection from '../components/ItemSection';
import { getPatches, getPatchById } from '../api';
import { PatchNotes } from '../types';

export default function PatchNotesPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patch, setPatch] = useState<PatchNotes | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPatch() {
      setLoading(true);
      try {
        if (id) {
          const data = await getPatchById(id);
          setPatch(data);
        } else {
          const patches = await getPatches();
          if (patches.length > 0) {
            setPatch(patches[0]);
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadPatch();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-deadlock-bg flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-deadlock-gold/20 border-t-deadlock-gold rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!patch) {
    return (
      <div className="min-h-screen bg-deadlock-bg flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-display tracking-widest uppercase text-deadlock-gold mb-6">Patch Not Found</h2>
        <button 
          onClick={() => navigate('/')} 
          className="px-6 py-2 text-sm font-semibold tracking-widest font-condensed uppercase border border-deadlock-border hover:border-deadlock-gold hover:text-deadlock-gold transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deadlock-bg flex flex-col">
      <Navbar />

      <PatchHeader displayDate={patch.displayDate} />

      {/* Quick nav strip */}
      <div
        className="border-y border-deadlock-border bg-deadlock-bg-secondary sticky top-14 z-40"
        style={{ background: 'rgba(13,19,32,0.8)', backdropFilter: 'blur(12px)' }}
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
                  const top = el.getBoundingClientRect().top + window.scrollY - 110;
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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 w-full flex-1">
        <div className="flex gap-8">
          {/* Sticky TOC */}
          <TableOfContents heroChanges={patch.heroChanges} />

          {/* Scrollable content */}
          <main className="flex-1 min-w-0">
            {patch.generalChanges && patch.generalChanges.length > 0 && (
              <GeneralSection
                changes={patch.generalChanges}
                baseChanges={patch.heroBaseChanges || []}
              />
            )}

            {patch.heroChanges && patch.heroChanges.length > 0 && (
              <HeroSection heroChanges={patch.heroChanges} />
            )}

            {patch.itemChanges && patch.itemChanges.length > 0 && (
              <ItemSection itemChanges={patch.itemChanges} />
            )}

            {/* Footer */}
            <footer className="border-t border-deadlock-border pt-8 mt-4 text-center">
              <p className="text-deadlock-muted text-xs font-condensed tracking-widest uppercase">
                Deadlock Patch Notes Archive — Community Fan Project
              </p>
              <p className="text-deadlock-muted/50 text-xs mt-1">
                Hosted via Local JSON-Server
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
