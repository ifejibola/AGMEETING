import { Moderator } from '../../models'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/devConfig'
import crypto from 'crypto'

//Salt generation & encryption helper func
Moderator.generateSalt = function () {
    return crypto.randomBytes(16).toString('base64')
}

Moderator.encryptPassword = function (plainText, salt) {
    if (!plainText) return ''
    try {
        return crypto
            .createHmac('sha1', salt)
            .update(plainText)
            .digest('hex')
    } catch (err) {
        return ''
    }
}
// Moderator.encryptPassword = function (plainText, salt) {
//     return crypto
//         .createHash('RSA-SHA256')
//         .update(plainText)
//         .update(salt)
//         .digest('hex')
// }

// automatic password encryption using Sequelize hooks
const setSaltAndPassword = mod => {
    if (mod.changed('password')) {
        mod.salt = Moderator.generateSalt()
        mod.password = Moderator.encryptPassword(mod.password(), mod.salt())
    }
}

Moderator.beforeCreate(setSaltAndPassword)
Moderator.beforeUpdate(setSaltAndPassword)

// Validate password
const correctPassword = function (enteredPassword, mod) {
    return Moderator.encryptPassword(enteredPassword, mod.salt()) === mod.password()
}
// Moderator.prototype.correctPassword = (enteredPassword) => {
//     return Moderator.encryptPassword(enteredPassword, Moderator.salt()) === Moderator.password()
// }

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
        // mod.correctPassword(req.body.password)
        if (!correctPassword(req.body.password, mod)) {
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
    algorithms: ['sha1']
    // algorithms: ['sha1']
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