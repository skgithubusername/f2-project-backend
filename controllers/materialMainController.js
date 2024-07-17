// // const db = require('../models');
// // const multer = require('multer');
// // const path = require('path');

// // const MaterialMain = db.materialMains;

// // const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, 'Images');
// //     },
// //     filename: (req, file, cb) => {
// //         cb(null, Date.now() + path.extname(file.originalname));
// //     }
// // });

// // const upload = multer({
// //     storage: storage,
// //     limits: { fileSize: '1000000' },
// //     fileFilter: (req, file, cb) => {
// //         const fileTypes = /jpeg|jpg|png|gif/;
// //         const mimeType = fileTypes.test(file.mimetype);
// //         const extname = fileTypes.test(path.extname(file.originalname));

// //         if (mimeType && extname) {
// //             return cb(null, true);
// //         }
// //         cb('Give proper files format to upload');
// //     }
// // }).fields([
// //     { name: 'image', maxCount: 1 },
// //     { name: 'specification', maxCount: 1 }
// // ]);

// // const addMaterialMain = async (req, res) => {
// //     try {
// //         let info = {
// //             image: req.files['image'][0].path,
// //             title: req.body.title,
// //             desc: req.body.desc,
// //             specification: req.files['specification'][0].path,
// //             purpose: req.body.purpose,
// //         };

// //         if (!info.title) {
// //             return res.status(400).send('Title is required');
// //         }

// //         const materialMain = await MaterialMain.create(info);
// //         res.status(200).send(materialMain);
// //     } catch (error) {
// //         res.status(500).send(error.message);
// //         console.error(error);
// //     }
// // };

// // const getAllMaterialMains = async (req, res) => {
// //     try {
// //         let materialMains = await MaterialMain.findAll();
// //         res.status(200).send(materialMains);
// //     } catch (error) {
// //         res.status(500).send(error.message);
// //         console.error(error);
// //     }
// // };

// // const getOneMaterialMain = async (req, res) => {
// //     try {
// //         let id = req.params.id;
// //         let materialMain = await MaterialMain.findOne({ where: { id: id } });
// //         if (materialMain) {
// //             res.status(200).send(materialMain);
// //         } else {
// //             res.status(404).send('MaterialMain not found');
// //         }
// //     } catch (error) {
// //         res.status(500).send(error.message);
// //         console.error(error);
// //     }
// // };

// // const updateMaterialMain = async (req, res) => {
// //     try {
// //         let id = req.params.id;
// //         const [updated] = await MaterialMain.update(req.body, { where: { id: id } });
// //         if (updated) {
// //             const updatedMaterialMain = await MaterialMain.findOne({ where: { id: id } });
// //             res.status(200).send(updatedMaterialMain);
// //         } else {
// //             res.status(404).send('MaterialMain not found');
// //         }
// //     } catch (error) {
// //         res.status(500).send(error.message);
// //         console.error(error);
// //     }
// // };

// // const deleteMaterialMain = async (req, res) => {
// //     try {
// //         let id = req.params.id;
// //         const deleted = await MaterialMain.destroy({ where: { id: id } });
// //         if (deleted) {
// //             res.status(200).send('Data is Deleted!');
// //         } else {
// //             res.status(404).send('MaterialMain not found');
// //         }
// //     } catch (error) {
// //         res.status(500).send(error.message);
// //         console.error(error);
// //     }
// // };

// // module.exports = {
// //     addMaterialMain,
// //     getAllMaterialMains,
// //     getOneMaterialMain,
// //     updateMaterialMain,
// //     deleteMaterialMain,
// //     upload
// // };



















// const db = require('../models');
// const multer = require('multer');
// const path = require('path');

// const MaterialMain = db.materialMains;

// // Multer setup for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'Images'); // Destination folder for uploaded images
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Unique filename with timestamp
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: '1000000' }, // Limit file size to 1MB
//   fileFilter: (req, file, cb) => {
//     const fileTypes = /jpeg|jpg|png|gif/;
//     const mimeType = fileTypes.test(file.mimetype);
//     const extname = fileTypes.test(path.extname(file.originalname));

//     if (mimeType && extname) {
//       cb(null, true); // Accept the file
//     } else {
//       cb('Please upload files of proper format (jpeg, jpg, png, gif)'); // Reject the file
//     }
//   }
// }).fields([
//   { name: 'image', maxCount: 1 }, // Uploads a single image file
//   { name: 'specification', maxCount: 1 } // Uploads a single specification file
// ]);

