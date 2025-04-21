// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPage from "../src/components/BlogPage"; // dynamic BlogPage using useParams
import Hero from "./Hero";
import Projects from "./Projects"; // Import the Projects component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* Add Projects route */}
        <Route path="/projects" element={<Projects />} />
        {/* One dynamic blog route to rule them all */}
        <Route path="/blog/:projectId" element={<BlogPage />} />
        {/* Add a catch-all route to prevent 404s in Vercel */}
        <Route path="*" element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App;