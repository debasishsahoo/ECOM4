import React from 'react';
import Topbar from './topbar';
import Logo from './logo';
import Titlebar from './titlebar';
const header = () => {
  return (
    <header>
     {/* Sub Navigation */}
   <Topbar/>
 {/* /Sub Navigation */}

    
    {/* <!-- logo and ad break --> */}
   <Logo/>
    {/* <!-- / logo and ad break --> */}

    <br></br>

   <Titlebar/>

  </header>
  )
}

export default header
