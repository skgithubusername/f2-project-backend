// const express = require('express');
// const rawDetailController = require('../controllers/rawDetailController');

// const router = express.Router();

// router.post('/addRawDetail', rawDetailController.upload, rawDetailController.addRawDetail);
// router.get('/allRawDetails', rawDetailController.getAllRawDetails);
// router.get('/:id', rawDetailController.getOneRawDetail);
// router.put('/:id', rawDetailController.updateRawDetail);
// router.delete('/:id', rawDetailController.deleteRawDetail);

// module.exports = router;










const express = require('express');
const rawDetailController = require('../controllers/rawDetailController');

const router = express.Router();

router.post('/addRawDetail', rawDetailController.upload, rawDetailController.addRawDetail);
router.get('/allRawDetails', rawDetailController.getAllRawDetails);
router.get('/:id', rawDetailController.getOneRawDetail);
router.put('/:id', rawDetailController.upload, rawDetailController.updateRawDetail);
router.delete('/:id', rawDetailController.deleteRawDetail);

module.exports = router;
