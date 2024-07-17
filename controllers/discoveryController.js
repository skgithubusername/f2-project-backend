







const db = require('../models');

// Image Upload
const multer = require('multer');
const path = require('path');

// Create main model
const Discovery = db.discoverys;

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
}).single('image');

// 1. Create discovery
const addDiscovery = async (req, res) => {
    try {
        let info = {
            image: req.file.path,
            title: req.body.title,
            desc: req.body.desc,
        };

        if (!info.title) {
            return res.status(400).send('Title is required');
        }

        const discovery = await Discovery.create(info);
        res.status(200).send(discovery);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

// 2. Get all discoveries
const getAllDiscoverys = async (req, res) => {
    try {
        let discoverys = await Discovery.findAll();
        res.status(200).send(discoverys);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

// 3. Get single discovery
const getOneDiscovery = async (req, res) => {
    try {
        let id = req.params.id;
        let discovery = await Discovery.findOne({ where: { id: id } });
        if (discovery) {
            res.status(200).send(discovery);
        } else {
            res.status(404).send('Discovery not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

// 4. Update discovery
const updateDiscovery = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, desc } = req.body;

        const discovery = await Discovery.findOne({ where: { id: id } });

        if (!discovery) {
            return res.status(404).send('Discovery not found');
        }

        let updatedData = { title, desc };

        // Handle the image update if a new file is uploaded
        if (req.file) {
            updatedData.image = req.file.path;
        }

        await Discovery.update(updatedData, { where: { id: id } });

        const updatedDiscovery = await Discovery.findOne({ where: { id: id } });
        res.status(200).send(updatedDiscovery);

    } catch (error) {
        console.error('Error updating discovery:', error);
        res.status(500).send(error.message);
    }
};

// 5. Delete discovery by id
const deleteDiscovery = async (req, res) => {
    try {
        let id = req.params.id;
        const deleted = await Discovery.destroy({ where: { id: id } });
        if (deleted) {
            res.status(200).send('Data is Deleted!');
        } else {
            res.status(404).send('Discovery not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

module.exports = {
    addDiscovery,
    getAllDiscoverys,
    getOneDiscovery,
    updateDiscovery,
    deleteDiscovery,
    upload
};
