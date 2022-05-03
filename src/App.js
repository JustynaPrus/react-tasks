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
            <Route path="/trainingThree/task" element={<TaskNavigation />} />
            <Route path="/trainingThree/task/orders" element={<Orders />} />
            <Route path="/trainingThree/task/clients" element={<Clients />} />
            <Route path="/formik" element={<ExampleFormik />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
