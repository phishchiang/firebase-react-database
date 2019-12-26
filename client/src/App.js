import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase";
import TimeList from "./components/TimeList";
import AddTimeForm from "./components/AddTimeForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>test</h1>
        <TimeList />
        <AddTimeForm />
      </header>
    </div>
  );
}

export default App;
