const express = require('express')
const jwt = require("jsonwebtoken");
const router = express.Router() ;

router.get('/',(req,res)=>{
   res.clearCookie("token");
   res.status(200).json({ message: "Logged out successfully" });
})

module.exports = router