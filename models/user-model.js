const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
      },
    email: {
        type: String,
        unique: true,
        required: true,
      },
    phone_no: {
        type: String,
        required: true
      },
    password: {
        type: String,
        required: true
      },
    skills: {
        type: Array,
        default: []
    },
    achivement: {
        type: Array,
        default: []
    },
    platformRatings: [
        {
          platform: {
            type: String,

          },
          platform_username:{
            type: String
          },
          rating: {
            type: Number,
            default: 0
          }
        }
      ],
    isMentor: {
      type: Boolean,
      default: false
    },
    profile_picture: Buffer
});

module.exports = mongoose.model("user", userSchema);
