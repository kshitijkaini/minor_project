import React from "react"

import pic from '../images/football.jpg'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"
import style from './Landingpage.module.css';
import pic1 from '../images/futsal.jpg';
import pic2 from '../images/swim.jpg';
import pic3 from '../images/gym.jpg';

function Landingpage() {
  return (
    <>

      <div className={style.wrapper}>
        <nav className={style.navig}>
          <div className={style.navBar}>
            <label className={style.khelcentre}>Khel Centre</label>

            <div className={style.menu}>
              <ul class={style.navLinks}>
                <li className={style.lis}><a href="#">Home</a></li>
                <li className={style.lis}><a href="./map">Location</a></li>
                <li className={style.lis}><a href="./LoginPage">Sign-in</a></li>
                <li className={style.lis}><a href="./registrationForm">Sign-up</a></li>
                <li className={style.lis}><a href="#">profile</a></li>
              </ul>
            </div>
          </div>
        </nav>


        <div className={style.para}>
          <p>We offer wide range of service of different recreational activities.</p>
          <div id={style.para2}>
            <p>Play for<br /> your body<br /> and mind</p>
          </div>
        </div>


        <div className={style.mid}>
          <div className={style.botton}>
            <button className={style.button}type="button">BOOK NOW</button>
          </div>
          <div className={style.watch}>

            <p style={{
              "color": "white",
              "font-size": "25px",
              "-webkit-text-stroke-width": "0.8px",
              "-webkit-text-stroke-color": "black"
            }}>Learn more</p>

          </div>
          <div id={style.photo}>
            <img id={style.kick} src={pic} alt="fuck u" />
          </div>
        </div>


        <div className={style.about}>
          <h2>About Us</h2>
          <p>This website is for those who are sport enthusiastic.</p>
        </div>
        <div className={style.service}>
          <h1>Services we offer</h1>
        </div>

        <div className={style.sport}>

          <div className={style.fimg} ><Link to="/Listoffutsal" ><img className={style.photo2} src={pic1} alt="futsal" /></Link></div>
          <div className={style.fimg}><Link to="__swimming" ><img className={style.photo2} src={pic2} alt="swim" /></Link></div>
          <div className={style.fimg}><Link to="__gym"> <img className={style.photo2} src={pic3} alt="gym" /></Link></div>

        </div>
        <hr />


        <footer className={style.footer}>
          <div className={style.container}>
            <div className={style.footerRow}>
              <div className={style.footerIdentity}>
                <a href="#home" className={style.khelcentre}>Khel Centre</a>

              </div>
              <div className={style.footerFeature}>
                <div className={style.footerFeature1}>
                  <h4 className={style.footerFeatureTitle}>About us</h4>
                  <ul className={style.footerFeatureList}>
                    <li>
                      <a href="#features" style={{ "textDecoration": "none" }}>Features</a>
                    </li>
                    <li>
                      <a href="#term-condition" style={{ "textDecoration": "none" }}>Terms & Agreements</a>
                    </li>
                  </ul>
                </div>
                <div className={style.col}>
                  <h4 className={style.footerFeatureTitle}>Support</h4>
                  <ul className={style.footerFeatureList}>
                    <li>
                      <a href="#faq" style={{ "textDecoration": "none" }}>Faq</a>
                    </li>
                    <li>
                      <a href="#support" style={{ "textDecoration": "none" }}>Support Center</a>
                    </li>
                    <li>
                      <a href="#privacy-policy" style={{ "textDecoration": "none" }}>Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                <div className={style.col}>
                  <h4 className={style.footerFeatureTitle}>Contact Us</h4>
                  <ul className={style.footerFeatureList}>
                    <li>
                      <a href="#gmail" style={{ "textDecoration": "none" }}>
                        <i className="ri-mail-line"></i> contact@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="#address" style={{ "textDecoration": "none" }}>
                        <i className="ri-map-pin-line" ></i> Lalitpur Nepal, 2 Feb 2023
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={style.footerCopyright}>
              All rights reserved, &copy; 2023/2079 Team Sahara
            </div>
          </div>
        </footer>
      </div>
    </>

  );
}

export default Landingpage;