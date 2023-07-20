const palette = {
  primary: '#064061',
  secondary: '#4EB7F2',
  white: '#ffffff',
  black: '#020202',
  yellow: '#f1d95e',

  todo: '#dd6279',
  inProgress: '#a54070',
  done: '#2f2191',
  notes: '#130f3d',
};

const screens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export type ThemeType = {
  colors: Record<string, string>;
  screens: Record<string, string>;
};

export const theme: ThemeType = {
  colors: palette,
  screens,
};
