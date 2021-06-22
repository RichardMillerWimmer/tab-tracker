const { User } = require('../models')

module.exports = {
    async register(req, res) {
        // console.log(req.body)
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
            const isPasswordValid = password === user.password
            if(!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect.'
                })
            }
            // console.log(user)
            res.status(200).send(user.toJSON())
        } catch (err) {
            res.status(500).send({
                error: "An error has occured trying to log in."
            })
        }

    },    
}