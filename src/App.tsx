// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPage from "../src/components/BlogPage"; // dynamic BlogPage using useParams
import Hero from "./Hero";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* One dynamic blog route to rule them all */}
        <Route path="/blog/:projectId" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
