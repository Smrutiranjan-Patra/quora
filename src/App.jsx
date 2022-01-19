import React from "react";
import Header from "./components/header";
import "./App.css";
import { Register } from "./components/Register";
import { MainQuora } from "./components/MainQuora";

function App() {
  return (
    <div className="app">
      <Header />
      <MainQuora />
    </div>
  );
}

export default App;
