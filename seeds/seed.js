const sequelize = require('../config/connection');
const User = require('../models/User.js');
const Project  = require('../models/Project.js');
const userData = require('./userData.json');
const projectData = require('./projectData.json');

const seedDatabase = async () => {
    console.log(userData);
    console.log(projectData);
    try {
        await sequelize.sync({ force: true });

        await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true
        });

        await Project.bulkCreate(projectData);

        process.exit(0);
    } catch (err) {
        console.error(err);
    }
}

module.exports = seedDatabase;