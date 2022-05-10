const express = require('express');
const { getAllUsers } = require('../controllers/users');
const router = express.Router();
const {Register} = require('../controllers/users');
const {Login} = require('../controllers/users');
const {CheckUserAuthentication} = require('../controllers/users');
const {validateToken } = require('../middlewares/auth') 

router.get('/', getAllUsers);
router.post('/register' , Register);
router.post('/login' ,Login)
router.get('/auth' , validateToken , (req , res)=>{
    res.json(req.user)
} )


module.exports = router;