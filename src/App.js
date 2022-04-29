import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <p>Hi!</p>
      <Router>
        <Routes>
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
