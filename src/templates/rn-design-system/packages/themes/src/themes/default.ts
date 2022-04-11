import { Color, Theme } from '../types';
import { baseTheme } from './base';

const colors: Record<string, Color> = {
  turquoiseSurf: {
    100: '#00c1cf',
    75: '#00c1cf',
    50: '#00c1cf',
    25: '#00c1cf',
  },
  white: {
    100: '#fff',
    75: '#fff',
    50: '#fff',
    25: '#fff',
  }
};

colors.primary = colors.turquoiseSurf;
colors.secondary = colors.turquoiseSurf;

export { colors };

export const defaultTheme: Theme = {
  ...baseTheme,
  backgroundColor: colors.white[100],
  colors,
  components: {
    Button: {
      primary: {
        backgroundColor: colors.primary,
      },
      secondary: {
        backgroundColor: colors.secondary,
      }
    },
  },
};
