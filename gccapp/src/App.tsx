import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import Journey from "./pages/journey";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
    </Router>
  );
}

export default App;
