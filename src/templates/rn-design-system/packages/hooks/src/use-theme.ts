import { useTheme as useStyledTheme } from 'styled-components';

import { defaultTheme, Theme } from '@rn-design-system/themes';

export const useTheme = (): Theme => (useStyledTheme() as Theme) ?? defaultTheme;
