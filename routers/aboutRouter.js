const express = require('express');
const aboutController = require('../controllers/aboutController');

const router = express.Router();

router.post('/addAbout', aboutController.addAbout);
router.get('/allAbouts', aboutController.getAllAbouts);
router.get('/:id', aboutController.getOneAbout);
router.put('/:id', aboutController.updateAbout);
router.delete('/:id', aboutController.deleteAbout);

module.exports = router;
