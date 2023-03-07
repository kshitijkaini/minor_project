const express = require("express");
const router = new express.Router();
const server = express();
const userdb = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const keysecret = "asdfghjklzxcvbnmqwertyuiopasdfgh"

// email config

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"kshitijkaini@gmail.com",
        pass:"crjputivyihvnwup"
    }
}) 




// CRUD - Create
router.post('/', async (req, res) => {
    //console.log(req.body);
    // res.send(req.body); -yesla chai feri client mai send gaecha
    // let user = new User();
    // user.username = req.body.username;
    // user.password = req.body.password;
    // const doc = await user.save();

    // console.log(doc);
    // res.json(doc);
    const { full_name, phone_number, username, email, password, confirm_password } = req.body;

    if (!full_name || !phone_number || !username || !email || !password || !confirm_password) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

        const preuser = await userdb.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This Email is Already Exist" })
        } else if (password !== confirm_password) {
            res.status(422).json({ error: "Password and Confirm Password Not Match" })
        } else {
            const finalUser = new userdb({
                full_name, phone_number, username, email, password, confirm_password

            });

            //here password hashing
            const storeData = await finalUser.save();

            res.status(201).json({ status: 201, storeData })

        }

    } catch (error) {
        res.status(422).json(error);
        console.log(error);
        console.log("catch block error");
    }
});




//user login
router.post("/login", async (req, res) => {

    // console.log(req.body);

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {
        const userValid = await userdb.findOne({ email: email });

        if (userValid) {

            const isMatch = await bcrypt.compare(password, userValid.password);

            if (!isMatch) {
                res.status(422).json({ error: "invalid details" })
            } else {

                // token generate
                const token = await userValid.generateAuthtoken();
                //console.log(token)



                // cookie generate
                res.cookie("usercookie", token, { expires: new Date(Date.now() + (60 * 24 * 3600000)), httpOnly: true });

                const result = {
                    userValid,
                    token
                }
                res.status(201).json({ status: 201, result })

            }
        }

    } catch (error) {
        res.status(401).json(error);
        console.log("catch block of here", error);
    }
});


//user valid
router.get("/validuser", authenticate, async (req, res) => {
    //console.log("done");
    try {
        const ValidUserOne = await userdb.findOne({ _id: req.userId });
        res.status(201).json({ status: 201, ValidUserOne });
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
});

// user logout

router.get("/logout", authenticate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });
        console.log("it is working");
        res.clearCookie("usercookie", { path: "/" });

        req.rootUser.save();

        res.status(201).json({ status: 201 })

    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
})





 
// send email Link For reset Password 
router.post("/sendpasswordlink", async (req, res) => {
    try{console.log(req.body)}
    catch(err){console.log(err)}

    const { email } = req.body; 

    if (!email) {
        res.status(401).json({ status: 401, message: "Enter Your Email" })
    }

    try {
        const userfind = await userdb.findOne({ email: email });



        // token generate for reset password
        const token = jwt.sign({ _id: userfind._id }, keysecret, {
            expiresIn: "120s"
        });
                      
        const setusertoken = await userdb.findByIdAndUpdate({ _id: userfind._id }, { verifytoken: token }, { new: true });
        //console.log("setusertoken",setusertoken)  
//console.log(email)                                                            
        if (setusertoken) {
            const mailOptions = {
                from:"kshitijkaini@gmail.com",
                to: email,
                subject: "Sending Email For password Reset",
                text: `This Link Valid For 2 MINUTES   http://127.0.0.1:5173/forgetpassword/${userfind.id}/${setusertoken.verifytoken}`
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("error", error);
                    res.status(401).json({ status: 401, message: "email not send" })
                } else {
                    console.log("Email sent", info.response);
                    res.status(201).json({ status: 201, message: "Email sent Succsfully" })
                }
            })

        }

    } catch (error) {
        res.status(401).json({ status: 401, message: "invalid user" })
    }

});








module.exports = router;