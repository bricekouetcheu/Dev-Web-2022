const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.get('/', function (req, res) {
    res.send('doodie le bg')
})


















app.listen(PORT, function () {
    console.log(`Votre app est disponible sur localhost:${PORT}`)
})