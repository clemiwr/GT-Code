import './style/App.css'
import Sidebar from  './components/Sidebar'
import Hohme from './components/sites/Hohme'
import ControllerTool from './components/sites/ControllerTool'
import DpiConverter from './components/sites/DpiConverter'
import {Routes, Route} from "react-router-dom"
import Logo from './components/Logo';

function App() {



  return (
    <>
      <div>
      <Sidebar />
      <Logo />
      <Routes>
        <Route path="/" element={<Hohme />} />
        <Route path="/DPI-Converter" element={<DpiConverter />} />
        <Route path="/Controller-Tool" element={<ControllerTool />} />
      </Routes>
      </div>
    </>
  )
}

export default App
