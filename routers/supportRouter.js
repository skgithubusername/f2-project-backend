const express = require('express');
const supportController = require('../controllers/supportController');

const router = express.Router();

router.post('/addSupport', supportController.addSupport);
router.get('/allSupports', supportController.getAllSupports);
router.get('/:id', supportController.getOneSupport);
router.put('/:id', supportController.updateSupport);
router.delete('/:id', supportController.deleteSupport);

module.exports = router;





















// const express = require('express');
// const supportController = require('../controllers/supportController');

// const router = express.Router();

// router.post('/addSupport', supportController.addSupport);
// router.get('/allSupports', supportController.getAllSupports);
// router.get('/:id', supportController.getOneSupport);
// router.put('/:id', supportController.updateSupport);
// router.delete('/:id', supportController.deleteSupport);

// module.exports = router;
