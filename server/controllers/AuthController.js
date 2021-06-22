const { User } = require('../models')
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 *7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        console.log(req.body)
        try {
            const user = await User.create(req.body)
            // console.log(user)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: "This email is already registered."
            })
        }

    },
    async login(req, res) {
        // console.log(req.body)
        const {email, password} = req.body;
        console.log(email, password)
        try {
            const user = await User.findOne({
                where: {
                    email: email,
                }
            })
            if(!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect.'
                })
            }
            const isPasswordValid = await user.comparePassword(password)
            console.log('compareAuth hit')
            if(!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect.'
                })
            }
            // console.log(user)
            // const userJson = user.toJSON()
            res.status(200).send({
                user: user.toJSON(),
                token: jwtSignUser(user.toJSON())
            })
        } catch (err) {
            res.status(500).send({
                error: "An error has occured trying to log in."
            })
        }

    },    
}