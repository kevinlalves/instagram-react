import React from "react";
import "./App.css"
import Navbar from "./NavBar";
import Body from "./Body";

export function imagePath(name) {
  return `assets/images/${name}.png`;
}


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}
