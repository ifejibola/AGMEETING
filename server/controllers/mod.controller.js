import db from '../../models';
import { Moderator } from '../../models/'
import { User } from '../../models/'
import errorHandler from '../helpers/dbErrorHandler';
import sequelize from 'sequelize'
import extend from 'lodash/extend'
import crypto from 'crypto'
// import request from 'request'

// const Moderator = require('../../models/moderator')


const create = async (req, res) => {


    // Moderator.User = User.belongsTo(Moderator, { as: 'user' });
    // User.belongsTo(Moderator, { as: 'user' });
    Moderator.User = Moderator.hasMany(User, { as: 'user' }); // add moderatorid to User table, assessors getMod, set Mod

    const mod = await Moderator.create(req.body, {
        include: [{ model: User, as: 'user' }],
        freezeTableName: true
    })

    // save user to db
    try {
        await mod.save();
        console.log(`${mod.name} was added to the db`);
        return res.status(200).json({
            message: "Successfully signed up!!"
        })
    } catch (err) {
        return res.status(400).console.log(err);
    }

}

/*
    Load mod and append to req
        fetches and loads the user based on user ID into the request object
*/
const modByID = async (req, res, next, id) => {
    try {
        let mod = await Moderator.findOne({ where: { id: id } });

        if (!mod)
            return res.status('400').json({
                error: "User not found"
            })
        req.profile = mod
        next()
    } catch (err) {
        return res.status('400').json({
            error: "Could not retrieve user"
        })
    }
}

/*
    executes modById to load the user by the userId value, then read func
*/
const read = (req, res) => {
    //remove sensitive information when loading profile
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(res.profile)
}


/*
    Moderator adding a user 
*/
const createUser = async (req, res, next) => {

    const user = await User.create(req.body)
    try {
        await user.save()
        return res.status(200).json({
            message: "Successfully signed up!"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }

}

export default {
    create,
    modByID,
    read,
    createUser
}