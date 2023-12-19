import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/animation3d/" element={<Home />} />
          <Route path="/animation3d/about" element={<About />} />
          <Route path="/animation3d/projects" element={<Projects />} />
          <Route path="/animation3d/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
