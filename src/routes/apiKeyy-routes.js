const express = require('express');
const apiKeyController = require('../controllers/apiKey-controller')
const {catchErrors} = require('../middleware/error-handlers')

const router = express.Router();



// get all keys
router.get('/keys', catchErrors(apiKeyController.getAllKeys))

// request one key from the server

router.get('/key', catchErrors(apiKeyController.getKey))

// request key's meta-data


router.get('/key/:key', catchErrors(apiKeyController.getKeyMetaData))
router.delete('/key/:key', catchErrors(apiKeyController.destroyKeyMetaData))


// add new apiKey with level
router.post('/key/:key/:level', catchErrors(apiKeyController.storeKeyLevel))


module.exports = router;