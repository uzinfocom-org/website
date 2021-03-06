import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const dPrimary = "#d77531";
const lPrimary = "#d77531";

// A custom theme for this app
const themeConfig = type => {
  const isDark = type === "dark";
  return createMuiTheme({
    palette: {
      type,
      primary: {
        main: isDark ? dPrimary : lPrimary
        // main: "#00e676", // green
      },
      secondary: {
        main: "#ff0"
      },
      background: {
        default: isDark ? "#000" : "#fff"
      }
    },
    typography: {
      fontFamily: [
        "Roboto Mono",
        "monospace",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif"
      ].join(",")
    }
  });
};

export default themeConfig;
