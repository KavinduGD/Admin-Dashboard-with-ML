import {
  Palette,
  PaletteColor,
} from "@mui/material/styles/createPalette"; /* eslint-disable no-console */

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}
