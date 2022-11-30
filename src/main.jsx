import "./global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AppScreen from "./screens/AppScreen/AppScreen.jsx";
import Topbar from "./components/Topbar/Topbar";
import BottomBar from "./components/BottomBar/BottomBar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Topbar />
    <AppScreen />
    <BottomBar />
  </React.StrictMode>
);
