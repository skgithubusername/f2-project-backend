// // const db = require('../models');
// // const multer = require('multer');
// // const path = require('path');

// // const RawMain = db.rawMains;

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

// // const addRawMain = async (req, res) => {
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

// //         const rawMain = await RawMain.create(info);
// //         res.status(200).send(rawMain);
// //     } catch (error) {
// //         res.status(500).send(error.message);
// //         console.error(error);
// //     }
// // };

// // const getAllRawMains = async (req, res) => {
// //     try {
// //         let rawMains = await RawMain.findAll();
// //         res.status(200).send(rawMains);
// //     } catch (error) {
// //         res.status(500).send(error.message);
// //         console.error(error);
// //     }
// // };

// // const getOneRawMain = async (req, res) => {
// //     try {
// //         let id = req.params.id;
// //         let rawMain = await RawMain.findOne({ where: { id: id } });
// //         if (rawMain) {
// //             res.status(200).send(rawMain);
// //         } else {
// //             res.status(404).send('RawMain not found');
// //         }
// //     } catch (error) {
// //         res.status(500).send(error.message);
// //         console.error(error);
// //     }
// // };





// // const updateRawMain = async (req, res) => {
// //     try {
// //         const id = req.params.id;
// //         console.log('Updating RawMain with ID:', id);

// //         // Log received data from request
// //         console.log('Received data:', req.body);

// //         const [updated] = await RawMain.update(req.body, { where: { id: id } });

// //         if (updated) {
// //             const updatedRawMain = await RawMain.findOne({ where: { id: id } });
// //             console.log('Updated RawMain:', updatedRawMain);
// //             res.status(200).send(updatedRawMain);
// //         } else {
// //             console.log('RawMain not found with ID:', id);
// //             res.status(404).send('RawMain not found');
// //         }
// //     } catch (error) {
// //         console.error('Error updating RawMain:', error);
// //         res.status(500).send(error.message);
// //     }
// // };




// // // const updateRawMain = async (req, res) => {
// // //     try {
// // //         const id = req.params.id;
// // //         const [updated] = await RawMain.update(req.body, { where: { id: id } });
// // //         if (updated) {
// // //             const updatedRawMain = await RawMain.findOne({ where: { id: id } });
// // //             res.status(200).send(updatedRawMain);
// // //         } else {
// // //             res.status(404).send('RawMain not found');
// // //         }
// // //     } catch (error) {
// // //         res.status(500).send(error.message);
// // //         console.error(error);
// // //     }
// // // };

// // const deleteRawMain = async (req, res) => {
// //     try {
// //         let id = req.params.id;
// //         const deleted = await RawMain.destroy({ where: { id: id } });
// //         if (deleted) {
// //             res.status(200).send('Data is Deleted!');
// //         } else {
// //             res.status(404).send('RawMain not found');
// //         }
// //     } catch (error) {
// //         res.status(500).send(error.message);
// //         console.error(error);
// //     }
// // };

// // module.exports = {
// //     addRawMain,
// //     getAllRawMains,
// //     getOneRawMain,
// //     updateRawMain,
// //     deleteRawMain,
// //     upload
// // };


















// // const db = require('../models');
// // const multer = require('multer');
// // const path = require('path');

// // const RawMain = db.rawMains;

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

// // const addRawMain = async (req, res) => {
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

// //         const rawMain = await RawMain.create(info);
// //         res.status(200).send(rawMain);
// //     } catch (error) {
// //         res.status(500).send(error.message);
// //         console.error(error);
// //     }
// // };

// // const getAllRawMains = async (req, res) => {
// //     try {
// //         let rawMains = await RawMain.findAll();
// //         res.status(200).send(rawMains);
// //     } catch (error) {
// //         res.status(500).send(error.message);
// //         console.error(error);
// //     }
// // };

// // const getOneRawMain = async (req, res) => {
// //     try {
// //         let id = req.params.id;
// //         let rawMain = await RawMain.findOne({ where: { id: id } });
// //         if (rawMain) {
// //             res.status(200).send(rawMain);
// //         } else {
// //             res.status(404).send('RawMain not found');
// //         }
// //     } catch (error) {
// //         res.status(500).send(error.message);
// //         console.error(error);
// //     }
// // };



// // // const updateRawMain = async (req, res) => {
// // //     try {
// // //         const id = req.params.id;
// // //         let rawMain = await RawMain.findByPk(id);
// // // console.log('id', id)
// // //         if (!rawMain) {
// // //             return res.status(404).send('RawMain not found');
// // //         }

