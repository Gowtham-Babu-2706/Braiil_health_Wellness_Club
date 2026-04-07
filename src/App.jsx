import Home from "./pages/firstpage/Home"
import Contact from "./pages/Contact"
import Navbar from "./utils/Navbar";
import {Routes,Route } from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/collection" element={<GalleryPage/>} />
      </Routes>
    </div>
  );
}

export default App;