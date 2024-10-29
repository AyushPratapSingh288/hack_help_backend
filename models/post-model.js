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
    isMentor: {
        type: Boolean,
        default: false
    },
    likes : [],
    reply: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user-model' 
        },
        replyText: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    createdAt: { type: Date, default: Date.now }
})