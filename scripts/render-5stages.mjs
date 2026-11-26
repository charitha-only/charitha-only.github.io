import fs from 'fs';
import sharp from 'sharp';

const sorted = JSON.parse(fs.readFileSync('./scripts/evolution-sorted.json'));

// In the original 600x340.53:
// Figure 0 is at X~90
// Figure 3 is at X~260
// Figure 1 is at X~390
// Figure 2 is at X~540
// We expand viewBox to 0 0 760 340.53 so Figure 5 sits at X~650!

// Let's create Figure 5 based on Figure 2 (the modern upright man), transformed with laptop & holographic rays:
const p0 = sorted[0].path; // Australopithecus
const p1 = sorted[1].path; // Homo Habilis
const p2 = sorted[2].path; // Homo Erectus
const p3 = sorted[3].path; // Homo Sapiens

// For Stage 5, let's place Figure 2 shifted right, with laptop & neural halo
const svg = `
<svg viewBox="0 0 780 360" width="780" height="360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gold-amber" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#b0844c"/>
      <stop offset="50%" stop-color="#d6ad7a"/>
      <stop offset="100%" stop-color="#fff2dc"/>
    </linearGradient>
    <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="#060606"/>

  <!-- Horizon ground line -->
  <line x1="20" y1="340" x2="760" y2="340" stroke="rgba(214,173,122,0.25)" stroke-width="2"/>
  <line x1="20" y1="340" x2="760" y2="340" stroke="url(#gold-amber)" stroke-width="2.5" filter="url(#gold-glow)"/>

  <!-- Stage 1: Ape -->
  <path d="${p0}" fill="#d6ad7a" opacity="0.45"/>

  <!-- Stage 2: Homo Habilis -->
  <path d="${p1}" fill="#d6ad7a" opacity="0.6"/>

  <!-- Stage 3: Homo Erectus -->
  <path d="${p2}" fill="#d6ad7a" opacity="0.75"/>

  <!-- Stage 4: Homo Sapiens -->
  <path d="${p3}" fill="#d6ad7a" opacity="0.9"/>

  <!-- Stage 5: AI Builder (Homo Syntheticus) shifted right by 150px -->
  <g transform="translate(150, 0)" filter="url(#gold-glow)">
    <!-- Upright human body -->
    <path d="${p3}" fill="url(#gold-amber)"/>

    <!-- Neural Crown / Brainwaves -->
    <circle cx="530" cy="40" r="30" fill="none" stroke="#fff0d8" stroke-width="1.8" stroke-dasharray="4,4"/>
    <circle cx="530" cy="40" r="42" fill="none" stroke="rgba(214,173,122,0.5)" stroke-width="1" stroke-dasharray="6,6"/>

    <!-- Sleek Glowing Laptop in Hand -->
    <g transform="translate(560, 165)">
      <!-- Laptop Base -->
      <line x1="0" y1="20" x2="45" y2="16" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Laptop Screen -->
      <line x1="36" y1="16" x2="48" y2="-15" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      <!-- Glowing Screen Light Beam -->
      <polygon points="36,16 48,-15 15,-40 -5,-10" fill="rgba(255,242,220,0.18)"/>
      <!-- Floating AI Neural Core -->
      <circle cx="10" cy="-25" r="14" fill="none" stroke="#fff2dc" stroke-width="2" stroke-dasharray="3,3"/>
      <circle cx="10" cy="-25" r="5" fill="#ffffff"/>
      <!-- Ray connections -->
      <line x1="38" y1="10" x2="10" y2="-25" stroke="rgba(255,255,255,0.7)" stroke-width="1.2" stroke-dasharray="2,2"/>
      <line x1="45" y1="-8" x2="10" y2="-25" stroke="rgba(255,255,255,0.7)" stroke-width="1.2" stroke-dasharray="2,2"/>
    </g>
  </g>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile('C:/Users/user/AppData/Local/Temp/evolution-5stages.png')
  .then(() => console.log('5-stage evolution rendered!'));
