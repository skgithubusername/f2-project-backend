// const db = require('../models');
// const multer = require('multer');
// const path = require('path');

// const MaterialDetail = db.materialDetails;

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
// }).single('image');

// const addMaterialDetail = async (req, res) => {
//     try {
//         let info = {
//             image: req.file.path,
//             title: req.body.title,
//             desc: req.body.desc,
//         };

//         if (!info.title) {
//             return res.status(400).send('Title is required');
//         }

//         const materialDetail = await MaterialDetail.create(info);
//         res.status(200).send(materialDetail);
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const getAllMaterialDetails = async (req, res) => {
//     try {
//         let materialDetails = await MaterialDetail.findAll();
//         res.status(200).send(materialDetails);
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const getOneMaterialDetail = async (req, res) => {
//     try {
//         let id = req.params.id;
//         let materialDetail = await MaterialDetail.findOne({ where: { id: id } });
//         if (materialDetail) {
//             res.status(200).send(materialDetail);
//         } else {
//             res.status(404).send('MaterialDetail not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const updateMaterialDetail = async (req, res) => {
//     try {
//         let id = req.params.id;
//         const [updated] = await MaterialDetail.update(req.body, { where: { id: id } });
//         if (updated) {
//             const updatedMaterialDetail = await MaterialDetail.findOne({ where: { id: id } });
//             res.status(200).send(updatedMaterialDetail);
//         } else {
//             res.status(404).send('MaterialDetail not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const deleteMaterialDetail = async (req, res) => {
//     try {
//         let id = req.params.id;
//         const deleted = await MaterialDetail.destroy({ where: { id: id } });
//         if (deleted) {
//             res.status(200).send('Data is Deleted!');
//         } else {
//             res.status(404).send('MaterialDetail not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// module.exports = {
//     addMaterialDetail,
//     getAllMaterialDetails,
//     getOneMaterialDetail,
//     updateMaterialDetail,
//     deleteMaterialDetail,
//     upload
// };
























const db = require('../models');
const multer = require('multer');
const path = require('path');

const MaterialDetail = db.materialDetails;

// Multer configuration
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
    limits: { fileSize: '1000000' }, // Limit file size to 1MB
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if (mimeType && extname) {
            return cb(null, true);
        }
        cb('Only image files are allowed (jpeg, jpg, png, gif)');
    }
}).single('image'); // 'image' should match the field name in FormData

// CRUD operations for MaterialDetails
const addMaterialDetail = async (req, res) => {
    try {
        const info = {
            image: req.file.path,
            title: req.body.title,
            desc: req.body.desc,
        };

        if (!info.title) {
            return res.status(400).send('Title is required');
        }

        const materialDetail = await MaterialDetail.create(info);
        res.status(200).send(materialDetail);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const getAllMaterialDetails = async (req, res) => {
    try {
        const materialDetails = await MaterialDetail.findAll();
        res.status(200).send(materialDetails);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const getOneMaterialDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const materialDetail = await MaterialDetail.findOne({ where: { id: id } });
        if (materialDetail) {
            res.status(200).send(materialDetail);
        } else {
            res.status(404).send('MaterialDetail not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const updateMaterialDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, desc } = req.body;

        const materialDetail = await MaterialDetail.findOne({ where: { id: id } });

        if (!materialDetail) {
            return res.status(404).send('MaterialDetail not found');
        }

        const updatedData = { title, desc };

        if (req.file) {
            updatedData.image = req.file.path;
        }

        await MaterialDetail.update(updatedData, { where: { id: id } });

        const updatedMaterialDetail = await MaterialDetail.findOne({ where: { id: id } });
        res.status(200).send(updatedMaterialDetail);
    } catch (error) {
        console.error('Error updating MaterialDetail:', error);
        res.status(500).send(error.message);
    }
};

const deleteMaterialDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await MaterialDetail.destroy({ where: { id: id } });
        if (deleted) {
            res.status(200).send('Data is Deleted!');
        } else {
            res.status(404).send('MaterialDetail not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

module.exports = {
    addMaterialDetail,
    getAllMaterialDetails,
    getOneMaterialDetail,
    updateMaterialDetail,
    deleteMaterialDetail,
    upload
};













