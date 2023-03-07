import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import style from './LoginPage.module.css';
import { useState } from "react";



function Loginp() {

  const [passShow, setPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
});

const history = useNavigate();

const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
        return {
            ...inpval,
            [name]: value
        }
    })
};


const loginuser = async(e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
        alert("email is required!");
    } else if (!email.includes("@")) {
        alert("includes @ in your email!");
    } else if (password === "") {
        alert("password is required!");
    } else if (password.length < 4) {
      alert("password must be 4 char!");
    } else {
        // console.log("user login succesfully done");


        const data = await fetch('http://localhost:8080/login/',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"       
            },
            body:JSON.stringify({
                 email, password
            })
        });
  
        const res = await data.json();                             
        //console.log(res);
       
        if(res.status === 201){
            localStorage.setItem("usersdatatoken",res.result.token);
              history("/landingpage")
            setInpval({...inpval,email:"",password:""});
        }
    }
  }   

  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h3>Sign in</h3>
        </div>
        <form>
          <div className={style.detail}>
            <span className={style.sp}>Email</span>
            <input
              type="email"
              onChange={setVal}
              value={inpval.email}
              name="email"
              placeholder="enter your email"
              required
            />
          </div>
          <div className={style.detail}>
            <span className={style.sp}>Password</span>
            <input
              type={!passShow ? "password" : "text"}
              onChange={setVal}
              value={inpval.password}
              name="password"
              placeholder="Enter your password"
              required
            />
            <div className="showpass" onClick={() => setPassShow(!passShow)}> {!passShow ? "Show" : "Hide"} </div>
          </div>
          <div className={style.detail} id={style.x}>
            {/* <input type="submit" value="log in" id="register" /> */}
            <button onClick={loginuser}>Login</button>
          </div>
          <p>Don't have an Account? <NavLink to="/registrationForm">Sign Up</NavLink> </p>
          <p style={{color:"black"}}>Forgot Password  <NavLink to="/password-reset">Click Here</NavLink> </p>
        </form>
      </div>
    </>
  );
}


export default Loginp;







