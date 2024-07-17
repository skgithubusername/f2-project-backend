const db = require('../models');

const Support = db.supports;

const addSupport = async (req, res) => {
    try {
        let info = {
            title: req.body.title,
        };

        if (!info.title) {
            return res.status(400).send('Title is required');
        }

        const support = await Support.create(info);
        res.status(200).send(support);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const getAllSupports = async (req, res) => {
    try {
        let supports = await Support.findAll();
        res.status(200).send(supports);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const getOneSupport = async (req, res) => {
    try {
        let id = req.params.id;
        let support = await Support.findOne({ where: { id: id } });
        if (support) {
            res.status(200).send(support);
        } else {
            res.status(404).send('Support not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const updateSupport = async (req, res) => {
    try {
        let id = req.params.id;
        const [updated] = await Support.update(req.body, { where: { id: id } });
        if (updated) {
            const updatedSupport = await Support.findOne({ where: { id: id } });
            res.status(200).send(updatedSupport);
        } else {
            res.status(404).send('Support not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const deleteSupport = async (req, res) => {
    try {
        let id = req.params.id;
        const deleted = await Support.destroy({ where: { id: id } });
        if (deleted) {
            res.status(200).send('Data is Deleted!');
        } else {
            res.status(404).send('Support not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

module.exports = {
    addSupport,
    getAllSupports,
    getOneSupport,
    updateSupport,
    deleteSupport,
};
















// const db = require('../models');

// const Support = db.supports;

// const addSupport = async (req, res) => {
//     try {
//         let info = {
//             title1: req.body.title1,
//             title2: req.body.title2,
//             title3: req.body.title3,
//             title4: req.body.title4,
//             title5: req.body.title5,
//             title6: req.body.title6,
//         };

//         if (!info.title1 || !info.title2 || !info.title3 || !info.title4 || !info.title5 || !info.title6) {
//             return res.status(400).send('All titles are required');
//         }

//         const support = await Support.create(info);
//         res.status(200).send(support);
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const getAllSupports = async (req, res) => {
//     try {
//         let supports = await Support.findAll();
//         res.status(200).send(supports);
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const getOneSupport = async (req, res) => {
//     try {
//         let id = req.params.id;
//         let support = await Support.findOne({ where: { id: id } });
//         if (support) {
//             res.status(200).send(support);
//         } else {
//             res.status(404).send('Support not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const updateSupport = async (req, res) => {
//     try {
//         let id = req.params.id;
//         const [updated] = await Support.update(req.body, { where: { id: id } });
//         if (updated) {
//             const updatedSupport = await Support.findOne({ where: { id: id } });
//             res.status(200).send(updatedSupport);
//         } else {
//             res.status(404).send('Support not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// const deleteSupport = async (req, res) => {
//     try {
//         let id = req.params.id;
//         const deleted = await Support.destroy({ where: { id: id } });
//         if (deleted) {
//             res.status(200).send('Data is Deleted!');
//         } else {
//             res.status(404).send('Support not found');
//         }
//     } catch (error) {
//         res.status(500).send(error.message);
//         console.error(error);
//     }
// };

// module.exports = {
//     addSupport,
//     getAllSupports,
//     getOneSupport,
//     updateSupport,
//     deleteSupport,
// };
