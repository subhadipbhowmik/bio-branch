const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");

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

        return res.status(200).json({ message: "saved", status: "success" });
    } catch (error) {
        return res.status(500).json({ error: error.message, status: "error" });
    }
};

module.exports = { saveLinks };
