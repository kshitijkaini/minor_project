const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = express();

//connect to mongodb atlas
mongoose.set('strictQuery', false);
const url = "mongodb+srv://kshitij:3uHwP945tEPNC26o@cluster0.rl34brv.mongodb.net/?retryWrites=true&w=majority";

const connectionParams = {
    useNewUrlParser: true,     
    // useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })





    



server.use(cors());    //middlewre - it comes between client and server
server.use(bodyParser.json());

// CRUD - Create
server.post('/', async (req, res) => {
    console.log(req.body);
    // res.send(req.body); -yesla chai feri client mai send gaecha
    // let user = new User();
    // user.username = req.body.username;
    // user.password = req.body.password;
    // const doc = await user.save();

    // console.log(doc);
    // res.json(doc);
})


server.listen(8080, () => {
    console.log('server started')
})
