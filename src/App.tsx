import { Routes, Route } from 'react-router-dom'
import './App.css'
import BpmnComponent from './components/diagram_editor/Bpmn'
import SignIn from './pages/LoginMUI'
import Footer from './components/footer/Footer'
import NavBar from './components/nav-bar/nav-bar-bloc'
import TaskApp from './components/blocks/TaskApp'
import Blocks from './components/blocks/Blocks'
import Modeler from './components/blocks/Modeler'
import Admin from './components/blocks/Admin'
import Idm from './components/blocks/Idm'
import Test from './components/blocks/Test'
import BnaRetail from './components/blocks/BnaRetail'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<BpmnComponent />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/blocks" element={<Blocks />} />
        <Route path="/blocks/tasks" element={<TaskApp />} />
        <Route path="/blocks/modeler" element={<Modeler />} />
        <Route path="/blocks/admin" element={<Admin />} />
        <Route path="/blocks/idm" element={<Idm />} />
        <Route path="/blocks/test" element={<Test />} />
        <Route path="/blocks/bna-retail" element={<BnaRetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
