const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { handle, email, password, category } = req.body;
    console.log(req.body);
    
    try {
        const defaultLink = {
            url: 'https://shubhadipbhowmik.vercel.app/',
            title: 'Shubhadip',
            icon: ''
        };

        const user = await UserModel.create({
            handle, email, password, role: category, links: [defaultLink]
        });
    
        const token = jwt.sign({ email: email }, process.env.SECRET_JWT);
    
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
        const user = await UserModel.findOne({ email: email, password: password });
        if (!user) {
            return res.json({
                status: 'notfound',
                error: 'No user found'
            });
        }

        const token = jwt.sign({ email: email }, process.env.SECRET_JWT);
        return res.json({
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

module.exports = { registerUser, loginUser };