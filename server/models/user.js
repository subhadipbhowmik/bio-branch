const mongoose = require('mongoose');
const { model, Schema } = mongoose;
const bcrypt = require('bcrypt'); //for hashing the password

const UserSchema = new Schema({
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

//hashing the password before saving it to the database.

UserSchema.pre("save",async function(next){
    //if the password field is not modified .
    if(!this.isModified('password')) return next () ;

     //this will run  1.For the first time  2.When the paswword is updated  

    this.password = await bcrypt.hash(this.password, 10);
    next();
})
UserSchema.methods.checkPassword = async function(password){
    return await bcrypt.compare(password, this.password);  //this.password is the password from the database.  this.password is the password from the request.
}



const UserModel = model('User', UserSchema);

module.exports = UserModel;
