import React from "react";
import { BrowserRouter } from "react-router-dom";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Layouts from "./layouts/layouts";

function App() {
  return (
    <>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <Layouts />
        </StyledEngineProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
