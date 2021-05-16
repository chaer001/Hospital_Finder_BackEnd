const express = require('express');
const userController = require('../controllers/user-controller')
const {catchErrors} = require('../middleware/error-handlers')

const router = express.Router();

router.get('/', catchErrors(userController.index))
router.post('/', catchErrors(userController.store))
router.get('/:id', catchErrors(userController.show))
router.patch('/:id', catchErrors(userController.update))
router.delete('/:id', catchErrors(userController.destroy))


/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});



module.exports = router;
