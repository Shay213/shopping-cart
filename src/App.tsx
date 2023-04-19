import { Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App
