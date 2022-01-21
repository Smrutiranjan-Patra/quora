import React from "react";
import Header from "./components/header";
import "./App.css";
// import {Profile} from './Pages/Profile'
import { Router } from "./Routes/Router";

// import { Register } from "./components/Register";

function App() {
  return (
    <div className="app">


      {/* <Header />
       */}
      <Router />
      

    </div>

  );
}

export default App;
