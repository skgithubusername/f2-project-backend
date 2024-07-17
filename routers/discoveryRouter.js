

// const express = require('express');
// const discoveryController = require('../controllers/discoveryController');

// // router
// const router = express.Router();


// // use routers

// router.post('/addDiscovery',discoveryController.upload , discoveryController.addDiscovery);
// router.get('/allDiscoverys', discoveryController.getAllDiscoverys);
// router.get('/:id', discoveryController.getOneDiscovery);
// router.put('/:id', discoveryController.updateDiscovery);
// router.delete('/:id', discoveryController.deleteDiscovery);

// module.exports = router;

































const express = require('express');
const discoveryController = require('../controllers/discoveryController');

const router = express.Router();

router.post('/addDiscovery', discoveryController.upload, discoveryController.addDiscovery);
router.get('/allDiscoverys', discoveryController.getAllDiscoverys);
router.get('/:id', discoveryController.getOneDiscovery);
router.put('/:id', discoveryController.upload, discoveryController.updateDiscovery); // multer middleware added here
router.delete('/:id', discoveryController.deleteDiscovery);

module.exports = router;
