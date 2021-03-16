import { Moderator } from '../../models'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/devConfig'


// Validate password
Moderator.prototype.correctPassword = function (enteredPassword) {
    return Moderator.encryptPassword(enteredPassword, this.salt()) === this.password()
}
const signin = async (req, res) => {
    try {
        let mod = await Moderator.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!mod)
            return res.status('401').json({
                error: 'User not found'
            })
        if (!correctPassword(req.body.password)) {
            return res.status('401').send({
                error: "Email and password don't match."
            })
        }

        const token = jwt.sign({
            _id: mod._id
        }, config.jwtSecret)

        res.cookie("AGCookie", token, {
            expire: new Date() + 9999
        })

        console.log(mod.name, " signed in")
        return res.json({
            token,
            mod: { _id: mod._id, name: mod.name, email: mod.email, }
        })
    } catch (err) {
        return res.status('401').json({
            error: "Could not sign in"
        })
    }
}


const requireSignin = expressJwt({
    secret: config.jwtSecret,
    userProperty: 'auth',
    algorithms: ['RS256']
})

const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id
    if (!(authorized)) {
        return res.status('403').json({
            error: "User is not authorized"
        })
    }

    next()
}
export default {
    signin,
    requireSignin,
    hasAuthorization,
}