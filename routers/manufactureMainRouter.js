// const express = require('express');
// const manufactureMainController = require('../controllers/manufactureMainController');

// const router = express.Router();

// router.post('/addManufactureMain', manufactureMainController.upload, manufactureMainController.addManufactureMain);
// router.get('/allManufactureMains', manufactureMainController.getAllManufactureMains);
// router.get('/:id', manufactureMainController.getOneManufactureMain);
// router.put('/:id', manufactureMainController.updateManufactureMain);
// router.delete('/:id', manufactureMainController.deleteManufactureMain);

// module.exports = router;















const express = require('express');
const manufactureMainController = require('../controllers/manufactureMainController');
const multer = require('multer');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if (mimeType && extname) {
            return cb(null, true);
        }
        cb('Give proper files format to upload');
    }
});

const router = express.Router();

router.post('/addManufactureMain', upload.fields([{ name: 'image' }, { name: 'specification' }]), manufactureMainController.addManufactureMain);
router.get('/allManufactureMains', manufactureMainController.getAllManufactureMains);
router.get('/:id', manufactureMainController.getOneManufactureMain);
router.put('/:id', upload.fields([{ name: 'image' }, { name: 'specification' }]), manufactureMainController.updateManufactureMain);
router.delete('/:id', manufactureMainController.deleteManufactureMain);

module.exports = router;
