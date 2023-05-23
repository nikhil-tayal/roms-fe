import React from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { COLORS, FONT_WEIGHTS } from './constants';
import { alpha } from '@mui/material';

declare module '@mui/material/Divider' {
  interface DividerPropsVariantOverrides {
    Primary: true;
    Secondary: true;
    Tertiary: true;
  }
}

const theme = createTheme({
  spacing: 8,
  typography: {
    allVariants: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
    h1: {
      fontSize: 48,
      color: COLORS.BLACK,
    },
    h2: {
      fontSize: 36,
      color: COLORS.BLACK,
    },
    h3: {
      fontSize: 26,
      color: COLORS.BLACK,
    },
    h4: {
      fontSize: 18,
      color: COLORS.BLACK,
    },
    subtitle1: {
      fontSize: 16,
      color: COLORS.BLACK,
    },
    body1: {
      fontSize: 14,
      color: COLORS.BLACK,
    },
    fontWeightLight: FONT_WEIGHTS.LIGHT,
    fontWeightRegular: FONT_WEIGHTS.REGULAR,
    fontWeightBold: FONT_WEIGHTS.BOLD,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
          color: COLORS.WHITE,
          background: COLORS.PRIMARY,
          borderRadius: '4px',
          fontWeight: 'bold',
          padding: '10px 0',
          textTransform: 'initial',
          '&:disabled': {
            background: COLORS.GRAY,
            color: COLORS.WHITE,
          },
          ':hover': {
            borderColor: COLORS.PRIMARY,
            backgroundColor: COLORS.PRIMARY,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(COLORS.PRIMARY, 0.1),
          '.MuiOutlinedInput-input': {
            '&::placeholder': {
              color: COLORS.GRAY,
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
  palette: {
    primary: { main: COLORS.PRIMARY },
    secondary: { main: COLORS.SECONDARY },
    offWhite: COLORS.OFF_WHITE,
    orange: COLORS.ORANGE,
    darkPeach: COLORS.DARK_PEACH,
    white: COLORS.WHITE,
    black: COLORS.BLACK,
    gray: COLORS.GRAY,
    darkGray: COLORS.DARK_GRAY,
    lightGray: COLORS.LIGHT_GRAY,
    transparent: COLORS.TRANSPARENT,
    red: COLORS.RED,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1200,
    },
  },
});

declare module '@mui/material/styles' {
  /**
   * This declaration is used to extend the theme for any customize color
   */
  export interface Palette {
    offWhite: string;
    orange: string;
    darkPeach: string;
    white: string;
    black: string;
    gray: string;
    darkGray: string;
    lightGray: string;
    transparent: string;
    red: string;
  }

  export interface PaletteOptions {
    offWhite: string;
    orange: string;
    darkPeach: string;
    white: string;
    black: string;
    gray: string;
    darkGray: string;
    lightGray: string;
    transparent: string;
    red: string;
  }
}

export const ThemeProvider = ({ children }: { children?: React.ReactNode }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export * from './constants';
