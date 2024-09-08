const User = require('../models/user');
const jwt = require('jsonwebtoken');

const dashboardData = async (req, res) => {
    const { tokenMail } = req.body;
    console.log(tokenMail);
    try {
        const decodedTokenMail = jwt.verify(tokenMail, process.env.SECRET_JWT);
        const email = decodedTokenMail.email;
        const user = await User.findOne({ email: email });

        const userData = {
            role: user.role,
            handle: user.handle,
            avatar: user.avatar,
            links: user.links.length,
        };

        console.log(userData);  // For debugging

        return res.json({
            message: 'Data Loaded',
            userData: userData,
            status: 'okay',
        });
    } catch (error) {
        return res.json({
            error: error.message,
            status: 'error',
        });
    }
};

module.exports = { dashboardData };
