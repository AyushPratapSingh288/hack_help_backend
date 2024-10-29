const express = require('express');
const router = express.Router();
const {generateToken} = require('../utils/generateToken')
const {userAuth, userLogin,forgotPassword} = require('../controllers/authController')
const isUser = require('../middlewares/isUser')
router.get("/",(req,res)=>{
  res.send("hey this is user");
});

router.post('/createUser', userAuth);

router.post("/login", userLogin);

router.put('forgotPassword',isUser,forgotPassword);

module.exports = router ;