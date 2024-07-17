// const express = require('express');
// const manufactureDetailController = require('../controllers/manufactureDetailController');

// const router = express.Router();

// router.post('/addManufactureDetail', manufactureDetailController.upload, manufactureDetailController.addManufactureDetail);
// router.get('/allManufactureDetails', manufactureDetailController.getAllManufactureDetails);
// router.get('/:id', manufactureDetailController.getOneManufactureDetail);
// router.put('/:id', manufactureDetailController.updateManufactureDetail);
// router.delete('/:id', manufactureDetailController.deleteManufactureDetail);

// module.exports = router;













const express = require('express');
const manufactureDetailController = require('../controllers/manufactureDetailController');

const router = express.Router();

router.post('/addManufactureDetail', manufactureDetailController.upload, manufactureDetailController.addManufactureDetail);
router.get('/allManufactureDetails', manufactureDetailController.getAllManufactureDetails);
router.get('/:id', manufactureDetailController.getOneManufactureDetail);
router.put('/:id', manufactureDetailController.upload, manufactureDetailController.updateManufactureDetail); // Ensure multer middleware added here
router.delete('/:id', manufactureDetailController.deleteManufactureDetail);

module.exports = router;
