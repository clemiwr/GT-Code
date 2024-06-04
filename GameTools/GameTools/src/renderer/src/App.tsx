/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './style/App.css'
import Sidebar from './components/Sidebar'
import Hohme from './components/sites/Hohme'
import ControllerTool from './components/sites/ControllerTool'
import DpiConverter from './components/sites/DpiConverter'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Logo from './components/Logo'
import { useState, useEffect } from 'react'
import Login from './components/sites/Login'
import { checkAuth } from './firebase'
import './style/index.css'
function App() {
  const [isSignedIn, setisSignedIn] = useState(false)
  useEffect(() => {
    checkAuth().then((isAuthenticated) => {
      setisSignedIn(isAuthenticated)
    })
  }, [])

  return (
    <>
      <Router>
        {isSignedIn ? (
          <div className="content-wrapper">
            <Sidebar />
            <Logo />
            <div id="main-content">
              <Routes>
                <Route path="/" element={<Hohme />} />
                <Route path="/DPI-Converter" element={<DpiConverter />} />
                <Route path="/Controller-Tool" element={<ControllerTool />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Login isSignedIn={setisSignedIn} />
        )}
      </Router>
    </>
  )
}

export default App
