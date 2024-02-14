import React from 'react'
import Home from "../Home/Home";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Profile from "../Profile/Profile";
import Social from "../Social/Social";
import Work from "../Work/Work";
import Footer from "../Footer/Footer";

function Header() {
  return (
    <>
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <Social />
      
    </>
  )
}

export default Header
