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
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'users',
      key: 'id',
    },
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
  const pets = sequelize.define('pets', attibutes, {
    tableName: 'pets',
  });
  pets.associate = (models) => {
    pets.belongsTo(models.users, { foreignKey: 'id', as: 'user' });
  };
  return pets;
};