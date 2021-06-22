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

    }
}