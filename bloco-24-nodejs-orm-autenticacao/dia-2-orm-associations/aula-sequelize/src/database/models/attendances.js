const { DataTypes } = require('sequelize');

/** @type {import('sequelize').ModelAttributes} */
const attibutes = {
  petId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    field: 'pet_id',
    references: {
      model: 'pets',
      key: 'id',
    },
  },
  vetId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    field: 'vet_id',
    references: {
      model: 'vets',
      key: 'id',
    },
  },
};

/** @param {import('sequelize').Sequelize} sequelize */
module.exports = (sequelize) => {
  const attendances = sequelize.define('attendances', attibutes, {
    tableName: 'attendances',
    timestamps: false,
  });
  attendances.associate = (models) => {
    models.vets.belongsToMany(models.pets, {
      as: 'pets',
      otherKey: 'vetId',
      foreignKey: 'petId',
      through: attendances,
    });
  };
  return attendances;
};