export const BASE_TITLE = 'CTK - Croydon Tamizh Kazhagam';

export const DEFAULT_KEYWORDS = [
  'Croydon Tamil School',
  'Tamil School UK',
  'Tamil Students in UK',
  'Tamil Teachers',
  'Tamil Events',
  'Croydon Tamil Sangam',
  'Croydon Tamil 10 years',
  'Tamil Sangam UK',
  'CTK',
  'Croydon Tamizh Kazhagam',
  'Croydon Tamil',
];

export function keywordsContent(extra?: string[]) {
  const list = extra ? [...DEFAULT_KEYWORDS, ...extra] : DEFAULT_KEYWORDS;
  // Deduplicate and join
  return Array.from(new Set(list)).join(', ');
}
