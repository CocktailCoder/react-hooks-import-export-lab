import React from "react";
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"

function App() {
  return (
    <div>
      <NavBar />
      <Home 
      username = "Liza"
      city = "New York"
      />
      <About 
      image = "../../images/demo.png"/>
    </div>
  );
}

export default App;
