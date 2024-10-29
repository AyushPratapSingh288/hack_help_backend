const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');

module.exports = async (req, res, next)=>{
    if(!req.cookies.token){
        req.flash("error","You need to be LoggedIn")
        return res.redirect('/');
    }
    try{
        let decoded = jwt.verify(res.cookies.token,process.env.JWT_KEY);
        let user = await userModel.findOne({email: decoded.email})
        .select("-password");

        req.user=user ;

        next();
    }catch(err){
        res.send(err.message)
        res.redirect('/')
    }
}