
const {Pool} = require('pg');
require("dotenv").config();


if( process.env.NODE_ENV == "production"){

    const  pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
      rejectUnauthorized: false
    }
     });
     module.exports = pool;
 }
 
 else{
  const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT

}) ;
module.exports = pool;
 }



//npm install -g cross-env
// cross-env NODE_ENV=production npm run test