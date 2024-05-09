import JobCard from "./components/JobCard";

import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div style={{ display:"flex", alignItems:"center", justifyContent : "center", height : '100vh'}}>
      <JobCard/>
    </div>
    </ThemeProvider>
  );
}

export default App;
