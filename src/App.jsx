import { useState,useEffect } from 'react'
import './App.css'
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  
  return (
 <div className='w-full bg-gray-50 overflow-hidden'>
  <div className="px-3 bg-gray-50 lg:px-20 flex justify-center items-center">
    <div className='xl:max-w-[128px] w-full'>
      <NavBar />
    </div>
  </div>

  <div className="px-4 lg:px-20 flex justify-center items-start">
    <div className='xl:max-w-[128px] w-full'>
      <Main />
    </div>
  </div>
 </div>
  )
}

export default App
