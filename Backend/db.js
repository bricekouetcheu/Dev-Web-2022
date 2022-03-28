const Pool = require('pg').Pool;

const pool = new Pool ({
    user: "postgres",
    password: "ProjetDev2022",
    database: "Dazibao",
    host: "localhost",
    port: 5432
});

module.exports = pool;