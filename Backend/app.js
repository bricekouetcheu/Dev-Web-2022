const express = require("express");
const pool = require("./db.js")
const UserRoutes = require("./routes/user.js");
const app = express();
var bodyParser = require('body-parser');
const BookRoutes = require("./routes/book.js");
const cors = require('cors');


app.use(express.json()); //pour gerer les requetes POST

app.use(bodyParser.urlencoded({
  extended: true
}));


const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));


app.use((req,res,next)=>{// POUR CONTOUNER LA SECURITE CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use('/api/books' , BookRoutes);
app.use('/api/users' , UserRoutes);



app.get('/', function (req, res) {
  res.send('mise en place du serveur de developpement')
})


module.exports = app;