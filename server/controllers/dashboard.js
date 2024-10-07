import UserModel from '../models/user.js';
import jwt from 'jsonwebtoken';

const dashboardData = async (req, res) => {
    const { tokenMail } = req.body;
    console.log(tokenMail);
    try {
        const decodedTokenMail = jwt.verify(tokenMail, process.env.SECRET_JWT);
        const email = decodedTokenMail.email;
        const user = await UserModel.findOne({ email: email });

        const userData = {
            name: user.name,
            role: user.role,
            handle: user.handle,
            avatar: user.avatar,
            bio: user.bio,
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

export default dashboardData;
