module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('Categories',
  {
    name: DataTypes.STRING,
  },
  {
    timestamp: false,
    tableName: 'Categories',
    underscored: false,
  });

  return categories;
};