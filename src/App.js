import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar"
import { Shop } from "./pages/shop/shop"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" />
        </Routes>
      </Router>
    </div>
  )
}

export default App
