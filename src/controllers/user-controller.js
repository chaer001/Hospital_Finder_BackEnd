//const config = require('../helpers/config-helper');
const User = require('../models/user-model');



//GET http://localhost:3000/api/users
exports.index = async (req, res) => {
    const users = await User.find().exec()
    res.json ({data: users})
}


//POST http://localhost:3000/api/users
exports.store = async (req, res) => {
    const user = new User(req.body)
    await user.save();

    res.status(201).json ({data: user})
}

//GET http://localhost:3000/api/users/:id
exports.show = async (req, res) => {
    const user = await User.findById(req.params.id).exec()
    res.json({data: user})
}

//DELETE http://localhost:3000/api/users/:id
exports.destroy = async (req, res) => {

    await User.findByIdAndRemove(req.params.id).exec()

    res.status(204).send()
}
//PATCH http://localhost:3000/api/users/:id
exports.update = async (req, res) => {
    const user = await User.findOneAndUpdate(req.params.id,{$set: req.body}, {new: true}).exec()
    res.json ({data: user})
}