// // 1. Create a new MaterialMain
// const addMaterialMain = async (req, res) => {
//   try {
//     if (!req.files || !req.files['image'] || !req.files['specification']) {
//       return res.status(400).send('Image and Specification files are required');
//     }

//     let info = {
//       image: req.files['image'][0].path,
//       title: req.body.title,
//       desc: req.body.desc,
//       specification: req.files['specification'][0].path,
//       purpose: req.body.purpose,
//     };

//     if (!info.title) {
//       return res.status(400).send('Title is required');
//     }

//     const materialMain = await MaterialMain.create(info);
//     res.status(200).send(materialMain);
//   } catch (error) {
//     res.status(500).send(error.message);
//     console.error(error);
//   }
// };

// // 2. Get all MaterialMains
// const getAllMaterialMains = async (req, res) => {
//   try {
//     let materialMains = await MaterialMain.findAll();
//     res.status(200).send(materialMains);
//   } catch (error) {
//     res.status(500).send(error.message);
//     console.error(error);
//   }
// };

// // 3. Get a single MaterialMain by ID
// const getOneMaterialMain = async (req, res) => {
//   try {
//     let id = req.params.id;
//     let materialMain = await MaterialMain.findOne({ where: { id: id } });
//     if (materialMain) {
//       res.status(200).send(materialMain);
//     } else {
//       res.status(404).send('MaterialMain not found');
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//     console.error(error);
//   }
// };

// // 4. Update a MaterialMain by ID
// const updateMaterialMain = async (req, res) => {
//   try {
//     let id = req.params.id;
//     const [updated] = await MaterialMain.update(req.body, { where: { id: id } });
//     if (updated) {
//       const updatedMaterialMain = await MaterialMain.findOne({ where: { id: id } });
//       res.status(200).send(updatedMaterialMain);
//     } else {
//       res.status(404).send('MaterialMain not found');
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//     console.error(error);
//   }
// };

// // 5. Delete a MaterialMain by ID
// const deleteMaterialMain = async (req, res) => {
//   try {
//     let id = req.params.id;
//     const deleted = await MaterialMain.destroy({ where: { id: id } });
//     if (deleted) {
//       res.status(200).send('MaterialMain deleted successfully');
//     } else {
//       res.status(404).send('MaterialMain not found');
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//     console.error(error);
//   }
// };

// module.exports = {
//   addMaterialMain,
//   getAllMaterialMains,
//   getOneMaterialMain,
//   updateMaterialMain,
//   deleteMaterialMain,
//   upload
// };







































const db = require('../models');
const multer = require('multer');
const path = require('path');

const MaterialMain = db.materialMains;

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

// 1. Create MaterialMain
const addMaterialMain = async (req, res) => {
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

        const materialMain = await MaterialMain.create(info);
        res.status(200).send(materialMain);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

// 2. Get all MaterialMains
const getAllMaterialMains = async (req, res) => {
    try {
        let materialMains = await MaterialMain.findAll();
        res.status(200).send(materialMains);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

// 3. Get single MaterialMain
const getOneMaterialMain = async (req, res) => {
    try {
        let id = req.params.id;
        let materialMain = await MaterialMain.findOne({ where: { id: id } });
        if (materialMain) {
            res.status(200).send(materialMain);
        } else {
            res.status(404).send('MaterialMain not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

// 4. Update MaterialMain
const updateMaterialMain = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, desc, purpose } = req.body;
        console.log('Received update request for ID:', id);
        console.log('Request body:', req.body);

        const materialMain = await MaterialMain.findOne({ where: { id } });

        if (!materialMain) {
            console.log('MaterialMain not found');
            return res.status(404).send('MaterialMain not found');
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
        await MaterialMain.update(updatedData, { where: { id } });

        const updatedMaterialMain = await MaterialMain.findOne({ where: { id } });
        console.log('Updated MaterialMain:', updatedMaterialMain);
        res.status(200).send(updatedMaterialMain);

    } catch (error) {
        console.error('Error updating materialMain:', error);
        res.status(500).send(error.message);
    }
};

// 5. Delete MaterialMain by id
const deleteMaterialMain = async (req, res) => {
    try {
        let id = req.params.id;
        const deleted = await MaterialMain.destroy({ where: { id: id } });
        if (deleted) {
            res.status(200).send('Data is Deleted!');
        } else {
            res.status(404).send('MaterialMain not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

module.exports = {
    addMaterialMain,
    getAllMaterialMains,
    getOneMaterialMain,
    updateMaterialMain,
    deleteMaterialMain,
    upload
};
































