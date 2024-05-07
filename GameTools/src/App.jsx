import './style/App.css'
import Sidebar from './components/Sidebar'
import Hohme from './components/sites/Hohme'
import ControllerTool from './components/sites/ControllerTool'
import DpiConverter from './components/sites/DpiConverter'
import { Routes, Route } from "react-router-dom"
import Logo from './components/Logo';
import { useState, useEffect } from 'react';
import Login from './components/sites/Login';
import { checkAuth } from './firebase'
function App() {

  const [isSignedIn, setisSignedIn] = useState(false);
  useEffect(() => {
    checkAuth().then((isAuthenticated) => {
      setisSignedIn(isAuthenticated);
    });
  }, []);


  return (
    <>
      {isSignedIn ? (
        <div>
          <Sidebar />
          <Logo />
          <Routes>
            <Route path="/" element={<Hohme />} />
            <Route path="/DPI-Converter" element={<DpiConverter />} />
            <Route path="/Controller-Tool" element={<ControllerTool />} />
          </Routes>
        </div>
      ) : (
        <Login isSignedIn={setisSignedIn} />
      )}
    </>
  )
}

export default App
