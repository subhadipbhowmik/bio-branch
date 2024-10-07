import UserModel from "../models/user.js";
import jwt from 'jsonwebtoken';

const loadLinks = async (req, res) => {
    try {
        const { tokenMail } = req.body;
        const decodedTokenMail = jwt.verify(tokenMail, process.env.SECRET_JWT);
        const email = decodedTokenMail.email;
        const user = await UserModel.findOne({ email: email });
        const links = user.links;
        return res.json({
            message: 'found',
            status: 'success',
            links
        })
    } catch (error) {
        return res.json({
            error: error.message,
            status: 'error'
        })
    }    
}   

export default loadLinks;