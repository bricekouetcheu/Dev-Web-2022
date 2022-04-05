const express = require("express");
const pool = require("./db.js")
const UserRoutes = require("./routes/user.js");
const app = express();
var bodyParser = require('body-parser');


app.use(express.json()); //pour gerer les requetes POST

app.use(bodyParser.urlencoded({
  extended: true
}));


app.use((req,res,next)=>{// POUR CONTOUNER LA SECURITE CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/', function (req, res) {
    res.send('mise en place du serveur de developpement')
})

app.use('/api/users' , UserRoutes);


module.exports = app;