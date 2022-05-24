const express = require("express");
const pool = require("./db.js")
const UserRoutes = require("./routes/user.js");
const app = express();
var bodyParser = require('body-parser');
const BookRoutes = require("./routes/book.js");
const cors = require('cors');
const CommentsRoutes = require('./routes/comment.js');
const path = require('path');



app.use(express.json()); //pour gerer les requetes POST

app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(express.static(path.join(__dirname,'public')));
  
  


const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors());


/*app.use((req,res,next)=>{// POUR CONTOUNER LA SECURITE CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});*/

app.get('/',(req, res) => { return res.sendFile(path.join(__dirname+  '/public',  'index.html'));
});

app.use('/api/books' , BookRoutes);
app.use('/api/users' , UserRoutes);
app.use('/api/books' , CommentsRoutes);






module.exports = app;

