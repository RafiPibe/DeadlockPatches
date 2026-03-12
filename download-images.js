import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function download(url, filepath) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
    }
    const buffer = await res.arrayBuffer();
    await fs.writeFile(filepath, Buffer.from(buffer));
}

async function main() {
    const heroesDir = path.join(__dirname, 'public', 'images', 'heroes');
    const itemsDir = path.join(__dirname, 'public', 'images', 'items');
    await fs.mkdir(heroesDir, { recursive: true });
    await fs.mkdir(itemsDir, { recursive: true });

    const heroesContent = await fs.readFile(path.join(__dirname, 'src', 'data', 'heroes.ts'), 'utf-8');
    const heroRegex = /id:\s*'([^']+)',\s*name:\s*'([^']+)'/g;
    const heroes = [...heroesContent.matchAll(heroRegex)];

    const itemsContent = await fs.readFile(path.join(__dirname, 'src', 'data', 'items.ts'), 'utf-8');
    const itemRegex = /id:\s*'([^']+)',\s*name:\s*'([^']+)'/g;
    const items = [...itemsContent.matchAll(itemRegex)];

    console.log(`Downloading ${heroes.length} heroes...`);
    for (const match of heroes) {
        const id = match[1];
        const name = match[2];
        let encName = name.replace(/ /g, '_');
        if (name === 'Mo & Krill') encName = 'Mo_%26_Krill';
        const url = `https://deadlock.wiki/Special:FilePath/${encName}_card.png?width=200`;
        const dest = path.join(heroesDir, `${id}.png`);
        try {
            await download(url, dest);
            console.log(`✓ Hero: ${name}`);
        } catch (e) {
            console.error(`✗ Failed Hero: ${name} from ${url} - ${e.message}`);
        }
    }

    console.log(`Downloading ${items.length} items...`);
    for (const match of items) {
        const id = match[1];
        const name = match[2];
        let encName = name.replace(/ /g, '_').replace(/'/g, '%27');
        const url = `https://deadlock.wiki/Special:FilePath/${encName}.png?width=128`;
        const dest = path.join(itemsDir, `${id}.png`);
        try {
            await download(url, dest);
            console.log(`✓ Item: ${name}`);
        } catch (e) {
            try {
                // Some items might be named Name_Icon.png
                const url2 = `https://deadlock.wiki/Special:FilePath/${encName}_Icon.png?width=128`;
                await download(url2, dest);
                console.log(`✓ Item: ${name} (Icon fallback)`);
            } catch (e2) {
                // Test lowercase
                try {
                    const url3 = `https://deadlock.wiki/Special:FilePath/${encName}_icon.png?width=128`;
                    await download(url3, dest);
                    console.log(`✓ Item: ${name} (lower icon fallback)`);
                } catch (e3) {
                    console.error(`✗ Failed Item: ${name} - ${e.message}`);
                }
            }
        }
    }
}

main().catch(console.error);
