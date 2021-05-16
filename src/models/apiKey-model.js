const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const definition = new Schema({

    'ApiKey': String,
    'Level': String,


})

const options = {
    timestamps: true

}

const schema = mongoose.Schema(definition, options)


module.exports = mongoose.model('ApiKey', schema)