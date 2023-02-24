import { Helmet } from "react-helmet";
import style from './RegistrationForm.module.css';

function Register() {
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
          <form action="index.js">
            <div className={style.detail}>
              <span className={style.sp}>Full name</span>
              <input
                type="text"
                name="full_name"
                id={style.name}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className={style.detail}>
              <span className={style.sp}>Username</span>
              <input
                type="text"
                name="username"
                placeholder="enter your username"
                required
              />
            </div>
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
              <span className={style.sp}>Phone number</span>
              <input
                type="tel"
                name="phone_number"
                placeholder="Enter your phone number"
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
            <div className={style.detail}>
              <span className={style.sp}>confirm password</span>
              <input
                type="password"
                name="confirm_password"
                placeholder="confirm your password"
                required
              />
            </div>

            <div>
              <pre id={style.gender}>Gender</pre>
              <input type="radio" value="male" name="gender" id={style.dot1} />
              <label htmlFor="dot1">male</label>
              <input type="radio" value="female" name="gender" id={style.dot2} />
              <label htmlFor="dot2">female</label>
              <input type="radio" value="other" name="gender" id={style.dot3} />
              <label htmlFor="dot3">other</label>
            </div>
            <div className={style.detail} id={style.x}>
              <input type="submit" value="Register" id={style.register} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
