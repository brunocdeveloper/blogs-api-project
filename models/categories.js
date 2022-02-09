module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories',
  {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
  });

  return Category;
};
