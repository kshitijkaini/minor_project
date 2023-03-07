
import user from './img/user.png';
import edit from './img/edit.png';
import inbox from './img/envelope.png';
import settings from './img/settings.png';
import help from './img/question.png';
import logout from './img/log-out.png';
import './test.css';

import React, { useContext, useState, useEffect, useRef } from 'react';
//..................................................................
import { LoginContext } from './ContextProvider/Context';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';








function Test() {//...............................................................................

  const { logindata, setLoginData } = useContext(LoginContext);
  //..................
  try {
    var fun = logindata.ValidUserOne.email
    var fun1 = logindata.ValidUserOne.full_name
    var fun2 = logindata.ValidUserOne.phone_number
    console.log(fun1) //donot use const here
  }
  catch (err) {
    console.log(err)  ///console.log garda ayana output but paxi error handling garda ayo
  }
  //.......................................
  //console.log(logindata.ValidUserOne.email)
  //console.log(logindata.ValidUserOne.email)
  //const [data, setData] = useState(false);

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        //console.log(menuRef.current.contains(e.target));
      }
    };

    document.addEventListener("mousedown", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
    }



  });

  return (//..................................................................................................................................................
    <div className="aaa">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
          <img src={user}></img>
        </div>

        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
          <h3 className='h3'>{fun1}<br /><span className='span'>Website Designer</span></h3>
          <ul className='ul'>
            <li className='dropdownItem'>
              <img src={user}></img>
              <a className='a'> {fun} </a>
            </li>
            <li className='dropdownItem'>
              <img src={edit}></img>
              <a className='a'> {fun2} </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a className='a'> {props.text} </a>
    </li>
  );
}

export default Test;