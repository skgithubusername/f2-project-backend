const db = require('../models');

const AboutHome = db.aboutHomes;

const addAboutHome = async (req, res) => {
    try {
        let info = {
            title: req.body.title,
            desc: req.body.desc,
        };

        if (!info.title) {
            return res.status(400).send('Title is required');
        }

        const aboutHome = await AboutHome.create(info);
        res.status(200).send(aboutHome);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const getAllAboutHomes = async (req, res) => {
    try {
        let aboutHomes = await AboutHome.findAll();
        res.status(200).send(aboutHomes);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const getOneAboutHome = async (req, res) => {
    try {
        let id = req.params.id;
        let aboutHome = await AboutHome.findOne({ where: { id: id } });
        if (aboutHome) {
            res.status(200).send(aboutHome);
        } else {
            res.status(404).send('AboutHome not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const updateAboutHome = async (req, res) => {
    try {
        let id = req.params.id;
        const [updated] = await AboutHome.update(req.body, { where: { id: id } });
        if (updated) {
            const updatedAboutHome = await AboutHome.findOne({ where: { id: id } });
            res.status(200).send(updatedAboutHome);
        } else {
            res.status(404).send('AboutHome not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const deleteAboutHome = async (req, res) => {
    try {
        let id = req.params.id;
        const deleted = await AboutHome.destroy({ where: { id: id } });
        if (deleted) {
            res.status(200).send('Data is Deleted!');
        } else {
            res.status(404).send('AboutHome not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

module.exports = {
    addAboutHome,
    getAllAboutHomes,
    getOneAboutHome,
    updateAboutHome,
    deleteAboutHome,
};