// // //         // Prepare updated data
// // //         let updatedData = {
// // //             title: req.body.title || rawMain.title,
// // //             desc: req.body.desc || rawMain.desc,
// // //             purpose: req.body.purpose || rawMain.purpose,
// // //             image: rawMain.image,
// // //             specification: rawMain.specification
            
// // //         };
// // //         console.log(updatedData);

// // //         // Check if there are files in the request and update paths accordingly
// // //         if (req.files && req.files['image']) {
// // //             updatedData.image = req.files['image'][0].path;
// // //         }
// // //         if (req.files && req.files['specification']) {
// // //             updatedData.specification = req.files['specification'][0].path;
// // //         }
// // //         console.log('updatedData',updatedData);
// // //         // Update the RawMain
// // //         const rowsUpdated = await RawMain.update(updatedData, {
// // //             where: { id: id },
// // //             // returning: // Ensure we get the updated row back
// // //         });
// // //         console.log(rowsUpdated);
// // //         console.log('id',id)
// // //         // console.log(updatedRawMains);
// // //         if (rowsUpdated[0] ===  1) {
// // //             // const updatedRawMain = updatedRawMains[0]; // Extract the first element

// // //             // console.log('Updated RawMain:', rowsUpdated.toJSON());
// // //             res.status(200).json(rowsUpdated);
// // //         } else {
// // //             console.log('No rows updated.');
// // //             res.status(404).send('RawMain not found');
// // //         }
// // //     } catch (error) {
// // //         console.error('Error updating RawMain:', error);
// // //         res.status(500).send(error.message);
// // //     }
// // // };

















// // const updateRawMain = async (req, res) => {
// //     try {
// //         const id = req.params.id;
// //         let rawMain = await RawMain.findByPk(id);

// //         if (!rawMain) {
// //             return res.status(404).send('RawMain not found');
// //         }

// //         // Prepare updated data
// //         let updatedData = {
// //             title: req.body.title || rawMain.title,
// //             desc: req.body.desc || rawMain.desc,
// //             purpose: req.body.purpose || rawMain.purpose,
// //             image: rawMain.image,
// //             specification: rawMain.specification
// //         };

// //         // Check if there are files in the request and update paths accordingly
// //         if (req.files && req.files['image']) {
// //             updatedData.image = req.files['image'][0].path;
// //         }
// //         if (req.files && req.files['specification']) {
// //             updatedData.specification = req.files['specification'][0].path;
// //         }

// //         // Update the RawMain
// //         const rowsUpdated = await RawMain.update(updatedData, {
// //             where: { id: id },
// //             returning: true, // Ensure we get the updated row back as an array
// //         });

// //         if (rowsUpdated[0] === 1) {
// //             const updatedRawMain = rowsUpdated[1][0]; // Extract the updated row from the array

// //             res.status(200).json(updatedRawMain);
// //         } else {
// //             console.log('No rows updated.');
// //             res.status(404).send('RawMain not found');
// //         }
// //     } catch (error) {
// //         console.error('Error updating RawMain:', error);
// //         res.status(500).send(error.message);
// //     }
// // };









// // const deleteRawMain = async (req, res) => {
// //     try {
// //         let id = req.params.id;
// //         const deleted = await RawMain.destroy({ where: { id: id } });
// //         if (deleted) {
// //             res.status(200).send('Data is Deleted!');
// //         } else {
// //             res.status(404).send('RawMain not found');
// //         }
// //     } catch (error) {
// //         res.status(500).send(error.message);
// //         console.error(error);
// //     }
// // };

// // module.exports = {
// //     addRawMain,
// //     getAllRawMains,
// //     getOneRawMain,
// //     updateRawMain,
// //     deleteRawMain,
// //     upload
// // };






























// const db = require('../models');
// const multer = require('multer');
// const path = require('path');

// const RawMain = db.rawMains;

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
// }).fields([
//     { name: 'image', maxCount: 1 },
//     { name: 'specification', maxCount: 1 }
// ]);

// // 1. Create RawMain
// const addRawMain = async (req, res) => {
//     try {
//         let info = {
//             image: req.files['image'][0].path,
//             specification: req.files['specification'][0].path,
//             title: req.body.title,
//             desc: req.body.desc,
//             purpose: req.body.purpose,
//         };

//         if (!info.title) {
//             return res.status(400).send('Title is required');
//         }

