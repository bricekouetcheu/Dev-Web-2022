const express = require('express');
const { getAllUsers } = require('../controllers/users');
const router = express.Router();
const {Register} = require('../controllers/users');
const {Login} = require('../controllers/users');

router.get('/', getAllUsers);
router.post('/register' , Register);
router.post('/login' ,Login)


module.exports = router;