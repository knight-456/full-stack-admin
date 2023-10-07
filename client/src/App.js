import { useMemo } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { themeSettings } from "theme";
import InitRouter from "routers/InitRouter";

import { useAppState } from "hooks/useStore";
import LayoutRouter from "routers/LayoutRouter";

function App() {

  const { appThemeMode } = useAppState((state) => state.appTheme);

  const theme = useMemo(() => createTheme(themeSettings(appThemeMode?.mode)), [appThemeMode?.mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<LayoutRouter />}>
          <Route path={"/*"} element={<InitRouter />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
