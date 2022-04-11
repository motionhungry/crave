export type BaseTheme = {
  space: number[];
};

export type Color = { 100: string; 75: string; 50: string; 25: string };

export type ButtonVariants = 'primary' | 'secondary';

export type ButtonVariantTheme = {
  backgroundColor: Color;
};

export type ButtonTheme = {
  primary: ButtonVariantTheme;
  secondary: ButtonVariantTheme;
};

export interface Theme extends BaseTheme {
  backgroundColor: string;
  colors: Record<string, Color>;
  components: {
    Button: ButtonTheme;
  };
}
