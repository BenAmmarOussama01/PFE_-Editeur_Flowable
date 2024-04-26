import { Routes, Route } from 'react-router-dom'
import './App.css'
import SignIn from './pages/LoginMUI'
import Footer from './components/footer/Footer'
import Blocks from './components/blocks/Blocks'
import Modeler from './pages/Modeler'
import Admin from './components/blocks/Admin'
import Idm from './components/blocks/Idm'
import Test from './components/blocks/Test'
import BnaRetail from './components/blocks/BnaRetail'
import Processes from './modules/Processes/Processes'
import Bp from './components/diagram_editor/Bp'
import Login from './modules/Login/Login'
import Form from './components/form_builder/Form'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/signin" element={<Login />} />
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
        <Route path="/blocks/modeler/form" element={<Form />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
