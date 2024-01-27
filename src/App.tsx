import { Routes, Route } from "react-router-dom";

import "./App.css";
import BpmnComponent from "./components/diagram_editor/Bpmn";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BpmnComponent />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
