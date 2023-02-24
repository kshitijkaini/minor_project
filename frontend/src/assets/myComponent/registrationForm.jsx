import { Helmet } from "react-helmet";
import style from './RegistrationForm.module.css';
import { useEffect, useState } from 'react';


function Register() { 
  const [form, setForm] = useState({});
 

 const handleForm = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value

    })
  }

  const handleSubmit = async (e) =>{
    // e.preventDefault();  yesla submit garda disappear hudaina
    const response = await fetch('http://localhost:8080/',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }   
    })
    const data = await response.JSON();
    console.log(data);
  }

  return (
    <>
    
      <Helmet>
        <style>
          {`
                 body {
                  background-image:linear-gradient(135deg, #ffffff 0%, #31b374 100%);
                  }
                `}
        </style>
      </Helmet>
      <div className={style.wrapper1}>
        <div className={style.container}>
          <div className={style.title}>
            <h3>Registration</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={style.detail}>
              <span className={style.sp}>Full name</span>
              <input
                type="text"
                onChange={handleForm}
                name="full_name"
                id={style.name}
                placeholder="Enter your name"
              
              />
            </div>
            <div className={style.detail}>
              <span className={style.sp}>Username</span>
              <input
                type="text"
                onChange={handleForm}
                name="username"
                placeholder="enter your username"
            
              />
            </div>
            <div className={style.detail}>
              <span className={style.sp}>Email</span>
              <input
                type="email"
                onChange={handleForm}
                name="email"
                placeholder="enter your email"
               
              />
            </div>
            <div className={style.detail}>
              <span className={style.sp}>Phone number</span>
              <input
                type="tel"
                onChange={handleForm}
                name="phone_number"
                placeholder="Enter your phone number"
               
              />
            </div>
            <div className={style.detail}>
              <span className={style.sp}>Password</span>
              <input
                type="text"
                onChange={handleForm}
                name="password"
                placeholder="Enter your password"
                
              />
            </div>
            <div className={style.detail}>
              <span className={style.sp}>confirm password</span>
              <input
                type="text"
                onChange={handleForm}
                name="confirm_password"
                placeholder="confirm your password"
               
              />
            </div>

            {/* <div>
              <pre id={style.gender}>Gender</pre>
              <input type="radio" value="male" name="gender" id={style.dot1} />
              <label htmlFor="dot1">male</label>
              <input type="radio" value="female" name="gender" id={style.dot2} />
              <label htmlFor="dot2">female</label>
              <input type="radio" value="other" name="gender" id={style.dot3} />
              <label htmlFor="dot3">other</label>
            </div> */}
            <div className={style.detail} id={style.x}>
              <input type="submit" id={style.register} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
