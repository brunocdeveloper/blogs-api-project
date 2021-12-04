module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {}, {
    tableName: 'PostsCategories',
    timestamps: false,
  });

  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(
      models.Categories,
      { as: 'categories', foreignKey: 'postId', otherKey: 'categoryId', through: PostsCategories },
    );
      models.Categories.belongsToMany(
      models.BlogPosts, 
      { as: 'blogPosts', foreignKey: 'categoryId', otherKey: 'postId', through: PostsCategories },
    );
  };

  return PostsCategories;
}; 