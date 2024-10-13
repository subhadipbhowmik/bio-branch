const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
const admin = require('firebase-admin');

const registerUser = async (req, res) => {
    const { handle, email, password, category } = req.body;
    console.log(req.body);
    
    try {
        const defaultLink = {
            url: 'https://shubhadipbhowmik.vercel.app/',
            title: 'Shubhadip',
            icon: 'https://i.ibb.co/Xy5kkZM/link.png'
        };

        const user = await UserModel.create({
            handle, email, password, role: category, links: [defaultLink]
        });
    
        const token = jwt.sign({ email: email }, process.env.SECRET_JWT);
    
        return res.status(201).json({
            message: 'User Created',
            status: 'success',
            token: token,
            id: user._id
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                message: 'Try different handle or email',
                status: 'error'
            });
        }
        return res.json({
            message: error.message,
            status: 'error'
        });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email, password: password });
        if (!user) {
            return res.status(404).json({
                status: 'notfound',
                error: 'No user found'
            });
        }

        const token = jwt.sign({ email: email }, process.env.SECRET_JWT);
        return res.status(200).json({
            message: 'User found',
            status: 'success',
            token: token,
            id: user._id
        });

    } catch (error) {
        return res.json({
            message: error.message,
            status: 'error'
        });
    }
};

const loginUserWithGoogle = async (req, res) => {
    const { idToken, userDetails } = req.body;
    console.log(req.body);
    try {
      // Verify the Firebase ID token
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      const email = decodedToken.email;
      const googleId = decodedToken.uid; // Get the Google UID from decoded token
  
      // Check if the user exists in the database
      let user = await UserModel.findOne({ email });
  
      // If the user doesn't exist, create a new one
      if (!user) {
        user = await UserModel.create({
          handle: userDetails.handle || email.split('@')[0], // Default handle from email
          email: userDetails.email,
          avatar: userDetails.avatar || 'https://i.ibb.co/Ph0WZLq/panda-bear.png', // Default avatar
          googleId, // Store Google ID
          password: '', // No password for Google users
          role: 'Creator',
          links: [],
        });
      } else {
        user.avatar = userDetails.avatar || user.avatar;
        user.handle = userDetails.handle || user.handle;
        await user.save();
      }
  
      const token = jwt.sign({ email: email }, process.env.SECRET_JWT);
      return res.json({
        message: 'User logged in successfully',
        status: 'success',
        token: token,
        id: user._id,
      });
    } catch (error) {
      return res.json({
        message: error.message,
        status: 'error',
      });
    }
  };
  

module.exports = { registerUser, loginUser, loginUserWithGoogle };