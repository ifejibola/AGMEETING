import { Moderator } from '../../models'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/devConfig'
import crypto from 'crypto'

//Salt generation & encryption helper func
Moderator.generateSalt = function () {
    return crypto.randomBytes(16).toString('base64')
}

// generate an encrypted hash from the plainText password and a unique salt value
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
// const correctPassword = function (enteredPassword, mod) {
//     return Moderator.encryptPassword(enteredPassword, mod.salt()) === mod.password()
// }
Moderator.prototype.correctPassword = (enteredPassword, mod) => {
    return Moderator.encryptPassword(enteredPassword, mod.salt()) === mod.password()
}

const signin = async (req, res) => {
    try {
        let mod = await Moderator.findOne({
            where: {
                email: req.body.email
            }
        })

        // verify existence of email 
        if (!mod)
            return res.status('401').json({
                error: 'User not found'
            })

        // Verify password 
        if (!mod.correctPassword(req.body.password, mod)) {
            return res.status('401').send({
                error: "Email and password don't match."
            })
        }
        // if (!correctPassword(req.body.password, mod)) {
        //     return res.status('401').send({
        //         error: "Email and password don't match."
        //     })
        // }

        const token = jwt.sign({
            _id: mod._id
        }, config.jwtSecret)
        const accessToken = jwt.sign({
            _id: mod._id

        }, config.jwtSecret)

        res.cookie("AGCookie", accessToken, { sameSite: "none", secure: true }, {
            expire: new Date() + 9999
        })


        console.log(accessToken, " signed in")
        console.log(mod.name, " signed in")

        // authenticateToken(token, process.env.JWT_SECRET, (err, user) => {
        //     if (err) return res.sendStatus(403)

        //     req.mod = user

        // })
        return res.status('200').json({
            accessToken,
            mod: { _id: mod._id, name: mod.name, email: mod.email, }
        })
    } catch (err) {
        return res.status('401').json({
            error: "Could not sign in"
        })
    }
}

/*

    Verify that the incoming request has a valid jwt in the Auth header.
        If valid, apped modID in the 'auth' key to the req object
*/

const signout = (req, res) => {
    res.clearCookie("AGCookie")

    return res.status('200').json({
        message: "signed out"
    })
}

const requireSignin = expressJwt({
    secret: config.jwtSecret,
    userProperty: 'auth',
    algorithms: ['sha1', 'RS256', 'HS256'],
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


const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]//if we have a auth header, return the auth header or undefined
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, config.jwtSecret, (err, mod) => {
        if (err) return res.sendStatus(403)
        req.mod = mod

        next()
    })
}


export default {
    signin,
    signout,
    requireSignin,
    hasAuthorization,
    authenticateToken,
}