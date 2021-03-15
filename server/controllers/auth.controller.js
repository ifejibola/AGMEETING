const { User } = require("../../models")

const signin = async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!user)
            return res.status('401').json({
                error: 'User not found'
            })
        // if (!user)

    } catch (err) {
        return res.status('401').json({
            error: "Could not sign in"
        })
    }
}