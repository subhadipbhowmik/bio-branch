const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'BioBranch User'
    },
    bio: {
        type: String,
        default: 'Edit Me'
    },
  
  email: {
    type: String,
    required: true, 
    unique: true,
  },
  avatar: {
    type: String,
    default: 'https://i.ibb.co/Ph0WZLq/panda-bear.png'
  },
  password: {
    type: String,
    required: function() {
      return !this.googleId;
    },
  },
  role: {
    type: String,
    enum: ['Creator', 'Brand', 'Agency', 'admin'],
    default: 'Creator',
  },
  googleId: {
    type: String,
  },
  handle: {
    type: String,
    required: true, 
    unique: true,
  },
  links: [{
    url: {
        type: String
    },
    title: {
        type: String
    },
    icon: {
        type: String,
    }
}],
socialMedia: {
    facebook: {
        type: String
    },
    twitter: {
        type: String
    },
    instagram: {
        type: String
    },
    github: {
        type: String
    },
    linkedin: {
        type: String
    },
    youtube: {
        type: String
    }
}
}, { collection: 'users' });

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
