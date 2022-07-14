const { DataTypes } = require('sequelize');

/** @type {import('sequelize').ModelAttributes} */
const attibutes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
  },
  passwordHash: {
    type: DataTypes.STRING,
    field: 'password_hash',
  },
  name: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
  },
};

/** 
 * @param {import('sequelize').Sequelize} sequelize
 */

module.exports = (sequelize) => {
  const model = sequelize.define('users', attibutes, {
    tableName: 'users',
  });
  return model;
};