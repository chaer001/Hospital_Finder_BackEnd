const Hospital = require('../models/hospital-model');

const authorizationController =  require('./authorization-controller')

//GET http://localhost:3000/api/hospitals
exports.index = async (req, res) => {
    try {
        await authorizationController.authorize(req.headers.key, false);
    } catch (e) {
        return res.status(401).json({Error: e})
    }

    const hospitals = await Hospital.find().exec()
    res.json({data: hospitals})
}


//POST http://localhost:3000/api/hospitals
exports.store = async (req, res) => {
    try {
        await authorizationController.authorize(req.headers.key, true);
    } catch (e) {
        return res.status(401).json({Error: e})
    }

    const hospital = new Hospital(req.body)
    await hospital.save();

    res.status(201).json({data: hospital})
}

//GET http://localhost:3000/api/hospitals/:id
exports.show = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, false);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    const hospital = await Hospital.findById(req.params.id).exec()
    res.json({data: hospital})
}

//DELETE http://localhost:3000/api/hospitals/:id
exports.destroy = async (req, res) => {
    try {
        await authorizationController.authorize(req.headers.key, true);
    } catch (e) {
        return res.status(401).json({Error: e})
    }

    await Hospital.findByIdAndRemove(req.params.id).exec()

    res.status(204).send()
}
//PATCH http://localhost:3000/api/hospitals/:id
exports.update = async (req, res) => {

    const hospital = await Hospital.findOneAndUpdate(req.params.id, {$set: req.body}, {new: true}).exec()
    res.json({data: hospital})
}

//////////////////////////////////////////////

//Id ........................................
exports.getId = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, false);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    const hospital = await Hospital.find({'provider_id': req.params.number}).exec()
    res.json({data: hospital})
}


exports.updateId = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, true);
    }catch(e){
        return res.status(401).json({Error: e})
    }

    const hospital = await Hospital.findOneAndUpdate(req.params.id, {$set: req.body}, {new: true}).exec()
    res.json({data: hospital})
}


exports.destroyId = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, true);
    }catch(e){
        return res.status(401).json({Error: e})
    }

    await Hospital.remove({'provider_id': req.params.number}).exec()

    res.status(204).send()
}

// city.........................
exports.getCity = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, false);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    const hospital = await Hospital.find({'city': req.params.name}).exec()
    res.json({data: hospital})
}

exports.destroyCity = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, true);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    await Hospital.remove({'city': req.params.name}).exec()

    res.status(204).send()
}

// state............................
exports.getState = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, false);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    const hospital = await Hospital.find({'state': req.params.name}).exec()
    res.json({data: hospital})
}

exports.destroyState = async (req, res) => {

    try{
        await authorizationController.authorize(req.headers.key, true);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    await Hospital.remove({'state': req.params.name}).exec()

    res.status(204).send()
}

// county..................................

exports.getCounty = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, false);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    const hospital = await Hospital.find({'county_name': req.params.name}).exec()
    res.json({data: hospital})
}

exports.destroyCounty = async (req, res) => {

    try{
        await authorizationController.authorize(req.headers.key, true);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    await Hospital.remove({'county_name': req.params.name}).exec()

    res.status(204).send()
}

// State City ...............................................

exports.getStateCity = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, false);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    const hospital = await Hospital.find({'state': req.params.state, 'city': req.params.city}).exec()
    res.json({data: hospital})
}

exports.destroyStateCity = async (req, res) => {

    try{
        await authorizationController.authorize(req.headers.key, true);
    }catch(e){
        return res.status(401).json({Error: e})
    }

    await Hospital.remove({'state': req.params.state, 'city': req.params.city}).exec()

    res.status(204).send()
}

// name....................................

exports.getName = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, false);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    const hospital = await Hospital.find({'hospital_name': req.params.name}).exec()
    res.json({data: hospital})
}

exports.destroyName = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, true);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    await Hospital.remove({'hospital_name': req.params.name}).exec()

    res.status(204).send()
}

// type.............................................

exports.getType = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, false);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    const hospital = await Hospital.find({'hospital_type': req.params.type}).exec()
    res.json({data: hospital})
}

exports.destroyType = async (req, res) => {

    try{
        await authorizationController.authorize(req.headers.key, true);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    await Hospital.remove({'hospital_type': req.params.type}).exec()

    res.status(204).send()
}

// ownership...............................

exports.getOwnership = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, false);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    const hospital = await Hospital.find({'hospital_ownership': req.params.owner}).exec()
    res.json({data: hospital})
}

exports.destroyOwnership = async (req, res) => {

    try{
        await authorizationController.authorize(req.headers.key, true);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    await Hospital.remove({'hospital_ownership': req.params.owner}).exec()

    res.status(204).send()
}

// emergency ............................................

exports.getYes = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, false);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    const hospital = await Hospital.find({'emergency_services': req.params.available}).exec()
    res.json({data: hospital})
}

exports.destroyYes = async (req, res) => {

    try{
        await authorizationController.authorize(req.headers.key, true);
    }catch(e){
        return res.status(401).json({Error: e})
    }

    await Hospital.remove({'emergency_services': req.params.available}).exec()

    res.status(204).send()
}

// latlon .................................................

exports.getLatlon = async (req, res) => {
    try{
        await authorizationController.authorize(req.headers.key, false);
    }catch(e){
        return res.status(401).json({Error: e})
    }
    let distance = req.params.distance * 1609.344;
    distance = distance.toString();
    const hospital = await Hospital.find({
        "geolocation": {
            $nearSphere: {
                $geometry: {
                    type: "Point",
                    coordinates: [req.params.longitude, req.params.latitude]
                },
                $minDistance: 0,
                $maxDistance: distance
            }
        }
    }).exec()
    res.json({data: hospital})
}

exports.destroyLatlon = async (req, res) => {

    try{
        await authorizationController.authorize(req.headers.key, true);
    }catch(e){
        return res.status(401).json({Error: e})
    }

    let distance = req.params.distance * 1609.344;
    distance = distance.toString();
    await Hospital.remove({
        "geolocation": {
            $nearSphere: {
                $geometry: {
                    type: "Point",
                    coordinates: [req.params.longitude, req.params.latitude]
                },
                $minDistance: 0,
                $maxDistance: distance
            }
        }
    }).exec()


    res.status(204).send()

}


exports.updateDB = async (req, res) => {
    const hospitals = await Hospital.find({}).exec()
    hospitals.forEach(async (oneHosp) => {
        oneHosp.geolocation = {
            coordinates: [
                parseFloat(oneHosp.location._longitude),
                parseFloat(oneHosp.location._latitude)
            ],
            type: "Point"
        };


        oneHosp.human_address = oneHosp.address + ", " + oneHosp.city + ", " + oneHosp.state + ", " + oneHosp.zip_code
        oneHosp.location = undefined;

        await oneHosp.save(oneHosp)
    });


    return res.json({data: "data migration complete"})
}