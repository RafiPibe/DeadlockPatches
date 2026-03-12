// test-mediawiki-url.js
const https = require('https');

https.get('https://deadlock.wiki/Special:FilePath/Golden_Goose_Egg.png', (res) => {
  console.log('Status code:', res.statusCode);
  console.log('Location:', res.headers.location);
}).on('error', (e) => {
  console.error(e);
});
