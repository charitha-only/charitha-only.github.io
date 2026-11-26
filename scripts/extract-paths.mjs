import fs from 'fs';

const text = fs.readFileSync('./public/images/human-evolution.svg', 'utf-8');
const regex = /<path\s+d="([^"]+)"/g;
let match;
let i = 0;
const paths = [];

while ((match = regex.exec(text)) !== null) {
  paths.push(match[1]);
  console.log(`Path ${i}: length ${match[1].length}, prefix: ${match[1].substring(0, 35)}`);
  i++;
}

fs.writeFileSync('./scripts/evolution-paths.json', JSON.stringify(paths, null, 2));
console.log('Saved paths to ./scripts/evolution-paths.json');
