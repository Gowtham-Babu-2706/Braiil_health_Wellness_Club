import Home from "./pages/firstpage/Home";
import Contact from "./pages/Contact";
import Navbar from "./utils/Navbar";
import { Routes, Route } from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import CoursesPage from "./pages/CoursesPage";
import PartnershipPage from "./pages/PartnershipPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<GalleryPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/partnership" element={<PartnershipPage />} />
      </Routes>
    </div>
  );
}

export default App;