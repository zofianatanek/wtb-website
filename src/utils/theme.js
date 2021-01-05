const colors = {
  background: {
    primary: "#ffffff",
    dark: "#f0f2f5",
    gold: "#DCB354",
  },
  text: {
    title: "#ecad1b",
    primary: "rgba(0, 0, 0, 0.85)",
    secondary: "#ecad1b",
  },
}

const fonts = {
  thin: 300,
  regular: 500,
  bold: 600,
}

const breakpoints = {
  default: "0px",
  xxs: "300px",
  xs: "480px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1600px",
}

const device = {
  xxs: `(min-width: ${breakpoints.xxs})`,
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  xxl: `(min-width: ${breakpoints.xxl})`,
}

export const theme = {
  colors,
  fonts,
  device,
  breakpoints,
}
