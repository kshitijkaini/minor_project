import { useState } from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landingpage from './assets/myComponent/Landingpage'
import Loginp from './assets/myComponent/LoginPage'
import Register from './assets/myComponent/registrationForm'
import Mymaps from './assets/myComponent/Map'
import Active from './assets/myComponent/ActiveFutsal'
import Listof from './assets/myComponent/ListofFutsal'
// import Modal from './assets/myComponent/test'
//import './App.css'

  
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Landingpage />} />
          <Route exact path='/LoginPage' element={<Loginp />} />
          <Route exact path='/registrationForm' element={<Register />} />
          <Route exact path='/map' element={<Mymaps />} />
          <Route exact path='/Active' element={<Active/>}/>
          <Route exact path='/Listoffutsal' element={<Listof/>}/>
          {/* <Route exact path='/test' element={<Modal/>}/> */}
        </Routes>
      </BrowserRouter>
    </>  

  );
}                  

export default App;
