const express = require('express');
const authControllers = require('../../controllers/authController');
const router = express.Router();

router.get('/login', authControllers.loginGet);
router.post('/login', authControllers.loginPost);
router.get('/register', authControllers.registerGet);
router.post('/register', authControllers.registerPost);


module.exports = router;