import fs from 'fs/promises';

// Simple heuristic to guess if a change is a buff, nerf, or fix
function determineType(text) {
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

async function main() {
  try {
    const text = await fs.readFile('raw-patch.txt', 'utf-8');
    const lines = text.split('\n').map(l => l.trim()).filter(l => l);

    const result = {
      generalChanges: [],
      heroBaseChanges: [],
      itemChanges: [],
      heroChanges: []
    };

    let currentSection = 'general'; // track what section we are reading
    let currentSubHeading = null;   // track the current hero or item name

    for (const line of lines) {
      // Check for main section headers
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

      // Check if line is a bullet point
      const isBullet = line.startsWith('-') || line.startsWith('•') || line.startsWith('*');
      
      if (isBullet) {
        // Strip the bullet formatting
        let textClean = line.replace(/^[-•*]\s*/, '');
        
        let targetName = currentSubHeading ? currentSubHeading.name : null;
        let changeText = textClean;

        // Check if the bullet format is "- Name: Change"
        const colonIndex = textClean.indexOf(':');
        if (colonIndex > 0 && colonIndex < 30) {
          targetName = textClean.substring(0, colonIndex).trim();
          changeText = textClean.substring(colonIndex + 1).trim();
        }

        const change = { text: changeText, type: determineType(changeText) };

        if (currentSection === 'general' && !targetName) {
          result.generalChanges.push(change);
        } else {
          // If we have a targetName, auto-categorize it as hero or item
          // For now, let's put it in heroChanges if we are in heroes section, or if we guess it's a hero
          if (currentSection === 'items') {
            let itemEntry = result.itemChanges.find(i => i.name === targetName);
            if (!itemEntry) {
              itemEntry = { name: targetName, changes: [] };
              result.itemChanges.push(itemEntry);
            }
            itemEntry.changes.push(change);
          } else {
            // Default to hero changes if format is "- Hero: Change"
            let heroEntry = result.heroChanges.find(h => h.name === targetName);
            if (!heroEntry) {
              heroEntry = { name: targetName, changes: [] };
              result.heroChanges.push(heroEntry);
            }
            heroEntry.changes.push(change);
          }
        }
      } else {
        // If it's not a bullet point and not a section header, it's likely a Hero or Item Name
        // Only classify as a subheading if we are in the Items or Heroes section
        if (currentSection === 'items') {
          currentSubHeading = { name: line, changes: [] };
          result.itemChanges.push(currentSubHeading);
        } else if (currentSection === 'heroes') {
          currentSubHeading = { name: line, changes: [] };
          result.heroChanges.push(currentSubHeading);
        }
      }
    }

    // Output formatted TypeScript file
    let tsOutput = `import type { PatchNotes } from '../types';\n\n`;
    tsOutput += `const h = (id: string) => \`/images/heroes/\${id}.png\`;\n`;
    tsOutput += `const i = (id: string) => \`/images/items/\${id}.png\`;\n\n`;
    
    const formatChange = (c) => `        { text: ${JSON.stringify(c.text)}, type: '${c.type}' }`;

    const formatItems = result.itemChanges.map(item => {
      // generate a URL-friendly ID from the name
      const id = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return `    {
      id: '${id}',
      name: '${item.name}',
      imageUrl: i('${id}'),
      category: 'Weapon', // IMPORTANT: Change this to 'Vitality' or 'Spirit' manually depending on the item
      changes: [
${item.changes.map(formatChange).join(',\n')}
      ],
    }`;
    }).join(',\n');

    const formatHeroes = result.heroChanges.map(hero => {
       // Support edge case for Mo & Krill
      let id = hero.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      if (hero.name.toLowerCase().includes('krill')) id = 'mo-krill';
      
      return `    {
      id: '${id}',
      name: '${hero.name}',
      imageUrl: h('${id}'),
      changes: [
${hero.changes.map(formatChange).join(',\n')}
      ],
    }`;
    }).join(',\n');

    tsOutput += `// TODO: Change the export variable name when you add it to your patch array
export const draftPatchNotes: PatchNotes = {
  date: 'YYYY-MM-DD',
  displayDate: 'MM-DD-YYYY',
  generalChanges: [
${result.generalChanges.map(formatChange).join(',\n')}
  ],
  heroBaseChanges: [
    // Move any hero generic changes here manually
  ],
  itemChanges: [
${formatItems}
  ],
  heroChanges: [
${formatHeroes}
  ],
};
`;

    await fs.writeFile('src/data/draftPatch.ts', tsOutput);
    console.log('✅ Successfully parsed raw-patch.txt!');
    console.log('✅ Generated script: src/data/draftPatch.ts');
    console.log('');
    console.log('👉 Next Steps:');
    console.log('1. Open src/data/draftPatch.ts');
    console.log('2. Review the changes (The script guesses what is a buff/nerf, but it might be wrong!)');
    console.log("3. Adjust Item categories (they all default to 'Weapon')");
    console.log('4. Copy the object over to src/data/patchNotes.ts when ready.');

  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('❌ Could not find raw-patch.txt. Please paste your patch notes inside raw-patch.txt and try again.');
    } else {
      console.error('❌ Error parsing patch notes:', err);
    }
  }
}

main();
