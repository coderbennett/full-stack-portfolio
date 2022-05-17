const router = require('express').Router();
const { User, Project } = require('../models');

router.get('/', async (req, res) => {
    try {
        const projectData = await Project.findAll();

        const projects = projectData.map((project) => project.get({plain: true}));

        res.render("home", { projects, logged_in: req.session.logged_in });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;