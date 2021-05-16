

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const definition = new Schema({
    'provider_id' : String,
    'hospital_name' : String,
    'address' : String,
    'city' : String,
    'state' : String,
    'zip_code': String,
    'county_name' : String,
    'phone_number' : {"_phone_number":String},
    'hospital_type' : String,
    'hospital_ownership' : String,
    'emergency_services' : String,
    'human_address' : String,

   'location': {

      "_human_address" : String,

       "_latitude" : String,

       "_longitude" : String ,

       "_needs_recording" : Boolean,
    },

    "geolocation": {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point',
        },
        coordinates: {
            type: [Number],
            default: [0, 0],
        }

    },

    "__id": String,
    "__uuid": String,
    "__position": String,
    "__address": String,




})

const options = {
    timestamps: true

}

const schema = mongoose.Schema(definition, options)


module.exports = mongoose.model('Hospital', schema)