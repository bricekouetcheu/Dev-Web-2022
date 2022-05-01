const express = require('express');
const router = express.Router();

const cors = require('../middlewares/EnableCors');
const {getCommentsFromOneBook} = require('../controllers/comment');


router.get('/single/:id/comments' , getCommentsFromOneBook );

module.exports = router;