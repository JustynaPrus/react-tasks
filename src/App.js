import { GlobalStyles } from "./GlobalStyles";
import { Container } from "./App.styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { TrainingOne } from "./pages/TrainingOne/TrainingOne";
import { TrainingTwo } from "./pages/TrainingTwo/TrainingTwo";

function App() {
  return (
    <>
      <Container>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/trainingOne" element={<TrainingOne />} />
            <Route path="/trainingOne/task_1_2_3" element={<TrainingOne />} />
            <Route path="/trainingOne/task_4" element={<TrainingOne />} />
            <Route path="/trainingOne/task_5" element={<TrainingOne />} />
            <Route path="/trainingTwo" element={<TrainingTwo />} />
            <Route path="/trainingTwo/task_1" element={<TrainingTwo />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
