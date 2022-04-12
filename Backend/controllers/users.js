const pool = require("../db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAllUsers = (req, res) =>{
    pool.query('SELECT * FROM public.users' , (error , results)=>{
        const user = results.rows;
        if(error){
            throw error
        }
        //console.log(user[0].name);
        res.status(200).json(results.rows) }
    )
   

}


exports.Register = (req, res)=>{
    const { name,surname, email, password } =  req.body;
    try {
         pool.query(`SELECT * FROM public.users WHERE email= $1;`, [req.body.email]) //Checking if user already exists
            .then(results =>{
                const  arr  =  results.rows; // on recupere les données
                if (arr.length !=  0) {// si le tableau est different de 0 alors il ya au moins un user
                return  res.status(400).json({
                   error: "Email already there, No need to register again.",
                   });

                   
                   }    else {
            
                    bcrypt.genSalt(10 , function(err, salt){
                        bcrypt.hash(req.body.password, salt, (err , hash)=>{
                             if(err)
                                    {
                                        console.log(err);
                                    }
                            const AddUser =  "INSERT INTO users (name,surname,password,email) VALUES ( $1, $2, $3, $4 ) RETURNING * ";
                            pool.query(AddUser, [req.body.name,req.body.surname, hash ,req.body.email] , (err , results)=>
                            {
                                console.log(err);
                                console.log(results)
                            
                                res.status(201).send({ message: 'Utilisateur créé !' } );
                             })
            
                       
                    
                     });
        
                });
        
        
                }
            

            })
              

    }

         catch (err) {
            console.log(err);
            res.status(500).json({
            error: "Database error while registring user!", //Database connection error
            });
            };
            

 
   
}




exports.Login = (req , res , next)=>{
    const {email , password} = req.body; // on recupere les valeurs envoyées par le front

    try{
         pool.query(`SELECT * FROM users WHERE email= $1;`, [email])
         .then( result=>{
            const user = result.rows;
            if(user.length === 0){//check si le user n'existe pas encore dans la bd
                return res.status(500).json({message: 'not registered yet'});
            }
    
            else{
                bcrypt.compare(password , user[0].password) // on compare le mot de passe recu du frontend et le mot de passe connu dans la bd
                .then(valid =>{
                    if(!valid){ // si pas le correspondance
                        return res.status(400).json({message:'mot de passe incorrect'})
                    }else{ // s'il y'a correspondance
                        return res.status(200).json({
                            message:'user logged in',
                            token:jwt.sign(//on cree un token de connexion au user
                               
                                { email: email },
                                'RANDOM_TOKEN_SECRET',
                                { expiresIn: '24h' }
                            )
                        });
                    }
                })
    
                .catch(error => res.status(500).json({ error }));
                
    
    
                
    
            }

        })

        .catch(error => res.status(500).json({ error }));
      

    }

    catch (err) {
        console.log(err);
        res.status(500).json({
        error: "Database error occurred while signing in!", //Database connection error
        });
}

}