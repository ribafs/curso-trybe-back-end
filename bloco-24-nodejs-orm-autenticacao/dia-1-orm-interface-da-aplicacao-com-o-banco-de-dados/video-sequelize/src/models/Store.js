const Store = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    timestamps: false,
  }, {
    // freezeTableName: true,
    // tableName: 'Xablau',
  });
  return Store;
};

module.exports = Store;
