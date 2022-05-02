import { GlobalStyles } from "./constant/GlobalStyles";
import { Container } from "./App.styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { TrainingOne } from "./pages/TrainingOne/TrainingOne";
import { TrainingTwo } from "./pages/TrainingTwo/TrainingTwo";
import { TrainingThree } from "./pages/TrainingThree/TrainingThree";
import { TaskCard } from "./components/TainingOne/TaskCard/TaskCard/TaskCard";
import { ExampleFormik } from "./components/ExampleFormik";
import { EventHandling } from "./components/TrainingTwo/EventHandling/EventHandling";
import { ParentComponent } from "./components/TrainingTwo/ComponentTable/ParentComponent";
import { Task } from "./components/TrainingThree/Task/Task";

function App() {
  return (
    <>
      <Container>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/trainingOne" element={<TrainingOne />} />
            <Route path="/trainingOne/task_card" element={<TaskCard />} />
            <Route path="/trainingOne/task_4" element={<TrainingOne />} />
            <Route path="/trainingOne/task_5" element={<TrainingOne />} />
            <Route path="/trainingTwo" element={<TrainingTwo />} />
            <Route
              path="/trainingTwo/event_handling"
              element={<EventHandling />}
            />
            <Route
              path="/trainingTwo/component_table"
              element={<ParentComponent />}
            />
            <Route path="/trainingThree" element={<TrainingThree />} />
            <Route path="/trainingThree/task" element={<Task />} />
            <Route path="/formik" element={<ExampleFormik />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
