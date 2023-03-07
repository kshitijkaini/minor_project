import user from './img/user.png';
import edit from './img/edit.png';
import inbox from './img/envelope.png';
import settings from './img/settings.png';
import help from './img/question.png';
import logout from './img/log-out.png';
import './test.css';
import { LoginContext } from './ContextProvider/Context';
import React, { useContext, useState, useEffect, useRef } from 'react';












export default function Apple() {
  const { logindata, setLoginData } = useContext(LoginContext);
  //..................
  try {
    var fun = logindata.ValidUserOne.email
  }
  catch (err) {
    console.log(err)
  }
//.......................


var [color, setColor] = useState(0);
const [isActive, setIsActive] = useState(false);//
console.log(isActive ? 'dropdownMenu.active':'dropdownMenu.inactive')

//let dropdownMenu = "dropdownMenu"+" "+"active"
var Coun =  () => {
  setIsActive(!isActive)
  console.log(isActive ? 'dropdownMenu.active':'dropdownMenu.inactive')
  //setColor(color ^= 1);
  // if(isActive==false){
  //   let dropdownMenu = "dropdownMenu"+" "+"active"
  //   dropdownMenu =dropdownMenu;
  //   console.log(dropdownMenu);
  // }
  // else{
  //   let dropdownMenu = "dropdownMenu"+" "+"active"
  //   dropdownMenu = dropdownMenu.substring(0,13)+"inactive";
  //   console.log(dropdownMenu);
  // }
  
}
//dropdownMenu = dropdownMenu.substring(0,13)+"inactive"
//dropdownMenu = dropdownMenu.join(" ");
//console.log(dropdownMenu);
// i=0
// if (i == 0) {
//   i = 1;
// } else {
//   i = 0;
// }
// i ^= 1;
//.............
  const logoutuser = async () => {
    console.log("fuck you")

    try { var token = localStorage.getItem("usersdatatoken"); }
    catch (err) {
      console.log(err)
    }
    console.log(token);
    const res = await fetch("http://localhost:8080/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
        Accept: "application/json"

      }
      //credentials: "include"

    });

    const data = await res.json();
    console.log(data);

    if (data.status == 201) {
      console.log("use logout");
      localStorage.removeItem("usersdatatoken");
      setLoginData(false)
      history("/");
    } else {
      console.log("error");
    }
  }

//..................
  const log = async () => {
    
  }

  return (
    <div className="aaa">
      <div className='menu-container' >
        <div className='menu-trigger' >
          <img onClick={() => { Coun()}} src={user}></img>
        </div>

        {/* <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} > */}
        {/* <div className='dropdown-menu inactive' > */}
        <div className={isActive ? 'dropdownMenu.active':'dropdownMenu.inactive'} >
          <h3 className='h3'>Kshitij kaini<br /><span className='span'>Website Designer</span></h3>
          <ul className='ul'>
            <li className='dropdownItem'>
              <img src={user}></img>
              <a className='a'> {fun} </a>
            </li>
            <li className='dropdownItem'>
              <img src={logout}></img>
              <a className='a' onClick={() => { logoutuser() }}> {"logout"} </a>
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
}



