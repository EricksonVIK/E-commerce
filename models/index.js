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
  foreignKey: "product_id",
});
// tag is associated to product using an alias. You've included an alias (tag_id), but it does not match the alias(es) defined in your association (tags).
// Tags belongToMany Products(through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});
// Getting this error:
// tag is associated to product using an alias.
// You've included an alias (tag_id), but it does not match the alias(es) defined in your association (tags).
// do i need ProductTag rules to link? 
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

module.exports = { Category, Product, Tag, ProductTag };
