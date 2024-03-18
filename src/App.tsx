import { Routes, Route } from 'react-router-dom'
import './App.css'
import BpmnComponent from './components/diagram_editor/Bpmn'
import SignIn from './pages/LoginMUI'
import Footer from './components/footer/Footer'
import Blocks from './components/blocks/Blocks'
import Modeler from './pages/Modeler'
import Admin from './components/blocks/Admin'
import Idm from './components/blocks/Idm'
import Test from './components/blocks/Test'
import BnaRetail from './components/blocks/BnaRetail'
import Processes from './pages/Processes'
import Bp from './components/diagram_editor/Bp'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/blocks" element={<Blocks />} />
        <Route path="/blocks/modeler" element={<Modeler />}>
          <Route index element={<Processes />} />
          <Route path="processes" element={<Processes />} />
          <Route path="processes/:id" element={<Bp />} />
        </Route>
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
