const express = require('express');
const router = express.Router();
const {getOneBooksbyName} = require('../controllers/books');
const cors = require('../middlewares/EnableCors');

router.get('/:title', cors , getOneBooksbyName);

module.exports = router;