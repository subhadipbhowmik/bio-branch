const UserModel = require("../models/user");

const getUserData = async (req, res) => {
    const handle = req.params.handle;

    if (!handle) {
        return res.json({
            error: 'Handle parameter is required',
            status: 'error'
        });
    }

    try {
        const user = await UserModel.findOne({ handle: handle });

        if (!user) {
            return res.json({
                error: 'User not found',
                status: 'error'
            });
        }

        const userData = {
            name: user.name,
            avatar: user.avatar,
            bio: user.bio,
            links: user.links
        };

        const socials = user.socialMedia;
        return res.json({
            message: 'User found',
            userData,
            socials,
            status: 'success'
        });

    } catch (error) {
        console.log(error);
        return res.json({
            error: error.message,
            status: 'error'
        });
    }
}

/*
const getUserSocials = async(req, res)=>{
    const handle = req.params.handle;
    try {
        const user = await UserModel.findOne({ handle: handle });
        const socials = user.socialMedia;
        return res.json({
            message: 'found',
            socials,
            status: 'success'
        })
    } catch (error) {
        return res.json({
            error: error.message,
            status: 'error'
        })
    }
}
*/

module.exports = { getUserData };
