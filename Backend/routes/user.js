const express = require('express');
const { getAllUsers } = require('../controllers/users');
const router = express.Router();
const {Register} = require('../controllers/users')

router.get('/', getAllUsers);
router.post('/register' , Register);


module.exports = router;