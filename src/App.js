import JobCard from "./components/JobCard";
import Jobs from "./components/Jobs";

import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div style={{ display:"flex", alignItems:"center", justifyContent : "center"}}>
      <Jobs />
    </div>
    </ThemeProvider>
  );
}

export default App;
