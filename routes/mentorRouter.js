const express = require('express');
const router = express.Router();
const isMentor = require('../middlewares/isMentorr')
const mentorModel = require('../models/mentor-model')
router.get('/', (req, res) => {
  res.send('mentor');
});

router.post('/mentor', isMentor ,(req,res)=>{
  try{
    const { userId, expertise, gitHub, linkDin, webSite, description, bestProject } = req.body;
    let mentor = mentorModel.create({
      userId,
      expertise,
      gitHub,
      linkDin,
      webSite,
      description,
      bestProject,
    });
    res.send("Mentor is created");
  } catch(err){
    res.flash("error", "Something is wrong");
    res.redirect('/')
  }
  
});
module.exports = router;