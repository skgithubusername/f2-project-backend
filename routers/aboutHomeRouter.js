const express = require('express');
const aboutHomeController = require('../controllers/aboutHomeController');

const router = express.Router();

router.post('/addAboutHome', aboutHomeController.addAboutHome);
router.get('/allAboutHomes', aboutHomeController.getAllAboutHomes);
router.get('/:id', aboutHomeController.getOneAboutHome);
router.put('/:id', aboutHomeController.updateAboutHome);
router.delete('/:id', aboutHomeController.deleteAboutHome);

module.exports = router;
