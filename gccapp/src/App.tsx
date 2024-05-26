import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import Journey from "./pages/journey";

import MyPage from "./pages/mypage";
import Cloud from "./pages/cloud";
import Community from "./pages/community";
import Badges from "./pages/badges";
import About from "./pages/about";
import AboutGCC from "./pages/about/aboutGCC";
import AboutGCCResit from "./pages/about/aboutGCC-resit";
import AboutWorkshop from "./pages/about/about-workshop";
import AboutGlobalCase from "./pages/about/about-global-case";

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
        <Route path="/about" element={<About />} />
        <Route path="/aboutGCC" element={<AboutGCC />} />
        <Route path="/aboutGCCResit" element={<AboutGCCResit />} />
        <Route path="/aboutWorkshop" element={<AboutWorkshop />} />
        <Route path="/aboutGlobalCase" element={<AboutGlobalCase />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
