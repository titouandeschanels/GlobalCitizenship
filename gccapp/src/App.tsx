import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import Journey from "./pages/journey";
import MyPage from "./pages/mypage";
import Cloud from "./pages/cloud";
import Community from "./pages/community";
import Badges from "./pages/badges";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/community" element={<Community />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
