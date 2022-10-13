const {Category} = require('../model/category');
const express = require('express');
const router = express.Router();


router.get(`/`, async (req, res) => {

    const categoryList = await Category.find();

    res.send(categoryList)
})

router.post(`/`, async (req, res) => {
    var category = new Category({
        name: req.body.name,
        color: req.body.color,
        icon: req.body.icon,
        image: req.body.image,
    })

    category = await category.save();

    if(!category)
        return res.status(404).send('Category cannot be created!');
    
    res.send(category);
    

})



module.exports = router;