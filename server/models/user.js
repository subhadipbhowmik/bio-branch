const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String
    },
    bio: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://i.ibb.co/Ph0WZLq/panda-bear.png'
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Creator', 'Brand', 'Agency', 'admin'],
        default: 'Creator'
    },
    handle: {
        type: String,
        required: true,
        unique: true
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
            default: 'https://i.ibb.co/Ph0WZLq/panda-bear.png'
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

const UserModel = model('User', UserSchema);

module.exports = UserModel;
