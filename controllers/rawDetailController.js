// const db = require('../models');
// const multer = require('multer');
// const path = require('path');

// const RawDetail = db.rawDetails;

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

// const addRawDetail = async (req, res) => {
//     try {
//         let info = {
//             image: req.file.path,
//             title: req.body.title,
//             desc: req.body.desc,
//         };

//         if (!info.title) {
//             return res.status(400).send('Title is required');
//         }

//         const rawDetail = await RawDetail.create(info);
//         res.status(200).send(rawDetail);
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const getAllRawDetails = async (req, res) => {
//     try {
//         let rawDetails = await RawDetail.findAll();
//         res.status(200).send(rawDetails);
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const getOneRawDetail = async (req, res) => {
//     try {
//         let id = req.params.id;
//         let rawDetail = await RawDetail.findOne({ where: { id: id } });
//         if (rawDetail) {
//             res.status(200).send(rawDetail);
//         } else {
//             res.status(404).send('RawDetail not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const updateRawDetail = async (req, res) => {
//     try {
//         let id = req.params.id;
//         const [updated] = await RawDetail.update(req.body, { where: { id: id } });
//         if (updated) {
//             const updatedRawDetail = await RawDetail.findOne({ where: { id: id } });
//             res.status(200).send(updatedRawDetail);
//         } else {
//             res.status(404).send('RawDetail not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const deleteRawDetail = async (req, res) => {
//     try {
//         let id = req.params.id;
//         const deleted = await RawDetail.destroy({ where: { id: id } });
//         if (deleted) {
//             res.status(200).send('Data is Deleted!');
//         } else {
//             res.status(404).send('RawDetail not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// module.exports = {
//     addRawDetail,
//     getAllRawDetails,
//     getOneRawDetail,
//     updateRawDetail,
//     deleteRawDetail,
//     upload
// };




















const db = require('../models');
const multer = require('multer');
const path = require('path');

const RawDetail = db.rawDetails;

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

// CRUD operations for RawDetails
const addRawDetail = async (req, res) => {
    try {
        const info = {
            image: req.file.path,
            title: req.body.title,
            desc: req.body.desc,
        };

        if (!info.title) {
            return res.status(400).send('Title is required');
        }

        const rawDetail = await RawDetail.create(info);
        res.status(200).send(rawDetail);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const getAllRawDetails = async (req, res) => {
    try {
        const rawDetails = await RawDetail.findAll();
        res.status(200).send(rawDetails);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const getOneRawDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const rawDetail = await RawDetail.findOne({ where: { id: id } });
        if (rawDetail) {
            res.status(200).send(rawDetail);
        } else {
            res.status(404).send('RawDetail not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const updateRawDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, desc } = req.body;

        const rawDetail = await RawDetail.findOne({ where: { id: id } });

        if (!rawDetail) {
            return res.status(404).send('RawDetail not found');
        }

        const updatedData = { title, desc };

        if (req.file) {
            updatedData.image = req.file.path;
        }

        await RawDetail.update(updatedData, { where: { id: id } });

        const updatedRawDetail = await RawDetail.findOne({ where: { id: id } });
        res.status(200).send(updatedRawDetail);
    } catch (error) {
        console.error('Error updating RawDetail:', error);
        res.status(500).send(error.message);
    }
};

const deleteRawDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await RawDetail.destroy({ where: { id: id } });
        if (deleted) {
            res.status(200).send('Data is Deleted!');
        } else {
            res.status(404).send('RawDetail not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

module.exports = {
    addRawDetail,
    getAllRawDetails,
    getOneRawDetail,
    updateRawDetail,
    deleteRawDetail,
    upload
};
