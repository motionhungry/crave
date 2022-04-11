import { defaultTheme } from '@rn-design-system/themes';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { withTheme } from 'storybook-addon-ondevice-styled-theme';


export const decorators = [withBackgrounds, withTheme];
export const parameters = {
  backgrounds: [
    { name: 'default', value: defaultTheme.backgroundColor },
  ],
  themes: [
    { name: 'default', ...defaultTheme },
  ],
};
