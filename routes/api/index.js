const router = require('express').Router();

const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('./Category', categoryRoutes);
router.use('./Product', productRoutes);
router.use('./Tag', tagRoutes);

module.exports = router;