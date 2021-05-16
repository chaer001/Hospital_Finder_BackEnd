const express = require('express');
const userRoutes = require('./user-routes')
const apiKeyRoutes = require('./apiKeyy-routes')
const hospitalRoutes = require('./hospital-routes')

const router = express.Router()


//router.use('/users' , userRoutes)  // ... / api/users
router.use('/apiKeys' , apiKeyRoutes)
router.use('/hospitals' , hospitalRoutes)
module.exports = router