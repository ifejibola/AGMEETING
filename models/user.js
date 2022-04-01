'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    meetingId: DataTypes.INTEGER,
    isAdmin: DataTypes.BOOLEAN,
    isModerator: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    freezeTableName: true // Model tableName will be the same as the model name 
  });
  return User;
};