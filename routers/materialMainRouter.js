// const express = require('express');
// const materialMainController = require('../controllers/materialMainController');

// const router = express.Router();

// router.post('/addMaterialMain', materialMainController.upload, materialMainController.addMaterialMain);
// router.get('/allMaterialMains', materialMainController.getAllMaterialMains);
// router.get('/:id', materialMainController.getOneMaterialMain);
// router.put('/:id', materialMainController.updateMaterialMain); // Adjusted this line
// router.delete('/:id', materialMainController.deleteMaterialMain);

// module.exports = router;
























const express = require('express');
const materialMainController = require('../controllers/materialMainController');
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

router.post('/addMaterialMain', upload.fields([{ name: 'image' }, { name: 'specification' }]), materialMainController.addMaterialMain);
router.get('/allMaterialMains', materialMainController.getAllMaterialMains);
router.get('/:id', materialMainController.getOneMaterialMain);
router.put('/:id', upload.fields([{ name: 'image' }, { name: 'specification' }]), materialMainController.updateMaterialMain);
router.delete('/:id', materialMainController.deleteMaterialMain);

module.exports = router;
