const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {};

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        repository: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deployed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        media: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project'
    }
);

module.exports = Project;