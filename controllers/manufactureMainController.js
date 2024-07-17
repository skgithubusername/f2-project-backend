// const db = require('../models');
// const multer = require('multer');
// const path = require('path');

// const ManufactureMain = db.manufactureMains;

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
// }).fields([
//     { name: 'image', maxCount: 1 },
//     { name: 'specification', maxCount: 1 }
// ]);

// const addManufactureMain = async (req, res) => {
//     try {
//         let info = {
//             image: req.files['image'][0].path,
//             title: req.body.title,
//             desc: req.body.desc,
//             specification: req.files['specification'][0].path,
//             purpose: req.body.purpose,
//         };

//         if (!info.title) {
//             return res.status(400).send('Title is required');
//         }

//         const manufactureMain = await ManufactureMain.create(info);
//         res.status(200).send(manufactureMain);
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const getAllManufactureMains = async (req, res) => {
//     try {
//         let manufactureMains = await ManufactureMain.findAll();
//         res.status(200).send(manufactureMains);
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const getOneManufactureMain = async (req, res) => {
//     try {
//         let id = req.params.id;
//         let manufactureMain = await ManufactureMain.findOne({ where: { id: id } });
//         if (manufactureMain) {
//             res.status(200).send(manufactureMain);
//         } else {
//             res.status(404).send('ManufactureMain not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const updateManufactureMain = async (req, res) => {
//     try {
//         let id = req.params.id;
//         const [updated] = await ManufactureMain.update(req.body, { where: { id: id } });
//         if (updated) {
//             const updatedManufactureMain = await ManufactureMain.findOne({ where: { id: id } });
//             res.status(200).send(updatedManufactureMain);
//         } else {
//             res.status(404).send('ManufactureMain not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const deleteManufactureMain = async (req, res) => {
//     try {
//         let id = req.params.id;
//         const deleted = await ManufactureMain.destroy({ where: { id: id } });
//         if (deleted) {
//             res.status(200).send('Data is Deleted!');
//         } else {
//             res.status(404).send('ManufactureMain not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// module.exports = {
//     addManufactureMain,
//     getAllManufactureMains,
//     getOneManufactureMain,
//     updateManufactureMain,
//     deleteManufactureMain,
//     upload
// };
































const db = require('../models');
const multer = require('multer');
const path = require('path');

const ManufactureMain = db.manufactureMains;

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
}).fields([
    { name: 'image', maxCount: 1 },
    { name: 'specification', maxCount: 1 }
]);

// 1. Create ManufactureMain
const addManufactureMain = async (req, res) => {
    try {
        let info = {
            image: req.files['image'][0].path,
            specification: req.files['specification'][0].path,
            title: req.body.title,
            desc: req.body.desc,
            purpose: req.body.purpose,
        };

        if (!info.title) {
            return res.status(400).send('Title is required');
        }

        const manufactureMain = await ManufactureMain.create(info);
        res.status(200).send(manufactureMain);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

// 2. Get all ManufactureMains
const getAllManufactureMains = async (req, res) => {
    try {
        let manufactureMains = await ManufactureMain.findAll();
        res.status(200).send(manufactureMains);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

// 3. Get single ManufactureMain
const getOneManufactureMain = async (req, res) => {
    try {
        let id = req.params.id;
        let manufactureMain = await ManufactureMain.findOne({ where: { id: id } });
        if (manufactureMain) {
            res.status(200).send(manufactureMain);
        } else {
            res.status(404).send('ManufactureMain not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

// 4. Update ManufactureMain
const updateManufactureMain = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, desc, purpose } = req.body;
        console.log('Received update request for ID:', id);
        console.log('Request body:', req.body);

        const manufactureMain = await ManufactureMain.findOne({ where: { id } });

        if (!manufactureMain) {
            console.log('ManufactureMain not found');
            return res.status(404).send('ManufactureMain not found');
        }

        let updatedData = { title, desc, purpose };

        // Handle the image and specification updates if new files are uploaded
        if (req.files) {
            console.log('Received files:', req.files);
            if (req.files.image) {
                updatedData.image = req.files.image[0].path;
            }
            if (req.files.specification) {
                updatedData.specification = req.files.specification[0].path;
            }
        }

        console.log('Updated data:', updatedData);
        await ManufactureMain.update(updatedData, { where: { id } });

        const updatedManufactureMain = await ManufactureMain.findOne({ where: { id } });
        console.log('Updated ManufactureMain:', updatedManufactureMain);
        res.status(200).send(updatedManufactureMain);

    } catch (error) {
        console.error('Error updating manufactureMain:', error);
        res.status(500).send(error.message);
    }
};

// 5. Delete ManufactureMain by id
const deleteManufactureMain = async (req, res) => {
    try {
        let id = req.params.id;
        const deleted = await ManufactureMain.destroy({ where: { id: id } });
        if (deleted) {
            res.status(200).send('Data is Deleted!');
        } else {
            res.status(404).send('ManufactureMain not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

module.exports = {
    addManufactureMain,
    getAllManufactureMains,
    getOneManufactureMain,
    updateManufactureMain,
    deleteManufactureMain,
    upload
};
