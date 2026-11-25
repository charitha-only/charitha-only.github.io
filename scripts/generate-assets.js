const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Generate icon.svg
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="7" fill="#0c0c0c" stroke="rgba(214,173,122,0.3)" stroke-width="1.5" />
  <text x="7.5" y="22.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="18" font-weight="800" fill="#f1f0ed">C</text>
  <circle cx="23" cy="22" r="2.5" fill="#d6ad7a" />
</svg>`;

fs.writeFileSync(path.join(publicDir, 'icon.svg'), iconSvg, 'utf8');
console.log('Created public/icon.svg');

// 2. Generate favicon.ico / favicon.png
sharp(Buffer.from(iconSvg))
  .resize(32, 32)
  .png()
  .toFile(path.join(publicDir, 'favicon.ico'))
  .then(() => console.log('Created public/favicon.ico'))
  .catch(err => console.error(err));

// 3. Generate og-image.png (1200 x 630)
const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="82%" cy="18%" r="65%">
      <stop offset="0%" stop-color="#d6ad7a" stop-opacity="0.22" />
      <stop offset="60%" stop-color="#151412" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#090909" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d6ad7a" stop-opacity="0.45" />
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#d6ad7a" stop-opacity="0.2" />
    </linearGradient>
  </defs>
  
  <rect width="1200" height="630" fill="#090909" />
  <rect width="1200" height="630" fill="url(#glow)" />
  
  <rect x="36" y="36" width="1128" height="558" rx="14" fill="none" stroke="url(#borderGrad)" stroke-width="1.5" />
  
  <!-- Monogram -->
  <text x="88" y="148" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="800" fill="#f1f0ed">C<tspan fill="#d6ad7a">.</tspan></text>
  <text x="160" y="142" font-family="monospace" font-size="14" fill="#858580" letter-spacing="4">// MALSANKA.COM</text>
  
  <!-- Kicker -->
  <text x="88" y="250" font-family="monospace" font-size="15" fill="#d6ad7a" letter-spacing="4">INDEPENDENT DEVELOPER · SRI LANKA</text>
  
  <!-- Main Title -->
  <text x="88" y="342" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="76" font-weight="700" fill="#f1f0ed" letter-spacing="-2">Charitha</text>
  
  <!-- Subtitle -->
  <text x="88" y="415" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="27" font-weight="400" fill="#b9b8b2">Designing what's next with modern code &amp; AI intelligence.</text>
  
  <!-- Capabilities Tags -->
  <g transform="translate(88, 485)">
    <rect x="0" y="0" width="175" height="40" rx="4" fill="#141414" stroke="rgba(255,255,255,0.14)" stroke-width="1" />
    <text x="18" y="25" font-family="monospace" font-size="13" fill="#d6ad7a" letter-spacing="1">AI VIBE CODING</text>
    
    <rect x="195" y="0" width="175" height="40" rx="4" fill="#141414" stroke="rgba(255,255,255,0.14)" stroke-width="1" />
    <text x="213" y="25" font-family="monospace" font-size="13" fill="#d8d7d1" letter-spacing="1">AGENT SYSTEMS</text>
    
    <rect x="390" y="0" width="160" height="40" rx="4" fill="#141414" stroke="rgba(255,255,255,0.14)" stroke-width="1" />
    <text x="408" y="25" font-family="monospace" font-size="13" fill="#d8d7d1" letter-spacing="1">FULL-STACK</text>
    
    <rect x="570" y="0" width="160" height="40" rx="4" fill="#141414" stroke="rgba(255,255,255,0.14)" stroke-width="1" />
    <text x="588" y="25" font-family="monospace" font-size="13" fill="#d8d7d1" letter-spacing="1">AUTOMATION</text>
  </g>
  
  <text x="1080" y="555" text-anchor="end" font-family="monospace" font-size="14" fill="#777770" letter-spacing="2">2026 — NOW</text>
</svg>`;

sharp(Buffer.from(ogSvg))
  .png({ quality: 95 })
  .toFile(path.join(publicDir, 'og-image.png'))
  .then(() => console.log('Created public/og-image.png'))
  .catch(err => console.error(err));
