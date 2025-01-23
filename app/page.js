"use client";
import { useState, useRef, useEffect} from 'react';
import React from 'react';
import Navbar from './(components)/Navbar';
import Header from './(components)/Header';
import Featured from './(components)/Featured';
import About from './(components)/About';
import Gallery from './(components)/Gallery';
import Footer from './(components)/Footer';
import useLocoScroll from './useLocoScroll';
import "locomotive-scroll/dist/locomotive-scroll.css";


function Home() {
  const [preloader, setPreloader]=useState(true);

  const[timer, setTimer]=useState(3);
  const id=useRef();
const clear= ()=> {
  window.clearInterval(id.current);
  setPreloader(false);
}

//when the component mounts
useEffect(()=> {
id.current = window.setInterval(()=> {
setTimer(timer => timer-1);
}, 1000)
}, []);

//when the timer changes
useEffect(()=> {
  if(timer===0) {
    clear();
  }
}, [timer]);

useLocoScroll(!preloader);

  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute" ref={id}>
          <h2>Flirty Flowers</h2>
          <h2>Rio de Janeiro</h2>
        </div>
      ) 
      : 
      (
        <div className="main-container" id="main-container" data-scroll-container>
      <Navbar></Navbar>
      <Header></Header>
      <Featured></Featured>
      <About></About>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
      )}
    </>
  )
}

export default Home
