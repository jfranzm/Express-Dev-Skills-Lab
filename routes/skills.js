const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');


// WORK ON PLACING FUNCTIONS IN MODELno
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create)
router.post('/skills/:id', skillsCtrl.delete)
module.exports = router;