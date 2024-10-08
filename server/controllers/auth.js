const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const registerUser = async (req, res) => {
    const { handle, email, password, category } = req.body;
    console.log(req.body);
    
    try {
        const defaultLink = {
            url: 'https://shubhadipbhowmik.vercel.app/',
            title: 'Shubhadip',
            icon: 'https://i.ibb.co/Xy5kkZM/link.png'
        };

      await bcrypt.hash(password, 10, async function(err, hash) {
             
            const user = await UserModel.create({
                handle, email, hash, role: category, links: [defaultLink]
            });
        
            const token = jwt.sign({ email: email }, process.env.SECRET_JWT);
        
        });

        return res.json({
            message: 'User Created',
            status: 'success',
            token: token,
            id: user._id
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.json({
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

        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.json({
                status: 'notfound',
                error: 'No user found'
            });
        }

        const result = await bcrypt.compare(password, user.password)

      if(result){
        const token = jwt.sign({ email: email }, process.env.SECRET_JWT);
        return res.json({
            message: 'User found',
            status: 'success',
            token: token,
            id: user._id
        });
    }
    } catch (error) {
        return res.json({
            message: error.message,
            status: 'error'
        });
    }
};

module.exports = { registerUser, loginUser };