import React from 'react';
import Home from './Components/Home'
import About from './Components/About'
import Gallery from './Components/Gallery';
import Contact from './Components/Contact'
import Layout from './Components/Layout'
import Error from './Components/Error'
import Exam from './Components/Exam'
import Jee from './Components/ChildComponent/Jee'
import Neet from './Components/ChildComponent/Neet'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    // <>
    //   <Home />
    //   <About />
    //   <Gallery />
    //   <Contact />
    // </>



    /**
     * ! Basic router works on baseUrl and path system
     * !BaseUrl= http://localhost:3000 or http://127.0.0.1:3000
     * !path =  '/' => home or index page 
     * !path =  '/about' =>Specific to About page or Component.
     * ! Wildcard Character or Select all  = '*'
     * */



    //@ Basic Router SetUp 
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Layout />} />
    //     <Route path='/home' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/gallery' element={<Gallery />} />
    //     <Route path='/contact' element={<Contact />} />
    //     <Route path='*' element={<Error />} />
    //   </Routes>
    // </BrowserRouter>


    //@ Outlet enable Router
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Layout />}>
    //       <Route index element={<Contact />} />
    //       <Route path='/home' element={<Home />} />
    //       <Route path='/about' element={<About />} />
    //       <Route path='/gallery' element={<Gallery />} />
    //       <Route path='/contact' element={<Contact />} />
    //       <Route path='/exam' element={<Exam />} />
    //       <Route path='*' element={<Error />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    //@ Outlet and submenu enable Router
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Contact />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/exam' element={<Exam />}>
            <Route index element={<Jee />} />
            <Route path='jee' element={<Jee />} />
            <Route path='neet' element={<Neet />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
