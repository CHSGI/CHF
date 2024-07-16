import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Screens/Home"
import NavBar from "./Components/NavBar"


function App() {

  return (
    <>

      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
