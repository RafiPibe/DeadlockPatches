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
import { formatPatchDate } from '../utils/date';

export default function PatchNotesPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patch, setPatch] = useState<PatchNotes | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Filter heroes and items by search query
  const filteredHeroes = patch?.heroChanges.filter(h =>
    h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    h.changes.some(c => c.text.toLowerCase().includes(searchQuery.toLowerCase()))
  ) ?? [];

  const filteredItems = patch?.itemChanges.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.changes.some(c => c.text.toLowerCase().includes(searchQuery.toLowerCase()))
  ) ?? [];

  // When searching, also filter general changes
  const filteredGeneral = searchQuery
    ? (patch?.generalChanges.filter(c =>
        c.text.toLowerCase().includes(searchQuery.toLowerCase())
      ) ?? [])
    : (patch?.generalChanges ?? []);

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
          onClick={() => window.location.reload()} 
          className="px-6 py-2 text-sm font-semibold tracking-widest font-condensed uppercase border border-deadlock-border hover:border-deadlock-gold hover:text-deadlock-gold transition-colors"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deadlock-bg flex flex-col">
      <Navbar />

      <PatchHeader displayDate={formatPatchDate(patch.date)} />

      {/* Quick nav strip */}
      <div
        className="border-y border-deadlock-border bg-deadlock-bg-secondary sticky top-14 z-40"
        style={{ background: 'rgba(13,19,32,0.8)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex gap-6 overflow-x-auto items-center">
          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="sm:hidden text-deadlock-gold hover:text-white transition-colors p-1"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Links */}
          <div className="hidden sm:flex gap-6">
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
                    const top = el.getBoundingClientRect().top + window.scrollY - 120;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
                className="text-deadlock-muted hover:text-deadlock-gold transition-colors text-xs font-condensed font-semibold tracking-widest uppercase whitespace-nowrap border-b border-transparent hover:border-deadlock-gold pb-0.5"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Quick Nav Search Bar */}
          <div className="relative ml-auto self-center shrink-0">
            <svg
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-deadlock-muted pointer-events-none"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="bg-black/20 border border-deadlock-border hover:border-deadlock-muted focus:border-deadlock-gold/60 text-white placeholder-deadlock-muted text-xs font-condensed tracking-wide outline-none pl-8 pr-3 py-1.5 w-32 focus:w-40 sm:w-48 sm:focus:w-60 transition-[width,border-color] duration-300 rounded-sm"
            />
          </div>

          {/* Search results count when filtering */}
          {searchQuery && (
            <span className="text-deadlock-gold text-xs font-condensed tracking-wider uppercase opacity-70 whitespace-nowrap self-center">
              {filteredHeroes.length} heroes · {filteredItems.length} items
            </span>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 w-full flex-1">
        <div className="flex gap-8">
          {/* Sticky TOC (Desktop) or Drawer (Mobile) */}
          <TableOfContents 
            heroChanges={filteredHeroes} 
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          {/* Scrollable content */}
          <main className="flex-1 min-w-0">
            {/* No results state */}
            {searchQuery && filteredHeroes.length === 0 && filteredItems.length === 0 && filteredGeneral.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-deadlock-muted font-condensed tracking-widest uppercase text-sm mb-2">
                  No results for "{searchQuery}"
                </p>
                <p className="text-deadlock-muted/50 text-xs font-condensed">
                  Try a hero name or ability keyword
                </p>
              </div>
            )}

            {filteredGeneral.length > 0 && (
              <GeneralSection
                changes={filteredGeneral}
                baseChanges={searchQuery ? [] : (patch.heroBaseChanges || [])}
              />
            )}

            {filteredHeroes.length > 0 && (
              <HeroSection heroChanges={filteredHeroes} />
            )}

            {filteredItems.length > 0 && (
              <ItemSection itemChanges={filteredItems} />
            )}

            {/* Footer */}
            <footer className="border-t border-deadlock-border pt-8 mt-4 text-center">
              <p className="text-deadlock-muted text-xs font-condensed tracking-widest uppercase">
                Deadlock Patch Notes Archive — Community Fan Project
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
