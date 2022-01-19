import React from 'react'
import './App.css';
import Header from './components/header'
// import { Register } from "./components/Register";
import { MainQuora } from "./components/MainQuora.jsx";



function App() {
  return (
    <div className="app">
      <Header />
      {/* <Register /> */}
      <MainQuora />
    </div>
  );
}

export default App;
