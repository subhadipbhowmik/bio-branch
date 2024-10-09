const UserModel = require("../models/user");
const jwt = require('jsonwebtoken');

const loadSocials = async (req, res) => {
    const { tokenMail } = req.body;

    try {
        const decodedTokenMail = jwt.verify(tokenMail, process.env.SECRET_JWT);
        const email = decodedTokenMail.email;   

        const user = await UserModel.findOne({ email: email });
        const socials = user.socialMedia;
        return res.status(200).json({
            message: 'found',
            status: 'success',
            socials
        });

    } catch (error) {
        return res.status(500).json({
            error: error.message,
            status: 'error'
        })
    }
}

module.exports = { loadSocials }