import React from "react";
import { useSelector } from "react-redux";

import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Blogs from './components/Blogs'
import { selectSignedIn } from "./Features/userSlice";
import './App.css';

function App() {
  const isSignedIn = useSelector(selectSignedIn);
  
  
  return (
    <div className="App">
    <Navbar />  
    <Homepage />
    {isSignedIn && <Blogs />}
    </div>
  );
}

export default App;
