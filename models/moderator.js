'use strict';
const {
  Model, Sequelize
} = require('sequelize');
const User = require('./user')
module.exports = (sequelize, DataTypes) => {
  class Moderator extends Sequelize.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */



  };
  Moderator.init({
    // Model Attributes 
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false, get() { return () => this.getDataValue('password') } },
    salt: { type: Sequelize.STRING, allowNull: true, get() { return () => this.getDataValue('salt') } },
    company: { type: Sequelize.STRING, allowNull: true },
    name: { type: Sequelize.STRING, allowNull: true },
    registered: { type: Sequelize.DATE, allowNull: true },
    is_admin: { type: Sequelize.BOOLEAN, allowNull: true }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'moderator',
    freezeTableName: true // Model tableName will be the same as the model name 

  });

  return Moderator;
};