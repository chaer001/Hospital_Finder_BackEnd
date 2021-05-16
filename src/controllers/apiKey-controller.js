
const ApiKey = require('../models/apiKey-model');

const apikey = require("apikeygen").apikey;

const authorizationController =  require('./authorization-controller')

//GET http://localhost:3000/keys

exports.getAllKeys = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, true);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    const keys = await ApiKey.find().exec()
    res.json({data: keys})
}

//GET http://localhost:3000/key

exports.getKey = async (req, res) => {

    const key = apikey();
    res.json({key: key})
}


//GET http://localhost:3000/key/metadata

exports.getKeyMetaData = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, true);
    }catch(e){
        return res.status(401).json({Error: e})
    }

    const key = await ApiKey.findOne({'ApiKey': req.params.key}).exec()
    res.json({data: key})
}


//DELETE http://localhost:3000/api/key/:key
exports.destroyKeyMetaData = async (req, res) => {

    await ApiKey.remove({'ApiKey' : req.params.key}).exec()

    res.status(204).send()
}



//POST http://localhost:3000/api/key/:key/:level
exports.storeKeyLevel = async (req, res) => {
   const oneKey = {
     'ApiKey' : req.params.key,
       'Level' :req.params.level,

    }
    await ApiKey.update({"ApiKey" : req.params.key}, {$set:{"Level": req.params.level}}, {upsert: true}).exec()
    res.status(201).json({data: oneKey})
}





