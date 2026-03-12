import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { createPatch, getPatches, deletePatch, updatePatch } from '../api';
import { ChangeType, PatchNotes } from '../types';
import { supabase } from '../supabaseClient';
import { formatPatchDate } from '../utils/date';
import { heroAbilities } from '../data/abilities';

// Helper to guess buff/nerf
function determineType(text: string): ChangeType {
  const lower = text.toLowerCase();
  
  if (lower.startsWith('fixed') || /\b(bug|issue)\b/.test(lower)) return 'fixed';
  if (/\bno longer\b/.test(lower)) return 'nerf';

  const nerfRegex = /\b(reduced|reduce|reduces|decreased|decrease|decreases|less|removed|remove|removes)\b/;
  const buffRegex = /\b(increased|increase|increases|bonus|improved|improve|improves|more|added|add|adds|faster|gained|gains)\b/;
  const invertedRegex = /\b(cooldown|charge time|price|cost|delay)\b/;

  const hasNerf = nerfRegex.test(lower);
  const hasBuff = buffRegex.test(lower);
  const isInverted = invertedRegex.test(lower);

  if (hasNerf && !hasBuff) {
    return isInverted ? 'buff' : 'nerf';
  }
  
  if (hasBuff && !hasNerf) {
    return isInverted ? 'nerf' : 'buff';
  }

  if (/\bnew\b/.test(lower)) return 'new';
  
  return 'neutral';
}

