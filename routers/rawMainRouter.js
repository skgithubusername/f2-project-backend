







// const express = require('express');
// const rawMainController = require('../controllers/rawMainController');
// const multer = require('multer');
// const path = require('path'); // Import the path module

// // Configure multer storage
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'Images');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: '1000000' },
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /jpeg|jpg|png|gif/;
//         const mimeType = fileTypes.test(file.mimetype);
//         const extname = fileTypes.test(path.extname(file.originalname));

//         if (mimeType && extname) {
//             return cb(null, true);
//         }
//         cb('Give proper files format to upload');
//     }
// });

// const router = express.Router();

// router.post('/addRawMain', upload.fields([{ name: 'image' }, { name: 'specification' }]), rawMainController.addRawMain);
// router.get('/allRawMains', rawMainController.getAllRawMains);
// router.get('/:id', rawMainController.getOneRawMain);
// router.put('/:id', upload.fields([{ name: 'image' }, { name: 'specification' }]), rawMainController.updateRawMain);
// router.delete('/:id', rawMainController.deleteRawMain);

// module.exports = router;











































const express = require('express');
const rawMainController = require('../controllers/rawMainController');
const multer = require('multer');
const path = require('path'); // Import the path module

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

router.post('/addRawMain', upload.fields([{ name: 'image' }, { name: 'specification' }]), rawMainController.addRawMain);
router.get('/allRawMains', rawMainController.getAllRawMains);
router.get('/:id', rawMainController.getOneRawMain);
router.put('/:id', upload.fields([{ name: 'image' }, { name: 'specification' }]), rawMainController.updateRawMain);
router.delete('/:id', rawMainController.deleteRawMain);

module.exports = router;
