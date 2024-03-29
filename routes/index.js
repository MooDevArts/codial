const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

//sending to user router
router.use('/user', require('./users'));

module.exports = router;