export default function EditorPage() {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // YYYY-MM-DD
  const [rawText, setRawText] = useState('');
  const [parsedData, setParsedData] = useState<PatchNotes | null>(null);
  const [loading, setLoading] = useState(false);
  
  // Manage existing patches state
  const [existingPatches, setExistingPatches] = useState<PatchNotes[]>([]);
  const [loadingPatches, setLoadingPatches] = useState(true);
  const [editingPatchId, setEditingPatchId] = useState<string | null>(null);
  const [editingJson, setEditingJson] = useState<string>('');

  useEffect(() => {
    const fetchPatches = async () => {
      try {
        const data = await getPatches();
        setExistingPatches(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingPatches(false);
      }
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/login');
      } else {
        fetchPatches();
      }
    });
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const handleParse = () => {
    const lines = rawText.split('\n').map(l => l.trim()).filter(l => l);
    
    const result: PatchNotes = {
      id: date,
      date: date,
      displayDate: formatPatchDate(date),
      generalChanges: [],
      heroBaseChanges: [],
      itemChanges: [],
      heroChanges: []
    };

    let currentSection = 'general';
    let currentSubHeading: any = null;

    for (const line of lines) {
      if (line.match(/^\[?\s*(?:General|Gameplay)\s*(?:Changes|Updates)?\s*\]?$/i)) {
        currentSection = 'general';
        currentSubHeading = null;
        continue;
      }
      if (line.match(/^\[?\s*Item(?:s)?\s*(?:Changes)?\s*\]?$/i)) {
        currentSection = 'items';
        currentSubHeading = null;
        continue;
      }
      if (line.match(/^\[?\s*Hero(?:es)?\s*(?:Changes)?\s*\]?$/i)) {
        currentSection = 'heroes';
        currentSubHeading = null;
        continue;
      }

      const isBullet = line.startsWith('-') || line.startsWith('•') || line.startsWith('*');
      
      if (isBullet) {
        let textClean = line.replace(/^[-•*]\s*/, '');
        let targetName = currentSubHeading ? currentSubHeading.name : null;
        let changeText = textClean;

        const colonIndex = textClean.indexOf(':');
        if (colonIndex > 0 && colonIndex < 30) {
          targetName = textClean.substring(0, colonIndex).trim();
          changeText = textClean.substring(colonIndex + 1).trim();
        }

        const change = { text: changeText, type: determineType(changeText) };

        if (currentSection === 'general' && !targetName) {
          result.generalChanges.push(change);
        } else {
          if (currentSection === 'items') {
            let itemEntry = result.itemChanges.find((i: any) => i.name === targetName);
            if (!itemEntry) {
              const id = targetName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              itemEntry = { id, name: targetName, imageUrl: `/images/items/${id}.png`, category: 'Weapon', changes: [] };
              result.itemChanges.push(itemEntry);
            }
            itemEntry.changes.push(change);
          } else {
             // Hero
            let heroEntry = result.heroChanges.find((h: any) => h.name === targetName);
            if (!heroEntry) {
              let id = targetName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              if (targetName.toLowerCase().includes('krill')) id = 'mo-krill';
              if (id === 'doorman') id = 'the-doorman';
              
              heroEntry = { id, name: targetName, imageUrl: `/images/heroes/${id}.png`, changes: [], abilityChanges: [] };
              result.heroChanges.push(heroEntry);
            }

            const abilities = heroAbilities[heroEntry.id] || [];
            const lowerChange = changeText.toLowerCase();
            let matchedAbility = null;

            for (const ability of abilities) {
              for (const mapped of ability.mappedNames) {
                if (lowerChange.includes(mapped)) {
                  matchedAbility = ability;
                  break;
                }
              }
              if (matchedAbility) break;
            }

            if (matchedAbility) {
              // @ts-ignore
              let abilityEntry = heroEntry.abilityChanges.find(a => a.abilityName === matchedAbility.name);
              if (!abilityEntry) {
                abilityEntry = { abilityName: matchedAbility.name, iconUrl: matchedAbility.iconUrl, changes: [] };
                // @ts-ignore
                heroEntry.abilityChanges.push(abilityEntry);
              }
              abilityEntry.changes.push(change);
            } else {
              heroEntry.changes.push(change);
            }
          }
        }
      } else {
        if (currentSection === 'items') {
          const id = line.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          currentSubHeading = { id, name: line, imageUrl: `/images/items/${id}.png`, category: 'Weapon', changes: [] };
          result.itemChanges.push(currentSubHeading);
        } else if (currentSection === 'heroes') {
          let id = line.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          if (line.toLowerCase().includes('krill')) id = 'mo-krill';
          if (id === 'doorman') id = 'the-doorman';
          currentSubHeading = { id, name: line, imageUrl: `/images/heroes/${id}.png`, changes: [], abilityChanges: [] };
          result.heroChanges.push(currentSubHeading);
        }
      }
    }

    setParsedData(result);
  };

  const handlePublish = async () => {
    if (!parsedData) return;
    setLoading(true);
    try {
      await createPatch(parsedData);
      navigate(`/patches/${parsedData.id}`);
    } catch (e) {
      console.error(e);
      alert('Failed to publish patch notes.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string | undefined) => {
    if (!id || !window.confirm('Are you sure you want to permanently delete this patch?')) return;
    try {
      await deletePatch(id);
      setExistingPatches(prev => prev.filter(p => p.id !== id));
    } catch (e) {
      alert('Failed to delete patch.');
    }
  };

  const handleEditClick = (patch: PatchNotes) => {
    if (editingPatchId === patch.id) {
      setEditingPatchId(null);
      setEditingJson('');
    } else {
      setEditingPatchId(patch.id || null);
      setEditingJson(JSON.stringify(patch, null, 2));
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedPatch: PatchNotes = JSON.parse(editingJson);
      setLoading(true);
      await updatePatch(updatedPatch);
      setExistingPatches(prev => prev.map(p => p.id === updatedPatch.id ? updatedPatch : p));
      setEditingPatchId(null);
      alert('Patch updated successfully!');
    } catch (e) {
      alert('Invalid JSON format or update failed: ' + e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-deadlock-bg flex flex-col">
      <Navbar />

      <main className="max-w-[1000px] w-full mx-auto px-6 py-24 flex-1">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-display font-bold text-white tracking-widest uppercase">
            Patch Notes <span className="text-deadlock-gold">Editor</span>
          </h1>
          <button
            onClick={handleSignOut}
            className="text-deadlock-muted hover:text-white transition-colors text-xs font-condensed tracking-wider uppercase border border-deadlock-border hover:border-deadlock-muted px-4 py-2"
          >
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Input */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-deadlock-muted text-xs font-condensed tracking-widest uppercase mb-2">Patch Date</label>
              <input 
                type="date" 
                value={date}
                onChange={e => setDate(e.target.value)}
                className="w-full bg-[#0a0f18] border border-deadlock-border text-white px-4 py-2 font-display outline-none focus:border-deadlock-gold/50"
              />
            </div>

            <div>
              <label className="block text-deadlock-muted text-xs font-condensed tracking-widest uppercase mb-2 mt-4">Raw Forum Text</label>
              <textarea
                value={rawText}
                onChange={e => setRawText(e.target.value)}
                placeholder="[ General Changes ]&#10;- Bullet points here...&#10;&#10;[ Items ]&#10;- Golden Goose Egg: Souls increased...&#10;&#10;[ Heroes ]&#10;- Paradox: Time wall increased..."
                className="w-full h-96 bg-[#0a0f18] border border-deadlock-border text-white px-4 py-3 font-mono text-sm leading-relaxed outline-none focus:border-deadlock-gold/50 resize-y"
              />
            </div>

            <button
              onClick={handleParse}
              disabled={!rawText}
              className="mt-2 w-full bg-deadlock-bg-secondary border border-deadlock-border hover:border-deadlock-gold text-white font-condensed font-bold tracking-[0.2em] uppercase py-3 transition-colors disabled:opacity-50"
            >
              Parse Data
            </button>
          </div>

          {/* Right Side: Preview */}
          <div className="flex flex-col gap-4">
            <label className="block text-deadlock-muted text-xs font-condensed tracking-widest uppercase mb-2">Preview & Adjust</label>
            
            <div className="flex-1 bg-deadlock-bg-secondary border border-deadlock-border p-4 overflow-y-auto min-h-[400px]">
              {!parsedData ? (
                <div className="h-full flex items-center justify-center text-deadlock-muted font-condensed tracking-wider text-sm uppercase">
                  Awaiting Input...
                </div>
              ) : (
                <div className="flex flex-col gap-6 text-sm text-gray-300">
                  {/* General */}
                  <div>
                    <h3 className="text-deadlock-gold font-display font-bold uppercase tracking-wider mb-2">General Changes ({parsedData.generalChanges.length})</h3>
                    <ul className="list-disc pl-5 opacity-80">
                      {parsedData.generalChanges.map((c, i) => (
                        <li key={i}><span className="text-xs font-bold uppercase mr-2 opacity-50">[{c.type}]</span> {c.text}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Items */}
                  {parsedData.itemChanges.length > 0 && (
                    <div>
                      <h3 className="text-deadlock-gold font-display font-bold uppercase tracking-wider mb-2">Items ({parsedData.itemChanges.length})</h3>
                      <div className="flex flex-col gap-3">
                        {parsedData.itemChanges.map((item, i) => (
                          <div key={i} className="pl-3 border-l-2 border-deadlock-border">
                            <div className="flex items-center gap-3 mb-1">
                              <span className="font-bold text-white max-w-[120px] truncate">{item.name}</span>
                              <select 
                                value={item.category}
                                onChange={(e) => {
                                  const newData = {...parsedData};
                                  newData.itemChanges[i].category = e.target.value as any;
                                  setParsedData(newData);
                                }}
                                className="bg-[#0a0f18] border border-deadlock-border px-2 py-1 text-xs outline-none focus:border-deadlock-gold cursor-pointer"
                              >
                                <option value="Weapon">Weapon (Orange)</option>
                                <option value="Vitality">Vitality (Green)</option>
                                <option value="Spirit">Spirit (Purple)</option>
                              </select>
                            </div>
                            <ul className="list-disc pl-5 opacity-80 mt-1 text-xs">
                              {item.changes.map((c, j) => (
                                <li key={j}><span className="font-bold uppercase mr-1 opacity-50">[{c.type}]</span> {c.text}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Heroes */}
                  {parsedData.heroChanges.length > 0 && (
                    <div>
                      <h3 className="text-deadlock-gold font-display font-bold uppercase tracking-wider mb-2">Heroes ({parsedData.heroChanges.length})</h3>
                      {parsedData.heroChanges.map((hero, i) => (
                        <div key={i} className="mb-3">
                          <span className="font-bold text-white block mb-1">{hero.name}</span>
                          {/* General base changes */}
                          {hero.changes.length > 0 && (
                            <ul className="list-disc pl-5 opacity-80 text-xs mb-2">
                              {hero.changes.map((c, j) => (
                                <li key={j}><span className="font-bold uppercase mr-1 opacity-50">[{c.type}]</span> {c.text}</li>
                              ))}
                            </ul>
                          )}
                          
                          {/* Ability changes */}
                          {hero.abilityChanges && hero.abilityChanges.length > 0 && (
                            <div className="flex flex-col gap-2 mt-2">
                              {hero.abilityChanges.map((ability, j) => (
                                <div key={j} className="pl-3 border-l border-deadlock-border">
                                  <div className="flex items-center gap-2 mb-1">
                                    <div className="w-6 h-6 bg-black rounded overflow-hidden">
                                      <img src={ability.iconUrl} alt={ability.abilityName} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="font-bold text-deadlock-gold text-xs">{ability.abilityName}</span>
                                  </div>
                                  <ul className="list-disc pl-5 opacity-80 text-xs mt-1">
                                    {ability.changes.map((c, k) => (
                                      <li key={k}><span className="font-bold uppercase mr-1 opacity-50">[{c.type}]</span> {c.text}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={handlePublish}
              disabled={!parsedData || loading}
              className="mt-2 w-full bg-deadlock-gold/10 hover:bg-deadlock-gold/20 text-deadlock-gold border border-deadlock-gold/30 hover:border-deadlock-gold transition-colors py-3 font-condensed font-bold tracking-[0.2em] uppercase disabled:opacity-50 relative group"
            >
              <span className="relative z-10">{loading ? 'Publishing...' : 'Publish Patch'}</span>
               {!loading && !parsedData && <div className="absolute inset-0 bg-black/40 z-20"></div>}
            </button>
          </div>
        </div>

        {/* Existing Patches Dashboard */}
        <div className="mt-20 pt-16 border-t border-deadlock-border">
          <h2 className="text-2xl font-display font-bold text-white tracking-widest uppercase mb-8">
            Manage Existing <span className="text-deadlock-gold">Patches</span>
          </h2>
          
          {loadingPatches ? (
             <p className="text-deadlock-muted font-condensed tracking-wider uppercase">Loading database...</p>
          ) : existingPatches.length === 0 ? (
             <p className="text-deadlock-muted font-condensed tracking-wider uppercase">No patches found in the database.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {existingPatches.map(patch => (
                <div key={patch.id} className="bg-deadlock-bg-secondary border border-deadlock-border overflow-hidden">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 gap-4">
                    <div>
                      <h3 className="text-white font-display font-bold text-lg">{formatPatchDate(patch.date)} Update</h3>
                      <p className="text-deadlock-muted text-xs font-condensed tracking-wider uppercase mt-1">
                        ID: {patch.id} | Changes: {patch.generalChanges.length} Gen / {patch.itemChanges.length} Items / {patch.heroChanges.length} Heroes
                      </p>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                      <button 
                        onClick={() => handleEditClick(patch)}
                        className={`flex-1 md:flex-none px-4 py-2 border text-xs font-condensed tracking-wider uppercase transition-colors ${editingPatchId === patch.id ? 'bg-white text-black border-white' : 'text-white border-white hover:bg-white/10'}`}
                      >
                        {editingPatchId === patch.id ? 'Close Edit' : 'Edit JSON'}
                      </button>
                      <button 
                        onClick={() => handleDelete(patch.id)}
                        className="flex-1 md:flex-none px-4 py-2 border border-red-500/50 text-red-400 hover:bg-red-500/10 text-xs font-condensed tracking-wider uppercase transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  
                  {/* JSON Editor Expanded Area */}
                  {editingPatchId === patch.id && (
                    <div className="border-t border-deadlock-border bg-[#0a0f18] p-4 flex flex-col gap-4">
                      <p className="text-deadlock-muted text-xs font-condensed tracking-wider uppercase">
                        Warning: This is a raw JSON editor. Ensure the syntax is perfect before updating.
                      </p>
                      <textarea
                        value={editingJson}
                        onChange={e => setEditingJson(e.target.value)}
                        className="w-full h-96 bg-black border border-deadlock-border text-green-400 px-4 py-3 font-mono text-xs leading-relaxed outline-none focus:border-deadlock-gold/50 resize-y"
                        spellCheck={false}
                      />
                      <button 
                        onClick={handleUpdate}
                        disabled={loading}
                        className="align-self-end bg-deadlock-gold hover:bg-yellow-400 text-black px-6 py-2 font-condensed font-bold tracking-widest uppercase transition-colors disabled:opacity-50 ml-auto"
                      >
                        {loading ? 'Saving...' : 'Save Database Entry'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
