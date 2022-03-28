const pool = require("../db");

exports.getAllUsers = (req, res) =>{
    pool.query('SELECT * FROM public.users' , (error , results)=>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows) }
    )
   

}