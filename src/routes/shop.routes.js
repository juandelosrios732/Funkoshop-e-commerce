const express = require('express');
const shopControllers = require('../../controllers/shopController');
const router = express.Router();

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.shopItemGet);
router.post('/item/:id/add', shopControllers.shopItemPost);
router.get('/cart', shopControllers.shopCart);
router.post('/cart', shopControllers.shopCartPost);


module.exports = router;
