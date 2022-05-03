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
import { TaskNavigation } from "./components/TrainingThree/Task/TaskNavigation/TaskNavigation";
import { Orders } from "./components/TrainingThree/Task/Orders/Orders";
import { Clients } from "./components/TrainingThree/Task/Clients/Clients";

function App() {
  return (
    <>
      <Container>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/react-tasks/" element={<Home />} exact />
            <Route path="/react-tasks/trainingOne" element={<TrainingOne />} />
            <Route
              path="/react-tasks/trainingOne/task_card"
              element={<TaskCard />}
            />
            <Route
              path="/react-tasks/trainingOne/task_4"
              element={<TrainingOne />}
            />
            <Route
              path="/react-tasks/trainingOne/task_5"
              element={<TrainingOne />}
            />
            <Route path="/react-tasks/trainingTwo" element={<TrainingTwo />} />
            <Route
              path="/react-tasks/trainingTwo/event_handling"
              element={<EventHandling />}
            />
            <Route
              path="/react-tasks/trainingTwo/component_table"
              element={<ParentComponent />}
            />
            <Route
              path="/react-tasks/trainingThree"
              element={<TrainingThree />}
            />
            <Route
              path="/react-tasks/trainingThree/task"
              element={<TaskNavigation />}
            />
            <Route
              path="/react-tasks/trainingThree/task/orders"
              element={<Orders />}
            />
            <Route
              path="/react-tasks/trainingThree/task/clients"
              element={<Clients />}
            />
            <Route path="/react-tasks/formik" element={<ExampleFormik />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
