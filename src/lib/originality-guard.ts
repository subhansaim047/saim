import fs from 'fs';
import path from 'path';

let decisionsCache: Map<string, string> | null = null;

export function getRouteOriginalityStatus(route: string): string | null {
  if (!decisionsCache) {
    decisionsCache = new Map();
    try {
      const csvPath = path.join(process.cwd(), 'review', 'originality-decisions.csv');
      if (fs.existsSync(csvPath)) {
        const content = fs.readFileSync(csvPath, 'utf8');
        const lines = content.split(/\r?\n/).filter(Boolean);
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i];
          const match = line.match(/^"([^"]+)",(?:[^,]+),"?([^",]+)"?/);
          if (match) {
            decisionsCache.set(match[1], match[2]?.trim() || '');
          }
        }
      }
    } catch (e) {
      // In production/edge, fallback gracefully
    }
  }
  return decisionsCache.get(route) || null;
}

export function isRouteNeedsReplacement(route: string): boolean {
  return getRouteOriginalityStatus(route) === 'needs_replacement';
}
