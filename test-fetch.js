import fs from 'fs/promises';
import fetch from 'node-fetch'; // Oh wait, Node 18+ has native fetch

async function main() {
    const url = 'https://deadlock.wiki/Special:FilePath/Golden_Goose_Egg.png?width=128';
    console.log(`Fetching ${url}`);
    const res = await fetch(url);
    console.log('Status:', res.status, res.url);
}
main();
