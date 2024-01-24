const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/lol', homeController.lol);
router.get('/', homeController.home);

module.exports = router;