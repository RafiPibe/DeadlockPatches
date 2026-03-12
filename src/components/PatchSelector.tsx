import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPatches } from '../api';
import { PatchNotes } from '../types';

export default function PatchSelector() {
  const [patches, setPatches] = useState<PatchNotes[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getPatches().then(setPatches).catch(console.error);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (patches.length === 0) return null;

  // Selected patch is either the URL param or the latest one
  const selectedPatch = patches.find(p => p.id === id) || patches[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-deadlock-bg-secondary border border-deadlock-border hover:border-deadlock-gold/30 transition-colors"
      >
        <span className="text-sm font-display tracking-wider text-white">
          {selectedPatch.date === '2026-03-10' ? 'March 10, 2026' : selectedPatch.date}
        </span>
        <svg 
          width="12" height="12" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`text-deadlock-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-48 bg-deadlock-bg border border-deadlock-border shadow-xl rounded-sm z-50">
          {patches.map((patch) => (
            <button
              key={patch.id}
              onClick={() => {
                navigate(`/patches/${patch.id}`);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm font-display tracking-wider hover:bg-deadlock-gold/10 transition-colors ${
                selectedPatch.id === patch.id ? 'text-deadlock-gold' : 'text-deadlock-muted hover:text-white'
              }`}
            >
              {patch.date === '2026-03-10' ? 'March 10, 2026' : patch.date}
            </button>
          ))}
          <div className="border-t border-deadlock-border my-1"></div>
          <button
            onClick={() => {
              navigate('/login');
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm font-display tracking-wider text-deadlock-muted hover:text-white hover:bg-deadlock-gold/10 transition-colors"
          >
            + Add New Patch
          </button>
        </div>
      )}
    </div>
  );
}
