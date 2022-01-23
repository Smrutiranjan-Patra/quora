import React from "react";
import Header from "./components/header";
import { Register } from "./components/Register";
import { Notification } from "./components/Notification";

import { Router } from "./Routes/Router";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="app">
      <Header/> 
      <Router />
      {/* <Profile /> */}
    </div>
  );
}

export default App;
