const router = require('express').Router();

const homeRoutes = require('./homeRoute');
const dashboardRoutes = require('./dashboardRoute');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;