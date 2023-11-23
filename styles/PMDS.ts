export const PMDS_Light = {
  colors: {
    main: "#CC99FF",
    main2: "#FFB1B1",
    point: "#B795D9",
    point2: "#FF6464",
    pointYellow: "#FFE24B",
    background: "#000000",
    background2: "#FFFFFC",
    text: "#ffffff",
    textGray: "#B0B0B0",
    textGrayLight: "#D4D4D4",
    textContrast: "#000000",
    disabled: "#D4D4D4",
    white: "#FFFFFF",
    black: "#555555",
  },
  fontSizes: {
    title: "2rem",
    large: "1.6rem",
    regular: "1.4rem",
    small: "1.2rem",
  },
  radii: {
    sm: "4px",
    md: "10px",
    lg: "16px",
    xl: "20px",
    full: "9999px",
  },
  transitions: {
    fast: "0.2s",
    medium: "0.4s",
    slow: "0.6s",
  },
};
// theme.ts

import { DefaultTheme } from "styled-components";
// import { ModeTheme, PMDSTheme } from "types/theme";

// export const darkTheme = {
//   colors: PMDS_Dark.colors,
//   space: PMDS_Dark.spaces,
//   sizes: PMDS_Dark.sizes,
//   fontSizes: PMDS_Dark.fontSizes,
//   lineHeights: PMDS_Dark.lineHeights,
//   fonts: {
//     body: PMDS_Dark.fonts.sans,
//     heading: PMDS_Dark.fonts.sans,
//     mono: PMDS_Dark.fonts.sans,
//   },
//   radii: PMDS_Light.radii,
//   transitions: PMDS_Light.transitions,
// };
export const lightTheme = {
  colors: PMDS_Light.colors,
  fontSizes: PMDS_Light.fontSizes,
  radii: PMDS_Light.radii,
  transitions: PMDS_Light.transitions,
};
