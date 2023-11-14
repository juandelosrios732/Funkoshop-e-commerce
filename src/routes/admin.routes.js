const express = require('express');
const adminControllers = require('../../controllers/adminController');
const router = express.Router();

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.adminCreateGet);
router.post('/create/add', adminControllers.adminCreatePost);
router.get('/edit/:id', adminControllers.adminEditGet );
router.put('/edit/:id', adminControllers.adminEditPut );
router.delete('/edit/:id', adminControllers.adminDelete);


module.exports = router;
