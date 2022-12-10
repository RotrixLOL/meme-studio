import { Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import { About, Discover, Edit, Home, NewMeme } from "./pages";
import "./tailwind.css";

function App() {
  return (
    <div className="flex flex-col dark:bg-[#27374c] dark:text-white font-apple">
      <Navbar />
      <div className="flex flex-col flex-1 md:mt-[10vh] mt-[12vh] mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/templates" element={<NewMeme />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
