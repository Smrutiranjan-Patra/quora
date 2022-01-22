import React from "react";
import Header from "./components/header";
import { Register } from "./components/Register";
import { Notification } from "./components/Notification";

import { Router } from "./Routes/Router";

function App() {
  return (
    <div className="app">
      {/* <Header /> */}

      <Router />
      {/* <Notification /> */}
    </div>
  );
}

export default App;
