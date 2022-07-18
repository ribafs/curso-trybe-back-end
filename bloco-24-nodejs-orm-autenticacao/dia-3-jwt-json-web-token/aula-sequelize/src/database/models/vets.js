const { DataTypes } = require('sequelize');

/** @type {import('sequelize').ModelAttributes} */
const attibutes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
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

/** @param {import('sequelize').Sequelize} sequelize */
module.exports = (sequelize) => {
  const vets = sequelize.define('vets', attibutes, {
    tableName: 'vets',
  });
  // vets.associate = (models) => {
  //   // vets.hasMany(models.pets, { key: 'userId', as: 'pets' });
  // };
  return vets;
};