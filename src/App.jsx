import React from "react";
import Header from "./components/header";
import "./App.css";
// import { Register } from "./components/Register";

import { Router } from "./Routes/Router";
function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Router />
    </div>
  );
}

export default App;
