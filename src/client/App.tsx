import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Root } from "../pages";
import { SWRConfig } from "swr";
import swrConfig from "../utils/swrConfig";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global-styles";
import theme from "../utils/theme";

const App = () => {
  return (
    <SWRConfig
      value={{
        ...swrConfig,
        revalidateOnFocus: false,
        errorRetryCount: 0,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </SWRConfig>
  );
};

export default App;
