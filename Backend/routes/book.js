const express = require('express');
const router = express.Router();
const {getBooksbyName} = require('../controllers/books');
const cors = require('../middlewares/EnableCors');
const {getOneSingleBook} = require('../controllers/books');

router.get('/:title',  getBooksbyName);
router.get('/single/:id', getOneSingleBook);

module.exports = router;