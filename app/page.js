import React from 'react';
import Navbar from './(components)/Navbar';
import Header from './(components)/Header';
import Featured from './(components)/Featured';
import About from './(components)/About';
import Gallery from './(components)/Gallery';
import Footer from './(components)/Footer';

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Featured></Featured>
      <About></About>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  )
}

export default Home
