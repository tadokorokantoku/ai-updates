// Per-agent color theme. Adding a new agent = add a new entry here.
// Values are CSS color strings written into --color-accent-* on <body>,
// which Tailwind v4 utilities (bg-accent-*, text-accent-*, fill-accent-*, etc.)
// resolve at runtime via var(). To swap themes, pass `theme` to <Layout>.

export type ThemeKey = 'claude-code';

export interface Theme {
  name: string;
  // 50 (lightest) → 800 (darkest). Used for backgrounds, text, borders, fills.
  accent: {
    50: string;
    100: string;
    200: string;
    400: string;
    600: string;
    700: string;
    800: string;
  };
}

export const themes: Record<ThemeKey, Theme> = {
  'claude-code': {
    name: 'Claude Code',
    accent: {
      50: '#fdf6ef',
      100: '#fbe9d6',
      200: '#f6c89a',
      400: '#e8915a',
      600: '#d56b2c',
      700: '#b35422',
      800: '#8a4019',
    },
  },
};

export const DEFAULT_THEME: ThemeKey = 'claude-code';

export function themeStyle(key: ThemeKey): string {
  const t = themes[key].accent;
  return [
    `--color-accent-50:${t[50]}`,
    `--color-accent-100:${t[100]}`,
    `--color-accent-200:${t[200]}`,
    `--color-accent-400:${t[400]}`,
    `--color-accent-600:${t[600]}`,
    `--color-accent-700:${t[700]}`,
    `--color-accent-800:${t[800]}`,
  ].join(';');
}
