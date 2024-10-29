const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

module.exports = async (req,res,next)=>{
   if(!req.cookies.token) return res.redirect('/');

   try{
    let decoded = jwt.verify(res.cookies.token,process.env.JWT_KEY);
    let user = await userModel.findOne(decoded.email)
    .select("-password");

    if (user.isMentor) {
        next();
      } else {
        return res.redirect('/user/signin'); 
      } 
}catch(err){
    res.redirect('/')
}


}