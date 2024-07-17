// const db = require('../models');
// const multer = require('multer');
// const path = require('path');

// const ManufactureDetail = db.manufactureDetails;

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

// const addManufactureDetail = async (req, res) => {
//     try {
//         let info = {
//             image: req.file.path,
//             title: req.body.title,
//             desc: req.body.desc,
//         };

//         if (!info.title) {
//             return res.status(400).send('Title is required');
//         }

//         const manufactureDetail = await ManufactureDetail.create(info);
//         res.status(200).send(manufactureDetail);
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const getAllManufactureDetails = async (req, res) => {
//     try {
//         let manufactureDetails = await ManufactureDetail.findAll();
//         res.status(200).send(manufactureDetails);
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const getOneManufactureDetail = async (req, res) => {
//     try {
//         let id = req.params.id;
//         let manufactureDetail = await ManufactureDetail.findOne({ where: { id: id } });
//         if (manufactureDetail) {
//             res.status(200).send(manufactureDetail);
//         } else {
//             res.status(404).send('ManufactureDetail not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const updateManufactureDetail = async (req, res) => {
//     try {
//         let id = req.params.id;
//         const [updated] = await ManufactureDetail.update(req.body, { where: { id: id } });
//         if (updated) {
//             const updatedManufactureDetail = await ManufactureDetail.findOne({ where: { id: id } });
//             res.status(200).send(updatedManufactureDetail);
//         } else {
//             res.status(404).send('ManufactureDetail not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const deleteManufactureDetail = async (req, res) => {
//     try {
//         let id = req.params.id;
//         const deleted = await ManufactureDetail.destroy({ where: { id: id } });
//         if (deleted) {
//             res.status(200).send('Data is Deleted!');
//         } else {
//             res.status(404).send('ManufactureDetail not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// module.exports = {
//     addManufactureDetail,
//     getAllManufactureDetails,
//     getOneManufactureDetail,
//     updateManufactureDetail,
//     deleteManufactureDetail,
//     upload
// };
























const db = require('../models');
const multer = require('multer');
const path = require('path');

const ManufactureDetail = db.manufactureDetails;

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
}).single('image');

const addManufactureDetail = async (req, res) => {
    try {
        let info = {
            image: req.file ? req.file.path : null,
            title: req.body.title,
            desc: req.body.desc,
        };

        if (!info.title) {
            return res.status(400).send('Title is required');
        }

        const manufactureDetail = await ManufactureDetail.create(info);
        res.status(200).send(manufactureDetail);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const getAllManufactureDetails = async (req, res) => {
    try {
        let manufactureDetails = await ManufactureDetail.findAll();
        res.status(200).send(manufactureDetails);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const getOneManufactureDetail = async (req, res) => {
    try {
        let id = req.params.id;
        let manufactureDetail = await ManufactureDetail.findOne({ where: { id: id } });
        if (manufactureDetail) {
            res.status(200).send(manufactureDetail);
        } else {
            res.status(404).send('ManufactureDetail not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};








const updateManufactureDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, desc } = req.body;
        
        const manufactureDetail = await ManufactureDetail.findOne({ where: { id: id } });

        if (!manufactureDetail) {
            return res.status(404).send('ManufactureDetail not found');
        }

        const updatedData = { title, desc };

        if (req.file) {
            updatedData.image = req.file.path;
        }

        await ManufactureDetail.update(updatedData, { where: { id: id } });

        const updatedManufactureDetail = await ManufactureDetail.findOne({ where: { id: id } });
        res.status(200).send(updatedManufactureDetail);
    } catch (error) {
        console.error('Error updating ManufactureDetail:', error);
        res.status(500).send(error.message);
    }
};










// const updateManufactureDetail = async (req, res) => {
//     try {
//         let id = req.params.id;
//         const [updated] = await ManufactureDetail.update(req.body, { where: { id: id } });
//         if (updated) {
//             const updatedManufactureDetail = await ManufactureDetail.findOne({ where: { id: id } });
//             res.status(200).send(updatedManufactureDetail);
//         } else {
//             res.status(404).send('ManufactureDetail not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

const deleteManufactureDetail = async (req, res) => {
    try {
        let id = req.params.id;
        const deleted = await ManufactureDetail.destroy({ where: { id: id } });
        if (deleted) {
            res.status(200).send('Data is Deleted!');
        } else {
            res.status(404).send('ManufactureDetail not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

module.exports = {
    addManufactureDetail,
    getAllManufactureDetails,
    getOneManufactureDetail,
    updateManufactureDetail,
    deleteManufactureDetail,
    upload
};
