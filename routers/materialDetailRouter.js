// const express = require('express');
// const materialDetailController = require('../controllers/materialDetailController');

// const router = express.Router();

// router.post('/addMaterialDetail', materialDetailController.upload, materialDetailController.addMaterialDetail);
// router.get('/allMaterialDetails', materialDetailController.getAllMaterialDetails);
// router.get('/:id', materialDetailController.getOneMaterialDetail);
// router.put('/:id', materialDetailController.updateMaterialDetail);
// router.delete('/:id', materialDetailController.deleteMaterialDetail);

// module.exports = router;













const express = require('express');
const materialDetailController = require('../controllers/materialDetailController');

const router = express.Router();

router.post('/addMaterialDetail', materialDetailController.upload, materialDetailController.addMaterialDetail);
router.get('/allMaterialDetails', materialDetailController.getAllMaterialDetails);
router.get('/:id', materialDetailController.getOneMaterialDetail);
router.put('/:id', materialDetailController.upload, materialDetailController.updateMaterialDetail);
router.delete('/:id', materialDetailController.deleteMaterialDetail);

module.exports = router;
