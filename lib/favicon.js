// lib/favicon.js
import fs from 'fs';
import path from 'path';

export function getFaviconIfExists() {
  const faviconPath = path.join(process.cwd(), 'public', 'favicon.png');
  if (fs.existsSync(faviconPath)) {
    return '/public/favicon.png';
  }
  return null;
}
