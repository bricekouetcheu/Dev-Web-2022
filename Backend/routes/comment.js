const express = require('express');
const router = express.Router();

const cors = require('../middlewares/EnableCors');
const {getCommentsFromOneBook} = require('../controllers/comment');
const {addNewComment} = require('../controllers/comment');
const {validateToken } = require('../middlewares/auth') ;


router.get('/single/:id/comments',  getCommentsFromOneBook );
router.post('/single/:id/comment', validateToken, addNewComment);

module.exports = router;