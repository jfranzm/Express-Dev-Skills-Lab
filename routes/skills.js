const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');


// WORK ON PLACING FUNCTIONS IN MODELno
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.get('/:id/edit', skillsCtrl.edit);
router.put('/:id', skillsCtrl.update);

module.exports = router;