const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  console.log("======================");

  Category.findAll({
    attributes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attribute: ["category_id"],
      },
    ],
    })
    .then((Category) => res.json(Category))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Category.findOne({
    attributes: ["category_name"],
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attribute: ["category_id"],
      },
    ],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    category_name: req.body.category_name,
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: 'No categories found with this id.' })
        return;
      }
      res.json(dbCategoryData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id:req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id.'})
    }
  })
});

module.exports = router;
