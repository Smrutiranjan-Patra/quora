import React from "react";
import Header from "./components/header";
import "./App.css";
import { Register } from "./components/Register";
import { MainQuora } from "./components/MainQuora";
import { Router } from "./Routes/Router";
function App() {
  return (
    <div className="app">
      {/* <Header />
      <MainQuora /> */}
      <Router />
    </div>
  );
}

export default App;
