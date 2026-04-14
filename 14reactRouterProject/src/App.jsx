import { useState } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/about";
import Contact from "./components/Contect/contect";
import User from "./components/User/user.jsx";
import { Github } from "./components/Github/Github.jsx";
function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contect" element={<Contact/>} />
        <Route path="/user/:id" element={<User/>} />      
        <Route 
        // loader={githubInfoLoader}
        path="/github" 
        element={<Github/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
