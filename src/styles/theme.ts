const palette = {
  primary: '#6fc1a8',
  secondary: '#e2f3ee',

  green: '#599a86',
  darkGreen: '#213a32',

  beige: '#957c83',
  darkBeige: '#736166',

  background: '#f3edef',
  white: '#ffffff',
  black: '#020202',

  gray: '#f2f4f4',
  lightGray: '#e5e5e5',
  midGray: '#565658',
  darkGray: '#637381',

  text: '#47474c',

  red: '#dc1442',
};

const screens = {
  sm: 425,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export type ThemeType = {
  colors: Record<string, string>;
  screens: Record<string, number>;
};

export const theme: ThemeType = {
  colors: palette,
  screens,
};
