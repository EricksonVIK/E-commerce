// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'product_tags',
});

ProductTag.belongsTo(Product, {
  foreignKey: "product_id",
});

ProductTag.belongsTo(Tag, {
  foreignKey: "tag_id",
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "product_tags",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

module.exports = { Category, Product, Tag, ProductTag };
