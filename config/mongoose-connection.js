const mongoose = require('mongoose');
require('dotenv').config();
const dbrg = require('debug')("development: mongoose");
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
   dbrg("connected");
}).catch((err)=>{
   dbrg(err);
})

module.exports = mongoose.connection ;
