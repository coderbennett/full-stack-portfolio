const router = require('express').Router();
const Project = require('../../models/Project');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try {
        const projectData = await Project.findAll();

        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const projectData = await Project.findByPk(req.params.id);

        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newProject = await Project.create({ ...req.body });
        res.json(newProject);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const projectData = Project.destroy({
            where: {
                id: req.params.id
            }
        });
        if (projectData) {
            res.status(200).end();
        } else {
            res.status(400).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;