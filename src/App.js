import Filters from "./components/Filters";
import Jobs from "./components/Jobs";

//redux
import { Provider } from 'react-redux'
import store from "./redux/store";

import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";



function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div style={{ display:"flex", alignItems:"center", justifyContent : "center", flexDirection:"column"}}>
          <Filters />
          <Jobs />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
