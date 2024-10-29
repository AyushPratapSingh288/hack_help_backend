const userModel = require('../models/user-model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generateToken} = require('../utils/generateToken')
module.exports.userAuth = async (req,res)=>{
    let {username, email, phone_no, password, skills, achivement, platformRatings, isMentor, profile_picture} = req.body ;
    let exitUser = await userModel.findOne({email: email});
    if(exitUser) return res.status(401).send("You Already Have a Account");
    try{
        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(password,salt,async (err,hash)=>{
              if(err) return res.send(err.message);
              else{
                let user = await userModel.create({
                  username,
                  email, 
                  phone_no, 
                  password: hash, 
                  skills, 
                  achivement, 
                  platformRatings,
                  isMentor: false, 
                  profile_picture
                });
                let token = generateToken(user);
                res.cookie("token", token);
                res.send("You have been SignUp");
              }
            })
          })
    } catch(err){
        res.send(err.message)
    }

     
}

module.exports.userLogin = async (req,res)=>{
    let {email, password} = req.body ;
    let user = userModel.findOne({email: email});
    if(!user) return res.send("Something is wrong");

    bcrypt.compare(password,user.password,(err,result)=>{
         if(result){
            let token = generateToken(user);
            res.cookie("token",token);
            res.send("Yes login")
         }
         else{
            res.send("Something is wrong");
         }
    })
}

modeule.exports.forgotPassword = async (req,res)=>{
       const {email, newPassword} = req.body ;
       try{
          bcrypt.salt(10,(err,salt)=>{
              bcrypt.hash(newPassword,salt, async (err,hash)=>{
                    const updatedUser = userModel.findOneAndUpdate(
                      {email:email},
                      {password:hash},
                      {new:true}
                    )
              })
          })

          res.send(200).json({mess: "User Password is Updated"});
       } catch(err){
        res.status(500).json(err);
       }
}