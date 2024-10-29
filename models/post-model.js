const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user-model',
        required: true,
        unique: true
    },
    postPicture:{
       type: Buffer
    },
    postData: {
        type: String,
        required: true
    },
    ifMentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user-model
    },
    reply: {
        type: String,
        
    },
    createdAt: { type: Date, default: Date.now }
})