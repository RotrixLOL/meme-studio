import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Footer, Home, Navbar, NewMeme } from "./components";

function App() {
  return (
    <div className="flex flex-col dark:bg-[#27374c] dark:text-white">
      <Navbar />
      <div className="flex flex-col flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewMeme />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
