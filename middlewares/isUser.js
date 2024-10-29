const userModel = require('../models/user-model');

module.exports = async (req,res,next)=>{
    try{
        const email = req.body ;
        const user = userModel.findOne({email:email});
        if(!user) return res.status(500).json({message: "No User Found"});

        next();
    }catch(err){
        res.status(500).json({message: "err.body"});
    }
}