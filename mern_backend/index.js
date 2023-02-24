var express=require("express");
var bodyParser=require("body-parser");
const port = 5000;
const app = express();
const path = require("path");
// const cors = require('cors');
            
                                                
             
//connect to mongodb 
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/notesDB",{useNewUrlParser: true,useUnifiedTopology: true})
.then(() => console.log("connection successful..")).catch((err) => console.log(err));
var db=mongoose.connection;

 

     

//express app.use()(middleware)\using static html file

 
app.use(bodyParser.json());
app.use(express.static('index'));
app.use(bodyParser.urlencoded({   //body parser
	extended: false
}));
// app.use(cors());

//create a data scheme
const notes_Schema =new mongoose.Schema({
  title: String,      
  content: String                    
});


//create a data model(model provides an interface to do CRUD operations.model is a wrapper on schema )
//collection creation
const Note = new mongoose.model("Note", notes_Schema);
//creates documents or insert

//
// app.get("/", (req, res) => {
//   console.log(__dirname);
//   res.sendFile(path.join(__dirname,"index.html"));
// });


//let' make some action
app.post("/",async function(req, res){
  let newNote = new Note({
    title:req.body.title,
    content:req.body.content
  });
  newNote.save();
  res.redirect('/');
})



//listen port
app.listen(port, function() {
  console.log(`server is running on ${port}`);
})   




