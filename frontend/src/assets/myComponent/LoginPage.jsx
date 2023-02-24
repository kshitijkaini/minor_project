import React from "react"
import { Link } from "react-router-dom";
import style from './LoginPage.module.css';

function Loginp() {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h3>Sign in</h3>
        </div>
        <form action="index.js">
          <div className={style.detail}>
            <span className={style.sp}>Email</span>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              required
            />
          </div>
          <div className={style.detail}>
            <span className={style.sp}>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className={style.detail} id={style.x}>
            <input type="submit" value="log in" id="register" />
          </div>
        </form>
      </div>
    </>
  );
}


export default Loginp;







