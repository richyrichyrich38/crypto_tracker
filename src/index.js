import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Show />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);