//         const rawMain = await RawMain.create(info);
//         res.status(200).send(rawMain);
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// // 2. Get all RawMains
// const getAllRawMains = async (req, res) => {
//     try {
//         let rawMains = await RawMain.findAll();
//         res.status(200).send(rawMains);
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// // 3. Get single RawMain
// const getOneRawMain = async (req, res) => {
//     try {
//         let id = req.params.id;
//         let rawMain = await RawMain.findOne({ where: { id: id } });
//         if (rawMain) {
//             res.status(200).send(rawMain);
//         } else {
//             res.status(404).send('RawMain not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };
// const updateRawMain = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const { title, desc, purpose } = req.body;
//         console.log('Received update request for ID:', id);
//         console.log('Request body:', req.body);

//         const rawMain = await RawMain.findOne({ where: { id } });

//         if (!rawMain) {
//             console.log('RawMain not found');
//             return res.status(404).send('RawMain not found');
//         }

//         let updatedData = { title, desc, purpose };

//         // Handle the image and specification updates if new files are uploaded
//         if (req.files) {
//             console.log('Received files:', req.files);
//             if (req.files.image) {
//                 updatedData.image = req.files.image[0].path;
//             }
//             if (req.files.specification) {
//                 updatedData.specification = req.files.specification[0].path;
//             }
//         }

//         console.log('Updated data:', updatedData);
//         await RawMain.update(updatedData, { where: { id } });

//         const updatedRawMain = await RawMain.findOne({ where: { id } });
//         console.log('Updated RawMain:', updatedRawMain);
//         res.status(200).send(updatedRawMain);

//     } catch (error) {
//         console.error('Error updating rawMain:', error);
//         res.status(500).send(error.message);
//     }
// };

// // 5. Delete RawMain by id
// const deleteRawMain = async (req, res) => {
//     try {
//         let id = req.params.id;
//         const deleted = await RawMain.destroy({ where: { id: id } });
//         if (deleted) {
//             res.status(200).send('Data is Deleted!');
//         } else {
//             res.status(404).send('RawMain not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// module.exports = {
//     addRawMain,
//     getAllRawMains,
//     getOneRawMain,
//     updateRawMain,
//     deleteRawMain,
//     upload
// };










































































const db = require('../models');
const multer = require('multer');
const path = require('path');

const RawMain = db.rawMains;

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

// 1. Create RawMain
const addRawMain = async (req, res) => {
    try {
        let info = {
            image: req.files['image'][0].path,
            specification: req.files['specification'][0].path,
            title: req.body.title,
            desc: req.body.desc,
            purpose: req.body.purpose,
            button: req.body.button, // New field
        };

        if (!info.title) {
            return res.status(400).send('Title is required');
        }

        if (!info.button) {
            return res.status(400).send('Button name is required'); // New validation
        }

        const rawMain = await RawMain.create(info);
        res.status(200).send(rawMain);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

// 2. Get all RawMains
const getAllRawMains = async (req, res) => {
    try {
        let rawMains = await RawMain.findAll();
        res.status(200).send(rawMains);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

// 3. Get single RawMain
const getOneRawMain = async (req, res) => {
    try {
        let id = req.params.id;
        let rawMain = await RawMain.findOne({ where: { id: id } });
        if (rawMain) {
            res.status(200).send(rawMain);
        } else {
            res.status(404).send('RawMain not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

// 4. Update RawMain
const updateRawMain = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, desc, purpose, buttonName } = req.body; // Added buttonName
        console.log('Received update request for ID:', id);
        console.log('Request body:', req.body);

        const rawMain = await RawMain.findOne({ where: { id } });

        if (!rawMain) {
            console.log('RawMain not found');
            return res.status(404).send('RawMain not found');
        }

        let updatedData = { title, desc, purpose, buttonName }; // Updated field

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
        await RawMain.update(updatedData, { where: { id } });

        const updatedRawMain = await RawMain.findOne({ where: { id } });
        console.log('Updated RawMain:', updatedRawMain);
        res.status(200).send(updatedRawMain);

    } catch (error) {
        console.error('Error updating rawMain:', error);
        res.status(500).send(error.message);
    }
};

// 5. Delete RawMain by id
const deleteRawMain = async (req, res) => {
    try {
        let id = req.params.id;
        const deleted = await RawMain.destroy({ where: { id: id } });
        if (deleted) {
            res.status(200).send('Data is Deleted!');
        } else {
            res.status(404).send('RawMain not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

module.exports = {
    addRawMain,
    getAllRawMains,
    getOneRawMain,
    updateRawMain,
    deleteRawMain,
    upload
};
