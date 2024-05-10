import Filters from "./components/Filters";
import Jobs from "./components/Jobs";

import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div style={{ display:"flex", alignItems:"center", justifyContent : "center", flexDirection:"column"}}>
      <Filters />
      <Jobs />
    </div>
    </ThemeProvider>
  );
}

export default App;
