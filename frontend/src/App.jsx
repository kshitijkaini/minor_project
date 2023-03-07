import { useState } from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landingpage from './assets/myComponent/Landingpage'
import Loginp from './assets/myComponent/LoginPage'
import Register from './assets/myComponent/registrationForm'
import Mymaps from './assets/myComponent/Map'
import Active from './assets/myComponent/ActiveFutsal'
import Listof from './assets/myComponent/ListofFutsal'
import Test from './assets/myComponent/test'
import Error from './assets/myComponent/err_redirect'
import Apple from './assets/myComponent/menu'
import PasswordReset from './assets/myComponent/PasswordReset'
import ForgetPassword from './assets/myComponent/ForgetPassword'


//import './App.css'


















function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/landingpage' element={<Landingpage />} />
          <Route exact path='/' element={<Loginp />} />
          <Route exact path='/registrationForm' element={<Register />} />
          <Route exact path='/map' element={<Mymaps />} />
          <Route exact path='/Active' element={<Active />} />
          <Route exact path='/Listoffutsal' element={<Listof />} />
          <Route exact path='/test' element={<Test />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/forgetpassword/:id/:token" element={<ForgetPassword />} />
          <Route exact path='/menu' element={<Apple />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
