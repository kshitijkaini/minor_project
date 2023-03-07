import React, { useState } from 'react'
import style from './LoginPage.module.css';

function PasswordReset() {

    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

    const setVal = (e) => {
        setEmail(e.target.value);
    };

    const sendLink = async (e) => {
        e.preventDefault();

        if (email === "") {
          alert("email is required!");
        } else if (!email.includes("@")) {
           alert("includes @ in your email!");
        } else {
            console.log(email)
            const res = await fetch('http://localhost:8080/sendpasswordlink/',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },  
                body:JSON.stringify({ email }) 
            });

            const data = await res.json();
console.log(data)
            if (data.status == 201) {
                setEmail("");
                setMessage(true);
            } else {
                alert("Invalid User")
            }
        }
    };

    return (
        <>
            <div className={style.container}>
                <div className={style.title}>
                    <h3>Enter your email</h3>
                </div>

                {message ? <p style={{ color: "green", fontWeight: "bold" }}>pasword reset link send Succsfully in Your Email</p> : ""}



                <form>
                    <div className={style.detail}>
                        <span className={style.sp}>Email</span>
                        <input
                            type="email"
                            onChange={setVal}
                            value={email}
                            name="email"
                            placeholder="enter your email"
                            required />
                    </div>

                    <div className={style.detail} id={style.x}>
                        <button className='btn' onClick={sendLink}>Send</button>
                    </div>

                </form>
            </div>
        </>
    );
}

export default PasswordReset
