const express = require('express');
const hospitalController = require('../controllers/hospital-controller')
const {catchErrors} = require('../middleware/error-handlers')

const router = express.Router();

//hospitals
router.get('/', catchErrors(hospitalController.index))
router.post('/', catchErrors(hospitalController.store))
router.delete('/:id', catchErrors(hospitalController.destroy))

// Id  .........................
router.get('/id/:number', catchErrors(hospitalController.getId))
router.patch('/id/:number', catchErrors(hospitalController.updateId))
router.delete('/id/:number', catchErrors(hospitalController.destroyId))

//city
router.get('/city/:name', catchErrors(hospitalController.getCity))
router.delete('/city/:name' ,catchErrors(hospitalController.destroyCity))

//state
router.get('/state/:name', catchErrors(hospitalController.getState))
router.delete('/state/:name' ,catchErrors(hospitalController.destroyState))

//county
router.get('/county/:name', catchErrors(hospitalController.getCounty))
router.delete('/county/:name' ,catchErrors(hospitalController.destroyCounty))

// State City ///////////////wong ////////////

router.get('/statecity/:state/:city', catchErrors(hospitalController.getStateCity))
router.delete('/statecity/:state/:city' ,catchErrors(hospitalController.destroyStateCity))

// name....................................

router.get('/name/:name', catchErrors(hospitalController.getName))
router.delete('/name/:name' ,catchErrors(hospitalController.destroyName))

// type .................................

router.get('/type/:type', catchErrors(hospitalController.getType))
router.delete('/type/:type' ,catchErrors(hospitalController.destroyType))

// ownership.............................

router.get('/ownership/:owner', catchErrors(hospitalController.getOwnership))
router.delete('/ownership/:owner' ,catchErrors(hospitalController.destroyOwnership))

// emergency................................

router.get('/emergency/:available', catchErrors(hospitalController.getYes))
router.delete('/emergency/:available' ,catchErrors(hospitalController.destroyYes))

// latlon...........................................

router.get('/latlon/:longitude/:latitude/:distance', catchErrors(hospitalController.getLatlon))
router.delete('/latlon/:longitude/:latitude/:distance' ,catchErrors(hospitalController.destroyLatlon))

router.get('/updateDB' , catchErrors(hospitalController.updateDB))

module.exports = router;