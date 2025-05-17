import React from "react";
import ReactDOM from "react-dom/client";
import MovieStreamingApp from "./App"; // karena nama komponen kamu "MovieStreamingApp"
import "./index.css"; // atau bisa dihapus kalau tidak pakai styling

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MovieStreamingApp />
  </React.StrictMode>
);
