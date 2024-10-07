import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

const saveLinks = async (req, res) => {
    const { tokenMail, links } = req.body;
    try {
        const decodedTokenMail = jwt.verify(tokenMail, process.env.SECRET_JWT);
        const email = decodedTokenMail.email;
        
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.json({ message: "User not found", status: "error" });
        }

        const newLinks = links.map((l) => ({
            url: l.url,
            title: l.title,
            icon: ''
        }));

        user.links = newLinks;
        await user.save();

        return res.json({ message: "saved", status: "success" });
    } catch (error) {
        return res.json({ error: error.message, status: "error" });
    }
};

export default saveLinks;
