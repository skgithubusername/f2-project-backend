const db = require('../models');

const About = db.abouts;

const addAbout = async (req, res) => {
    try {
        let info = {
            title: req.body.title,
            desc: req.body.desc,
            subdesc: req.body.subdesc,
        };

        if (!info.title) {
            return res.status(400).send('Title is required');
        }

        const about = await About.create(info);
        res.status(200).send(about);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const getAllAbouts = async (req, res) => {
    try {
        let abouts = await About.findAll();
        res.status(200).send(abouts);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const getOneAbout = async (req, res) => {
    try {
        let id = req.params.id;
        let about = await About.findOne({ where: { id: id } });
        if (about) {
            res.status(200).send(about);
        } else {
            res.status(404).send('About not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const updateAbout = async (req, res) => {
    try {
        let id = req.params.id;
        const [updated] = await About.update(req.body, { where: { id: id } });
        if (updated) {
            const updatedAbout = await About.findOne({ where: { id: id } });
            res.status(200).send(updatedAbout);
        } else {
            res.status(404).send('About not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

const deleteAbout = async (req, res) => {
    try {
        let id = req.params.id;
        const deleted = await About.destroy({ where: { id: id } });
        if (deleted) {
            res.status(200).send('Data is Deleted!');
        } else {
            res.status(404).send('About not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
};

module.exports = {
    addAbout,
    getAllAbouts,
    getOneAbout,
    updateAbout,
    deleteAbout,
};
