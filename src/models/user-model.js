const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const definition = new Schema({
    'firstName' : String,
    'lastName' : String,
    'userName' : String,
    'passwords' : String,


})

const options = {
    timestamps: true

}

const schema = mongoose.Schema(definition, options)


module.exports = mongoose.model('User', schema)