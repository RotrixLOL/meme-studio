import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Flowbite } from "flowbite-react";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Flowbite>
        <App />
      </Flowbite>
    </Router>
  </React.StrictMode>
);
