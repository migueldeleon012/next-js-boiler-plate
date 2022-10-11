import { ThemeOptions } from '@mui/material';
import React from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      neutral: {
        main: string;
      };
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}
