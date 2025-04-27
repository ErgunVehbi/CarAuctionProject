import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from './pages/About.jsx';
import Contact from "./pages/Contact.jsx";


export default function App() {
  return (
    <Router>
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About /> } />
        <Route path="/contact" element={<Contact /> } />
      </Routes>
    </>


    
    </Router>

  );
}
